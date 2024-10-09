import { faDollar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { primarycolor } from "./color";
import studentimage from '../images/student.png'
import bicycle from '../images/bicycle.png'
import shoppingman from '../images/shoppingMan.png'
import studentpreneur from '../images/enterpreneur.png'
import { Location } from "./animations/locationanimi";
import { useState } from "react";

const Services = () => {
    const listarray = ['DELIVERY', 'ORDERING', 'SHOPPING', 'STUDENTPRENEUR']
    const comparray=[<Delivery/>, <Ordering/>,<Shopping/>,<Studententpreneur/>]
    const [currentindex,setcurrentindex]=useState(0)
    const handleactive=(value)=>{
        setcurrentindex(value)

    }
    return (
        <>
            <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain" />
            <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily">
                <div className="absolute top-5 left-0">
                    <Location />
                </div>
                <div className="absolute right-0 top-5">
                    <Location />
                </div>
                <div className="relatve z-50 w-full h-full overflow-y-scroll hide-scrollbar  bg-yellow-50 mt-20 mb-10 rounded-2xl shadow-xl flex flex-col shadow-black">
                    <div className="fontfamily md:text-2xl text-xl font-bold text-center mt-5 text-secondaryColor">Earn Money with Stulivery</div>
                    <div className="flex md:flex-row flex-col items-start w-full flex-1 mt-5">
                        <div className="md:w-1/2 flex justify-start  md:justify-center w-full p-5">
                        {currentindex===3 &&<img src={studentpreneur} className="md:w-2/3 h-64 md:h-72 w-full object-contain" />}
                        {currentindex===2 &&<img src={shoppingman} className="md:w-2/3 h-64 md:h-72 w-full object-contain" />}
                        {currentindex===1 && <img src={studentimage} className="md:w-2/3 h-64 md:h-72 object-contain" />}
                        {currentindex===0 &&<img src={bicycle} className="md:w-2/3 h-64 md:h-72 object-contain" />}
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-start md:justify-center w-full p-5">
                            <div className="flex  gap-2 overflow-scroll hide-scrollbar py-1">
                                {listarray.map((item,index) => (
                                <button onClick={()=>handleactive(index)} className={`${currentindex===index?'bg-primaryColor':'border border-secondaryColor'}  px-2 py-2 rounded-2xl`}>
                                    {item}
                                </button>
                            ))}

                            </div>
                            <div>
                                {comparray[currentindex]}
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
const Delivery=()=>{
    return(
        <div className="flex flex-col">
<div className="text-secondaryColor font-semibold mt-5 mb-5">Earn Easy, Deliver Smart</div>
<div className="flex-1  overflow-y-scroll hide-scrollbar">
<div className="text-lg leading-5">Stulivery connects students with flexible delivery opportunities, allowing you to monetize your daily commute. Become a Stulivery courier and:</div>
<div className="text-sm mt-5">
    <div className="flex gap-3 items-center">
        <div>
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        </div>
       
        <div>Deliver packages and food within your school and surrounding areas</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Choose orders that fit your schedule and route</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Get paid for each successful delivery</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Enhance your campus experience with extra income</div>
    </div>
    <div className="italic mt-3 text-lg">Turn your daily walks into cash.</div>
</div>

</div>


        </div>
    )

}
const Ordering=()=>{
    return(
        <div className="flex flex-col">
<div className="text-secondaryColor font-semibold mt-5 mb-5">Convenience at Your Fingertips</div>
<div className="flex-1  overflow-y-scroll hide-scrollbar">
<div className="text-lg leading-5">Stulivery makes life easier with two convenient services:</div>
<div className="text-lg font-bold">Delivery Assistance</div>
<div className="text-sm mt-5">
    <div className="flex gap-3 items-center">
        <div>
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        </div>
        <div>Need to submit an assignment, but running late?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Stuck in class, but need to deliver documents?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Got two places to be at the same time?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Get a trusted Stulivery courier to deliver for you</div>
    </div>
    <div className="italic mt-3 text-lg">Order Smart, Live Easy</div>
</div>

</div>


        </div>
    )

}
const Shopping=()=>{
    return(
        <div className="flex flex-col">
<div className="text-secondaryColor font-semibold mt-5">Shopping Errands</div>
<div className="flex-1  overflow-y-scroll hide-scrollbar">
<div className="text-sm mt-5">
    <div className="flex gap-3 items-center">
        <div>
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        </div>
        <div>No time to shop for essentials?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Stuck in class, but need to deliver documents?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Want groceries or gifts delivered to your doorstep?</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Send a Stulivery courier to shop for you and deliver to your doorstep</div>
    </div>
    <div className="italic mt-3 text-lg">Get more done in less time.</div>
</div>

</div>


        </div>
    )

}
const Studententpreneur=()=>{
    return(
        <div className="flex flex-col">
<div className="text-secondaryColor font-semibold mt-5 mb-5">Deliver with Ease, Learn with Focus</div>
<div className="flex-1  overflow-y-scroll hide-scrollbar">
<div className="text-lg leading-5">Stulivery offers a hassle-free delivery solution for student entrepreneurs, connecting you with a network of reliable student/nearby people readily available to handle your small-scale business delivery needs. With Stulivery, you can:</div>
<div className="text-sm mt-5">
    <div className="flex gap-3 items-center">
        <div>
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        </div>
        <div>Outsource delivery of your products (confectionery, snacks, merchandise, and more)</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Reach customers across campus and beyond</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Focus on your studies while we handle logistics</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Track orders and manage your business on-the-go</div>
    </div>
    <div className="flex gap-3 items-center mt-3">
        <div className="rounded-full w-4 h-4 bg-primaryColor"></div>
        <div>Scale your business without sacrificing study time</div>
    </div>
    <div className="italic mt-3 text-lg leading-5">While go from student to student, class to class when they can come to you</div>
</div>

</div>


        </div>
    )

}
export default Services;
