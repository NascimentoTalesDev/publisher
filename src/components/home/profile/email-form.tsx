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
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailFormProps {
  id: string | undefined;
  email: string | undefined;
}

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Hmm, something is missing! Please enter a name.",
  }),
});

const EmailForm = ({ email, id }: EmailFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email,
    },
  });

  const toggleEdit = () => setIsEditing((current) => !current);
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      toast.success("Nome atualizado");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Ocorreu um erro inesperado");
    }
  };

  return (
    <div className="w-full border p-2 bg-slate-200">
      <div className="font-medium flex items-center justify-between">
        Email
        <Button onClick={toggleEdit} variant={"default"}>
          {isEditing ? (
            <>Cancelar</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Editar
            </>
          )}
        </Button>
      </div>
      {!isEditing && <p className="text-sm">{email}</p>}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center mt-3 w-full gap-3"
          >
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
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
            <Button
              type={"submit"}
              variant={"default"}
              disabled={!isValid || isSubmitting}
            >
              Atualizar
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default EmailForm;
