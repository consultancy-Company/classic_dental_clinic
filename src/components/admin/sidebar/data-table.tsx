"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, Eye, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

// Sample appointment data
const data: Appointment[] = [
    {
        id: 1,
        status: "CONFIRMED",
        reason: "Routine Checkup",
        notes: "Patient requested a follow-up in 3 months.",
        appointmentDate: "2024-03-20 10:30:00",
        patientId: 101,
    },
    {
        id: 2,
        status: "PENDING",
        reason: "Tooth Extraction",
        notes: "Needs anesthesia consultation.",
        appointmentDate: "2024-03-21 14:00:00",
        patientId: 102,
    },
    {
        id: 3,
        status: "CANCELLED",
        reason: "Cleaning",
        notes: "Cancelled due to patient no-show.",
        appointmentDate: "2024-03-19 09:00:00",
        patientId: 103,
    },
    {
        id: 4,
        status: "COMPLETED",
        reason: "Braces Adjustment",
        notes: "Next appointment in 6 weeks.",
        appointmentDate: "2024-03-18 16:00:00",
        patientId: 104,
    },
    {
        id: 5,
        status: "CONFIRMED",
        reason: "Wisdom Tooth Removal",
        notes: "Prescribed painkillers post-op.",
        appointmentDate: "2024-03-22 11:00:00",
        patientId: 105,
    },
]

export type Appointment = {
    id: number
    status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED"
    reason: string
    notes: string
    appointmentDate: string
    patientId: number
}

export const columns: ColumnDef<Appointment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "patientId",
        header: "Patient ID",
        cell: ({ row }) => <div>{row.getValue("patientId")}</div>,
    },

    {
        accessorKey: "appointmentDate",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Appointment Date
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => (
            <div className="text-sm">{new Date(row.getValue("appointmentDate")).toLocaleString()}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;

            const statusColors: Record<string, string> = {
                PENDING: "bg-yellow-100 text-yellow-800 font-semibold",
                CONFIRMED: "bg-blue-100 text-blue-800 font-semibold",
                CANCELLED: "bg-red-100 text-red-800 font-semibold",
                COMPLETED: "bg-green-100 text-green-800 font-semibold",
            };

            return (
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[status]}`}>
                    {status}
                </span>
            );
        },
    },
    {
        accessorKey: "reason",
        header: "Reason",
        cell: ({ row }) => <div>{row.getValue("reason")}</div>,
    },
    {
        accessorKey: "notes",
        header: "Notes",
        cell: ({ row }) => <div className="truncate w-40">{row.getValue("notes")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        
        cell: ({ row }) => {
            const appointment = row.original

            return (
                <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline" className="text-green-600" onClick={() => console.log("Viewing", appointment.id)}>
                        <Eye className="w-4 h-4 mr-1" /> See
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-600" onClick={() => console.log("Editing", appointment.id)}>
                        <Edit className="w-4 h-4 mr-1" /> Update
                    </Button>
                    <Button size="sm" variant="outline"  className="text-red-600" onClick={() => console.log("Deleting", appointment.id)}>
                        <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </Button>
                </div>
            )
        },
    },
]

export function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <Card className="p-5">
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filter by reason..."
                    value={(table.getColumn("reason")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("reason")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Button size="lg" className="bg-green-600 hover:bg-green-600 font-semibold">
                    Add Appointment
                </Button>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>{row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                            ))}</TableRow>
                        )) : (
                            <TableRow><TableCell colSpan={columns.length} className="text-center">No results.</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}
