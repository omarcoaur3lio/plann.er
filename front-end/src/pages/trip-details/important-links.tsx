import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-zinc-100 font-medium block">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="text-zinc-400 text-xs block truncate transition-all hover:text-zinc-200"
            >
              https://www.airbnb.com/rooms/123451234512345123451234512
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-zinc-100 font-medium block">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="text-zinc-400 text-xs block truncate transition-all hover:text-zinc-200"
            >
              https://www.airbnb.com/rooms/123451234512345123451234512
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
