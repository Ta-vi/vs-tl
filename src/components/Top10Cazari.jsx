
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faMapMarkerAlt, faPhone,  faHotel } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Top10Cazari = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const top10Data = [
    {
      id: 1,
      number: 1,
      image: '/assets/pictures/HotelCondor2.jpeg',
      title: 'Hotel Condor',
      text: 'Str. Progresului 24',
      text2: '0240 553 680',
      text3: 'Facebook',
      text4: 'Booking',
      adresa: 'https://www.google.com/maps/place/Condor/@45.1779431,28.801973,15z/data=!4m2!3m1!1s0x0:0x1511cce34bcc5fb8?sa=X&ved=2ahUKEwjAkM_GtOeCAxW56wIHHSvQCLYQ_BJ6BAgQEAA',
      facebook: 'https://www.facebook.com/HotelCondorTulcea',
      booking: 'https://www.booking.com/hotel/ro/condor-tulcea.ro.html',
    },
    {
        id: 2,
        number: 2,
        image: '/assets/pictures/PrestigeHouse.jpg',
        title: 'Prestige House',
        text: 'Str. Walter 18',
        text2: '0734 652 652',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Prestige+House+Tulcea/@45.1793908,28.8076278,15z/data=!4m2!3m1!1s0x0:0xb23b3caaaa6285a6?sa=X&ved=2ahUKEwj5lqCZueeCAxWb7AIHHXevCBUQ_BJ6BAgQEAA',
        facebook: 'https://www.facebook.com/cazaretulcea/',
        booking: 'https://www.booking.com/hotel/ro/prestige-house-tulcea.ro.html',
      },
      {
        id: 3,
        number: 3,
        image: '/assets/pictures/HotelInsula.jpg',
        title: 'Hotel Insula',
        text: 'Str. Ivanov Dumitru 2',
        text2: '0240 515 121',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Hotel+Insula/@45.1825704,28.7883501,15z/data=!4m9!3m8!1s0x40b75959c676c499:0x2f251d99787ae555!5m2!4m1!1i2!8m2!3d45.1825704!4d28.7883501!16s%2Fg%2F11zlb2sdn?entry=ttu',
        facebook: 'https://www.facebook.com/hotel.insula',
        booking: 'https://www.booking.com/hotel/ro/insula-tulcea.ro.html',
      },
      {
        id: 4,
        number: 4,
        image: '/assets/pictures/StarHotel.jpg',
        title: 'Star Hotel',
        text: 'Str. Isaccei 34',
        text2: '0374 492 066',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Star+Hotel+Tulcea/@45.1797167,28.7768107,15z/data=!4m9!3m8!1s0x40b75be1b3b2f975:0xc1d447e69f5bb0a2!5m2!4m1!1i2!8m2!3d45.1797167!4d28.7768107!16s%2Fg%2F1q62fhvmv?entry=ttu',
        facebook: 'https://www.facebook.com/TulceaStar',
        booking: 'https://www.booking.com/hotel/ro/star-tulcea1.ro.html',
      },
      {
        id: 5,
        number: 5,
        image: '/assets/pictures/HotelEsplanada.jpg',
        title: 'Hotel Esplanada',
        text: 'Str. Portului 1',
        text2: '0240 516 607',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Esplanada/@45.180681,28.793246,15z/data=!4m9!3m8!1s0x40b7595a41b18e61:0xd217f55fe8b0684b!5m2!4m1!1i2!8m2!3d45.180681!4d28.793246!16s%2Fg%2F1tk89mrh?entry=ttu',
        facebook: 'https://www.facebook.com/p/Hotel-Esplanada-Tulcea-100035172382804/',
        booking: 'https://www.booking.com/hotel/ro/esplanada.ro.html',
      },
      {
        id: 6,
        number: 6,
        image: '/assets/pictures/HotelCity.jpg',
        title: 'Hotel City',
        text: 'Str. Babadag 127',
        text2: '0240 516 275',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Hotel+City/@45.1712662,28.7984149,15z/data=!4m9!3m8!1s0x40b75941dc0d656d:0x9f647025636c800a!5m2!4m1!1i2!8m2!3d45.1712662!4d28.7984149!16s%2Fg%2F1vc_nw1f?entry=ttu',
        facebook: 'https://www.facebook.com/hotelcityCazare/',
        booking: 'https://www.booking.com/hotel/ro/city.ro.html',
      },
      {
        id: 7,
        number: 7,
        image: '/assets/pictures/HotelSelect.jpg',
        title: 'Hotel Select',
        text: 'Str. Babadag 1',
        text2: '0240 506 180',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Select/@45.1782045,28.8049946,15z/data=!4m9!3m8!1s0x40b7594615b87f43:0x609bb35c7c44587e!5m2!4m1!1i2!8m2!3d45.1782045!4d28.8049946!16s%2Fg%2F1vpq5cnw?entry=ttu',
        facebook: 'https://ms-my.facebook.com/p/Hotel-Restaurant-Pescaresc-Select-Tulcea-100057522726171/',
        booking: 'https://www.booking.com/hotel/ro/select-tulcea.ro.html',
      },
      {
        id: 8,
        number: 8,
        image: '/assets/pictures/HotelEuropolis.jpg',
        title: 'Hotel Europolis',
        text: 'Str. Păcii 20',
        text2: '0240 512 443',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Europolis/@45.1758971,28.8050304,15z/data=!4m9!3m8!1s0x40b7593f0294a341:0xfe6929af2bbd7a38!5m2!4m1!1i2!8m2!3d45.1758971!4d28.8050304!16s%2Fg%2F12vs1jkl5?entry=ttu',
        facebook: 'https://www.facebook.com/Europolis.ro/?locale=ro_RO',
        booking: 'https://www.booking.com/hotel/ro/europolis.ro.html',
      },
      {
        id: 9,
        number: 9,
        image: '/assets/pictures/HotelDelta4.jpg',
        title: 'Hotel Delta 4',
        text: 'Str. Isaccei 2',
        text2: '0240 514 720',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Delta/@45.1794916,28.8037746,15z/data=!4m9!3m8!1s0x40b7594f5ac1d6f1:0xd74fc5bd42223e6f!5m2!4m1!1i2!8m2!3d45.1794916!4d28.8037746!16s%2Fg%2F1tkjjpw3?entry=ttu',
        facebook: 'https://www.facebook.com/p/HOTEL-DELTA-100063583449021',
        booking: 'https://www.booking.com/hotel/ro/delta.ro.html',
      },
      {
        id: 10,
        number: 10,
        image: '/assets/pictures/HotelDelta3.jpg',
        title: 'Hotel Delta 3',
        text: 'Str. Isaccei 2',
        text2: '0240 514 720',
        text3: 'Facebook',
        text4: 'Booking',
        adresa: 'https://www.google.com/maps/place/Delta/@45.1794916,28.8037746,15z/data=!4m9!3m8!1s0x40b7594f5ac1d6f1:0xd74fc5bd42223e6f!5m2!4m1!1i2!8m2!3d45.1794916!4d28.8037746!16s%2Fg%2F1tkjjpw3?entry=ttu',
        facebook: 'https://www.facebook.com/p/HOTEL-DELTA-100063583449021',
        booking: 'https://www.booking.com/hotel/ro/delta-tulcea.ro.html?aid=356980&label=gog235jc-1FCAMY6QcoggJCBnR1bGNlYUggWANowAGIAQGYASC4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvuzmKsGwAIB0gIkMDFlZTYyZTktNzhiOS00ZjQ1LWFkMjMtZjVmYTEwMzJmMWRj2AIF4AIB&sid=08c33f080d12246d0c74c17936939a45&dest_id=-1172984;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=10;hpos=10;nflt=ht_id%3D204;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=bayesian_review_score;srepoch=1701200341;srpvid=49fd898a66da0559;type=total;ucfs=1&#hotelTmpl',
      },
  ];
  
  return (
    <div>
      <img
        src="/assets/pictures/HotelCondor.png"
        alt="Top 10"
        className="object-cover fixed top-0 left-0 w-screen h-[58vh] relative brightness-50"
      />
      <h1 className="text-7xl font-bold absolute inset-0 flex items-center justify-center h-[58vh] text-white">
        TOP 10 HOTELURI
      </h1>
      <p className="text-xl flex flex-col items-start justify-center mt-6 px-4 md:px-20 max-w-[50%] mx-auto text-justify">
        Text.
      </p>
      <ul className="mt-4 grid gap-4 ">
        {top10Data.map(item => (
          <li key={item.id}>
              <div className="relative flex items-center justify-center mt-4 ">
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
                <div className="flex flex-col mx-6 w-96">
            <p className="font-bold flex items-center text-base">{item.title}</p>
            <div className="grid grid-cols-2"> 
            <p className="long">
              <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              <a href={item.adresa} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </p>
            <p className="long">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a href={`tel:${item.telefon}`}>{item.text2}</a>
            </p>
  <p className="long">
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                {item.text3}
              </a>
            </p>
            <p className="long">
              <FontAwesomeIcon icon={faHotel} />{" "}
              <a href={item.booking} target="_blank" rel="noopener noreferrer">
                {item.text4}
              </a>
            </p>
            </div>
          </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

 

export default Top10Cazari;
