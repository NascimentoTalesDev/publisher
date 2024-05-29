"use client"

import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useState } from "react";

const GoogleLogout = () => {
    const [loggingOut, setLoggingOut] = useState(false)
    
    const logout = async() => {
        setLoggingOut(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error);
        }
        setLoggingOut(false)
    }

    return (
        <div onClick={logout} className="px-2 hover:bg-accent w-full text-left py-0 cursor-default" >
            <span>
                {loggingOut ? "Saindo...": "Sair"}
            </span>
        </div>
    );
}
 
export default GoogleLogout;