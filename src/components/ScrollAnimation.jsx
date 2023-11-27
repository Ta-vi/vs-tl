import React, { useState, useEffect } from 'react';

const ScrollAnimation = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const animateLine = () => {
      const animationDuration = 1500;
      const framesPerSecond = 60;
      const totalFrames = (animationDuration / 500) * framesPerSecond;

      const animate = (currentFrame) => {
        if (currentFrame <= totalFrames) {
          setLineHeight((currentFrame / totalFrames) * 240);
          requestAnimationFrame(() => animate(currentFrame + 1));
        } else {
          setLineHeight(0);
          setTimeout(() => animate(0), 500);
        }
      };
      animate(0);
    };

    animateLine();
  }, []);

  const scrollLineStyles = {
    position: 'absolute',
    bottom: '290px',
    right: '112px',
    width: '3px',
    height: `${lineHeight}px`,
    backgroundColor: 'white',
    transition: 'height 0.3s ease',
    zIndex: 1,
  };

  const textStyles = {
    position: 'absolute',
    bottom: '150px',  
    right: '100px',
    color: 'white',
    zIndex: 999,
    writingMode: 'vertical-lr',
    transform: 'rotate(180deg)',
    fontSize: '20px', 
  };

  return (
    <div>
    
  <div className="w-1 h-full bg-white absolute bottom-72 right-28 transition-height duration-100 ease-in-out" style={{ height: `${lineHeight}px`}}></div>
  <div className="w-1 h-full absolute bottom-40 right-[100px] text-white writing-mode-vertical rotate-180 text-lg"  style={{ writingMode: 'vertical-lr'}}>Scroll&nbsp;Down</div>
       
    </div>
  );
};

export default ScrollAnimation;