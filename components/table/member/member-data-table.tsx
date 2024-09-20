"use client"
import * as React from "react"

// to display table data
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,

    // pagination
    getPaginationRowModel,

    // sorting
    SortingState,
    getSortedRowModel,

    // filtering
    ColumnFiltersState,
    getFilteredRowModel,

} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronsUpDown } from "lucide-react"


// ########################################## Definitions #########################################################

interface MyData {
    id: string
}

interface DataTableProps<TData extends MyData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],

}


// main component starts here
export function DataTable<TData extends MyData, TValue>({
    columns,
    data,

}: DataTableProps<TData, TValue>) {

    // state management
    const [sorting, setSorting] = React.useState<SortingState>([]) // sorting
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    // for filter

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(), // pagination
        // sorting
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),

        // filtering
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            sorting,

            // filtering
            columnFilters,
        },

        // resetColumnFilters: (defaultState?: boolean) => void

    })


    // ################################################################### Component ##########################
    return (
        <>
            <div className="flex w-full  items-center justify-between py-4">
                {/* filter names */}
                <Input
                    placeholder="Search members.."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="w-48 placeholder:text-xs"
                />
                <div className="flex">




                    {/* TODO: clear filter */}
                    {/* <Button variant="outline" className="ml-4 h-8 w-[100px] rounded-lg text-xs font-light"  >
                        Clear Filters  <FilterX className="ml-2 size-4 shrink-0 opacity-50" />
                    </Button> */}


                    {/* for column visibilty */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-4 h-8 w-[100px] rounded-lg text-xs font-light">
                                Columns
                                <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) => column.getCanHide()
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="w-full rounded-md border">
                <Table className="w-full rounded-lg bg-white">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="pl-8"  >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="rounded-lg pl-8 ">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) =>

                            (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}

                                    // onClick={() => clickedIdDispach(row.original.id)}
                                    className="rounded-lg bg-white "

                                // onClick={() => console.log(row.original)}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="pl-8" >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                    {/* {console.log(row)} */}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </>
    )
}
