"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layout } from "@/types/Layout";
import { useLayoutValues } from "@/hooks/useLayoutValues";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateActualLayout } from "@/app/home/layouts/new/actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ActualLayoutFormProps {
  layouts: Layout[];
}

const ActualLayoutForm = ({ layouts }: ActualLayoutFormProps) => {
  const [actualLayout, setActualLayout] = useState<string>("");
  const [isSavingActualLayout, setIsSavingActualLayout] = useState<boolean>(false);
  const layoutValues = useLayoutValues();
  const router = useRouter()

  const onSubmit = async (id: string) => {
    setIsSavingActualLayout(true)
    try {
      await updateActualLayout(id);
      toast.success("Layout atualizado");
      router.refresh();
    } catch (error) {
      toast.error("Ocorreu um erro inesperado");
    }
    setIsSavingActualLayout(false)
  };

  const onChange = async (id: string) => {
    setActualLayout(id);
    const values = layouts.find((layout) => layout.id === id);
    layoutValues.onChange(values as Layout);
  };

  useEffect(() => {
    const layout = layouts.find((layout) => layout.actualLayout === true);
    onChange(layout?.id as string);
  }, [layouts]);

  return (
    <div className="w-full flex items-center justify-between border p-2 bg-slate-200">
      <div className="w-full grid grid-cols-3 gap-3">
        <div className="col-span-2 flex items-center">
          <Label className="w-[130px]">Layout atual:</Label>
          <div className="flex w-full">
          <Select
            defaultValue={
              layouts.find((layout) => layout.actualLayout === true)
                ?.id as string
            }
            onValueChange={onChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {layouts.length > 0 &&
                  layouts.map((layout, idx) => (
                    <SelectItem value={layout.id} key={idx}>
                      {layout.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
        </div>
        <div className="col-span-1">
          <Button
            onClick={() => onSubmit(actualLayout)}
            variant={"default"}
            className="flex w-full"
          >
            {isSavingActualLayout ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActualLayoutForm;
