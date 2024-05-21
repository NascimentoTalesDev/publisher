import { PropsWithChildren } from "react";
import HeaderHome from "./_components/header";
import AsideHome from "./_components/aside";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-one w-screen h-screen pt-[10px] pl-[10px] pr-[5px] pb-[5px]">
            <div className="flex bg-gradient h-full w-full rounded-[40px]">
                <AsideHome />
                <div className="flex flex-col grow pr-[10px] pb-[10px]">
                    <HeaderHome />
                    <div className="bg-gray-300 rounded-[40px] p-5 grow overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;