import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { cn } from "./lib/utils";

interface CalendarComponentProps {
  className?: string;
}

const CalendarComponent = ({ className }: CalendarComponentProps ) => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className={cn("", className)}
      />
    )

}
 
export default CalendarComponent;