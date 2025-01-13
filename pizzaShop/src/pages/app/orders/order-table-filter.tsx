import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function OrderTableFilter() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sn font-semibold">Filtros</span>
            <Input placeholder="ID do pedido" className="h-8 w-[320px]"/>
            <Input placeholder="Buscar por cliente" className="h-8 w-[320px]"/>
            <Select defaultValue="todos">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem  value="todos">Todos</SelectItem>
                    <SelectItem  value="pendente">Pendente</SelectItem>
                    <SelectItem  value="cancelado">Cancelado</SelectItem>
                    <SelectItem  value="processando">Em preparo</SelectItem>
                    <SelectItem  value="entregando">Em entrega</SelectItem>
                    <SelectItem  value="entregue">Entregue</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit" variant="secondary" size="sm">
                <Search className="h-4 w-4 mr-2"/>
                Filtrar resultados
            </Button>

            <Button type="button" variant="outline" size="sm">
                <X className="h-4 w-4 mr-2"/>
                Remover filtros
            </Button>
        </form>
    )
}