import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export function DestinationAndDateStep({closeGuestsInput, openGuestsInput, isGuestsInputOpen}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
    <div className="flex items-center gap-2 flex-1">
      <MapPin className="size-5 text-zinc-400" />
      <input
        type="text"
        placeholder="Para onde você vai?"
        className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
        disabled={isGuestsInputOpen}
      />
    </div>

    <div className="flex items-center gap-2">
      <Calendar className="size-5 text-zinc-400" />
      <input
        type="text"
        placeholder="Quando?"
        className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        disabled={isGuestsInputOpen}
      />
    </div>

    <div className="w-px h-6 bg-zinc-800" />

    {isGuestsInputOpen ? (
      <button
        onClick={closeGuestsInput}
        className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 transition hover:bg-zinc-700"
      >
        Alterar local/data
        <Settings2 className="size-5" />
      </button>
    ) : (
      <button
        onClick={openGuestsInput}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 transition hover:bg-lime-400"
      >
        Continuar
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    )}
  </div>
  )
}