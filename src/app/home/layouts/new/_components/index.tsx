import SetLayoutForm from "@/components/home/layouts/set-layout-form";
import { LayoutComponent, LayoutContainer, LayoutGrid, LayoutGridItem } from "./components";
import LayoutItem from "@/components/home/layouts/layout-item";
import { auth } from "@/services/auth";

const Layout = async () => {    
    // const session = await auth()

    return (
        <LayoutComponent>
            <LayoutContainer>
                <LayoutGrid>
                    <LayoutGridItem className="col-span-3">
                        <SetLayoutForm />
                    </LayoutGridItem>
                    <LayoutGridItem className="col-span-1">
                        <LayoutItem />
                    </LayoutGridItem>
                </LayoutGrid>
            </LayoutContainer>
        </LayoutComponent>
    );
}
 
export default Layout;