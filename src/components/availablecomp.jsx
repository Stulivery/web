import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Location } from "./animations/locationanimi"
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { primarycolortwo } from "./color"
import { useState } from "react"
import realtime from "../images/orderlocation.png"
import p2p from '../images/p2p.png'

export const AvailableComp=({setActive})=>{
    const Listarray=['Real-time order tracking','Crypto payment processing','Flexible delivery scheduling','P2P Chat feature']
    const compArray=[<RealTime/>]
    const [currentindex,setcurrentindex]=useState(0)
    const handleactive=(value)=>{
        setcurrentindex(value)

    }
    return(
        <>
        <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain" />
            <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily">
                <div className="absolute top-5 left-0">
                    <Location />
                    
                </div>
                <div className="absolute right-0 top-5">
                    <Location />
                </div>
                {/* <div className="text-secondaryColor md:text-2xl text-xl relative z-50 ">Request in seconds... get the app</div> */}
                 <div className="flex justify-center text-center w-screen mt-20 ">
                 <div className="overflow-scroll flex items-center py-2  gap-3  hide-scrollbar mt-3 px-3">
                    {Listarray.map((item,index)=>(

                            <button onClick={()=>handleactive(index)} className={`${currentindex===index?'bg-primaryColor':'border border-secondaryColor'}  px-2 py-2 rounded-2xl text-nowrap `}>
                                {item} 
                            </button>
                            
                    ))

                    }
                </div>

                 </div>
             
                
                <div className="relatve z-50 p-5 h-full overflow-y-scroll hide-scrollbar bg-secondaryColor mt-3 md:w-[25vw] w-full rounded-2xl shadow-xl flex flex-col shadow-black">
                    {compArray[currentindex]}

                </div>
                <div className="absolute z-50 bottom-5 right-3 md:bottom-10 ">
              <button onClick={()=>setActive('Home')} className="bg-primaryColor flex items-center justify-center rounded-full w-16 h-16 py-4 ">
               <FontAwesomeIcon icon={faArrowCircleUp} size="xl" color={primarycolortwo} />
              </button>
            </div> 

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

        </div>
        </>
    )
}