"use client"

import { Undo } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Back = () => {
    const router = useRouter()

    return (
        <Button variant={"ghost"} className="border-none" onClick={() => router.back()} >
            <Undo className="mr-2 text-neutral-500" />
            Voltar
        </Button>
    );
}
 
export default Back;