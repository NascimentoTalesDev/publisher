import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "./components/lib/get-url";

export function middleware (request: NextRequest) {
    const token = request.cookies.get("authjs.session-token")
    const pathname = request.nextUrl.pathname

    // console.log({
    //     token: token?.value,
    //     pathname
    // });
    
    if(pathname === '/auth' && token){
        return NextResponse.redirect(new URL(getUrl("/home"))) 
    }

    if(pathname.includes('/home') && !token){
        return NextResponse.redirect(new URL(getUrl("/auth"))) 
    }
}

export const config = {
    matcher: ["/dashboard/:path*"]
}