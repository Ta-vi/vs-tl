import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const CazareInstaGrid = () => {
  return (
    <div> 
    <div className="relative mx-auto h-screen   z-20">
      <div className="relative w-full h-full">
        <img
          src="/assets/pictures/HotelCondor.png"
          alt="Hotel Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="absolute top-64 left-20 p-16 text-white text-8xl font-bold">
          VACANȚA TA
        </div>
        <div className="absolute top-80 left-52 p-32 text-white text-8xl font-bold">
          ÎNCEPE AICI
        </div>
        <div className="absolute inset-0 bottom-28 left-80 right-0 flex items-center justify-center">
        <Link to="/top10Cazari">
          <button className="bg-yellow-600 text-white py-4 px-6 rounded-lg text-5xl transform translate-x-3/4 shadow font-bold">
            TOP 10 CAZĂRI
          </button>
        </Link>
        </div>
        <div className="absolute inset-x-0 text-center">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faInstagram}
              size="8x"
              className="text-[#00537f] mb-5" 
            />
            <div className="text-[#00537f] mb-5 text-4xl font-bold">
              ÎMPARTE EXPERIENȚA CU NOI
            </div>
            <div className="text-[#00537f] text-5xl font-bold">#VISITTULCEA</div>
          </div>
        </div>
      </div>
      <div className="relative   top-64 flex items-center justify-center z-10 ">
        <img
          src="/assets/pictures/backgroundBleu.png"
          alt="Background Image"
          className="object-cover"
        />
        <div className="    columns-3  absolute  w-full  scale-75  z-20 ">
          <img
            src="/assets/pictures/r1.png"
            alt="Container 1"
            className="  cursor-pointer object-cover"
          />
          <img
            src="/assets/pictures/faleza2.jpeg"
            alt="Container 2"
            className="  cursor-pointer object-cover"
          />
          <img
            src="/assets/pictures/r2.png" 
            alt="Container 3"
            className="   cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CazareInstaGrid;
