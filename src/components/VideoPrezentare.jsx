import React from 'react';

class VideoPrezentare extends React.Component {
  render() {
    return (
      <div className="fixed top-0 left-0 w-full h-screen z-10 relative">
        <video className="object-cover w-full h-full" autoPlay muted loop id="background-video">
          <source src="assets/videos/Tulcea2.mp4" type="video/mp4" />
          { }
        </video> 
      </div>
    );
  }
}

export default VideoPrezentare;
 