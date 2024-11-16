import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import Navbar from "@/app/_components/navbar";

interface ScannedData {
  produtos: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  valorTotalNumber: number;
  nomeLoja?: string;
  dataCompra?: string;
}

interface TableResultsProps {
  scannedData: ScannedData;
}

export default function TableResults({
  scannedData: { produtos, valorTotalNumber },
}: TableResultsProps) {
  return (
    <>
      <div className="mx-auto max-w-4xl p-2">
        <div className="rounded-md px-2 shadow-md">
          <h1 className="flex flex-col pb-2 text-center font-black">
            Nota Fiscal
          </h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="text-start">Qtd/KG</TableHead>
                <TableHead className="text-right">Preço/R$</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produtos.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-start">{item.quantity}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right font-bold">
                  R${valorTotalNumber}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
      <Navbar />
    </>
  );
}
