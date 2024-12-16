import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextProvide = (props) => {
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const [dtoken, setdtoken] = useState(
    localStorage.getItem("dtoken") ? localStorage.getItem("dtoken") : ""
  );

  const [ appointments, setappointments] = useState([])
  const [dashdata, setdashdata ] = useState(false)

  const docappointment = async ()=>{
    try {
       const {data} = await axios.get(BackendUrl + '/api/doctor/docappointments',{headers:{dtoken}})
       if(data.success){
        setappointments(data.appointments)
        console.log(data.appointments)
       }else{
        toast.error(data.message)
       }
    } catch (error) {
        toast.error(error.message)
    }
  }

  const dashboarddata = async ()=>{
    try {
        const {data} = await axios.get(BackendUrl+'/api/doctor/doc-dash',{headers:{dtoken}})
        if(data.success){
            setdashdata(data.dashdata)
            console.log(data.dashdata)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}

  const value = {
    dtoken,
    setdtoken,
    BackendUrl,
    appointments,docappointment,dashboarddata,dashdata
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvide;
