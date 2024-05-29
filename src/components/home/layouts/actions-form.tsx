"use client"

import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteLayout } from "@/app/home/layouts/actions";

const ConfirmModal = dynamic(()=> import("@/components/modals/ConfirmModal"), {
    ssr: false
})

interface ActionsLayoutProps {
    id: string;
}

const ActionsLayout = ({ id }: ActionsLayoutProps) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const onDelete = async () => {
        try {
            setIsLoading(true)
            await deleteLayout(id as string)
            toast.success("Layout excluido")
            router.refresh()
        } catch (error) {
            toast.error("Aconteceu um error inesperado");
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="flex items-center gap-x-2">
            <Link href={`/home/layouts/edit/${id}`}>
                <Button className="p-3">
                  <Pencil className="w-4 h-4 text-white"/>
                </Button>
              </Link>
            <ConfirmModal onConfirm={onDelete}>
                <Button  className="p-3">
                    <Trash className="w-4 h-4 text-red-500"/>
                </Button>
            </ConfirmModal>
        </div>
    );
}
 
export default ActionsLayout;