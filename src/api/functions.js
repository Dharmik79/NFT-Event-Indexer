// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";

// import fetch from "node-fetch";
// import dotenv
// import dotenv from "dotenv";
// dotenv.config();
const pnemonic_API_KEY = "yoyzAnBS6Dk7Zz2M86dEguOEQBDLWE77vrFiCpkPLtH10vqc";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "gmiTb0oSLYS8-yekNSzmm0iRBQLX_fUN",
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
  const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
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

  let nftData = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {
      time: data[i].blockchainEvent.blockTimestamp,
      price: data[i].senderReceived.totalNative,
    };
    if (obj.price) {
      nftData.push(obj);
    }
  }
  return nftData;
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
