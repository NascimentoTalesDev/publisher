"use server"
import searchMyStore from "@/bots/searchMyStore"
import print from "@/bots/print"
import { Layout } from "@/types/Layout"

export async function search(link: string, layout: Layout){
    let product = await searchMyStore(link, layout)
    console.log("PRODUCT search", product);
    
    await print(product)
    return "ok"
}