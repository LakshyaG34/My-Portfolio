import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CustomDateTimePicker({
  value,
  onChange,
  placeholder = "Select date & time",
}) {
  const [open, setOpen] = useState(false);

  const [tempDate, setTempDate] = useState(value || new Date());
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);

  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  useEffect(() => {
    if (value) {
      const d = new Date(value);
      setTempDate(d);
      setHours(d.getHours());
      setMinutes(d.getMinutes());
    }
  }, [value]);

  const handleConfirm = () => {
    const finalDate = new Date(tempDate);
    finalDate.setHours(hours);
    finalDate.setMinutes(minutes);

    onChange(finalDate);
    setOpen(false);
  };

  const renderScrollList = (count, selected, setSelected, step = 1) => {
    return (
      <div className="h-40 overflow-y-auto snap-y snap-mandatory border rounded-lg w-20 text-center">
        {Array.from({ length: count }, (_, i) => i * step).map((val) => (
          <div
            key={val}
            onClick={() => setSelected(val)}
            className={`py-2 cursor-pointer snap-center ${
              selected === val
                ? "bg-yellow-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            {val.toString().padStart(2, "0")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 
          flex items-center justify-between text-left
          hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-yellow-100 transition-all"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <CalendarIcon size={16} className="text-gray-400" />
            <span className={value ? "text-gray-800" : "text-gray-400"}>
              {value
                ? format(new Date(value), "dd MMM yyyy, HH:mm")
                : placeholder}
            </span>
          </div>
        </button>
      </PopoverTrigger>

      {/* Popover */}
      <PopoverContent className="p-0 border rounded-xl shadow-lg w-auto">
        <div className="flex">
          {/* Calendar */}
          <Calendar
            mode="single"
            selected={tempDate}
            onSelect={(date) => date && setTempDate(date)}
            initialFocus
          />

          {/* Time Picker */}
          <div className="p-3 border-l bg-gray-50 flex flex-col items-center gap-3">
            <span className="text-sm text-gray-600">Time</span>

            <div className="flex items-center gap-2">
              {/* Hours */}
              {renderScrollList(24, hours, setHours)}

              <span className="text-lg font-semibold">:</span>

              {/* Minutes */}
              {renderScrollList(60, minutes, setMinutes, 5)}
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setOpen(false)}
                className="text-sm px-3 py-1 rounded-md text-gray-600 hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="text-sm px-3 py-1 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}