import { authOpthions } from "@/next_auth/authOptions";
import NextAuth from "next-auth";


const authHandler = NextAuth(authOpthions)

export {authHandler as GET, authHandler as POST};