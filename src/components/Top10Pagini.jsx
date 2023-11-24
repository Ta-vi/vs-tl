
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Harta from './Harta'

 


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
    text0: '4.3 on Google Reviews',
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
    coordinates: { lat: 45.1801165, lng: 28.8011549 },
    windowText: 'Faleza Ivan Patzaichin'
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
        image: '/assets/pictures/RecFaleza1.png',
        name: 'Richard Jackson',
        stars: 5,
        review: 'Well worth the climb - even in 31 degeee heat! The views from the top are absolutely spectacular. Do not miss the archaeological museum whilst your there (it is just next door)',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecFaleza2.png',
        name: 'Lucian Chipuc',
        stars: 5,
        review: 'It offers such a nice view over the city, deserves a visit!',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecFaleza3.png',
        name: 'Mihai Samaila',
        stars: 5,
        review: 'Good place to have a fabulous panorama of Tulcea City and its surroundings, including one of the Danube River arms. After climbing the stairs to the monument you are rewarded also with a high power binocular mounted on the corner with the best view.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecFaleza4.png',
        name: 'Pandicornzombie',
        stars: 5,
        review: 'Stuning view, best place if you want to take pictures.',
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
        image: '/assets/pictures/RecCiuperca1.png',
        name: 'Andy',
        stars: 5,
        review: 'Very nice. It can be easily surrounded. It looks freshly renovated.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecCiuperca2.png',
        name: 'Iris Vavilov',
        stars: 5,
        review: 'You can find there a barbecue place, the beach, a volleyball court, boats, a bike path, a park, restaurants. A perfect place to relax.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecCiuperca3.png',
        name: 'Scirtocea Ana-Maria',
        stars: 5,
        review: 'Wonderful view in any season.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecCiuperca4.png',
        name: 'Neculaiasa Vasile',
        stars: 5,
        review: 'A clean park with a very good running and bike path.',
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
        image: '/assets/pictures/RecAcvariu1.png',
        name: 'Radu Rosca',
        stars: 5,
        review: 'Small but really beautiful fish tank displays. They even had a shark there! There are also other regional activities, birds and animals of the area displayed in the museum.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecAcvariu2.png',
        name: 'Liliana Popa',
        stars: 5,
        review: 'This aquarium and museum are small but well organized. You can find useful information about Danube Delta and its history. Very great time and helpful staff too.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecAcvariu3.png',
        name: 'Alexandra Birtar',
        stars: 5,
        review: 'Very nice for the kids and the parents, too. We enjoyed the diversity of fish species.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecAcvariu4.png',
        name: 'Oana Dumitrescu',
        stars: 5,
        review: 'I never expected it but it was amazing. Everybody should see it if you are in the area.',
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
        image: '/assets/pictures/RecCivica1.png',
        name: 'Cristina Tulceanu',
        stars: 5,
        review: 'Piata Civica is located exactly in the center of Tulcea. You can find everything you need from a shopping space to beautiful green scenery and fountains. Its great for kids too.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecCivica2.png',
        name: 'Lucian Ionescu',
        stars: 5,
        review: 'Piața Mircea cel Bătrân, representing the civic center of Tulcea, is a beautiful place for walking and relaxation. The square is dominated by the equestrian statue of Mircea cel Batran, created by Ioan Jalea in 1972, the ruler who annexed Dobrogea to the Romanian Country.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecCivica3.png',
        name: 'Menderes Akkaya',
        stars: 5,
        review: 'Can be recommended, an ideal place for photography and shopping!',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecCivica4.png',
        name: 'Mirela Tanase',
        stars: 5,
        review: 'A pleasant place especially for children. It is provided with a park and space for rollerblades, bicycles and scooters.',
      },
 
    ],
  },
  
  {
    id: 6,
    number: 6,
    image: '/assets/pictures/art.jpg',
    title: 'Tulcea Art Museum',
    text0: '6/10',
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
        image: '/assets/pictures/RecArta1.png',
        name: 'Dana Cristina Repede',
        stars: 5,
        review: 'Not to miss! The building is extraordinary, recently renovated. We have the opportunity to see some unique works belonging to painters who have marked the history of painting in Romania. The museum staff is very welcoming.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecArta2.png',
        name: 'Alexandru Minculescu',
        stars: 5,
        review: 'It is a must if you visit Tulcea. If you are on your way to the Danube you can stop here. Lovely collection and very well preserved.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecArta3.png',
        name: 'Sena Petrea',
        stars: 5,
        review: 'A magnificent building that hides treasures. It is a real delight for the eyes. I liked the energy of the place and how every piece of art is valued.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecArta4.png',
        name: 'Catalin Lazaroiu',
        stars: 5,
        review: 'A special museum, it is worth setting aside time for it when you arrive in Tulcea.',
      },
 
    ],
  },
  {
    id: 7,
    number: 7,
    image: '/assets/pictures/avramide.jpg',
    title: 'The Avramide Collections House',
    text0: '7/10',
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
        image: '/assets/pictures/RecAvramide1.png',
        name: 'Katerina Gkanatsiou',
        stars: 5,
        review: 'Excelent old house that belonged once to Mr. Avramidis, a rich Greek person who lived in Tulcea. Very beautiful decoration, wonderful paintings. Sad history that the state took the house from the owner.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecAvramide2.png',
        name: 'N.D. Jackson',
        stars: 5,
        review: 'This was an unexpected gem that we stopped on our last morning in Tulcea because I am a lover of both history and art. The woman we spoke to was very knowledgeable about the history of the house as well as the art on display on both levels.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecAvramide3.png',
        name: 'Richard Jackson',
        stars: 5,
        review: 'Scoring a 5 for both a very warm welcome and a fascinating insight into 20th century local history, this museum is well worth a visit. Paid once for Casa Avramide and the Tulcea Art Museum (keep your tickets)',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecAvramide4.png',
        name: 'Gabriela Harip',
        stars: 5,
        review: 'Everything is superlative, you are transported to another world as soon as you step through the door. I recommend with love!',
      },
 
    ],
  },
  {
    id: 8,
    number: 8,
    image: '/assets/pictures/nicolas.jpg',
    title: 'St. Nicholas Cathedral',
    text0: '8/10',
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
        image: '/assets/pictures/RecNicolae1.png',
        name: 'Honey Bunny',
        stars: 5,
        review: 'A beautiful, renovated Cathedral, with a positive energy that is felt as soon as you enter.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecNicolae2.png',
        name: 'Tudorel Grosu',
        stars: 5,
        review: 'One of the most beautiful churches and one of the oldest.',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecNicolae3.png',
        name: 'Neacșu Victor',
        stars: 5,
        review: 'A holy place in the city of Tulcea where every Christian is welcome.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecNicolae4.png',
        name: 'Letiția Tania',
        stars: 5,
        review: 'Super! A beautiful cathedral from the time of the Turks.',
      },
 
    ],
  },
  {
    id: 9,
    number: 9,
    image: '/assets/pictures/sat.jpg',
    title: 'Satul pescăresc tradiţional',
    text0: '9/10',
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
        image: '/assets/pictures/RecSatP1.png',
        name: 'Maria L Ciorasteanu',
        stars: 5,
        review: 'Amazing place. It a MUST if you want to see traditional romanian houses fully furnished. Brings out old memories from childhood. Very well preserved things from the past.',
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecSatP2.png',
        name: 'Lefter Iulian',
        stars: 5,
        review: "If you by chance come to Tulcea and you are not in a hurry, this is a beautiful place to spend some time. A lot of improvements have been done from the muzeum's opening.",
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecSatP3.png',
        name: 'Dan Ruget',
        stars: 5,
        review: "We visited on a very hot day, but it was still pleasant. Good that there were some water sprinklers. The houses look very nice and you can also visit inside. Big parking and close to the road. We didn't test the restaurant. The entrance fee was 10 lei.",
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecSatP4.png',
        name: 'Georgiana Lefter',
        stars: 5,
        review: 'The village is quite lovely. You get to see traditional fishing houses from all over Danube delta. Also, near the parking area there is a restaurant with good food.',
      },
 
    ],
  },
  {
    id: 10,
    number: 10,
    image: '/assets/pictures/istorie.jpg',
    title: 'Muzeul de Istorie şi Arheologie',
    text0: '10/10',
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
        image: '/assets/pictures/RecArhe1.png',
        name: 'Emily Bianchi Bazzi',
        stars: 5,
        review: "Romania has an incredibly rich archaeological heritage and history, including conquest and settlement by the Romans. The museum staff have done a good job of displaying some of the beautiful artefacts in the museum's  possession.",
      },
      {
        id: 2,
        number: 2,
        image: '/assets/pictures/RecArhe2.png',
        name: 'Blocky Core',
        stars: 5,
        review: 'Very beautiful museum!! It represents the hisotry of the area very well! From the Dacid tribes, to the romans, byzantines, ottomans etc. Its a must visit for any visitors of Tulcea!',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/RecArhe3.png',
        name: 'Corneliu Ciobanu',
        stars: 5,
        review: 'If you want to discover the frantic and interminglings of ancient cultures in Dobrogea, here is the place. Great to see if you are passionate about ancient Greece or Roman Empire as it has many recovered pieces from those eras.',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/RecArhe4.png',
        name: 'Sergiu Pasca',
        stars: 5,
        review: 'It is not a very big museum, but it is definitely worth visiting if you are passing through Tulcea. Tickets cost 10 lei for adults and 5 lei for children.',
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
    <div className="h-[300px]      ">
    <Harta coordinates={element.coordinates} windowText={element.windowText} />
    </div>
 
 
    
</div>
 
  );
};

export default Top10Pagini;
