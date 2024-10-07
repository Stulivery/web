import { useEffect, useState } from "react";
import Scooter from '../images/scootersecond.png';
import classicon from '../images/classicon.png';
import cashicon from '../images/cashicon.png';
import { Header } from "./addcomponent";
import { Location } from "./animations/locationanimi";
import Services from "./Sevices";
import DisplayModay from "./modal/displaymodal";
import { Button } from "./modal/Customcomponent";

const SecondPage = () => {
  const [active, setActive] = useState('Home');
  const [slideUp, setSlideUp] = useState(false);
  const [moveCar, setMoveCar] = useState(false);
  const [showmodal,setshowmodal]=useState(false)
  const [displayedText, setDisplayedText] = useState(""); // For typing animation
  const fullText = "From Class to Cash\n earn while you learn\n with Stulivery";
  const typingSpeed = 100; // Typing speed in ms

  // Start the car movement after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveCar(true);
    }, 1000); // 1 second delay before the car starts moving

    return () => clearTimeout(timer);
  }, []);

  // Typing animation logic
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index)); // Reveal text incrementally
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval); // Stop the interval when done
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup interval
  }, []);

  const handleSubmit = () => {
    setshowmodal(true)
    console.log('ok');
  };

  return (
    <>

      <div className={`w-screen h-screen overflow-hidden relative`}>
      {showmodal &&<div className={`transition-transform duration-700 absolute w-full z-50 h-full ${
            showmodal ? 'scale-100' : 'scale-0'
          }`}>
        <DisplayModay
        setshowmodal={(value)=>setshowmodal(value)}
        />
    </div>}
        <Header
          light={active === 'Home'} // Light background for Home, dark for Services
          active={active}
          setactive={setActive}
          setSlideUp={setSlideUp}
          slideUp={slideUp}
        />

        {/* Sliding logic for pages */}
        <div
          className={`transition-transform duration-700 absolute w-full h-full ${
            active === 'Home'?'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Home Page Content */}
          <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain"/>
          <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily pb-20">
           
            <img
              src={Scooter}
              alt="Car"
              className={`z-50 absolute object-contain object-bottom right-[-50vw] md:right-[-20vw] bottom-0 h-[50vh] sm:h-[100vh] md:h-[100vh] lg:h-[90vh] transition-transform duration-700 ease-linear ${
                moveCar ? 'translate-x-[-25vw]' : 'translate-x-0'
              }`}
            />
            <div className="absolute top-9 left-10">
              <Location />
            </div>
            <div className="absolute right-0 top-24">
              <Location />
            </div>
            <div className="top-[10vh] h-[65vh] w-[75vw] justify-center items-center rotateAnimation absolute flex">
              <div className="md:h-full h-[50vh] w-[75vw] md:w-[50vw] bg-primaryColor flex flex-col justify-center items-center rounded-2xl"></div>
            </div>
            <div className="top-[10vh] h-[65vh] w-[75vw] justify-center items-center absolute flex">
              <div className="md:h-full h-[50vh] w-[75vw] md:w-[50vw] bg-secondaryColor flex flex-col justify-center items-center rounded-2xl px-3">
                <div>
                  <div className="mt-5 flex justify-center items-center">
                    <img src={classicon} className="w-12 h-auto" />
                    <hr className="border-white w-24" />
                    <img src={cashicon} className="w-12 h-auto" />
                  </div>
                  <div className="fontfamily text-primaryColor text-2xl text-center md:text-4xl whitespace-pre-line mt-5">
                    <span className="">{displayedText}</span>
                    <div className="text-sm text-white mt-5">
                      {displayedText.length === fullText.length && (
                        <>
                          <span>Pick up a delivery and make some extra cash with</span>{' '}
                          <span className="font-bold">Stulivery</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 relative z-50">
                  <Button 
                            onClick={handleSubmit} 
                            text={'Join the Waitlist'}
                            textcolor={'white'}
                            bgcolor={'#FFC107'}

                            />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-transform duration-700 absolute w-full h-full ${
            active === 'Services' ?'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Services Page Content */}
          <div className="bg-secondaryColor pan-bottom bg-contain bg-iconbg bg-repeat  flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 py-20 fontfamily">
            <Services/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
