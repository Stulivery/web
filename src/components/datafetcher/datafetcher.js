import axios from 'axios';
import { contactusUrl, waitlistUrl } from "../endpoint";

export const SubmitWaitlist = async (setname,setemail,name, email, setLoader, setErrorMsg,showSubmitfunc) => {
    try {
        setLoader(true);
        const data = { email, name };
        const response = await axios.post(waitlistUrl, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if ([200, 201, 203].includes(response.status)) {
            showSubmitfunc()
            setname('')
            setemail('')
            setErrorMsg('')
            console.log('ok');
            // You can perform additional logic here if needed
        } else {
            // Handle unexpected statuses that aren't errors but also not successful
            setErrorMsg('Unexpected response status: ' + response.status);
        }
    } catch (error) {
        // Check if the error is from the response
        if (error.response) {

            // The request was made and the server responded with a status code outside the range of 2xx
            setErrorMsg(error.response.data.message || 'Something went wrong on the server.');
        } else if (error.request) {
            // The request was made, but no response was received
            setErrorMsg('No response received from server. Please check your network connection.');
        } else {
            // Something happened in setting up the request that triggered an Error
            setErrorMsg('Error: ' + error.message);
        }
    } finally {
        setLoader(false);
    }
};
export const SubmitContactus = async (setname,setemail,setmessage,name, email, message, setLoader, setErrorMsg,showSubmitfunc) => {
    try {
        setLoader(true);
        const data = {name,email,message };
        const response = await axios.post(contactusUrl, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if ([200, 201, 203].includes(response.status)) {
            showSubmitfunc()
            setname('')
            setemail('')
            setmessage('')
            setErrorMsg('')
            console.log('ok');
            // You can perform additional logic here if needed
        } else {
            // Handle unexpected statuses that aren't errors but also not successful
            setErrorMsg('Unexpected response status: ' + response.status);
        }
    } catch (error) {
        // Check if the error is from the response
        if (error.response) {

            // The request was made and the server responded with a status code outside the range of 2xx
            setErrorMsg(error.response.data.message || 'Something went wrong on the server.');
        } else if (error.request) {
            // The request was made, but no response was received
            setErrorMsg('No response received from server. Please check your network connection.');
        } else {
            // Something happened in setting up the request that triggered an Error
            setErrorMsg('Error: ' + error.message);
        }
    } finally {
        setLoader(false);
    }
};
