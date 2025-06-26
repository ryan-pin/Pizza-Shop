import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

type OrderFiltersSchema = z.infer<typeof orderFilterSchema>;

export function OrderTableFilter() {

    const [seachParams, setSearchParams] = useSearchParams()

    const orderId = seachParams.get("orderId")
    const customerName = seachParams.get("customerName")
    const status = seachParams.get("status")

  const { register, handleSubmit, control, reset } = useForm<OrderFiltersSchema>({
    resolver: zodResolver(orderFilterSchema),
    defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
    }
  });

  function handleFilter({ customerName, orderId, status, }: OrderFiltersSchema) {
    setSearchParams(state => {
        if (orderId) {
            state.set("orderId", orderId);
        }
        else {
            state.delete("orderId");
        }
        if (customerName) {
            state.set("customerName", customerName);
        }
        else {
            state.delete("customerName");
        }
        if (status) {
            state.set("status", status);
        }
        else {
            state.delete("status");
        }

        state.set('page', '1');

        return state;
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete("orderId");
      state.delete("customerName");
      state.delete("status");
      state.set("page", "1");

      return state;
    });

    reset({
        orderId: "",
        customerName: "",
        status: "all",
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sn font-semibold">Filtros</span>
      <Input
        placeholder="ID do pedido"
        className="h-8 w-[320px]"
        {...register("orderId")}
      />
      <Input
        placeholder="Buscar por cliente"
        className="h-8 w-[320px]"
        {...register("customerName")}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            onValueChange={onChange}
            value={value}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button type="submit" variant="secondary" size="sm">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>

      <Button onClick={handleClearFilters} type="button" variant="outline" size="sm">
        <X className="h-4 w-4 mr-2" />
        Remover filtros
      </Button>
    </form>
  );
}
