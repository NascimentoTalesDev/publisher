import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            Site
            {children}
        </>
    );
}
 
export default Layout;