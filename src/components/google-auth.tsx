"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn } from "@/app/services/auth";

interface GoogleAuthProps {
    variant: string,
    text: string
}

const GoogleAuth = ({ variant, text }: GoogleAuthProps ) => {

    const login = async() => {
        await signIn("google", { redirect: true, redirectTo: "/home" })
    }

    return (
        <Button onClick={login} className="gap-2" variant={"outline"}>
            <Image src={"/images/google.webp"} width={24} height={24} alt="Google" />
            <span>
                {text}
            </span>
        </Button>
    );
}
 
export default GoogleAuth;