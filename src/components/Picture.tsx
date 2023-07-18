import React from "react";
import pic from "../assets/profile.jpg";

export default function Picture() {
  return (
    <div>
      <div className="home_img">
        <img src={pic} alt="profile pic" className="home-profile-image" />
      </div>
    </div>
  );
}
