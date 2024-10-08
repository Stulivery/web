import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';
import logowhite from '../images/logowhite.png';
import { faBars, faCogs, faHome, faInfo, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { primarycolor, primarycolortwo } from './color';
import { Button } from './modal/Customcomponent';

export const Header = ({ light, active, setactive, setSlideUp, slideUp }) => {
  const handleNavigate = (value) => {
    setactive(value);
    setSlideUp(!slideUp); // Toggle the slideUp state to slide pages
  };

  return (
    <div className="h-12 w-screen fixed z-50 justify-between items-center px-5 md:flex hidden">
      {light ? (
        <img
          onClick={() => handleNavigate('Home')}
          src={logo}
          className="h-8 w-auto object-contain cursor-pointer"
        />
      ) : (
        <img
          onClick={() => handleNavigate('Home')}
          src={logowhite}
          className="h-8 w-auto object-contain cursor-pointer"
        />
      )}

      <div className={`md:w-[50vw] w-[75vw] flex gap-4 justify-end ${light ? 'text-secondaryColor' : 'text-primaryColor'}`}>
        <button
          onClick={() => handleNavigate('Services')}
          className={`border rounded-2xl px-1 py-1 text-sm ${
            active === 'Services' ? 'bg-secondaryColor text-white' : `${light ? 'border-secondaryColor' : 'border-primaryColor'}`
          }`}
        >
          Services
        </button>
        <button
          className={`border rounded-2xl px-1 py-1 text-sm ${
            light ? 'border-secondaryColor' : 'border-primaryColor'
          }`}
        >
          About
        </button>
        <button
          className={`border rounded-2xl px-1 py-1 text-sm ${
            light ? 'border-secondaryColor' : 'border-primaryColor'
          }`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};
export const Homemobile=({ light, active, setactive, setSlideUp, slideUp,setshowmenu,showmenu })=>{
  const handleNavigate = (value) => {
    setactive(value);
    setSlideUp(!slideUp); // Toggle the slideUp state to slide pages
  };
  return(
    <>
    
    <div className='flex fixed z-50 h-12 justify-between md:hidden px-5 w-full items-center'>
    {light ? (
          <img
            onClick={() => handleNavigate('Home')}
            src={logo}
            className="h-8 w-auto object-contain cursor-pointer"
          />
        ) : (
          <img
            onClick={() => handleNavigate('Home')}
            src={logowhite}
            className="h-8 w-auto object-contain cursor-pointer"
          />
        )}
          {light ? (
          <button onClick={()=>setshowmenu(!showmenu)} className="transition-opacity duration-300 ease-in-out active:opacity-75"><FontAwesomeIcon size='xl' color={primarycolortwo} icon={faBars} /></button>
        ) : (
          <button onClick={()=>setshowmenu(!showmenu)} className="transition-opacity duration-300 ease-in-out active:opacity-75"><FontAwesomeIcon size='xl' color={primarycolor} icon={faBars} /></button>
        )}
  
     
    </div>
    </>

  )
 
}
export const Menulist = ({ light, active, setactive, setSlideUp, slideUp, setshowmenu, showmenu }) => {
  const handleNavigate = (value) => {
    setactive(value);
    setSlideUp(!slideUp); // Toggle the slideUp state to slide pages
    setshowmenu(false);
  };

  return (
    <>
     
      <div
        className={`bg-primaryColor 
          w-screen h-[40vh] 
          flex flex-col 
          items-center 
          px-5 
          justify-center 
          z-50 
          absolute 
          bottom-0 
          text-xl
          text-secondaryColor
          `}
      >
        <div
          onClick={() => handleNavigate('Home')}
          className="py-2 rounded-2xl bg-yellow-300 flex justify-center w-full gap-2 items-center"
        >
         <FontAwesomeIcon color={primarycolortwo} icon={faHome}/> Home
        </div>
        <div
          onClick={() => handleNavigate('Services')}
          className="py-2 rounded-2xl bg-yellow-300 flex justify-center w-full gap-2 items-center mt-3"
        >
         <FontAwesomeIcon color={primarycolortwo} icon={faCogs} /> Services
        </div>
        <div
          onClick={() => handleNavigate('About')}
          className="py-2 rounded-2xl bg-yellow-300 flex justify-center w-full gap-2 items-center mt-3"
        >
          <FontAwesomeIcon color={primarycolortwo} icon={faInfoCircle}/>About
        </div>
        <div className="py-2 rounded-2xl bg-yellow-300 flex justify-center w-full gap-2 items-center mt-3">
        <FontAwesomeIcon color={primarycolortwo} icon={faUser}/>Contact
        </div>
      </div>
    </>
  );
};
