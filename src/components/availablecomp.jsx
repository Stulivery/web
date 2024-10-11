import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Location } from "./animations/locationanimi"
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { primarycolortwo } from "./color"
import { useState } from "react"
import realtime from "../images/orderlocation.png"
import p2p from '../images/p2p.png'
import cryto from '../images/crypto.png'
import delivery from '../images/deliverymap.png'
import { NavigationBution } from "./modal/Customcomponent"

export const AvailableComp=({setActive})=>{
    const Listarray=['Real-time order tracking','Crypto payment processing','Flexible delivery scheduling','P2P Chat feature']
    const compArray=[<RealTime/>,<CyptoPayment/>,<Delivery/>,<P2P/>]
    const [currentindex,setcurrentindex]=useState(0)
    const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipeDistance = 50; // Minimum vertical distance for a swipe to be considered

  const handleTouchStart = (e) => {
    setTouchStartY(e.targetTouches[0].clientY);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndY(e.targetTouches[0].clientY);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaY = touchEndY - touchStartY; // This time, we're looking for a downward swipe (endY > startY)
    const deltaX = Math.abs(touchStartX - touchEndX); // Absolute value of horizontal movement

    // Check if vertical swipe distance is more than the minSwipeDistance and horizontal movement is minimal
    if (deltaY > minSwipeDistance && deltaX < minSwipeDistance / 2) {
      console.log("Swipe Down detected");
     setActive('Home')
    }
  };

    const handleactive=(value)=>{
        setcurrentindex(value)

    }
    return(
        <>
        <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        />
            <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily">
                <div className="absolute top-5 left-0">
                    <Location />
                    
                </div>
                <div className="absolute right-0 top-5">
                    <Location />
                </div>
               <div className="text-secondaryColor md:text-2xl text-lg relative z-50 mt-20 text-nowrap">Will be available on Android & iOS devices</div> 
                 <div className="flex justify-center text-center w-screen ">
                 <div className="overflow-scroll flex items-center py-2  gap-3  hide-scrollbar mt-3 px-3">
                    {Listarray.map((item,index)=>(

                            <div onClick={()=>handleactive(index)} className={`${currentindex===index?'bg-primaryColor':'border border-secondaryColor'} w-full  px-2 py-2 rounded-2xl text-nowrap cursor-pointer`}>
                                {item} 
                            </div>
                            
                    ))

                    }
                </div>

                 </div>
             
                
                <div className="relatve z-50 p-5 h-full overflow-y-scroll hide-scrollbar bg-secondaryColor mt-3 md:w-[25vw] w-full rounded-2xl shadow-xl flex flex-col shadow-black">
                    {compArray[currentindex]}
                   

                </div>
            <NavigationBution 
           icondirection={<FontAwesomeIcon icon={faArrowCircleUp} size="xl" color={primarycolortwo} />}
           pagename={'Home'}
           setActive={setActive}
           />
            

                </div>
            
        
        </>
    )

}
const RealTime=()=>{
    return(
        <>
        <div>
            <div className="text-white fontfamily md:text-lg flex justify-center text-sm">Available for IOS and Android</div>
            <div className="flex justify-center mt-3">
                <img className="md:w-64 w-64 h-auto object-contain" src={realtime} />

            </div>
        </div>
        </>
    )
}
const CyptoPayment=()=>{
    return(
        <>
        <div>
        <div className="text-white fontfamily md:text-lg flex justify-center text-sm">Available for IOS and Android</div>
            <div className="flex justify-center mt-3">
                <img className="md:w-64 w-64 h-auto object-contain" src={cryto} />

            </div>

        </div>
        </>
    )
}
const Delivery=()=>{
    return(
        <>
        <div>
        <div className="text-white fontfamily md:text-lg flex justify-center text-sm">Available for IOS and Android</div>
            <div className="flex justify-center mt-3">
                <img className="md:w-64 w-64 h-auto object-contain" src={delivery} />

            </div>

        </div>
        </>
    )
}
const P2P=()=>{
    return(
        <>
        <div>
        <div className="text-white fontfamily md:text-lg flex justify-center text-sm">Available for IOS and Android</div>
            <div className="flex justify-center mt-3">
                <img className="md:w-64 w-64 h-auto object-contain" src={p2p} />

            </div>

        </div>
        </>
    )
}