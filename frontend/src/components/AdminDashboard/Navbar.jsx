import {useAuth} from "../../context/useAuth.js"
import { Power } from "lucide-react";
const Navbar = () =>{
    const {user} = useAuth()
    return (
        <div className='flex items-center text-white justify-between h-12 bg-amber-900 px-5 '>
           <p >Welcom {user.name}</p>
           <button className='px-4 py-1 bg-gray-700 hover:bg-gray-800'><Power size={18}/>Logout</button>
        </div>
    )
}
export default Navbar