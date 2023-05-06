// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";
// import dotenv
import dotenv from "dotenv";
dotenv.config();

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// access to the NFT API via the Alchemy SDK.
function getNftMetadata(contractAddress, tokenId) {
    return alchemy.nft.getNftMetadata(contractAddress, tokenId);
    }
    