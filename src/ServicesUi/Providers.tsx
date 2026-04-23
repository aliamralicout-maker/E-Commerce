'use client';

import WishlistContext from '../context/WishlistContext';
import CartProvider from '../context/CartContext'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <WishlistContext>
            <CartProvider>
                {children}
            </CartProvider>
            </WishlistContext>
        </SessionProvider>
    )
}
