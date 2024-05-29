"use server"

import { prisma } from "@/services/database"
import { NextResponse } from "next/server"

export async function getAllLayouts(){
    
    try {
        const res = await prisma.layout.findMany({})
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}

export async function deleteLayout(id: string){
    
    try {
        const res = await prisma.layout.delete({
            where: {
                id
            }
        })
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}




