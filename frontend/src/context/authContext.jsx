import { useState,useEffect } from 'react';
//import {useNavigate} from "react-router-dom"
import { UserProvide } from './userContext';
import axios from 'axios';
const AuthContext = ({ children }) => {

    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(true);
    //const navigate=useNavigate();
    useEffect(()=>{
      const verifyUser=async()=>{
        try
        {
          const token=localStorage.getItem("token")
          if(token){
          const response=await axios.get("http://localhost:5000/api/auth/verify",{
           headers:{
             "Authorization":`Bearer ${token}`
           }
           
         })
         console.log(response)
        if(response.data.success){
          setUser(response.data.user)
        }
      }
      else{
        setUser(null);
        
      }
      }
catch(error){
  console.log(error);
        setUser(null)
        console.log(error)
    }finally{
        setLoading(false)

    }
    }
    verifyUser()
    },[])
    const login=(userData)=>{
       setUser(userData)
    }
    const logout=()=>{
       setUser(null)
    }
  return (
    <UserProvide.Provider value={{ user, login, logout,loading}}>
      {children}
    </UserProvide.Provider>
  );
};

export default AuthContext;
