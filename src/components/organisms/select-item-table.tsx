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
import type { Product } from "@/lib/shared";
const data: Product[] = [
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
  {
    id: 1,
    name: "Pen",
    price: 20,
  },
  {
    id: 2,
    name: "Pencil",
    price: 10,
  },
];
export const columns: ColumnDef<Product>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "THB",
      }).format(amount);

      return <div>{formatted}</div>;
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
  React.useEffect(() => {
    table.setPageSize(data.length);
  }, [table]);
  return (
    <div className="flex flex-col w-full h-full">
      <h1
        style={{
          textAlign: "start",
          fontFamily: "Righteous",
          fontSize: "36px",
        }}
      >
        Item
      </h1>
      <div className="flex items-center pb-2 shrink-0">
        <Input
          placeholder="Search product..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-[#3C3C3C] rounded-[6px] py-[20px]"
        />
      </div>
      <Table>
        <TableHeader className="sticky top-0 bg-[#3C3C3C] z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="hover:bg-transparent border-none"
            >
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
                onClick={() => row.toggleSelected(!row.getIsSelected())}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center ">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
