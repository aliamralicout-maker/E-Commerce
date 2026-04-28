// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";


// export async function getUsertoken() {
//     const cookie = await cookies();
//     const token = cookie.get('next-auth.session-token')?.value;
//     const encodedToken = await decode({ token, secret: process.env.NEXTAUTH_SECRET! })

//     return encodedToken?.accessToken;
// }


import { getServerSession } from "next-auth";
import { authOpthions } from "@/next_auth/authOptions";

export async function getUsertoken() {
    const session = await getServerSession(authOpthions);
    return session?.accessToken;
}