import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Textinput } from "./Customcomponent"
import { useState,useEffect } from "react"

const DisplayModay = ({ setshowmodal }) => {
    const [Name,setName]=useState('')
    useEffect(()=>{
        console.log(Name)

    },[Name])
    const handleSubmit=()=>{
        console.log('ok')
    }

    return (
        <>
            <div className="bg-yellow-100  opacity-70 absolute h-screen w-screen" />
            <div className="h-screen w-screeen flex justify-center relative">
                <div className="h-[70vh] w-[75vw] top-[10vh] rounded-2xl md:w-[50vw] bg-iconbgyellow bg-contain bg-repeat flex flex-col bg-primaryColor absolute p-5">
                    <div className="w-full justify-end flex">
                        <button onClick={()=>setshowmodal(false)}><FontAwesomeIcon size="xl" icon={faTimesCircle} /></button>

                    </div>
                    <div className="flex justify-center w-full"> 
                        <div>
                        <Textinput
                        onChange={(e)=>setName(e.target.value)}
                        value={Name}
                        label={'Name'}
                        />
                         <Textinput
                        onChange={(e)=>setName(e.target.value)}
                        value={Name}
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