import { cn } from "@/components/lib/utils";

type SearchGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

export function SearchComponent ({ children, className }: SearchGenericProps ) {
    return(
        <section className={cn("w-full h-full", className)}>{children}</section>
    )
}

export function SearchContainer ({ children, className }: SearchGenericProps ) {
    return(
        <div className={cn("h-full w-full", className)}>{children}</div>
    )
}

export function SearchTitle ({ children, className }: SearchGenericProps ) {
    return(
        <h3 className={cn("mb-2", className)}>{children}</h3>
    )
}

export function SearchGrid ({ children, className }: SearchGenericProps ) {
    return(
        <div className={cn("grid grid-cols-3 gap-[20px] h-full w-full", className)}>{children}</div>
    )
}

export function SearchGridItem ({ children, className }: SearchGenericProps ) {
    return(
        <div className={cn("w-full h-[420px] rounded-[20px]", className)}>{children}</div>
    )
}

