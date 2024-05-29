import CalendarComponent from "@/components/calendar-component";
import { DashboardComponent, DashboardContainer, DashboardGrid, DashboardGridItem, DashboardItem } from "./components";
import TitleH2 from "../../_components/title-h2";
// import { auth } from "@/services/auth";

const Dashboard = async() => {
    // const session = await auth()
    return (
        <DashboardComponent>
            <DashboardContainer>
                <div className="mb-3">
                    {/* <TitleH2>Olá, {session?.user?.name}.</TitleH2> */}
                    <TitleH2>Olá, NOME.</TitleH2>
                </div>
                
                <DashboardGrid>
                    <DashboardGridItem className="col-span-3">
                        <DashboardItem className="bg-white mb-[20px]">
                            3
                        </DashboardItem>
                        
                        <DashboardItem className="grid grid-cols-3 gap-[20px]">
                            <DashboardItem className="col-span-2 bg-white mb-5">2</DashboardItem>
                            <DashboardItem className="col-span-1 bg-white mb-5">1</DashboardItem>
                        </DashboardItem>
                        
                    </DashboardGridItem>

                    <DashboardGridItem className="col-span-1 bg-white">
                        <CalendarComponent className="bg-transparent" />
                    </DashboardGridItem>
                </DashboardGrid>
            </DashboardContainer>
        </DashboardComponent>
    );
}
 
export default Dashboard;