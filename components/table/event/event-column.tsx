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



export type EventType = {
  id: string;
  name: string;
  date: string;
  target_year: 
          |"First"
          | "Second"
          | "Third"
          | "Fourth";
  duration: number | null;
  actual_participants: string;
};

export const columns: ColumnDef<EventType>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "target_year",
        header: "Target Year",
        cell: ({ row }) => {
            const event = row.original;
            
return (
                <span className="rounded-md bg-blueTab px-2 py-1 text-blueText">{event.target_year}</span>
            );
        },
        size: 250
    },
    {
        accessorKey: "actual_participants",
        header: "Actual Participants",
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