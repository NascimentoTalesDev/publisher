import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectFont() {
  const fonts = [
    "Courier New",
    "Courier",
    "monospace",
    "Franklin Gothic Medium",
    "Arial Narrow",
    "Arial",
    "sans-serif",
  ];

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione uma fonte" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fonts.length > 0 &&
            fonts.map((font, idx) => (
              <SelectItem  key={idx} value={font}>
                {font}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
