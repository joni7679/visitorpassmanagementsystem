import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/auth/Register";
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
import EntryAndExist from "../pages/SecurityStaff/EntryAndExist";
import VisiterCheckinAndCheckoutTable from "../pages/SecurityStaff/VisiterCheckinAndCheckoutTable";
import VisitorDashboard from "../pages/Visitors/VisitorDashboard";
import CreateVisitRequested from "../pages/Visitors/CreateVisitRequested";
import Profiles from "../components/Profiles";
import RoleProtectedRoute from "./RoleProtectedRoute.jsx";
import VisitCardList from "../pages/Visitors/VisitCardList.jsx";

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
        path: 'dashboard/admin',
        element: (
            <RoleProtectedRoute allowRole="admin">
                <Dashboard />
            </RoleProtectedRoute>
        ),
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
                path: "myprofile",
                element: <Profiles />
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
                path: "security-staff",
                element: <h1>security staff list</h1>
            },
            {
                path: "reports",
                element: <h1>reportspage</h1>
            },
            {
                path: "setting",
                element: <h1>setting page</h1>
            }
        ]
    },
    {
        path: "dashboard/employee",
        element: (
            <RoleProtectedRoute allowRole="employee">
                <EmployesDashboard />,
            </RoleProtectedRoute>),
        children: [
            {
                index: true,
                element: <Employesshome />
            },
            {
                path: "visiter-Requested",
                element: <VisiterRequestedTable />
            },
            {
                path: "approved-visits",
                element: <ApprovedvisitsListTable />
            },
            {
                path: "inviter_visitor",
                element: <InvitedVisitor />
            },
            {
                path: "myprofile",
                element: <Profiles />
            },
        ]
    },
    {
        path: "dashboard/securitystaff",
        element: (
            <RoleProtectedRoute allowRole="security">
                <SecurityStaffDashboard />
            </RoleProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <EntryAndExist />
            },
            {
                path: "Entry-Logs",
                element: <VisiterCheckinAndCheckoutTable />
            },
            {
                path: "Alerts",
                element: <h1>wellcome alerts</h1>
            },
            {
                path: "myprofile",
                element: <Profiles />
            },
        ]
    },
    {
        path: "dashboard/visitor",
        element: (
            <RoleProtectedRoute allowRole="visitor">
                <VisitorDashboard />
            </RoleProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <h1>i am visitor</h1>
            },
            {
                path: "createvisitrequested",
                element: <CreateVisitRequested />
            },
            {
                path: "viewstatus",
                element:<VisitCardList/>
            },
            {
                path: "myprofile",
                element: <Profiles />
            },
        ]
    }
])