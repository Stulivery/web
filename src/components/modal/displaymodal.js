import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Textinput } from "./Customcomponent"
import { useState,useEffect } from "react"
import { LottieAnimation, PreloaderCustom } from "../animations/preloader"
import { SubmitWaitlist } from "../datafetcher/datafetcher"

const DisplayModay = ({ setshowmodal }) => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [errorMsg,seterrorMsg]=useState('')
    const [showSuccess,setshowSuccess]=useState(false)
    const [loader,setLoader]=useState(false)

    const showSubmitfunc=()=>{
        setshowSuccess(true)
        setTimeout(() => {
        setshowSuccess(false)
            
        }, 3000);
    }
    const handleSubmit=()=>{
        if(!name){
            seterrorMsg('Please enter your name')
            return
        }
        if(!email){
            seterrorMsg('Please enter your email')
            return

        }
        SubmitWaitlist(setname,setemail,name,email,setLoader,seterrorMsg,showSubmitfunc) 
    }
   

    

    return (
        <>
            <div className="bg-yellow-100  opacity-70 absolute h-screen w-screen" />
            <div className="h-screen w-screeen flex justify-center relative">
            {loader &&<div className="h-[50vh] md:h-[70vh] w-[75vw] md:top-[10vh] top-[18vh] items-center justify-center rounded-2xl md:w-[50vw] bg-iconbgyellow bg-contain bg-repeat flex flex-col bg-primaryColor absolute  z-50">
            <div className="p-3 bg-white rounded-2xl"><PreloaderCustom/></div>
            </div>}
           {showSuccess &&<div className="h-[50vh] md:h-[70vh] w-[75vw] md:top-[10vh] top-[18vh] rounded-2xl md:w-[50vw] bg-iconbgyellow bg-contain bg-repeat flex flex-col bg-primaryColor absolute  z-50">
            <LottieAnimation/>
            </div>}
                <div className="h-[50vh] md:h-[70vh] w-[75vw] md:top-[10vh] top-[18vh] rounded-2xl md:w-[50vw] bg-iconbgyellow bg-contain bg-repeat flex flex-col bg-primaryColor absolute p-5">
                    <div className="w-full justify-end flex">
                        <button onClick={()=>setshowmodal(false)}><FontAwesomeIcon size="xl" icon={faTimesCircle} /></button>

                    </div>
                    <div className="text-sm text-center italic">{errorMsg}</div>
                    <div className="flex justify-center w-full"> 
                      
                        <div>
                        <Textinput
                        onChange={(e)=>setname(e.target.value)}
                        value={name}
                        label={'Name'}
                        />
                         <Textinput
                        onChange={(e)=>setemail(e.target.value)}
                        value={email}
                        label={'Email'}
                        type={'email'}
                        />
                        <div>
                            <Button 
                            onClick={handleSubmit} 
                            text={'Submit'}
                            textcolor={'white'}
                            bgcolor={'#073945'}

                            />
                        </div>

                        </div>
                       
                    </div>

                </div>

            </div>

        </>
    )
}
export default DisplayModay