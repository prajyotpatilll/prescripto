import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvide = (props) =>{
    
    const [atoken, setatoken] = useState(localStorage.getItem('atoken')?localStorage.getItem('atoken'): '')
    const BackendUrl = import.meta.env.VITE_BACKEND_URL

    const value ={
          atoken , setatoken,
          BackendUrl
    }

    return(
        <AdminContext.Provider value={value}>
               {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvide