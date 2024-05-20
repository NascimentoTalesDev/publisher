"use client";

import {
  AuthCard,
  AuthComponent,
  AuthContainer,
  AuthItem,
  AuthLine,
  AuthSpan,
  AuthSpanButton,
  AuthTitle,
} from "./components";
import { useCallback, useState } from "react";
import GoogleAuth from "@/components/google-auth";
import FormLogin from "@/components/auth/form-login";
import FormRegister from "@/components/auth/form-register";

const Auth = () => {
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const onSubmit = async (values: object) => {
    console.log("values", values);
    try {
      // toast.success("Login com sucesso!")
    } catch (error) {
      // toast.error("An unexpected error occurred");
    }
  };


  return (
    <AuthComponent>
      <AuthContainer>
        <AuthCard>
          <AuthItem>
            <AuthTitle>
              {variant === "login" ? "Login " : "Registrar-se"}
            </AuthTitle>
          </AuthItem>

          <AuthItem className="space-y-3">
            {variant === "login" ? (
                <FormLogin onSubmit={onSubmit} />
            ):(
                <FormRegister onSubmit={onSubmit} />
            )}
          </AuthItem>

          <AuthItem className="flex items-center justify-center">
            <AuthLine />
            <AuthSpan className="px-2">ou</AuthSpan>
            <AuthLine />
          </AuthItem>

          <AuthItem className="text-center py-3">
            <GoogleAuth
              variant={variant}
              text={
                variant === "login"
                  ? "Login com google"
                  : "Registrar-se com google"
              }
            />
          </AuthItem>

          <AuthLine />

          <AuthItem className="flex items-center text-sm">
            <AuthSpan>
              {variant === "login"
                ? "Ainda não tem uma conta"
                : "Já tem uma conta"}
              ?
            </AuthSpan>
            <AuthSpanButton onClick={toggleVariant} className="ml-1">
              Clique aqui
            </AuthSpanButton>
          </AuthItem>
        </AuthCard>
      </AuthContainer>
    </AuthComponent>
  );
};

export default Auth;
