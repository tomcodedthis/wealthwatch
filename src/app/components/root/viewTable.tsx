import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

interface TableProps {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  footers: (string | number)[];
}

export function ViewTable({
  title,
  headers,
  rows,
  footers,
}: Readonly<TableProps>) {
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={`header-${header}`}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
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
