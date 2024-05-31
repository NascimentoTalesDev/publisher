import { PropsWithChildren, Suspense } from "react";

const Layout = ({ children }: PropsWithChildren ) => {
    return (
        <div className="bg-white h-full w-full">
            <Suspense>
                {children}
            </Suspense>
        </div>
    );
}
 
export default Layout;