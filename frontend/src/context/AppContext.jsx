import { createContext } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext()

const AppContextProvide = (props) =>{

    const currencysem = "$"
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const [doctors, setdoctors] = useState([])

    

    const value={
        doctors,
        currencysem
    }

    const getalldoctors = async ()=>{
        try {
            const {data} = await axios.get(backendURL+'/api/doctor/list')
            if (data.success) {
                setdoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getalldoctors()
    },[])


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>   
        )
}

export default AppContextProvide




