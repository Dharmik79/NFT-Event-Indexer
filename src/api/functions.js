// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";
import moment from "moment";

const pnemonic_API_KEY =process.env.REACT_APP_PNEMONIC_API_KEY;

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// access to the NFT API via the Alchemy SDK.
export const getNftMetadata = (contractAddress, tokenId) => {
  return alchemy.nft.getNftMetadata(contractAddress, tokenId);
};

// Get owner for the NFT.
export const getNftOwner = async (contractAddress, tokenId) => {
  const walletAddress = await alchemy.nft.getOwnersForNft(
    contractAddress,
    tokenId
  );
  const ensContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const nfts = await alchemy.nft.getNftsForOwner(walletAddress.owners[0], {
    contractAddresses: [ensContractAddress],
  });
  let result = walletAddress.owners[0];
  for (let i = 0; i < nfts.ownedNfts.length; i++) {
    if (nfts.ownedNfts[i]) {
      result = nfts.ownedNfts[i].title;
      break;
    }
  }
  return result;
};

export const getNftSales = async (contractAddress, tokenId) => {
  const query = new URLSearchParams({
    contractAddress: contractAddress,
    tokenId: tokenId,
    labelsAny: "LABEL_SALE",
  }).toString();

  const resp = await fetch(
    `https://ethereum-rest.api.mnemonichq.com/foundational/v1beta2/transfers/nft?${query}`,
    {
      method: "GET",
      headers: {
        "X-API-Key": pnemonic_API_KEY,
      },
    }
  );

  const data1 = await resp.json();
  let data = data1.nftTransfers;
  let nftDataEth = [];
  let nftDataUSD = [];

  for (let i = 0; i < data.length; i++) {
    let obj = {
      time: data[i].blockchainEvent.blockTimestamp,
      price: data[i].senderReceived.totalNative,
    };
    if (obj.price) {
      nftDataEth.push(obj);
      nftDataUSD.push({
        time: data[i].blockchainEvent.blockTimestamp,
        price: data[i].senderReceived.totalUsd,
      });
    }
  }

  nftDataEth.sort((a, b) => moment(a.time) - moment(b.time));
  nftDataUSD.sort((a, b) => moment(a.time) - moment(b.time));
  return { nftDataEth: nftDataEth, nftDataUSD: nftDataUSD };
};

// getNftSales("0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D", "1191");

export const getNftDetails = async (contractAddress, tokenId) => {
  const resp = await fetch(
    `https://ethereum-rest.api.mnemonichq.com/foundational/v1beta2/nfts/${contractAddress}/${tokenId}/details`,
    {
      method: "GET",
      headers: {
        "X-API-Key": pnemonic_API_KEY,
      },
    }
  );

  const result = await resp.json();
  return result;
};

export const getAllNftOwners = async (contractAddress, tokenId) => {
  const resp = await fetch(
    `https://ethereum-rest.api.mnemonichq.com/foundational/v1beta2/nfts/${contractAddress}/${tokenId}/owners`,
    {
      method: "GET",
      headers: {
        "X-API-Key": pnemonic_API_KEY,
      },
    }
  );

  const data = await resp.json();
  return data;
};

export const getNftTransfers = async (contractAddress, tokenId) => {
  const query = new URLSearchParams({
    limit: 500,
    contractAddress: contractAddress,
    tokenId: tokenId,
  }).toString();

  const resp = await fetch(
    `https://ethereum-rest.api.mnemonichq.com/foundational/v1beta2/transfers/nft?${query}`,
    {
      method: "GET",
      headers: {
        "X-API-Key": pnemonic_API_KEY,
      },
    }
  );

  const data = await resp.json();
  return data;
};
