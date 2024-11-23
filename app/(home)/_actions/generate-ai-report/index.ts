"use server";

import { db } from "@/app/_lib/prisma";

export const generateAiReport = async (month: string) => {
  //pegar as infos de transacoes do mes
  const transactions = await db.transaction.findMany({
    where: {
      date: {
        gte: new Date(`2024-${month}-01`),
        lt: new Date(`2024-${month}-31`),
      },
    },
  });
  //mandar as informacoes para o chatgpt

  transactions.map((transaction) => {
    const { id, amount, date, category } = transaction;
    return {
      id,
      amount,
      date,
      category,
    };
  });

  //pegar o relatorio gerado pelo chatgpt e retornar para o usuario
};
