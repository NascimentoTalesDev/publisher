import EditLayoutForm from "@/components/home/layouts/edit/edit-layout-form";
import { LayoutComponent, LayoutContainer, LayoutGrid, LayoutGridItem } from "./components";
import LayoutItem from "@/components/home/layouts/layout-item";
import { Layout } from "@/types/Layout";

const Layouts = () => {  
    const layout: Layout = {
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
    };

    return (
        <LayoutComponent>
            <LayoutContainer>
                <LayoutGrid>
                    <LayoutGridItem className="col-span-3">
                        <EditLayoutForm layout={layout} />
                    </LayoutGridItem>
                    <LayoutGridItem className="col-span-1">
                        <LayoutItem />
                    </LayoutGridItem>
                </LayoutGrid>
            </LayoutContainer>
        </LayoutComponent>
    );
}
 
export default Layouts;