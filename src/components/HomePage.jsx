 
import React from 'react';
import VideoPrezentare from './VideoPrezentare';
import HartaInteractiva from './HartaInteractiva';
import CazareInstaGrid from './CazareInstaGrid';
 
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <VideoPrezentare />
        <HartaInteractiva />
        <CazareInstaGrid />
      </div>
    );
  }
}
export default HomePage;
