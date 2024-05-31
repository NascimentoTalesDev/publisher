"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Loader2, X } from "lucide-react";
import { search } from "@/app/home/search/_components/search/actions";
import { Layout } from "@/types/Layout";

interface LinksFormProps {
  store: string;
  layout: Layout;
}

const formSchema = z.object({
  link: z.string().min(1, {
    message: "Hmm, está faltando algo! Por favor selecione um nome.",
  }),
});

const LinksForm = ({ store, layout }: LinksFormProps ) => {
  const [allLinks, setAllLinks] = useState<string[]>([]);
  const [actualStore, setActualStore] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [readyLink, setReadyLink] = useState(0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async () => {
    setIsSearching(true)
    try {
      for (let idx = 0; idx < allLinks.length; idx++) {
        await search(allLinks[idx], layout)
        toast.success(`Imagem do link ${idx + 1} finalizada`);
        setReadyLink(readyLink => readyLink + 1)
      }
      setAllLinks([])
    } catch (error) {
      toast.error("Ocorreu um erro inesperado");
    }
    setIsSearching(false)
    setReadyLink(0)      
  };
  
  const onAdd = async (value: z.infer<typeof formSchema>) => {
    if(allLinks.length === 0) setActualStore(store)
    if(store !== actualStore && allLinks.length > 0) return toast.error("Escolha uma loja por vez");
    setAllLinks(prevLinks => [...prevLinks, value.link]);
    form.reset()
  };

  const removeLink = async (link: string) => {
    setAllLinks(allLinks.filter(existingLink => existingLink !== link));
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onAdd)}
          className="flex flex-col w-full gap-2"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="w-full">
              <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            </div>
            <Button disabled={isSubmitting || !isValid} type="submit">Adicionar</Button>
          </div>
        </form>
      </Form>
      <div className="py-3">
        {isSearching ? (
          <>
            Links finalizados: {readyLink} / {allLinks.length}
          </>
        ) : (
          <>
            Links adicionados: {allLinks.length}
          </>
        )}
      </div>
      <div className="flex relative flex-col rounded-[6px] h-[300px] bg-white p-2 overflow-hidden">
        <div className="flex pb-16 flex-col overflow-y-auto overflow-x-hidden space-y-1">
          {allLinks.map((link, idx) => (
            <Badge key={idx} className="py-1 relative flex items-center justify-between" >
              <p className="break-words">{link}</p>
              <X onClick={()=> removeLink(link)} className="absolute right-0 rounded-full top-0 cursor-pointer bg-red-500"/>
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Button disabled={isSearching} onClick={onSubmit} className="w-full">{isSearching ? <Loader2 className="animate-spin" /> : "Buscar"}</Button>
        </div>
      </div>
    </div>
  );
};

export default LinksForm;
