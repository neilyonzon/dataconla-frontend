import React from "react";
import ModalVideo from "react-modal-video";

class BannerMedia extends React.Component {
  state = {
    isOpen: false
  };

  // this.openModal = this.openModal.bind(this);

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div>
        {/* <div className="video">
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => this.setState({ isOpen: false })}
          />
        </div> */}
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
            <p onClick={this.openModal} class="play-button">
              PLAY VIDEO REEL
            </p>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerMedia;
