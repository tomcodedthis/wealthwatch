import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

interface TableProps {
  title: string;
  headers: string[];
  rows: Array<string | number>[];
}

export function ViewTable({ title, headers, rows }: Readonly<TableProps>) {
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
    </Table>
  );
}
