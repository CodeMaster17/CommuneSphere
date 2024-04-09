import { Home, UsersRound, CalendarCheck2, FolderGit2, LogOut, Handshake } from 'lucide-react';
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
        component: <CalendarCheck2 color='white' />,
        name: "Events",
        route: "/dashboard/events"
    },
    // {
    //     component: <FolderGit2 color='white' />,
    //     name: "Projects",
    //     route: "/dashboard/projects"
    // },/
    {
        component: <Handshake color='white' />,
        name: "Sponsors",
        route: "/dashboard/sponsors"
    },

]

export const sidebarBottom = [
    {
        component: <LogOut color='white' />,
        name: "Logout",
        route: "/dashboard/members"
    },
]