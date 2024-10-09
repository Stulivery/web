import { useEffect, useState } from "react";
import Scooter from '../images/scootersecond.png';
import classicon from '../images/classicon.png';
import cashicon from '../images/cashicon.png';
import { Header,Homemobile, Menulist } from "./addcomponent";
import { Location } from "./animations/locationanimi";
import Services from "./Sevices";
import DisplayModay from "./modal/displaymodal";
import { Button } from "./modal/Customcomponent";
import Addonword from "./addonword";

const SecondPage = () => {
  const [active, setActive] = useState('Home');
  const [slideUp, setSlideUp] = useState(false);
  const [moveCar, setMoveCar] = useState(false);
  const [showmodal,setshowmodal]=useState(false)
  const [showmenu,setshowmenu]=useState(false)
 

  // Start the car movement after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveCar(true);
    }, 1000); // 1 second delay before the car starts moving

    return () => clearTimeout(timer);
  }, []);


  

  return (
    <>
     {showmenu &&<div
        onClick={() => setshowmenu(false)}
        className="bg-yellow-300 opacity-70 h-screen w-screen z-50 absolute"
      />}
      {<div  className={`transition-transform duration-700 absolute w-full h-screen z-50 ${
            showmenu?'translate-y-0' : '-translate-y-full'
          }`}>
      <Menulist
      active={active}
      setactive={setActive}
      setSlideUp={setSlideUp}
      slideUp={slideUp}
      setshowmenu={(value)=>setshowmenu(value)}
      showmenu={showmenu}
       />
      </div>}
      <div className={`w-screen h-screen overflow-hidden relative`}>
      {showmodal &&<div className={`transition-transform duration-700 absolute w-full z-40 h-full ${
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
        <Homemobile 
         light={active === 'Home'} // Light background for Home, dark for Services
         active={active}
         setactive={setActive}
         setSlideUp={setSlideUp}
         slideUp={slideUp}
         showmenu={showmenu}
         setshowmenu={(value)=>setshowmenu(value)}
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
            <Addonword
            setshowmodal={setshowmodal}
            />
          </div>
        </div>

        <div
          className={`transition-transform duration-700 absolute w-full h-full ${
            active === 'Services' ?'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Services Page Content */}
          <div>
            <Services/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
