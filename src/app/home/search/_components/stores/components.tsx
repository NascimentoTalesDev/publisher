import { cn } from "@/components/lib/utils";

type StoresGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

export function StoresComponent ({ children, className }: StoresGenericProps ) {
    return(
        <section className={cn("w-full h-full overflow-hidden mb-5", className)}>{children}</section>
    )
}

export function StoresContainer ({ children, className }: StoresGenericProps ) {
    return(
        <div className={cn("h-full w-full overflow-hidden", className)}>{children}</div>
    )
}

