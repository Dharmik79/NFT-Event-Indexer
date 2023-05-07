# The NFT event indexer

The proposed project aims to develop an NFT Timeline feature for NFTR, which will serve as a social media platform for NFTs. This feature will enable users to track the complete history of an NFT on-chain through a timeline. To accomplish this, the project will involve indexing every on-chain event associated with an NFT. The events to be indexed will include generic events such as sales, transfers, mint, bundle, etc that are currently indexed by marketplace platforms like Opensea.

## How to run locally?

```bash
cd nftr_dao # working dir
npm i # install all dependencies
# update API key
npm start # run app loaclly

```
## What it does?

The app opens up with the webpage letting users input contract address of any NFT Collection and its tokenID.
After submitting, the application indexes the relevant data, it displays it to the user in an easy-to-understand timeline format. The timeline provides unparalleled transparency and insights into an NFT's history, enabling users to track every action the NFT has ever taken on-chain. The application provides an intuitive user interface that is easy to use and understand, making it accessible to both experienced and novice NFT collectors.

## How it's built?


## Whats next

- Adding more features like filtering events by type/labels
- Adding app specific events like bids and asks from major marketplaces
