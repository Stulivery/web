import preloaderlogo from '../../images/preloaderlogo.png'
import animationData from './animationdata.json'
import Lottie from 'react-lottie';

export const Preloader=()=>{
    return(
        <>
        <div className="loader"></div>
        </>
    )
}
export const PreloaderCustom = () => {
    return (
      <>
        <div>
          <img src={preloaderlogo} className="w-12 h-12 scale-animation" alt="Preloader Logo" />
        </div>
      </>
    );
  };
  export const LottieAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    );
  };
  