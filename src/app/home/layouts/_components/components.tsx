import { cn } from "@/components/lib/utils";

type LayoutGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

export function LayoutComponent ({ children, className }: LayoutGenericProps ) {
    return(
        <section className={cn("w-full h-full", className)}>{children}</section>
    )
}

export function LayoutContainer ({ children, className }: LayoutGenericProps ) {
    return(
        <div className={cn("h-full w-full", className)}>{children}</div>
    )
}

export function LayoutGrid ({ children, className }: LayoutGenericProps ) {
    return(
        <div className={cn("grid grid-cols-5 gap-[20px] h-full w-full", className)}>{children}</div>
    )
}

export function LayoutGridItem ({ children, className }: LayoutGenericProps ) {
    return(
        <div className={cn("w-full h-[420px] rounded-[20px]", className)}>{children}</div>
    )
}

export function LayoutItemFlex ({ children, className }: LayoutGenericProps ) {
    return(
        <div className={cn("flex items-center gap-1", className)}>{children}</div>
    )
}

