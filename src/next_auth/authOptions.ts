import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { jwtDecode } from 'jwt-decode'

interface Decoded {
    id: string,
}

export const authOpthions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Exclusive',
            credentials: {
                email: { label: 'user email', placeholder: 'enter your email', type: 'email' },
                password: { label: 'user password', placeholder: 'enter your password', type: 'password' },
            },
            async authorize(credentials, req) {
                try {
                    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: {
                            "Content-Type": 'application/json'
                        }
                    })

                    const data = await res.json();

                    if (!res.ok) {
                        throw new Error(data.message || 'invalid data');
                    }

                    // const decoded = JSON.parse(atob(data.token).split('.')[1]);  مش اسلم حل عشان بيبقي في كاركتر ممكن تضرب بسببها 
                    const decoded: Decoded = jwtDecode(data.token);

                    return {
                        id: decoded.id,
                        email: data.user.email,
                        name: data.user.name,
                        accessToken: data.token,
                    };

                } catch (error) {
                    console.log(error);
                    throw new Error((error as Error).message);

                }

                return null;
            },
        })
    ],

    pages: {
        signIn: '/login',
    },

    callbacks: {
        jwt({ token, user }) {

            console.log('jwt', { token, user })
            if (user) {
                token.accessToken = user.accessToken;
                token.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }
            }
            return token;
        },

        session({ token, session }) {
            console.log("tset session", { session, token });
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        }


        // بتشتغل ف تلت حلات 
        // 1. userSession       2. getServerSession     3. rout Handelar 
    }


}