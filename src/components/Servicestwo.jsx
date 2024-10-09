import { faDollar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primarycolor } from "./color";

const Servicestwo = () => {
    return (
        <>
            <div className="w-full items-center flex-col flex justify-center">
                <div className="bg-secondaryColor rounded-2xl w-[50vw] h-24 shadow-sm shadow-black flex justify-center items-center">
                    <div className="text-primaryColor text-4xl">Services</div>
                </div>
                <div className="text-white text-sm flex justify-around mt-5 flex-wrap gap-5">
                    <div className="md:w-1/3 bg-secondaryColor rounded-2xl border border-primaryColor shadow-md shadow-black p-5 w-full relative">
                        <div className="text-primaryColor text-2xl">Delivery Errands:</div>
                        <div>
                            These are services where the main task is delivering items from one
                            location to another, saving time for students.
                        </div>
                        <ul className="list-disc pl-5">
                            <li>Food and Beverage Delivery</li>
                            <li>Grocery and Essentials Delivery</li>
                            <li>Laundry Pickup and Drop-off</li>
                            <li>Document and Package Delivery</li>
                            <li>Event Supplies Delivery</li>
                            <li>Library Book Delivery</li>
                            <li>Tech and Equipment Delivery</li>
                            <li>Campus Errands</li>
                        </ul>
                        <div className="absolute z-50 bottom-5 right-5">
                        <FontAwesomeIcon color={primarycolor} icon={faTruck} size="3x" />
                        </div>
                        
                    </div>
                    <div className="md:w-1/3 bg-secondaryColor rounded-2xl border border-primaryColor shadow-md shadow-black p-5 w-full relative">
                        <div className="text-primaryColor text-2xl"> Earning Money:</div>
                        <div>These services can provide students with opportunities to
                            earn money by performing simple tasks or errands for others.</div>
                        <ul className="list-disc pl-5">
                            <li>Meal Plan Management</li>
                            <li>Courier Services for Part-Time Jobs or Internships</li>
                            <li>Event Supplies Delivery</li>
                            <li>Tech and Equipment Delivery</li>
                            <li>Campus Errands</li>
                        </ul>
                        <div className="absolute z-50 bottom-5 right-5">
                        <FontAwesomeIcon color={primarycolor} icon={faDollar} size="3x" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servicestwo;
