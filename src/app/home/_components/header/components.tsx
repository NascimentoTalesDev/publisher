import { cn } from "@/components/lib/utils";
import Link from "next/link";

type HeaderHomeGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

type HeaderHomeLineProps =  {
    className?: string;
}

type HeaderHomeLinkProps =  {
    children:  React.ReactNode;
    href: string;
    className?: string;
    active?: boolean;
}

export function HeaderHomeComponent ({ children, className }: HeaderHomeGenericProps ) {
    return(
        <section className={cn("w-full min-h-[60px] max-h-[60px]", className)}>{children}</section>
    )
}

export function HeaderHomeContainer ({ children, className }: HeaderHomeGenericProps ) {
    return(
        <div className={cn("h-full flex items-center justify-center", className)}>{children}</div>
    )
}

export function HeaderHomeItem ({ children, className }: HeaderHomeGenericProps ) {
    return(
        <div className={cn("", className)}>{children}</div>
    )
}

export function HeaderHomeNav ({ children, className }: HeaderHomeGenericProps ) {
    return(
        <nav className={cn("", className)}>{children}</nav>
    )
}

export function HeaderHomeItems ({ children, className }: HeaderHomeGenericProps ) {
    return(
        <ul className={cn(" flex items-center justify-center gap-[100px]", className)}>{children}</ul>
    )
}

export function HeaderHomeLink ({ children, className, href, active }: HeaderHomeLinkProps ) {
    return(
        <li>
            <Link className={cn(`text-white ${active ? "font-bold border-b-2" : "font-normal"}`, className)}  href={href}>
                {children}
            </Link>
        </li>
    )
}
