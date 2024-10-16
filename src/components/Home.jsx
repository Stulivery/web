import React, { useState, useEffect } from 'react';
import logowhite from '../images/logowhite.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // State to toggle between the two divs
  const [slideUp, setSlideUp] = useState(false);
  const [scaleImage, setScaleImage] = useState(false);

  // Automatically slide up after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
    }, 2000); // 2 seconds for sliding up

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Scale image after an additional 2 seconds
  useEffect(() => {
    if (slideUp) {
      const scaleTimer = setTimeout(() => {
        setScaleImage(true);
      }, 1000); // 2 seconds delay for scaling the image

      // Cleanup the scale timer if the component unmounts
      return () => clearTimeout(scaleTimer);
    }
  }, [slideUp]);
  const navigate=useNavigate()
  const handlenavigation=()=>{
    navigate('/started')

  }
  useEffect(() => {
      const scaleTimer = setTimeout(() => {
        handlenavigation()
      }, 4000); // 2 seconds delay for scaling the image

      return () => clearTimeout(scaleTimer);
    
  }, [slideUp]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`bg-primaryColor h-screen w-screen absolute transition-transform duration-700 ${
          slideUp ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
      </div>

      <div
        className={`bg-secondaryColor h-screen w-screen flex justify-center items-center absolute transition-transform duration-700 ${
          slideUp ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Content of the second div */}
        <img
          src={logowhite}
          className={`h-16 w-36 object-contain transition-all duration-700 ${
            scaleImage ? 'scale-100' : 'scale-0'
          }`}
        />
      </div>
    </div>
  );
};

export default Home;
