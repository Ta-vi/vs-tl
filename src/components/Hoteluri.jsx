import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone,  faHotel } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../firebase'; 

const Hoteluri = () => {
  const [hoteluri, setHoteluri] = useState([]);
  const [categorieSelectata, setCategorieSelectata] = useState('toate');
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage, setHotelsPerPage] = useState(9);
  const fetchHoteluri = async () => {
    try {
      let q;

      if (categorieSelectata === 'toate') {
        q = query(collection(db, 'Hoteluri'));
      } else {
        q = query(collection(db, 'Hoteluri'), where('categorie', '==', categorieSelectata));
      }

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHoteluri(data);
    } catch (error) {
      console.error('Fetching error Hoteluri:', error);
    }
  };

  useEffect(() => {
    fetchHoteluri();
  }, [categorieSelectata]);

  const filtrareHoteluriDupaCategorie = categorie => {
    setCategorieSelectata(categorie);
  };
  
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const hoteluri2 = hoteluri.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginare = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <img
        src="/assets/pictures/HotelCondor.png"
        alt="Top 10"
        className="object-cover fixed top-0 left-0 w-screen h-[58vh] relative brightness-50"
      />
      <h1 className="text-7xl font-bold absolute inset-0 flex items-center justify-center h-[58vh] text-white">
        CAZĂRI ORAȘ
      </h1>
      <p className="text-xl flex flex-col items-start justify-center mt-6 px-4 md:px-20 max-w-[50%] mx-auto text-justify">
        Text.
      </p>
      <div className="flex space-x-4 mt-4 mb-2 flex items-center justify-center">
      <button
          onClick={() => filtrareHoteluriDupaCategorie('toate')}
          className={categorieSelectata === 'toate' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-800 px-4 py-2 rounded'}
        >
          Toate
        </button>
        <button
          onClick={() => filtrareHoteluriDupaCategorie('hoteluri')}
          className={categorieSelectata === 'hoteluri' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-800 px-4 py-2 rounded'}
        >
          Hoteluri
        </button>
        <button
          onClick={() => filtrareHoteluriDupaCategorie('pensiune')}
          className={categorieSelectata === 'pensiune' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-800 px-4 py-2 rounded'}
        >
          Pensiuni
        </button>
        <button
          onClick={() => filtrareHoteluriDupaCategorie('apartament')}
          className={categorieSelectata === 'apartament' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-800 px-4 py-2 rounded'}
        >
          Apartamente
        </button>
        <button
          onClick={() => filtrareHoteluriDupaCategorie('casa')}
          className={categorieSelectata === 'casa' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-800 px-4 py-2 rounded'}
        >
          Case
        </button>
      </div>
      <ul className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
      {hoteluri2.map(item => (
        <li key={item.id} className="mb-8">
          <div className="relative flex flex-col items-center justify-center border border-gray-300  rounded-md">
          <span className="absolute top-2 left-2 bg-white p-2 rounded-md shadow">{item.distanta}</span>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full    object-cover rounded-md mb-4"
              />
            </a>
            <div className="w-full text-center">
              <p className="font-bold text-base">{item.title}</p>
            </div>
            <div className="grid grid-cols-2  py-2  ">
              <p className="long col-span-1 flex items-center justify-start    ">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 py-3" />{" "}
              <a href={item.adresa} target="_blank" rel="noopener noreferrer">
                {item.text1}
              </a>
              </p>
              <p className="long col-span-1 flex items-center justify-end ">
                <FontAwesomeIcon icon={faFacebook} className="mr-1" />{" "}
                <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                {item.text3}
                </a>
              </p>
              <p className="long col-span-1 flex items-center justify-start  ">
                <FontAwesomeIcon icon={faPhone} className="mr-1" />{" "}
                <a href={`tel:${item.telefon}`}>{item.text2}</a>
              </p>
              <p className="long col-span-1 flex items-center justify-end mx-3">
                <FontAwesomeIcon icon={faHotel} className="mr-1" />{" "}
                <a href={item.booking} target="_blank" rel="noopener noreferrer">
                {item.text4}
                </a>
            </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(hoteluri.length / hotelsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginare(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hoteluri;
