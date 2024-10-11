import about from '../images/about.png'
import { useState,useEffect } from "react";
import { Preloader, PreloaderCustom } from "./animations/preloader";
const About = () => {
    const [showpreloader,setshowpreloader]=useState(true)
    useEffect(() => {
        // Delay the preloader for 3 seconds (3000ms)
        const preloaderTimeout = setTimeout(() => {
            setshowpreloader(false);
        }, 5000);

        return () => clearTimeout(preloaderTimeout); // Cleanup the timeout when the component unmounts
    }, []);
    return (
        <>
            <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain" />
            {showpreloader &&
                <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily ">
                    <div className="relatve z-50 w-full h-full overflow-y-scroll hide-scrollbar items-center justify-center  bg-yellow-200 mt-20 mb-10 rounded-2xl shadow-xl flex flex-col shadow-black">
                    <PreloaderCustom/>

                    </div>
                  
                </div>
            }

            <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily">
               {!showpreloader &&<div className="relatve z-50 p-5 h-full overflow-y-scroll hide-scrollbar items-center flex-wrap bg-yellow-200 mt-20 mb-10 w-full rounded-2xl shadow-xl flex  shadow-black">
                    <div className="md:w-1/2 w-full flex justify-center">
                    <img src={about} className='md:w-72 w-64 h-auto' />

                    </div>
                    <div className="w-full justify-center flex md:w-1/2">
                    <div className='md:w-96 w-64'>
                        <div className="text-xl md:text-2xl">About us</div>
                        <div className="text-secondaryColor text-justify">
                            <p>To provide students with a stree-free platform to earn money while seamlessly balancing
                                their academic responsibilities and entrepreneurial pursuit. Stulivery bridges the gap between running small-scale businesses and managing
                                the demands of student life, offering efficient solutions for time management and cost savings
                            </p>
                            <div className="mt-5">
                                <p>
                                    Our goal is to become the leading student-powered delivery platform across campuses worldwide, empowering students to
                                    earn, connect, and support each other throught convenient, fast, and reliable delivery services


                                </p>

                            </div>



                    

                        </div>
                    

                    </div>
                       

                    </div>




                </div>}


            </div>

        </>
    )
}
export default About