import { useState } from "react"
import { Button, Textinput } from "./modal/Customcomponent"
import { primarycolor, primarycolortwo } from "./color"
import { LottieAnimation, PreloaderCustom } from "./animations/preloader"
import { SubmitContactus } from "./datafetcher/datafetcher"

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [errorMsg,setErrorMsg]=useState('')
    const [showSuccess,setshowSuccess]=useState(false)
    const [loader,setLoader]=useState(false)
    const showSubmitfunc=()=>{
        setshowSuccess(true)
        setTimeout(() => {
        setshowSuccess(false)
            
        }, 3000);
    }
    const handlesubmit = () => {
        if(!name){
            setErrorMsg('Please enter your name')
            return
        }
        if(!email){
            setErrorMsg('Please enter your email')
            return

        }
        SubmitContactus(setname,setemail,setmessage,name, email, message, setLoader, setErrorMsg,showSubmitfunc)
    
    }
    return (
        <>
        {loader&&
                    <>
                    <div className="h-full w-full opacity-70 bg-primaryColor absolute z-50"/>
                    <div className="flex justify-center items-center w-full h-full absolute z-50">
                    <div className="p-3 bg-white rounded-2xl"><PreloaderCustom/></div>
                    </div>
                    </>
                    }
               {showSuccess&&
                    <>
                    <div className="h-full w-full opacity-70 bg-primaryColor absolute z-50"/>
                    <div className="flex justify-center items-center w-full h-full absolute z-50">
                    <LottieAnimation/>
                    </div>
                    </>
                    }
            <div className="bg-iconbgyellow bg-yellow-100 h-screen w-screen absolute bg-repeat bg-contain" />
            <div className="bg-primarybackground bg-no-repeat bg-contain flex flex-col items-center w-screen relative overflow-x-hidden h-screen px-5 fontfamily ">
                <div className="relatve z-40 w-full h-full overflow-y-scroll hide-scrollbar  justify-between  bg-yellow-50 mt-20 mb-10 rounded-2xl shadow-xl flex flex-wrap flex-row  shadow-black">
                    
                    <div className="md:w-1/2 w-full">
                        <div className="w-full text-xl md:px-10 px-5 mt-5">Contact us</div>
                        <div className="w-full flex-col items-center gap-3 flex-wrap">
                            <div className="flex flex-col  justify-center mt-5">
                                <div className="md:w-[25vw] w-[80vw] md:px-10 px-5">
                                    <div>email, call, or complete the form to learn how stulivery can solve your messaging problem</div>
                                    <div className="font-bold  text-secondaryColor mt-5">info@stulivery.com</div>
                                    <div className="mt-2 text-secondaryColor">+2348193847474</div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-center items-start md:px-10 px-5 mt-5">
                                    <div className="md:w-full w-[80vw]">
                                        <div className="font-bold">Customer Support</div>
                                        <div className="text-sm">
                                            Our support team is 
                                            available around the clock 
                                            to address any concerns 
                                            or queries you may have</div>

                                    </div>
                                    <div className="md:w-20"/>
                                    <div className="md:w-full w-[80vw] mt-5 md:mt-0">
                                        <div className="font-bold">Feedback and Suggestions</div>
                                        <div className="text-sm">
                                        We value your feedback and are
                                        Continously working to improve
                                        Stulivery.Your input is Crucial in
                                        Shaping the future of Stulivery
                                        </div>
                                    </div>

                                </div>





                            </div>
                            <div>

                            </div>

                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                    <div className="flex flex-wrap gap-3 justify-center mt-5">
                    <div className="md:w-[25vw] w-[60vw] text-xl">Get in Touch</div>
                    </div>
                       
                        <div className="w-full flex-col items-center gap-3 flex-wrap">
                        <div className="text-sm text-center italic">{errorMsg}</div>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Textinput
                                    label={'Name'}
                                    onChange={(e) => setname(e.target.value)}
                                    value={name}
                                />
                                <Textinput
                                    label={'Email'}
                                    onChange={(e) => setemail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="flex justify-center mt-3">
                                <textarea
                                    onChange={(e) => setmessage(e.target.value)}
                                    placeholder="Message"
                                    className="md:w-[25vw] w-[60vw] h-24 bg-yellow-100 px-2 outline-none border border-primaryColor py-2"
                                    value={message}
                                ></textarea>
                            </div>
                            <div className="  flex flex-col items-center  justify-center">
                                <div className="md:w-[25vw] w-[60vw] flex justify-center ">
                                    <Button
                                        bgcolor={primarycolor}
                                        textcolor={primarycolortwo}
                                        text={'Submit'}
                                        onClick={handlesubmit}
                                    />


                                </div>
                                <div className="md:w-[25vw] w-[60vw] mt-3 flex justify-center ">
                                    <span>By contacting us, you agree to our <span className="font-bold">Tearms of service and privacy policy</span>
                                    </span>
                                </div>



                            </div>




                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Contact