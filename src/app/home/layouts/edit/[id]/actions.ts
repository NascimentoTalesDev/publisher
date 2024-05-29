"use server"

import { prisma } from "@/services/database"
import { Layout } from "@/types/Layout"
import { NextResponse } from "next/server"

export async function updateLayout(values: Layout){
    
    try {
        const res = await prisma.layout.update({
            where: {
                id: values.id
            },
            data:{
                ...values
            }
        })  
        
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}




