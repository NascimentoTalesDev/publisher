"use server"

import { prisma } from "@/services/database"
import { Layout } from "@/types/Layout"
import { NextResponse } from "next/server"

export async function saveLayout(values: Layout){
    
    try {
        const res = await prisma.layout.create({
            data: {
                ...values
            }
        })  
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}

export async function updateActualLayout(id: string){
    
    try {
        const oldLayout = await prisma.layout.findFirst({
            where: {
                actualLayout: true
            },
        })

        if (oldLayout) {
            await prisma.layout.update({
                where: {
                    id: oldLayout.id
                },
                data:{
                    actualLayout: false
                }
            })
        }

        const res = await prisma.layout.update({
            where: {
                id
            },
            data:{
                actualLayout: true
            }
        })  
        
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}




