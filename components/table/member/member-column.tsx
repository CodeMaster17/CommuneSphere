"use client"
import { ColumnDef } from "@tanstack/react-table"

// for actions button
import { Button } from "@/components/ui/button"
import { Trash2, Eye, Pencil } from 'lucide-react';
import { useDispatch } from "react-redux";
import { setId } from "@/actions/redux/slice";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteUser } from "@/actions/user.action";



export type UserType = {
    id: string,
    sno: number, // serial number
    name: string | null,
    role: "ADMIN" | "USER",
    current_year: "First" | "Second" | "Third" | "Fourth" | null,
    position: "Member" | "Lead" | "Vice_Lead" | "Tech_Lead" | "PR_Lead" | "CR_Lead" | "Executive" | "Creative_Lead" | "Design_Lead" | "Ar_Lead" | "Web_Lead" | "App_Lead" | "Vr_Lead",

};


export const columns: ColumnDef<UserType>[] = [
    // {
    //     id: "sno",
    //     header: "S.No.",
    //     cell: ({ row }) => {
    //         return <span>{row.index + 1}</span>
    //     },
    //     size: 50
    // },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        // accessorKey: "role",
        id: "role",
        header: "Role",
        cell: ({ row }) => {
            const user = row.original;
            
return (
                user.role === 'ADMIN' ? <span className="rounded-md bg-green-500 px-2 py-1 text-white">ADMIN</span> : <span className="rounded-md bg-blue-500 px-2 py-1 text-white">USER</span>
            );
        },
        size: 250
    },
    {
        accessorKey: "current_year",
        header: "Current Year",
        size: 100
    },


    {
        accessorKey: "position",
        header: "Position",
        size: 200
    },
    {
        header: "Actions",
        id: "actions",
        size: 100,
        cell: ({ row }) => {
            // const payment = row.original
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const dispatch = useDispatch()
            const clickedIdDispach = (id: string) => {
                dispatch(setId(id))
                console.log("Clicked id: ", id)
            }
            const deleteButttonHandler = async (id: string) => {
                console.log("Delete button clicked with id: ", id)
                await deleteUser(id);
            }
            
return (
                <>
                    <span className="flex">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost" className="m-0 size-8 p-0"><Trash2 className="size-4" color="#FF204E" /></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => deleteButttonHandler(row.original.id)} className="bg-errorRed text-white hover:border-2 hover:border-errorRed hover:bg-white hover:text-errorRed "  >Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <Button variant="ghost" onClick={() => clickedIdDispach(row.original.id)} className="m-0 size-8 p-0"><Eye className="size-4" /></Button>
                        <Button variant="ghost" className="m-0 size-8 p-0"><Pencil className="size-4" /></Button>
                    </span>

                </>
            )
        },
    },
]