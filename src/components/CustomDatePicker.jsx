import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CustomDatePicker({
  value,
  onChange,
  placeholder = "Select date",
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 
          flex items-center justify-between text-left
          hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <CalendarIcon size={16} className="text-gray-400" />
            <span className={value ? "text-gray-800" : "text-gray-400"}>
              {value ? format(value, "dd MMM yyyy") : placeholder}
            </span>
          </div>
        </button>
      </PopoverTrigger>

      {/* Calendar */}
      <PopoverContent className="w-auto p-0 border rounded-xl shadow-lg">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}