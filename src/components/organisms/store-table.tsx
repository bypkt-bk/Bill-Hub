"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Bill[] = [
  {
    id: "m5gr84i9",
    customer: "Banyaphon",
    orderOn: new Date(2025, 2, 1).toISOString(),
    shipOn: new Date().toISOString(),
    amount: 316,
    status: "unpaid",
  },
  {
    id: "3u1reuv4",
    customer: "Banyaphon2",
    orderOn: new Date(2025, 2, 15).toISOString(),
    shipOn: new Date().toISOString(),
    amount: 242,
    status: "paid",
  },
  {
    id: "derv1ws0",
    customer: "Banyaphon3",
    orderOn: new Date().toISOString(),
    shipOn: new Date(2025, 3, 31).toISOString(),
    amount: 837,
    status: "unpaid",
  },
  {
    id: "5kma53ae",
    customer: "Banyaphon4",
    orderOn: new Date().toISOString(),
    shipOn: new Date().toISOString(),
    amount: 874,
    status: "paid",
  },
  {
    id: "bhqecj4p",
    customer: "Banyaphon5",
    orderOn: new Date().toISOString(),
    shipOn: new Date().toISOString(),
    amount: 721,
    status: "paid",
  },
  {
    id: "x8fr9pql",
    customer: "Banyaphon6",
    orderOn: new Date(2025, 4, 10).toISOString(),
    shipOn: new Date(2025, 4, 15).toISOString(),
    amount: 650,
    status: "unpaid",
  },
  {
    id: "y6dn2mbw",
    customer: "Banyaphon7",
    orderOn: new Date(2025, 5, 5).toISOString(),
    shipOn: new Date(2025, 5, 10).toISOString(),
    amount: 999,
    status: "paid",
  },
  {
    id: "o3lkjwz2",
    customer: "Banyaphon8",
    orderOn: new Date(2025, 6, 20).toISOString(),
    shipOn: new Date(2025, 6, 25).toISOString(),
    amount: 430,
    status: "unpaid",
  },
  {
    id: "q4ajsvv9",
    customer: "Banyaphon9",
    orderOn: new Date(2025, 7, 12).toISOString(),
    shipOn: new Date(2025, 7, 18).toISOString(),
    amount: 289,
    status: "paid",
  },
  {
    id: "f7vhpzmg",
    customer: "Banyaphon10",
    orderOn: new Date(2025, 8, 25).toISOString(),
    shipOn: new Date(2025, 8, 30).toISOString(),
    amount: 550,
    status: "unpaid",
  },
  {
    id: "t5xljwko",
    customer: "Banyaphon11",
    orderOn: new Date(2025, 9, 5).toISOString(),
    shipOn: new Date(2025, 9, 10).toISOString(),
    amount: 780,
    status: "paid",
  },
  {
    id: "b2qgtrvn",
    customer: "Banyaphon12",
    orderOn: new Date(2025, 10, 15).toISOString(),
    shipOn: new Date(2025, 10, 20).toISOString(),
    amount: 600,
    status: "unpaid",
  },
  {
    id: "z1wmceoy",
    customer: "Banyaphon13",
    orderOn: new Date(2025, 11, 8).toISOString(),
    shipOn: new Date(2025, 11, 13).toISOString(),
    amount: 920,
    status: "paid",
  },
  {
    id: "v4xdtmny",
    customer: "Banyaphon14",
    orderOn: new Date(2026, 0, 22).toISOString(),
    shipOn: new Date(2026, 0, 27).toISOString(),
    amount: 350,
    status: "unpaid",
  },
  {
    id: "h9zqbmwo",
    customer: "Banyaphon15",
    orderOn: new Date(2026, 1, 14).toISOString(),
    shipOn: new Date(2026, 1, 19).toISOString(),
    amount: 480,
    status: "paid",
  },
];

export type Bill = {
  id: string;
  customer: string;
  amount: number;
  orderOn: string;
  shipOn: string;
  status: "paid" | "unpaid";
};

export const columns: ColumnDef<Bill>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Customer
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("customer")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "orderOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order on
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>{format(row.getValue("orderOn"), "dd/MM/yyyy")}</div>
    ),
  },
  {
    accessorKey: "shipOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ship on
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>{format(row.getValue("shipOn"), "dd/MM/yyyy")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
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
      );
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search customer..."
          value={
            (table.getColumn("customer")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("customer")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-[#3C3C3C] rounded-[6px] py-[20px]"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto text-white bg-transparent border-[#3C3C3C] rounded-[6px]"
            >
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: boolean) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border border-[#3C3C3C] rounded-[6px]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="border-[#3C3C3C] hover:bg-neutral-600 data-[state=selected]:bg-neutral-600"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() =>
                    (window.location.href = `/store/bill-${row.original.id}`)
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center "
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
