import { Home, UsersRound, FolderGit2, LogOut } from 'lucide-react';
export const sidebarTop = [
    {
        component: <Home color='white' />,
        name: "Home",
        route: "/dashboard"
    },
    {
        component: <UsersRound color='white' />,
        name: "Members",
        route: "/dashboard/members"
    },
    {
        component: <UsersRound color='white' />,
        name: "Events",
        route: "/dashboard/events"
    },
    {
        component: <FolderGit2 color='white' />,
        name: "Projects",
        route: "/dashboard/projects"
    },

]

export const sidebarBottom = [
    {
        component: <LogOut color='white' />,
        name: "Logout",
        route: "/dashboard/members"
    },
]