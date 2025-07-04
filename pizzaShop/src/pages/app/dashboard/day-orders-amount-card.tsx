import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";


export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryFn: getDayOrdersAmount,
    queryKey: ["metrics", "day-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tighter">{dayOrdersAmount.amount.toLocaleString("pt-BR")}</span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-400">+{dayOrdersAmount.diffFromYesterday}%</span> em relação a ontem
                </>
              ) : (
                <>
                  <span className="text-rose-400">{dayOrdersAmount.diffFromYesterday}%</span> em relação a ontem
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
