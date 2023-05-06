import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
        <div>Name</div>
        <div>Token Type</div>
        <div>Contract Address</div>
        <div>Token Id</div>
      </div>
      <div className="contact">
        <div>Description</div>
        <div>Traits</div>
        <div>Last Updated At</div>
        <div>Contract metadata</div>
      </div>
    </div>
  );
}

export default Profile;
