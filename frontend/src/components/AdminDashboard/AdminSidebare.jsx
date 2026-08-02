import {NavLink} from 'react-router-dom'
import {Gauge,User,Building2,CalendarDays,Wallet,Settings} from "lucide-react"
const AdminSidebare = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className='bg-amber-900 h-12 flex-center justify-center'>
        <h3 className='text-2xl text-center  font-pacific'>SB Recruitment</h3>
      </div>
      <div className="px-4">
           <NavLink to="/admin-dashboard" className={({isActive})=>`${isActive ? "bg-gray-600 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`}end >
                <Gauge/>
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard/employees" className={({isActive})=>`${isActive ? "bg-gray-600 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`} end>
                <User/>
                <span>Employees</span>
            </NavLink>
            <NavLink to="/admin-dashboard/departments" className={({isActive})=>`${isActive ? "bg-gray-600 ":" "}flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <Building2/>
                <span>Department</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <CalendarDays/>
                <span>Leave</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <Wallet/>
                <span>Salary</span>
            </NavLink>
            <NavLink to="/admin-dashboard" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <Settings/>
                <span>Setting</span>
            </NavLink>
      </div>
    </div>
  )
}

export default AdminSidebare
