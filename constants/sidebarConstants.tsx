import { Home, UsersRound, CalendarCheck2, FolderGit2, LogOut, Handshake, User } from 'lucide-react';

export const sidebarTop = [
    {
        component: <Home color='white' size={20} />,
        name: "Home",
        route: "/dashboard",
        id: "home",
    },
    {
        component: <UsersRound color='white' size={20} />,
        name: "Members",
        route: "/dashboard/members",
        id: "members",
    },
    {
        component: <CalendarCheck2 color='white' size={20} />,
        name: "Events",
        route: "/dashboard/events",
        id: "events",
    },
    {
        component: <FolderGit2 color='white' size={20} />,
        name: "Projects",
        route: "/dashboard/projects",
        id: "projects",
    },
    {
        component: <Handshake color='white' size={20} />,
        name: "Sponsors",
        route: "/dashboard/sponsors",
        id: "sponsors",
    },
    {
        component: <User color='white' size={20} />,
        name: "User",
        route: "/dashboard/profile",
        id: "profile",
    },

]

export const sidebarBottom = [
    {
        component: <LogOut color='white' size={20} />,
        name: "Logout",
        route: "/dashboard/members"
    },
]