import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  footers: (string | number)[];
}

export function ViewTable({ headers, rows, footers }: Readonly<TableProps>) {
  return (
    <Table className="flex h-full text-xs md:text-sm">
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={`header-${header}`}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="h-full w-full">
        {rows.map((row) => (
          <TableRow key={`row-${row[0]}`}>
            {row.map((cell, index) => (
              <TableCell key={`cell-${row[0]}-${cell}-${index}`}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          {footers.map((footer) => (
            <TableCell key={`footer-${footer}`}>{footer}</TableCell>
          ))}
        </TableRow>
      </TableFooter>
    </Table>
  );
}
