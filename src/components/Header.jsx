import React, { useState, useEffect } from 'react';
 
const Header = () => {

  const [scrollColor, setScrollColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [svgColor, setSvgColor] = useState('white');
  const [language, setLanguage] = useState('RO');

  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'RO' ? 'EN' : 'RO'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const tenPercentOfPage = totalHeight * 0.288;
     
      if (scrollPosition > tenPercentOfPage) {
        setScrollColor('white');
        setTextColor('blue');
        setSvgColor('blue');
      } else {
        setScrollColor('transparent');
        setTextColor('white');
        setSvgColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`inline-block px-10 py-4 flex items-center justify-between space-x-3 fixed top-0 left-0 w-full ${textColor === 'blue' ? 'text-blue-500' : 'text-white'} text-xl z-30 ${scrollColor === 'white' ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-3 inline-block">
      <a href="/" className="">
        <span className="font-bold">visit-tulcea</span>.com
      </a>
      <p className="bara"> | </p>
      <button onClick={toggleLanguage}>{language}</button>
      </div>
       <div className="flex items-center justify-center   ">
         <div className="w-screen max-w-2xl bg-gray-200  bg-opacity-40   rounded-lg px-4 py-2  flex items-center justify-start">
          <div className="w-6 h-6    bg-opacity-50   rounded-full flex items-center justify-center"></div>
          <input
            type="text"
            placeholder="Cautari sugerate"
            className="w-full ml-2 bg-gray-400  bg-opacity-0   ${textColor === 'blue' ? 'text-blue-500' : 'text-white'}  focus:outline-none"
            
          />
        </div>
      </div>
      <div className="">
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        fill={`#${svgColor}`}
        viewBox="0 0 256 256"
      >
        <line x1="34" y1="76" x2="222" y2="76" stroke={`#${svgColor}`} strokeLinecap="round" strokeWidth="32" />
        <line x1="34" y1="128" x2="222" y2="128" stroke={`#${svgColor}`} strokeLinecap="round" strokeWidth="32" />
        <line x1="34" y1="180" x2="222" y2="180" stroke={`#${svgColor}`} strokeLinecap="round" strokeWidth="32" />
      </svg>
       </div>
    </header>
  );
};

export default Header;
