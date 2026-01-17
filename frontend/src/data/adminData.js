import { BrickWallShield, LayoutDashboard, User, User2Icon, UserCog } from "lucide-react";

export const adminData = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        path: "/dashboard/admin",
    },
    {
        icon:User2Icon,
        label:"Add Employee/Security",
        path:"addempandsecurity"
    },
    {
        icon: User,
        label: "employees",
        path: "employees",
    },
    {
        icon: UserCog,
        label: "visiter",
        path: "visiter",

    },
    {
        icon: BrickWallShield,
        label: "security staff",
        path: "security staff",
    },
    {
        icon: LayoutDashboard,
        label: "reports",
        path: "reports",

    }, {
        icon: LayoutDashboard,
        label: "setting",
        path: "setting",

    },
]