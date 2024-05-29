import { cn } from "@/components/lib/utils";

type AuthGenericProps =  {
    children:  React.ReactNode;
    className?: string;
}

type AuthLineProps =  {
    className?: string;
}

type AuthSpanButtonProps =  {
    children:  React.ReactNode;
    className?: string;
    onClick: () => void;
}

export function AuthComponent ({ children, className }: AuthGenericProps ) {
    return(
        <section className={cn("w-screen h-screen", className)}>{children}</section>
    )
}

export function AuthContainer ({ children, className }: AuthGenericProps ) {
    return(
        <div className={cn("w-full h-full flex items-center justify-center", className)}>{children}</div>
    )
}

export function AuthCard ({ children, className }: AuthGenericProps ) {
    return(
        <div className={cn("w-full max-w-[350px] py-5 px-10 backdrop-blur-3xl bg-black/20 shadow-card rounded", className)}>{children}</div>
    )
}

export function AuthItem ({ children, className }: AuthGenericProps ) {
    return(
        <div className={cn("w-full", className)}>{children}</div>
    )
}

export function AuthTitle ({ children, className }: AuthGenericProps ) {
    return(
        <h1 className={cn("text-3xl py-3 text-center font-bold text-white", className)}>{children}</h1>
    )
}

export function AuthSpan ({ children, className }: AuthGenericProps ) {
    return(
        <span className={cn("text-white", className)}>{children}</span>
    )
}

export function AuthSpanButton ({ children, className, onClick }: AuthSpanButtonProps ) {
    return(
        <span onClick={onClick} className={cn("text-primary transition-all hover:underline cursor-pointer", className)}>{children}</span>
    )
}

export function AuthLine ({ className }: AuthLineProps ) {
    return(
        <hr className={cn("bg-white w-full my-3", className)} />
    )
}