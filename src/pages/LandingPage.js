import React, { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router";
import { getNftMetadata, getNftOwner } from "../api/functions";
import { getNftSales } from "../api/functions";
function LandingPage() {
  const navigate = useNavigate();
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const handleSubmit = async (e) => {
    let result = await getNftMetadata(contractAddress, tokenId);
    let ownerData = await getNftOwner(contractAddress, tokenId);
    let data = await getNftSales(contractAddress, tokenId);

    if (result) {
      navigate("/nft", { state: { result, ownerData,data } });
    }
  };

  return (
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
  );
}

export default LandingPage;
