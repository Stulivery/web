import { useEffect, useState } from "react";
import classicon from '../images/classicon.png';
import paymenticon from '../images/makemoney.png'
import cashicon from '../images/cashicon.png';
import { Button } from "./modal/Customcomponent";


const Addonword = ({ setshowmodal }) => {
    const [displayedText, setDisplayedText] = useState(""); // For typing animation
    const [currentTextIndex, setCurrentTextIndex] = useState(0); // Track current text
    const [isTypingComplete, setIsTypingComplete] = useState(false); // Track typing completion

    const fullTextArray = [
        "From Class to Cash\n earn while you learn\n with Stulivery",
        "Get paid to do\n what you already do",
        "Big boys don't stress!",
        "Student hustle simplified"
    ];

    const typingSpeed = 100; // Typing speed in ms
    const changeInterval = 15000; // 15 seconds for text change

    useEffect(() => {
        let index = 0;
        const fullText = fullTextArray[currentTextIndex]; // Get current text to type
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index)); // Reveal text incrementally
            index++;

            if (index > fullText.length) {
                clearInterval(typingInterval); // Stop the interval when done typing
                setIsTypingComplete(true); // Mark typing as complete
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, [currentTextIndex]); // Run effect when currentTextIndex changes

    useEffect(() => {
        if (isTypingComplete) {
            const changeTextTimeout = setTimeout(() => {
                // Move to the next text after 30 seconds
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % fullTextArray.length); // Loop through texts
                setDisplayedText(""); // Clear displayed text for the next typing animation
                setIsTypingComplete(false); // Reset typing state
            }, changeInterval);

            return () => clearTimeout(changeTextTimeout); // Cleanup timeout
        }
    }, [isTypingComplete]); // Run effect when typing is complete

    const handleSubmit = () => {
        setshowmodal(true);
        console.log('ok');
    };

    return (
        <>
            <div className="top-[10vh] h-[65vh] w-[75vw] justify-center items-center rotateAnimation absolute flex">
                <div className="md:h-full h-[50vh] w-[75vw] md:w-[50vw] bg-primaryColor flex flex-col justify-center items-center rounded-2xl"></div>
            </div>
            <div className="top-[10vh] h-[65vh] w-[75vw] justify-center items-center absolute flex">
                <div className="md:h-full h-[50vh] w-[75vw] md:w-[50vw] bg-secondaryColor flex flex-col justify-center items-center rounded-2xl px-3">
                    <div>
                       <div className="mt-5 flex justify-center items-center">
                            <img src={classicon} className="w-12 h-auto" />
                            <hr className="border-white w-24" />
                            <img src={cashicon} className="w-12 h-auto" />
                        </div>
                       
                        <div className="fontfamily text-primaryColor text-2xl text-center md:text-4xl whitespace-pre-line mt-5">
    <span className="">{displayedText}</span>
    <div className="text-sm text-white mt-5">
        {isTypingComplete && (
            <>
                {currentTextIndex === 0 && (
                    <>
                        <span>Pick up a delivery and make some extra cash with</span>{' '}
                        <span className="font-bold">Stulivery</span>
                    </>
                )}
                {currentTextIndex === 1 && (
                    <>
                        <span className="font-bold">-move around campus</span>
                    </>
                )}
                {currentTextIndex === 2 && (
                    <>
                        <span> Let others do the shopping and bring your groceries in minutes.</span>
                    </>
                )}
                {currentTextIndex === 3 && (
                    <>
                        <span>Pick up a delivery and make extra cash with <span className="font-bold">Stulivery!</span></span>
                    </>
                )}
            </>
        )}
    </div>
    <div className="flex justify-center w-full gap-1 mt-2">
        {fullTextArray.map((item,index)=>(
             <div className={`${currentTextIndex===index?'bg-white':'border border-white'} w-2 h-2 rounded-full`}></div>
        ))

        }
       
    </div>
</div>
                    </div>
                    <div className="mt-5 relative z-50">
                        <Button
                            onClick={handleSubmit}
                            text={'Join the Waitlist'}
                            textcolor={'white'}
                            bgcolor={'#FFC107'}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addonword;
