import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export const notify_error = (text, time)=>{
    toast.error(text, {

        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })
}

export const notify_success = (text, time)=>{
    toast.success(text, {

        position: "top-center",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    })
}