"use client"

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";

interface GoogleAuthProps {
    variant: string,
    text: string
}

const GoogleAuth = ({ variant, text }: GoogleAuthProps ) => {
    const [loggingIn, setLoggingIn] = useState(false)
    
    const login = async() => {
        setLoggingIn(true)
        try {
            await signIn("google", { redirect: true, callbackUrl: "/home"})
        } catch (error) {
            console.log(error);
            
        }
        setLoggingIn(false)
    }

    return (
        <Button onClick={login} className="gap-2" variant={"secondary"}>
            <Image src={"/images/google.webp"} width={24} height={24} alt="Google" />
            <span>
                {loggingIn ? "Logando...": text}
            </span>
        </Button>
    );
}
 
export default GoogleAuth;