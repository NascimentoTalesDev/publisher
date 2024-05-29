import { LayoutComponent, LayoutContainer, LayoutGrid, LayoutGridItem } from "./components";
import LayoutItem from "@/components/home/layouts/layout-item";
import ActualLayoutForm from "@/components/home/layouts/actual-layout";
import { TableLayoutForm } from "@/components/home/layouts/table-layout-form";
import { Layout } from "@/types/Layout";

interface LayoutsProps {
    layouts: Layout[];
}

const Layouts = ({ layouts }: LayoutsProps ) => {    

    return (
        <LayoutComponent>
            <LayoutContainer>
                <LayoutGrid>
                    <LayoutGridItem className="col-span-3 space-y-3">
                        <ActualLayoutForm layouts={layouts} />
                        <TableLayoutForm layouts={layouts} />
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