import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageINdex: number) => Promise<void> | void;
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage);

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}{" "}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Pagina anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>
          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
