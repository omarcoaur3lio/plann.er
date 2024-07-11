import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
  setDestination: (destination: string) => void;
  eventStartAndEndDates: DateRange | undefined;
  setEventStartAndEndDates: (
    eventStartAndEndDates: DateRange | undefined
  ) => void;
}

export function DestinationAndDateStep({
  closeGuestsInput,
  openGuestsInput,
  isGuestsInputOpen,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const displayDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d 'de' LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d 'de' LLL"))
      : null;

  function handleOpenDatePicker() {
    setIsDatePickerOpen(true);
  }

  function handleCloseDatePicker() {
    setIsDatePickerOpen(false);
  }
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={handleOpenDatePicker}
        className="flex items-center gap-2 text-left w-[220px]"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button onClick={handleCloseDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDates}
              onSelect={setEventStartAndEndDates}
            />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
