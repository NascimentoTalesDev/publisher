import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-white min-h-screen w-screen">
            Site
            {children}
        </div>
    );
}
 
export default Layout;