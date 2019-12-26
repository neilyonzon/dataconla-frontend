import React from "react";

function BannerHP(props) {
  return (
    <div
      className="banner-hp"
      style={{ backgroundImage: `url('/Los_Angeles.png')` }}
    >
      <img
        alt="logo"
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
      />
      <p>University of Southern California, Los Angeles • March 6, 2020</p>
    </div>
  );
}

export default React.memo(BannerHP);
