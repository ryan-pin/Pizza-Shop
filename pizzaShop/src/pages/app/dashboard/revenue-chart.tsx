import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { DateRange } from "react-day-picker";
import { Label } from "@radix-ui/react-label";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useMemo, useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,

} from "recharts";


export function RevenueChart() {

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const { data: dailyRevenueInpPeriod } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () => getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to,
    })
  })

  const chartData = useMemo(() => {
    return dailyRevenueInpPeriod?.map( chartItem => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100, //formatar o valor para reais
      }
    })
  }, [dailyRevenueInpPeriod])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DateRangePicker 
            date={dateRange}
            onDateChange={setDateRange}
          />
        </div>
      </CardHeader>
      <CardContent>
        { chartData && (
          <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData} style={{ fontSize: 12 }}>
            <XAxis tickLine={false} dataKey="date" />

            <YAxis
              stroke="#888"
              dataKey="revenue"
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type="linear" dataKey="receipt" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
