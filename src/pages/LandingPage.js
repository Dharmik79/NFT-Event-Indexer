import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router";
import {
  getNftMetadata,
  getNftOwner,
  getNftDetails,
  getNftTransfers,
} from "../api/functions";
import { getNftSales } from "../api/functions";
import moment from "moment";

function LandingPage() {
  const navigate = useNavigate();
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const handleSubmit = async (e) => {
    let result = await getNftMetadata(contractAddress, tokenId);
    let ownerData = await getNftOwner(contractAddress, tokenId);
    let data = await getNftSales(contractAddress, tokenId);
    let nftDetails = await getNftDetails(contractAddress, tokenId);
    const diffDuration = moment.duration(
      moment().diff(nftDetails.nft.mintEvent.blockTimestamp)
    );

    // Use this to create NFT timeline @dd07
    let nftTransfers =await  getNftTransfers(contractAddress, tokenId);
    let transfers=nftTransfers?.nftTransfers || []
    const months = diffDuration?.months();
    const years = diffDuration?.years();
    const days = diffDuration?.days();
    if (result) {
      navigate("/nft", {
        state: { result, ownerData, data, nftDetails, days, months, years,transfers },
      });
    }
  };

  return (
    <div className="custom-page">
    <div className="title">NFT Event Indexer</div>
    <div className="container1">
      <div className="form">
        <div className="input-group">
          <label htmlFor="field1">Contract Address</label>
          <input
            type="text"
            id="field1"
            className="input-field"
            value={contractAddress}
            onChange={(e) => {
              setContractAddress(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="field2">Token Id</label>
          <input
            type="text"
            id="field2"
            className="input-field"
            value={tokenId}
            onChange={(e) => {
              setTokenId(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
