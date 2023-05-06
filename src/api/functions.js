// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";
// import dotenv
// import dotenv from "dotenv";
// dotenv.config();

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
  let result=walletAddress.owners[0]
  for(let i=0;i<nfts.ownedNfts.length;i++)
  {
    if(nfts.ownedNfts[i])
    {
      result=nfts.ownedNfts[i].title;
      break
    }
  }
  return result
};

getNftOwner("0x102fc17bcB529c90b99039d6eD4CD12BD33f90Ed", "3902");
