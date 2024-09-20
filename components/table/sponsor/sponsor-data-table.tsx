"use client"
import * as React from "react"

// to display table data
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    ColumnDef,

    // filtering
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,

    // pagination
    getPaginationRowModel,
    getSortedRowModel,

    // sorting
    SortingState,
    useReactTable,
} from "@tanstack/react-table"



import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TargetYear } from "@/constants"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown, FilterX } from "lucide-react"

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
    const [openTYDropdown, setOpenTYDropdown] = React.useState(false) // to manage state of joinning year filter dropdwon
    const [valueTY, setValueTY] = React.useState("")

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

    // TODO : add clear filter functionality
    // functions
    const handleClearFilters = () => {
        setValueTY("")
    }

    // ################################################################### Component ##########################
    return (
        <div>
            <div className="flex w-full  items-center justify-between py-4">
                {/* filter names */}
                <Input
                    placeholder="Search Sponsors.."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="w-48 placeholder:text-xs"
                />
                {/* joinning year filter */}
                <div className="">
                    <Popover open={openTYDropdown} onOpenChange={setOpenTYDropdown}>
                        <PopoverTrigger asChild>
                            {/* <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openTYDropdown}
                            className="ml-4 h-8 px-3 rounded-lg text-xs font-light"
                        >
                            {!valueTY
                                ? "Select Year..."
                                : valueTY}
                            <Filter className="ml-2 size-4 shrink-0 opacity-50" />
                        </Button> */}
                        </PopoverTrigger>
                        <PopoverContent className="w-[180px] p-0">
                            <Command>

                                <CommandGroup>
                                    {TargetYear.map((item) => (
                                        <CommandItem
                                            key={item.value}
                                            value={item.value}
                                            onSelect={(currentValue) => {
                                                setValueTY(currentValue === valueTY ? "" : currentValue)
                                                table.getColumn("target_year")?.setFilterValue(currentValue)
                                                setOpenTYDropdown(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    valueTY === item.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {item.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>


                    {/* TODO: clear filter */}
                    <Button variant="outline" className="ml-4 h-8 px-3 rounded-lg text-xs font-light" onClick={() => handleClearFilters} >
                        Clear Filters  <FilterX className="ml-2 size-4 shrink-0 opacity-50" />
                    </Button>


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
                                        <TableHead key={header.id} className="pl-8">
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
                    <TableBody className="rounded-lg pl-8">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="rounded-lg bg-white"
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="pl-8">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
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
        </div>
    )
}
