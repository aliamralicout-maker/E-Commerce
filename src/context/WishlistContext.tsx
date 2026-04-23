import { createContext, ReactNode, useContext, useState } from 'react';

export type WishlistContextType = {
    numOfWishlistItems: number;
    updateNumOfWishlistItems: (num: number) => void;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);

export default function WishlistProvider({ children }: { children: ReactNode }) {

    const [numOfWishlistItems, setNumOfWishlistItems] = useState(0);

    function updateNumOfWishlistItems(count: number) {
        setNumOfWishlistItems(count);
    }

    return (
        <WishlistContext.Provider
            value={{ numOfWishlistItems, updateNumOfWishlistItems }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error('useWishlist must be used within WishlistProvider');
    }

    return context;
}