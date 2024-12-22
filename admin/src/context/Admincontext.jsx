import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvide = (props) =>{
    
    const [atoken, setatoken] = useState(localStorage.getItem('atoken')?localStorage.getItem('atoken'): '')
    const BackendUrl = import.meta.env.VITE_BACKEND_URL

    const [appointments, setappointsment] = useState([])
    const [dashdata, setdashdata ] = useState(false)

    // THIS FUNCTION IS USED GET ALL DOCOTRS DATA FROM DATABASE

    const [doctors, setdoctors] = useState([])

    const getAlldocotrs = async ()=>{
        try {
            const {data} = await axios.post(BackendUrl +"/api/admin/all-doctors",{},{headers:{atoken}})
            if (data.success) {
                setdoctors(data.doctors)
                
            } else {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const chngeavailability = async (docId)=>{
           try {

            const {data} = await axios.post(BackendUrl +"/api/admin/change-availability",{docId},{headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                getAlldocotrs()
            }else{
                toast.error(data.error)
            }
            
           } catch (error) {
            toast.error(error.message)
           }
    }

    //get all appointments

    const getallappointments = async ()=>{
        try {
            const {data} = await axios.get(BackendUrl + '/api/admin/appointment-data',{headers:{atoken}})
            if(data.success){
                setappointsment(data.appointments)
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }       
    }

    //getdashboard data

    const dashboarddata = async ()=>{
        try {
            const {data} = await axios.get(BackendUrl+'/api/admin/admindash',{headers:{atoken}})
            if(data.success){
                setdashdata(data.dashdata)
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value ={
          atoken , setatoken,
          BackendUrl,
          getAlldocotrs,doctors,
          chngeavailability,
          getallappointments,setappointsment,appointments,
          dashboarddata,dashdata
    }

    return(
        <AdminContext.Provider value={value}>
               {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvide