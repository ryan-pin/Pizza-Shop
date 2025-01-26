import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard(){
    return(
        <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">Receita total (mes)</CardTitle>
          <DollarSign className="w-4 h-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tighter">
            R$ 1000,00 
          </span>
          <p className="text-xs text-muted-foreground">
            <span className="text-emerald-400">+5%</span> em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
    )
}