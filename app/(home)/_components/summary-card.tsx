import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardHeader, CardContent } from "@/app/_components/ui/card";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
}
const SummaryCard = ({
  icon,
  title,
  amount,
  size = "small",
}: SummaryCardProps) => {
  const isSmall = size === "small";
  const isLarge = size === "large";
  const titleClass = isSmall
    ? "text-muted-foreground"
    : "text-white opacity-70";
  const contentClass = isSmall ? "text-2xl" : "text-4xl";
  const cardClass = isLarge ? "bg-white bg-opacity-5" : "";

  const formattedAmount = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return (
    <Card className={cardClass}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p className={titleClass}>{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`font-bold ${contentClass}`}>{formattedAmount}</p>
        {isLarge && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
