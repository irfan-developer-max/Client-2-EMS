
import SummaryCard from "../../components/AdminDashboard/SummaryCards.jsx"
import {Users,Building2,Coins,FilePlus,Briefcase,Hourglass,Clock} from "lucide-react";
const AdminSummary = () => {
  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">Dashboard Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SummaryCard icon={<Users/>} text="All Empoyees" number={40} color="bg-yellow-600"/>
        <SummaryCard icon={<Building2/>} text="Departments" number={40} color="bg-yellow-600"/>
        <SummaryCard icon={<Coins/>} text="total Monay" number={30000} color="bg-yellow-600"/>
      </div>
      <div className="mt-12">
        <h4 className="text-center text-2xl font-bold">Leave Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SummaryCard icon={<FilePlus/>} text="invoices" number={400} color="bg-blue-600"/>
          <SummaryCard icon={<Briefcase/>} text="invoices" number={400} color="bg-blue-600"/>
          <SummaryCard icon={<Hourglass/>} text="invoices" number={400} color="bg-blue-600"/>
          <SummaryCard icon={<Clock/>} text="invoices" number={400} color="bg-blue-600"/>
        </div>
      </div>
    </div>
  )
}

export default AdminSummary
