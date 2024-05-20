"use client";

import InputContainer from "@/components/auth/input-container";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface FormLoginProps {
  onSubmit: () => void;
}

const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Hmm, algo está faltando! Por favor, insira seu email.",
  }),
  password: z.string().min(1, {
    message: "Hmm, algo está faltando! Por favor, insira sua senha.",
  }),
});

const FormLogin = ({ onSubmit }: FormLoginProps) => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputContainer type="email" label="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputContainer type="password" label="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mr-auto">
          <Button
            type="submit"
            className="text-white my-3 border"
            variant={"ghost"}
          >
            Entrar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormLogin;
