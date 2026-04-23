'use client';

import { AddToCart } from '@/actions/cart.action';
import { useCart } from '@/context/CartContext';

import { useState } from 'react';
import { FaCheckCircle, FaSpinner, FaTimesCircle } from 'react-icons/fa'
import { IconType } from 'react-icons/lib';
import { toast } from 'sonner';












type Props = {
    className?: string;
    _id?: string;
    text?: string;
    Icon?: IconType;
}

export default function AddToCartButton({ className, Icon, text, _id }: Props) {

    const [loadingId, setLoadingId] = useState<string | null>(null);

    const { upDateNumOfCartItems }: any = useCart();

    if (!_id) return null;

    async function addProductToCart(productId: string) {
        setLoadingId(productId);

        try {
            const res = await AddToCart(productId);

            if (res.status) {
                upDateNumOfCartItems(res.numOfCartItems);

                toast(
                    <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500 text-xl" />
                        <span className="text-sm font-medium">
                            Product added to cart successfully
                        </span>
                    </div>,
                    {
                        duration: 3000,
                        icon: null,
                        style: {
                            background: '#ECFDF5',
                            color: '#065F46',
                            border: '1px solid #A7F3D0',
                            borderRadius: '10px',
                            padding: '12px 16px'
                        }
                    }
                );
            } else {
                toast.error(
                    <div className="flex items-center gap-3">
                        <FaTimesCircle className="text-red-500 text-xl" />
                        <span className="text-sm font-medium">
                            {res.error?.message || 'Something went wrong!'}
                        </span>
                    </div>,
                    {
                        icon: null,
                        style: {
                            background: '#FEF2F2',
                            color: '#991B1B',
                            border: '1px solid #FECACA',
                            borderRadius: '10px',
                            padding: '12px 16px'
                        }
                    }
                );
            }

        } catch (error) {
            toast.error(
                <div className="flex items-center gap-3">
                    <FaTimesCircle className="text-red-500 text-xl" />
                    <span className="text-sm font-medium">
                        Network error occurred
                    </span>
                </div>
            );
        } finally {
            setLoadingId(null);
        }
    }





    return (
        <button onClick={() => addProductToCart(_id)} className={className}>
            {loadingId === _id ? (
                <FaSpinner className="animate-spin text-white text-sm" />
            ) : (
                <>
                    {Icon && <Icon color='white' />}
                    {text && text}
                </>
            )}
        </button>
    )
}