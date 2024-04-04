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
import { cn } from "@/lib/utils"
import { FilterX, Check, Filter, ChevronsUpDown } from "lucide-react"
import { Role, Year } from "@/constants"

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
    const [openYOJDropdown, setOpenYOJDropdown] = React.useState(false) // to manage state of joinning year filter dropdwon
    const [openRoleDropdown, setOpenRoleDropdown] = React.useState(false) // to manage state of role filter dropdwon
    const [valueYOJ, setValueYOJ] = React.useState("")
    const [valueRole, setValueRole] = React.useState("")

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
        setValueRole("")
        setValueYOJ("")
    }


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


                    {/* role filter */}
                    <Popover open={openRoleDropdown} onOpenChange={setOpenRoleDropdown}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openRoleDropdown}
                                className="ml-4 h-8 w-[100px] rounded-lg text-xs font-light"
                            >
                                {!valueRole
                                    ? "Filter role..."
                                    : valueRole}
                                <Filter color="#FFFFFF" className=" size-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[180px] p-0">
                            <Command>
                                <CommandGroup>
                                    {Role.map((item) => (
                                        <CommandItem
                                            key={item.value}
                                            value={item.value}
                                            onSelect={(currentValue) => {
                                                setValueRole(currentValue === valueRole ? "" : currentValue)
                                                table.getColumn("role")?.setFilterValue(currentValue)
                                                setOpenRoleDropdown(false)
                                            }}

                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    valueRole === item.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {item.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    {/* joinning year filter */}
                    <Popover open={openYOJDropdown} onOpenChange={setOpenYOJDropdown}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openYOJDropdown}
                                className="ml-4 h-8 w-[100px] rounded-lg text-xs font-light"
                            >
                                {!valueYOJ
                                    ? "Select Year..."
                                    : valueYOJ}
                                <Filter className=" size-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[180px] p-0">
                            <Command>

                                <CommandGroup>
                                    {Year.map((item) => (
                                        <CommandItem
                                            key={item.value}
                                            value={item.value}
                                            onSelect={(currentValue) => {
                                                setValueYOJ(currentValue === valueYOJ ? "" : currentValue)
                                                table.getColumn("year_of_joining")?.setFilterValue(currentValue)
                                                setOpenYOJDropdown(false)
                                            }}

                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    valueYOJ === item.value ? "opacity-100" : "opacity-0"
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
                    <Button variant="outline" className="ml-4 h-8 w-[100px] rounded-lg text-xs font-light" onClick={() => handleClearFilters} >
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
