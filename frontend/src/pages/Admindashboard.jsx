import { useAuth } from "../context/useAuth.js"
//import {useNavigate}from "react-router-dom"
import AdminSidebare from "../components/AdminDashboard/AdminSidebare.jsx"
import Navbar  from "../components/AdminDashboard/Navbar.jsx"
//import AdminSummary from "../components/AdminDashboard/AdminSummary.jsx"
import {Outlet} from "react-router-dom"
function AdminDashboard() {
    const {user,loading}=useAuth();
    if(loading){
        console.log(loading)
    }
    if(!user){
        console.log(user)
    }
   
    return (
        <>
        <AdminSidebare/>
        <div className='flex-1 ml-64 bg-gray-100 h-screen'>
          <Navbar/>
          <Outlet/>
        </div>
        </>
    );
}

export default AdminDashboard;