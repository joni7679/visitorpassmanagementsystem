import { GitPullRequestCreate, LayoutDashboardIcon, StarOffIcon } from "lucide-react";

export const visitorData = [
    {
        icon: LayoutDashboardIcon,
        label:"Dashboard",
        path:"/dashboard/visitor"
    },
    {
        icon:GitPullRequestCreate,
        label:"Create visit Requested",
        path:"createvisitrequested"
    },
    {
        icon:StarOffIcon,
        label:"my-requested",
        path:"viewstatus"
    }
]