import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard(){
    return(
        <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Pedidos (mes)
          </CardTitle>
          <Utensils className="w-4 h-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tighter">
            200
          </span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-400">+10%</span> em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
    )
}