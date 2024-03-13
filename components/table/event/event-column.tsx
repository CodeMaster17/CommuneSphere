"use client"
import { ColumnDef } from "@tanstack/react-table"
import { deleteEvent } from "@/actions/event.action"
import Link from "next/link"

// for actions button
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// sorting
import { ArrowUpDown, MoreHorizontal } from "lucide-react"



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
        accessorKey: "id",
        header: "ID",
    },
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
    },
    {
        accessorKey: "duration",
        header: "Duration",
    },
    {
        accessorKey: "actual_participants",
        header: "Actual Participants",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const event = row.original;

        // const handleDelete = async () => {
        //     try {
        //         await deleteEvent(event.id);
        //     } catch (error) {
        //         console.error("Error deleting event:", error);
        //     }
        // };

        // const handleViewDetails = async () => {
        //     try {
        //         const eventDetail = await viewEventDetails(event.id);
        //         console.log("event details rahe");
        //         console.log(eventDetail);
        //         console.log("event details aa gaie");
        //     } catch (error) {
        //         console.error("Error in viewing event:", error);
        //     }
        // };

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {/* <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem> */}
                        {/* <DropdownMenuSeparator /> */}
                        {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
                        <Link href={`/dashboard/events/${event.id}`}>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]