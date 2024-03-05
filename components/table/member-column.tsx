"use client"
import { ColumnDef } from "@tanstack/react-table"

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



export type UserType = {
    id: string,
    name: string | null,
    // email: String,
    // password: String,
    role: "ADMIN" | "USER",
    // roll_number: String | null,
    // phone: String | null,
    current_year: "First" | "Second" | "Third" | "Fourth" | null,
    // branch: "CSE" | "ECE" | "ME" | "CE" | "EE" | "IT" | "MCA" | "MBA" | null,
    year_of_joining: "2020" | "2021" | "2022" | "2023" | "2024" | "2025" | null,
    position: "Member" | "Lead" | "Vice_Lead" | "Tech_Lead" | "PR_Lead" | "CR_Lead" | "Executive" | "Creative_Lead" | "Design_Lead" | "Ar_Lead" | "Web_Lead" | "App_Lead" | "Vr_Lead",

};

export const columns: ColumnDef<UserType>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    // {
    //     accessorKey: "roll_number",
    //     header: "Roll Number",
    // },
    // {
    //     accessorKey: "phone",
    //     header: "Phone",
    // },
    {
        accessorKey: "current_year",
        header: "Current Year",
    },
    // {
    //     accessorKey: "branch",
    //     header: "Branch",
    // },
    {
        accessorKey: "year_of_joining",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Joinning Year
                    <ArrowUpDown className="ml-2 size-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "position",
        header: "Position",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="size-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]