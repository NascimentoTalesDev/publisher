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

interface TableLayoutFormProps {
  layouts: Layout[];
}

export function TableLayoutForm({ layouts }: TableLayoutFormProps) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
            <TableCell>{table.actualLayout === true ? <Check className="w-4 h-4 text-green-500"/> : <CircleX className="w-4 h-4 text-red-400"/> }</TableCell>
            <TableCell className="flex items-center justify-end gap-3">
              <Link href={`/home/layouts/edit/${table.id}`}>
                <Button className="p-3">
                  <Pencil className="w-4 h-4 text-green-500"/>
                </Button>
              </Link>
              <Button className="p-3">
                <Trash className="w-4 h-4 text-red-400"/>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
