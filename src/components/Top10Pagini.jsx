
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Recenzii = ({ reviews }) => {
  const settings = {
    slidesToShow: 2, 
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,  
    autoplaySpeed: 10000,
  };

  return (
    <div className="bg-white p-8 w-[45%] h-[300px]  mx-auto  ">
      <h2 className="text-3xl font-bold mb-4">Ce spun vizitatorii?</h2>
      {reviews && reviews.length > 0 ? (
        <Slider {...settings} className="overflow-hidden">
          {reviews.map((review) => (
            <div key={review.id} className="mb-4">
               <div className="border rounded-lg p-4" style={{ minHeight: '200px'  }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <div className="flex">
                        {[...Array(review.stars)].map((_, index) => (
                          <img
                            key={index}
                            src="/assets/pictures/star.png"
                            alt="star"
                            className="w-5 h-5 mr-1"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Nu exista recenzii disponibile.</p>
      )}
    </div>
  );
};
const Slideshow = ({ images }) => {
  const settings = {
    slidesToShow: 1,
    arrows: true,
    fade: true,  
    autoplay: true,  
    autoplaySpeed: 6000,
  };

  return (
    <div className="relative">
      <Slider {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[42%] h-[300px] object-cover mb-4 mx-auto brightness-65"
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-prev:before,
        .slick-next:before
        {
          font-size: 40px;
          color: white;
        }
        .slick-prev,
        .slick-next {
          width: 40px !important; 
          height: 40px !important; 
          z-index: 1;
        }
        .slick-prev {
          left: 30%;
        }
        .slick-next {
          right: 30%;
        }
      `}</style>
    </div>
  );
};

const top10PaginiData = [
  {
    id: 1,
    number: 1,
    image: '/assets/pictures/faleza.jpeg',
    title: 'Faleza Ivan Patzaichin',
    text0: '1/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/faleza3.jpg',
      '/assets/pictures/faleza4luma.jpg',
      '/assets/pictures/faleza5.jpg',
      '/assets/pictures/faleza6.jpg',
      '/assets/pictures/faleza8.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/richjbaker.png',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/ds.png',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/andreea.png',
        name: 'Andreea',
        stars: 5,
        review: 'The seafront in Tulcea is a beautiful place, arranged and maintained. A clean space where you love to walk on the edge of the Danube. From here you have the possibility to leave, with various boats, towards the islands of the Danube Delta.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/lucian.png',
        name: 'Lucian',
        stars: 5,
        review: 'Modern and tasteful waterfront. A necessary upgrade for any city with tourist aspirations.',
      },
  
    ],
  },

  {
    id: 2,
    number: 2,
    image: '/assets/pictures/monument.jpg',
    title: 'Monument',
    text0: '2/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Monument1.jpg',
      '/assets/pictures/Monument2.jpg',
      '/assets/pictures/Monument3.jpg',
      '/assets/pictures/Monument4.jpg',
      '/assets/pictures/Monument5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
 
 
 
  },
  {
    id: 3,
    number: 3,
    image: '/assets/pictures/ciuperca.jpg',
    title: 'Lacul Ciuperca',
    text0: '3/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Ciuperca1.jpg',
      '/assets/pictures/Ciuperca2.jpg',
      '/assets/pictures/Ciuperca3.jpg',
      '/assets/pictures/Ciuperca4.jpg',
      '/assets/pictures/Ciuperca5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 4,
    number: 4,
    image: '/assets/pictures/acvariu.jpg',
    title: 'Acvariu Danube Delta',
    text0: '4/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Acvariu1.jpg',
      '/assets/pictures/Acvariu2.jpg',
      '/assets/pictures/Acvariu3.jpg',
      '/assets/pictures/Acvariu4.jpg',
      '/assets/pictures/Acvariu5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 5,
    number: 5,
    image: '/assets/pictures/piata.jpg',
    title: 'Piata Civica',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Civica1.jpg',
      '/assets/pictures/Civica2.jpg',
      '/assets/pictures/Civica3.jpg',
      '/assets/pictures/Civica4.jpg',
      '/assets/pictures/Civica5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  
  {
    id: 6,
    number: 6,
    image: '/assets/pictures/art.jpg',
    title: 'Tulcea Art Museum',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Arta1.jpg',
      '/assets/pictures/Arta2.jpg',
      '/assets/pictures/Arta3.jpg',
      '/assets/pictures/Arta4.jpg',
      '/assets/pictures/Arta5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 7,
    number: 7,
    image: '/assets/pictures/avramide.jpg',
    title: 'The Avramide Collections House',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Avramide1.jpg',
      '/assets/pictures/Avramide2.jpg',
      '/assets/pictures/Avramide3.jpg',
      '/assets/pictures/Avramide4.jpg',
      '/assets/pictures/Avramide5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 8,
    number: 8,
    image: '/assets/pictures/nicolas.jpg',
    title: 'St. Nicholas Cathedral',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Nicholas1.jpg',
      '/assets/pictures/Nicholas2.jpg',
      '/assets/pictures/Nicholas3.jpg',
      '/assets/pictures/Nicholas4.jpg',
      '/assets/pictures/Nicholas5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 9,
    number: 9,
    image: '/assets/pictures/sat.jpg',
    title: 'Satul pescăresc tradiţional',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/SatP1.jpg',
      '/assets/pictures/SatP2.jpg',
      '/assets/pictures/SatP3.jpg',
      '/assets/pictures/SatP4.jpg',
      '/assets/pictures/SatP5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
  {
    id: 10,
    number: 10,
    image: '/assets/pictures/istorie.jpg',
    title: 'Muzeul de Istorie şi Arheologie',
    text0: '5/10',
    text: 'Cu siguranță cea mai vizitată atracție turistică din orașul Tulcea, datorită, în primul rând, a faptului că reprezintă punctul de plecare spre Delta Dunării, Faleza Ivan Patzaichin, proaspăt renovată într-un stil modern, este un loc ideal pentru plimbări relaxante și momente de contemplare. \n Întinsă pe malul drept al Dunării, faleza oferă o priveliște pitorească asupra apei liniștite, prezintă numeroase spații verzi, bănci unde te poți bucura de peisaj și de aerul curat, restaurante cu delicatese specifice zonei, ansamblul memorial ”Ivan Patzaichin”, o fântână arteziană ce oferă un joc de lumini odată cu lăsarea întunericului, două părculețe, un foișor și multe altele, toate întinse într-o zonă de promenadă superbă, ce poate fi parcursă printr-un mers neîntrerupt, în medie, de la un capăt la altul, în aproximativ 20 de minute.',
    slideshow: [
      '/assets/pictures/Istorie1.jpg',
      '/assets/pictures/Istorie2.jpg',
      '/assets/pictures/Istorie3.jpg',
      '/assets/pictures/Istorie4.jpg',
      '/assets/pictures/Istorie5.jpg',
    ],
    text2: 'Dacă tot sunteți aici...',
    text3: 'Recomand cu multa căldură, după ce terminați turul falezei, să vă opriți la unul dintre restaurantele La Liman și Ivan Pescar, pentru preparate de pește delicioase și nu numai! Se află fix pe faleză și terasele acestora oferă o priveliște deosebită.',
    reviews: [
      {
        id: 1,
        number: 1,
        image: '/assets/pictures/faleza.jpeg',
        name: 'Rich J Baker',
        stars: 5,
        review: 'Lovely walk path, new musical fountain, plenty of restaurants nearby.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'D S',
        stars: 5,
        review: 'Nice place to visit and enjoy the scenery. Especially now after it has been restored. You can take boat trips anytime from the local businesses.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/monument.jpg',
        name: 'Jane Smith',
        stars: 5,
        review: 'abc',
      },
 
    ],
  },
];


const Top10Pagini = () => {
  
  const { id } = useParams();

  const element = top10PaginiData.find(item => item.id === parseInt(id));

  if (!element) {
    return <div>Element not found</div>;
  }

  return ( <div>
    <div className="text-center overflow-hidden relative">
     
        <img src={element.image} alt={element.title} className="object-cover fixed top-0 left-0 w-screen h-[58vh] relative brightness-75" />
        <h2 className="text-7xl font-bold absolute inset-0 flex items-center justify-center h-[58vh] text-white">{element.title}</h2>
        <p className="long   flex flex-col items-start justify-center mt-6 px-4 md:px-20 max-w-[50%] mx-auto text-justify">
    {element.text0.split('\n').map((paragraph, index) => (
      <React.Fragment key={index}>
        <span>{paragraph}</span>
        <br />
      </React.Fragment>
    ))}
  </p>
        <p className="long   flex flex-col items-start justify-center  px-4 md:px-20 max-w-[50%] mx-auto text-justify">
        {element.text.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
          <span>{paragraph}</span>
          <br />
        </React.Fragment>
  ))}
         </p>
         <Slideshow images={element.slideshow} />
        </div>
         <div className="bg-[#0077b6] w-[42%]   object-cover mb-4 mx-auto rounded-3xl" >
  <p className="   long flex text-white  items-start justify-center text-3xl px-3 py-7 md:px-10 max-w-[50%] mx-auto text-justify">
    {element.text2.split('\n').map((paragraph, index) => (
      <React.Fragment key={index}>
        <span>{paragraph}</span>
        <br />
      </React.Fragment>
    ))}
  </p>
  <p className="long text-white flex flex-col items-start justify-center   md:px-10   mx-auto text-justify text-center">
    {element.text3.split('\n').map((paragraph, index) => (
      <React.Fragment key={index}>
        <span>{paragraph}</span>
        <br />
      </React.Fragment>
    ))}
  </p>
</div>

<Recenzii reviews={element.reviews} />
</div>
  );
};

export default Top10Pagini;
