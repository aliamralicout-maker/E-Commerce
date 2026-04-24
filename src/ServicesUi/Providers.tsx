'use client';
import CartProvider from '../context/CartContext'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import WishlistProvider from '../context/WishlistContext';

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>

            <WishlistProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </WishlistProvider>

        </SessionProvider>
    )
}
