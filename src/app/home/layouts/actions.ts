"use server"

import { prisma } from "@/services/database"
import { NextResponse } from "next/server"

export async function getLayouts(){
    
    try {
        const res = await prisma.layout.findMany({})
        return res
    } catch (error) {
        return NextResponse.json({msg: "Internal server error "})
    }
}




