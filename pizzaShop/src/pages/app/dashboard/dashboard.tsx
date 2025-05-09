import { Helmet } from "react-helmet-async"
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCancledOrdersAmountCard } from "./month-canceled-orders-amonth-card";
import { RevenueChart } from "./revenue-chart";
import { PopularProductsChart } from "./popular-products-chart";

export function Dashboard() {
  return (
    <>
    <Helmet title="Dashboard" />
    <div className="flex  flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
    
    <div className="grid grid-cols-4 gap-4">
      <MonthRevenueCard />
      <MonthOrdersAmountCard />
      <DayOrdersAmountCard />
      <MonthCancledOrdersAmountCard />
    </div>

    <div className="grid grid-cols-9 gap-4">
      <RevenueChart />   
      <PopularProductsChart />
    </div>
    </div>
    </>
  );
}