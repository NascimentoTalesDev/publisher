"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLayoutValues } from "@/hooks/useLayoutValues";
import { Layout } from "@/types/Layout";
import { saveLayout } from "@/app/home/layouts/new/actions";

interface SetLayoutFormProps {
  userId: string | undefined;
}

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Hmm, está faltando algo! Por favor selecione um nome.",
    }),
  color: z.string().optional(),
  secondColor: z.string().optional(),
  thirdColor: z.string().optional(),
  font: z.string().optional(),
  top: z.string().optional(),
  secondTop: z.string().optional(),
  textColorProduct: z.string().optional(),
  textColorOldPrice: z.string().optional(),
  textColorActualPrice: z.string().optional(),
  textColorLink: z.string().optional(),
});

const SetLayoutForm = ({ userId }: SetLayoutFormProps) => {
  const router = useRouter();
  const layoutValues = useLayoutValues();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "#D8DB00",
      top: "30",
      font: "Roboto",
      secondTop: "20",
      secondColor: "#FFFFFF",
      thirdColor: "#000",
      textColorProduct: "#000",
      textColorOldPrice: "#000",
      textColorActualPrice: "#FFFFFF",
      textColorLink: "#000",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("onSubmit", values);
      await saveLayout(values as Layout)
      toast.success("Layout salvo");
      router.refresh();
    } catch (error) {
      toast.error("Ocorreu um erro inesperado");
    }
  };

  const onChange = async (values: z.infer<typeof formSchema>) => {
    console.log("onChange", values);
    layoutValues.onChange(values as Layout);
  };

  useEffect(() => {
    if (form && layoutValues) {
      layoutValues.onChange(form?.formState.defaultValues as Layout);
    }
  }, []);

  const fonts = ["Courier", "monospace", "Franklin Gothic Medium", "Arial", "Roboto"];

  return (
    <div className="w-full border p-2 bg-slate-200">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-3"
        >
          <div className="w-full space-y-1">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">Nome:</FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="font"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">Fonte:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={"Selecione uma fonte"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fonts.length > 0 &&
                          fonts.map((font, idx) => (
                            <SelectItem key={idx} value={font}>
                              {font}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">Cor de fundo:</FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="secondColor"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">
                      Cor de fundo produto:
                    </FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="thirdColor"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">
                      Cor de fundo preço:
                    </FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textColorProduct"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">
                      Cor do nome do produto:
                    </FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textColorOldPrice"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">
                      Cor do nome do preço antigo:
                    </FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textColorActualPrice"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">
                      Cor do nome do preço atual:
                    </FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="textColorLink"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel className="w-[130px]">Cor do link:</FormLabel>
                    <FormControl>
                      <Input type="color" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="top"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                      <FormLabel className="w-[150px]">Topo produto:</FormLabel>
                      <FormControl>
                        <Input
                          type="range"
                          min="1"
                          max="100"
                          className="slider-range"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="top"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="w-[50px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="secondTop"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                      <FormLabel className="w-[150px]">Topo link:</FormLabel>
                      <FormControl>
                        <Input
                          type="range"
                          min="1"
                          max="100"
                          className="slider-range"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondTop"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <Input className="w-[50px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3">
            <Button
              onClick={form.handleSubmit(onChange)}
              type={"button"}
              variant={"default"}
              className="flex w-full"
            >
              Aplicar mudança
            </Button>
            <Button type={"submit"} variant={"default"} className="flex w-full">
              Salvar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SetLayoutForm;
