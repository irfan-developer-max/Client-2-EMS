import {Routes,Route,Navigate} from 'react-router-dom'
import Login from './pages/Login';
import AdminDashboard from './pages/Admindashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from "./utils/PrivateRoutes.jsx"
import RoleBaseRoute from './utils/RolebaseRoutes.jsx';
import AdminSummary from './components/AdminDashboard/AdminSummary.jsx'
import Departments from "./components/AdminDashboard/departments/Department.jsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate  to="/admin-dashboard"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoute requiredRole={["admin"]}>
          <AdminDashboard />
          </RoleBaseRoute>
          </PrivateRoutes>
          } >
            <Route index element={<AdminSummary/>}></Route>
             <Route path="/admin-dashboard/departments" element={<Departments/>}></Route>
             <Route path="/admin-dashboard/employees" element={<EmployeeDashboard/>}></Route>
          </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;