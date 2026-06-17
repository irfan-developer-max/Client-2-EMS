import {useState} from 'react'
import axios from "axios";
function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)
     async function handleFunction(e){
        e.preventDefault()
        try{
             const response=await axios.post("http://localhost:5000/api/auth/login",{email,password});
             if(response.data.success){
                alert("successfully login")
             }

        }
        catch(error){
          if(error.response){
            setError(error.response.data.error);
          }
          else{
            setError("Server Error");
          }
        }


     }
    return(
       <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-gray-600 from-50% to-gray-100 to-50% space-y-6">
       <h2 className="font-Inter text-2xl text-black">
        Employee Management System
       </h2>
       <div className="border shadow p-6 w-80 bg-gray-100 rounded">
         <h3 className="text-2xl font-bold mb-4">Login</h3>
         {error&&<p className="text-red-500">{error}</p>}
       <form  onSubmit={handleFunction}>
      
        <div className="mb-4">
        <label htmlFor="username"  className="block text-gray-700">Username</label>
            <input className="w-full px-3 py-2 border" type="text" id="username" name="username" required placeholder="Enter your username" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input className="w-full px-3 py-2 border" type="password" id="password" name="password" required placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox"/>
                <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-gray-700">
                Forgot password?
            </a>

        </div>
        <div className="mb-4">
        <button type="submit" className="w-full bg-gray-700 text-white py-2">Login</button>
        </div>
       </form>
       </div>
       </div>

    )
}
export default Login;