import React from "react";

function BannerHp(props) {
  return (
    <div
      className="banner-hp"
      style={{ backgroundImage: `url(${props.data.image})` }}
    >
      <img alt={props.data.logo.alt} src={props.data.logo.src} />
      <p>{props.data.text}</p>
    </div>
  );
}

export default React.memo(BannerHp);
