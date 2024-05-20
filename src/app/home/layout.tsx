import { PropsWithChildren } from "react";
import HeaderHome from "./_components/header";
import AsideHome from "./_components/aside";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-one w-screen h-screen pt-[20px] pl-[20px] pr-[10px] pb-[10px]">
            <div className="flex bg-gradient h-full w-full rounded-[40px]">
                <AsideHome />
                <div className="flex flex-col grow pr-[10px] pb-[10px]">
                    <HeaderHome />
                    <div className="bg-white rounded-[40px] p-5 grow">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;