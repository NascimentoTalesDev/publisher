import { cn } from "@/components/lib/utils";
import Link from "next/link";

type AsideHomeGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

type AsideHomeLineProps =  {
    className?: string;
}

type AsideHomeLinkProps =  {
    children:  React.ReactNode;
    href: string;
    active: boolean;
    className?: string;
}

export function AsideHomeComponent ({ children, className }: AsideHomeGenericProps ) {
    return(
        <section className={cn("w-[100px] h-full", className)}>{children}</section>
    )
}

export function AsideHomeContainer ({ children, className }: AsideHomeGenericProps ) {
    return(
        <div className={cn("h-full pt-[20px] pb-[40px] w-full ", className)}>{children}</div>
    )
}

export function AsideHomeItem ({ children, className }: AsideHomeGenericProps ) {
    return(
        <div className={cn("h-full ", className)}>{children}</div>
    )
}

export function AsideHomeNav ({ children, className }: AsideHomeGenericProps ) {
    return(
        <nav className={cn("h-full flex flex-col ", className)}>{children}</nav>
    )
}

export function AsideHomeItems ({ children, className }: AsideHomeGenericProps ) {
    return(
        <ul className={cn("flex flex-col items-center justify-center text-sm gap-3", className)}>{children}</ul>
    )
}

export function AsideHomeLogo ({ children, className }: AsideHomeGenericProps ) {
    return(
        <div className={cn("flex items-center justify-center", className)}>{children}</div>
    )
}

export function AsideHomeUserContainer ({ children, className }: AsideHomeGenericProps ) {
    return(
        <div className={cn("flex justify-center overflow-hidden items-end h-full", className)}>{children}</div>
    )
}

export function AsideHomeUser ({ children, className }: AsideHomeGenericProps ) {
    return(
        <div className={cn("w-[50px] h-[50px] overflow-hidden flex items-center justify-center", className)}>{children}</div>
    )
}

export function AsideHomeLink ({ children, className, href, active }: AsideHomeLinkProps ) {
    return(
        <li>
            <Link className={cn(`flex flex-col justify-center items-center ${active ? "font-bold text-white border-b-2" : "font-normal text-gray-400"}`, className)}  href={href}>
                {children}
            </Link>
        </li>
    )
}
