import { useState } from 'react';
import { UserProvide } from './userContext';

const AuthContext = ({ children }) => {

    const [user,setUser]=useState("");
    const login=(userData)=>{
       setUser(userData)
    }
    const logout=()=>{
       setUser(null)
    }
  return (
    <UserProvide.Provider value={{ user, login, logout }}>
      {children}
    </UserProvide.Provider>
  );
};

export default AuthContext;
