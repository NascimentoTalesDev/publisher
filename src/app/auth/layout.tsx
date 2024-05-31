import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <section className="h-screen w-screen bg-one">
            <main className="h-full w-full">
                {children}
            </main>
        </section>
    );
}
 
export default Layout;