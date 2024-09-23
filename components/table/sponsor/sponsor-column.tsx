"use client"
import { ColumnDef } from "@tanstack/react-table"

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
import { deleteEvent } from "@/actions/event.action";



export type SponsorType = {
    id: string;
    image: string;
    name: string;
    events: string[];
    amount: string;

};

export const columns: ColumnDef<SponsorType>[] = [
    {
        accessorKey: "image",
        header: "Image",
        cell: () => {

            return (
                <span className="rounded-md bg-gray-300 py-1.5 px-3.5 "></span>
            );
        },
        size: 250
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "events",
        header: "Events",
        cell: ({ row }) => {
            const sponsor = row.original;

            return (
                <span className="flex flex-wrap gap-1">
                    {sponsor.events.map((event, index) => (
                        <span className="rounded-md bg-greyTab px-2 py-1" key={index}>{event}</span>
                    ))}
                </span>
            );
        },
        size: 250
    },
    {
        accessorKey: "amount",
        header: "Amount",
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

            }
            const deleteButttonHandler = async (id: string) => {

                await deleteEvent(id);
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
                                        This action cannot be undone. This will permanently delete the event and remove your data from our servers.
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
