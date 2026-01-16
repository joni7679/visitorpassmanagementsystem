import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/components/Dashboard";
import EmployeesTable from "../pages/admin/components/EmployeesTable";
import DashBoardHome from "../pages/admin/components/DashBoardHome";
import CreateStaff from "../pages/admin/components/CreateStaff";
import EmployesDashboard from "../pages/Employees/EmployesDashboard";
import Employesshome from "../pages/Employees/Employesshome";
import VisiterRequestedTable from "../pages/Employees/VisiterRequestedTable";
import ApprovedvisitsListTable from "../pages/Employees/ApprovedvisitsListTable";
import InvitedVisitor from "../pages/Employees/InvitedVisitor";
import SecurityStaffDashboard from "../pages/SecurityStaff/SecurityStaffDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]

    },
    {
        path: 'admin',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <DashBoardHome />
            },
            {
                path: "employees",
                element: <EmployeesTable />
            },
            {
                path: "addempandsecurity",
                element: <CreateStaff />
            },
            {
                path: "visiter",
                element: <h1>visiter list</h1>
            },
            {
                path: "security staff",
                element: <h1>security staff list</h1>
            },
            {
                path: "reports",
                element: <h1>reports     page</h1>
            },
            {
                path: "setting",
                element: <h1>setting page</h1>
            }
        ]
    },
    {
        path: "employess",
        element: <EmployesDashboard />,
        children: [
            {
                index: true,
                element: <Employesshome />
            },
            {
                path: "visiter Requested",
                element: <VisiterRequestedTable />
            },
            {
                path: "approved visits",
                element: <ApprovedvisitsListTable />
            },
            {
                path: "inviter_visitor",
                element: <InvitedVisitor />
            }
        ]
    },
    {
        path: "securitystaff",
        element: <SecurityStaffDashboard />,
        children: [
            {
                index: true,
                element: <h1>wellcome secut</h1>
            },
            {
                path: "Entry Logs",
                element: <h1>wellcome entry logs</h1>
            },
            {
               path:"Alerts",
                element: <h1>wellcome alerts</h1>
            },
        ]
    }
])