import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvide = (props) => {
  const currencysem = "₹";
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setdoctors] = useState([]);
  const [token, settoken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false);
  const [userdata, setuserdata] = useState(false)
  const [image, setimage] = useState(false);

//get all docotors

  const getalldoctors = async () => {
    try {
      const { data } = await axios.get(backendURL + "/api/doctor/list");
      if (data.success) {
        setdoctors(data.doctors);
        
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

// get profile data of user  

  const loaduserprofileData = async ()=>{

    try {
      const {data} = await axios.get(backendURL + '/api/user/user-profile', {headers:{token}})
      if(data.success){
        setuserdata(data.userdata)
      }else{
        toast.error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

  }

  const value = {
    doctors,getalldoctors,
    currencysem,
    token,
    settoken,
    backendURL,
    userdata,setuserdata,
    loaduserprofileData,
    image, setimage
  };

  useEffect(() => {
    getalldoctors();
  }, []);

  useEffect(()=>{
    if(token){
      loaduserprofileData()
    }else{
      setuserdata(false)
    }
  },[token])

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvide;
