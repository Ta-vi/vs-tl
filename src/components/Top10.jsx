
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Top10 = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const top10Data = [
    {
      id: 1,
      number: 1,
      image: '/assets/pictures/faleza.jpeg',
      title: 'Faleza Ivan Patzaichin',
      text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dună...',
    },
    {
      id: 2,
      number: 2,
      image: '/assets/pictures/monument.jpg',
      title: 'Monumentul Independenței',
      text: 'Text...',
    },
    {
      id: 3,
      number: 3,
      image: '/assets/pictures/ciuperca.jpg',
      title: 'Lacul Ciuperca',
      text: 'Text...',
    },
    {
      id: 4,
      number: 4,
      image: '/assets/pictures/acvariu.jpg',
      title: 'Acvariu Danube Delta',
      text: 'Text...',
    },
    {
      id: 5,
      number: 5,
      image: '/assets/pictures/piata.jpg',
      title: 'Piata Civica',
      text: 'Text...',
    },
    
    {
      id: 6,
      number: 6,
      image: '/assets/pictures/art.jpg',
      title: 'Tulcea Art Museum',
      text: 'Text...',
    },
    {
      id: 7,
      number: 7,
      image: '/assets/pictures/avramide.jpg',
      title: 'The Avramide Collections House',
      text: 'Text...',
    },
    {
      id: 8,
      number: 8,
      image: '/assets/pictures/nicolas.jpg',
      title: 'St. Nicholas Cathedral',
      text: 'Text...',
    },
    {
      id: 9,
      number: 9,
      image: '/assets/pictures/sat.jpg',
      title: 'Satul pescăresc tradiţional',
      text: 'Text...',
    },
    {
      id: 10,
      number: 10,
      image: '/assets/pictures/istorie.jpg',
      title: 'Muzeul de Istorie şi Arheologie',
      text: 'Text...',
    },
  ];
  
  return (
    <div>
      <img
        src="/assets/pictures/faleza.jpeg"
        alt="Top 10"
        className="object-cover fixed top-0 left-0 w-screen h-[58vh] relative brightness-50"
      />
      <h1 className="text-7xl font-bold absolute inset-0 flex items-center justify-center h-[58vh] text-white">
        TOP 10
      </h1>
      <p className="text-xl flex flex-col items-start justify-center mt-6 px-4 md:px-20 max-w-[50%] mx-auto text-justify">
        Text.
      </p>
      <ul className="mt-4 grid gap-4">
        {top10Data.map(item => (
          <li key={item.id}>
            <Link to={`/top10/${item.id}`}>
              <div className="relative flex items-center justify-center mt-4">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-36 w-64 object-cover rounded-md"
                  />
                  <p className="absolute top-0 bg-blue-800 text-white px-4 py-4 text-sm rounded-tr-md">
                    {item.number}
                  </p>
                </div>
                <div className="mt-2 mx-6 overflow-hidden w-96 max-h-24">
                  <p className="font-bold">{item.title}</p>
                  <p className="long">{item.text}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

 

export default Top10;
