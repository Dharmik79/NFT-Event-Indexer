import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
        <div>Name</div>
        <div>Description</div>
        <div>Traits</div>
      </div>
      <div className="contact">Contact</div>
    </div>
  );
}

export default Profile;
