import preloaderlogo from '../../images/preloaderlogo.png'
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
  