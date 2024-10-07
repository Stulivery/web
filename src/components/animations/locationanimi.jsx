import { faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { primarycolor, primarycolortwo } from "../color"
export const Location=()=>{
    return(
        <>
        <div className="relative w-20 h-20 flex justify-center items-center">
        <div className="bg-primarybackground h-20 w-20 blinkanimation rounded-full absolute"/>
        <FontAwesomeIcon size="xl" color={primarycolortwo} icon={faLocationDot} />
        </div>
        
        </>
    )
}