import React from "react";
import "./profile.css";
function Profile({ imageURL, name, tokenId, tType, desc, traits,owner,days,months,years }) {

  return (
    <div className="container">
      <div className="imageContainer">
        <img src={imageURL} style={{ height: 200, widht: 200 }} />
        <div>Name : {name}</div>
        <div>Token Type : {tType}</div>
        <div>Token Id : {tokenId}</div>
        <div>Owner : <a href={`https://etherscan.io/address/${owner}`}>{owner}</a></div>
        <div> {years} years {months} months {days} days </div>
      </div>
      <div className="contact">
        <div>Description :{desc}</div>
        <div >
          <div >Traits</div>

          <div>
            {traits.map((trait, index) => {
              return (
                <div key={index}>
                  <div>
                   {trait.trait_type}  : {trait.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Profile;
