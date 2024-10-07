import logo from '../images/logo.png';
import logowhite from '../images/logowhite.png';

export const Header = ({ light, active, setactive, setSlideUp, slideUp }) => {
  const handleNavigate = (value) => {
    setactive(value);
    setSlideUp(!slideUp); // Toggle the slideUp state to slide pages
  };

  return (
    <div className="h-12 w-screen fixed z-50 flex justify-between items-center px-5">
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
