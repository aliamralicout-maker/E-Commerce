
import { createContext, ReactNode, useContext, useState } from 'react';

export type CartContextType = {
    numOfCartItems: number;
    upDateNumOfCartItems: (num: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {

    const [numOfCartItems, setNumOfCartItems] = useState(0);

    function upDateNumOfCartItems(count: number) {
        setNumOfCartItems(count);
    }

    return (
        <CartContext.Provider value={{ numOfCartItems, upDateNumOfCartItems }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }

    return context;
}