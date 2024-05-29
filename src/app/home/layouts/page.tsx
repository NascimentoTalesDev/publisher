import { Button } from "@/components/ui/button";
import TitleH2 from "../_components/title-h2";
import Link from "next/link";
import Layouts from "./_components";
import { getLayouts } from "./actions";
import { Layout } from "@/types/Layout";

const LayoutsPage = async() => {
    // const layouts = await getLayouts()
    const layouts: Layout[] = [
        {
            "id": "66565876755cdc423501a2ad",
            "name": "Layout 1",
            "color": "#D8DB00",
            "secondColor": "#FFFFFF",
            "thirdColor": "#000",
            "font": "Roboto",
            "top": "30",
            "secondTop": "20",
            "textColorProduct": "#000",
            "textColorOldPrice": "#000",
            "textColorActualPrice": "#FFFFFF",
            "textColorLink": "#000",
            "userId": "6656571b46b449f1f5f5dc44",
            "actualLayout": false
        },
        {
            "id": "665658f0755cdc423501a2b2",
            "name": "Layout 2",
            "color": "#db0000",
            "secondColor": "#FFFFFF",
            "thirdColor": "#000",
            "font": "Roboto",
            "top": "30",
            "secondTop": "20",
            "textColorProduct": "#000",
            "textColorOldPrice": "#000",
            "textColorActualPrice": "#FFFFFF",
            "textColorLink": "#000",
            "userId": "6656571b46b449f1f5f5dc44",
            "actualLayout": false
        },
        {
            "id": "665686ce7f19c752d66641e9",
            "name": "Layout 3",
            "color": "#00db12",
            "secondColor": "#FFFFFF",
            "thirdColor": "#000",
            "font": "monospace",
            "top": "30",
            "secondTop": "20",
            "textColorProduct": "#000",
            "textColorOldPrice": "#000",
            "textColorActualPrice": "#FFFFFF",
            "textColorLink": "#000",
            "userId": "6656571b46b449f1f5f5dc44",
            "actualLayout": true
        },
    ]
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <TitleH2>Layouts</TitleH2>
                <Link href={"/home/layouts/new"}>
                    <Button>Criar novo layout</Button>
                </Link>
            </div>  
            <div className="relative">
                <Layouts layouts={layouts}/>
            </div>
        </>
    );
}
 
export default LayoutsPage;