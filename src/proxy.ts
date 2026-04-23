import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRouts = ['/cart', '/checkout', '/allorders', '/profile'];
const authRoutes = ['/login', '/register'];

export async function proxy(request: NextRequest) {

    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET, secureCookie: process.env.NODE_ENV === 'production' })

    const { pathname } = request.nextUrl;

    if (!token && protectedRouts.some((rout) => pathname.startsWith(rout))) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
    if (token && authRoutes.some((rout) => pathname.startsWith(rout))) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    console.log(token);

    return NextResponse.next();
}
export const config = {
    matcher: [
        '/cart/:path*',
        '/profile/:path*',
        '/login',
        '/register',
    ]
}