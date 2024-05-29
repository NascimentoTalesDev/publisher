import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Layout } from "@/types/Layout";
import { Check, CircleX, Pencil, Trash } from "lucide-react"
import Link from "next/link"
import ActionsLayout from "./actions-form";

interface TableLayoutFormProps {
  layouts: Layout[];
}

export function TableLayoutForm({ layouts }: TableLayoutFormProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Layout atual</TableHead>
          <TableHead className="w-[100px]">Editar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {layouts.map((table) => (
          <TableRow key={table.id}>
            <TableCell>{table.name}</TableCell>
            <TableCell>{table.actualLayout === true ? <Check className="w-6 h-6 text-green-500"/> : <CircleX className="w-6 h-6 text-red-400"/> }</TableCell>
            <TableCell className="flex items-center justify-end gap-3">
              <ActionsLayout id={table.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
