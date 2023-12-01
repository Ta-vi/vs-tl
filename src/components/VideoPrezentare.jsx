import React from 'react';
import ScrollAnimation from './ScrollAnimation'
class VideoPrezentare extends React.Component {
  render() {
    return (
      <div className="top-0 left-0 w-full h-screen z-10 relative">
        <video className="object-cover w-full h-full brightness-75" autoPlay muted loop id="background-video">
          <source src="assets/videos/Tulcea2.mp4" type="video/mp4" />
          { }
        </video> 
       <div className="sticky">
          <ScrollAnimation/>
     </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0077b6]"></div>
      </div>
    );
  }
}

export default VideoPrezentare;
 