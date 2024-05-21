import { cn } from "@/components/lib/utils";

type DashboardGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

export function DashboardComponent ({ children, className }: DashboardGenericProps ) {
    return(
        <section className={cn("w-full h-full", className)}>{children}</section>
    )
}

export function DashboardContainer ({ children, className }: DashboardGenericProps ) {
    return(
        <div className={cn("h-full w-full", className)}>{children}</div>
    )
}

export function DashboardGrid ({ children, className }: DashboardGenericProps ) {
    return(
        <div className={cn("grid grid-cols-4 gap-[20px] w-full", className)}>{children}</div>
    )
}

export function DashboardGridItem ({ children, className }: DashboardGenericProps ) {
    return(
        <div className={cn("w-full h-full rounded-[20px]", className)}>{children}</div>
    )
}

export function DashboardItem ({ children, className }: DashboardGenericProps ) {
    return(
        <div className={cn("w-full h-[230px] rounded-[20px]", className)}>{children}</div>
    )
}

