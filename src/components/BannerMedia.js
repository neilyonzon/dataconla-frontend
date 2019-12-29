import React from "react";

function bannerMedia(props) {
  return (
    <div
      className="banner-media"
      style={{ backgroundImage: `url('/blue_meeting.png')` }}
    >
      <p>DATA CON LA 2019</p>
      <h1>
        HIGHLIGHTS FROM
        <br />
        LAST YEAR’S EVENT
      </h1>
      <div>
        <p>PLAY VIDEO REEL</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default React.memo(bannerMedia);
