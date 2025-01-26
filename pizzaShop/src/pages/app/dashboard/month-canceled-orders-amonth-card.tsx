import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCancledOrdersAmountCard(){
    return(
        <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Cancelamentos (mes)
          </CardTitle>
          <DollarSign className="w-4 h-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tighter">
            15
          </span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-400">-10%</span> em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
    )
}