'use server';
import { getUsertoken } from "@/lib/server-utils";

export async function AddToCart(productId: string) {
    console.log('product ', productId);

    try {

        const token = await getUsertoken();




        const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: token as string,
            },
            body: JSON.stringify({ productId })
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to add item to cart');
        }

        return {
            ...data,
            status: true,
        }

    } catch (error) {
        console.log(error);
        return {
            error,
            status: false,
        }
    }
}

export async function GetCart() {
    try {

        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }



        const res = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
            method: 'GET',
            headers: {
                token: token as string,
            },
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to add item to cart');
        }


        return {
            ...data,
            status: true,
        }

    } catch (error) {
        console.log(error);
        return {
            error,
            status: false,
        }
    }
}


export async function deleteCart(productId: string) {
    try {

        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }



        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
            method: 'DELETE',
            headers: {
                token: token as string,
            },
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to delete item from cart');
        }


        return {
            ...data,
            status: true,
        }

    } catch (error) {
        console.log(error);
        return {
            error,
            status: false,
        }
    }
}

export async function clearAllCart() {
    try {

        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }



        const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
            method: 'DELETE',
            headers: {
                token: token as string,
            },
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to delete all item from cart');
        }


        return {
            ...data,
            status: true,
        }

    } catch (error) {
        console.log(error);
        return {
            error,
            status: false,
        }
    }
}





// 'use server';
// import { getUsertoken } from "@/lib/server-utils";

// const API = 'https://ecommerce.routemisr.com/api/v2/cart';

// function authHeaders(token: string) {
//     return {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     };
// }

// export async function AddToCart(productId: string) {
//     try {
//         const token = await getUsertoken();

//         if (!token) {
//             return {
//                 status: false,
//                 error: 'User not authenticated',
//             };
//         }

//         const res = await fetch(API, {
//             method: 'POST',
//             headers: authHeaders(token),
//             body: JSON.stringify({ productId }),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || 'Failed to add item to cart');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error) {
//         console.log(error);
//         return {
//             error,
//             status: false,
//         };
//     }
// }

// export async function GetCart() {
//     try {
//         const token = await getUsertoken();

//         if (!token) {
//             return {
//                 status: false,
//                 error: 'User not authenticated',
//             };
//         }

//         const res = await fetch(API, {
//             method: 'GET',
//             headers: authHeaders(token),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || 'Failed to get cart');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error) {
//         console.log(error);
//         return {
//             error,
//             status: false,
//         };
//     }
// }

// export async function deleteCart(productId: string) {
//     try {
//         const token = await getUsertoken();

//         if (!token) {
//             return {
//                 status: false,
//                 error: 'User not authenticated',
//             };
//         }

//         const res = await fetch(`${API}/${productId}`, {
//             method: 'DELETE',
//             headers: authHeaders(token),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || 'Failed to delete item from cart');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error) {
//         console.log(error);
//         return {
//             error,
//             status: false,
//         };
//     }
// }

// export async function clearAllCart() {
//     try {
//         const token = await getUsertoken();

//         if (!token) {
//             return {
//                 status: false,
//                 error: 'User not authenticated',
//             };
//         }

//         const res = await fetch(API, {
//             method: 'DELETE',
//             headers: authHeaders(token),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || 'Failed to clear cart');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error) {
//         console.log(error);
//         return {
//             error,
//             status: false,
//         };
//     }
// }

