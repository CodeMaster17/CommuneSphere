import { Home, UsersRound, CalendarCheck2, FolderGit2, LogOut, Handshake } from 'lucide-react';
export const sidebarTop = [
    {
        component: <Home color='white' size={20} />,
        name: "Home",
        route: "/dashboard"
    },
    {
        component: <UsersRound color='white' size={20} />,
        name: "Members",
        route: "/dashboard/members"
    },
    {
        component: <CalendarCheck2 color='white' size={20} />,
        name: "Events",
        route: "/dashboard/events"
    },
    // {
    //     component: <FolderGit2 color='white' />,
    //     name: "Projects",
    //     route: "/dashboard/projects"
    // },/
    {
        component: <Handshake color='white' size={20} />,
        name: "Sponsors",
        route: "/dashboard/sponsors"
    },

]

export const sidebarBottom = [
    {
        component: <LogOut color='white' size={20} />,
        name: "Logout",
        route: "/dashboard/members"
    },
]