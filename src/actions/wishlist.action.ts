'use server';
import { getUsertoken } from "@/lib/server-utils";


export async function addWishlist(productId: string) {
    try {
        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }

        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: token as string,
            },
            body: JSON.stringify({ productId }),
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'add to wishlist');
        }


        return {
            ...data,
            status: true,
        }


    } catch (error: any) {
        console.log('error', error);
        return {
            status: false,
            error: error.message || "Something went wrong",
        };
    }
}



export async function removeItemToWishlist(productId: string) {
    try {
        const token = await getUsertoken();

        if (!token) {
            return {
                status: false,
                error: "User not authenticated",
            };
        }

        const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
            {
                method: "DELETE",
                headers: {
                    token: token as string,
                },
            }
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to remove item");
        }

        return {
            ...data,
            status: true,
        };
    } catch (error: any) {
        console.log("error", error);
        return {
            status: false,
            error: error.message || "Something went wrong",
        };
    }
}


export async function getAllWishlist() {
    try {
        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }

        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            method: 'GET',
            headers: {
                token: token as string,
            },
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Failed to fetch wishlist');
        }


        return {
            ...data,
            status: true,
        }


    } catch (error: any) {
        console.log('error', error);
        return {
            status: false,
            error: error.message || "Something went wrong",
        };
    }
}


// 'use server';
// import { getUsertoken } from "@/lib/server-utils";

// const API = 'https://ecommerce.routemisr.com/api/v1/wishlist';

// function authHeaders(token: string) {
//     return {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//     };
// }

// export async function addWishlist(productId: string) {
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
//             throw new Error(data.message || 'add to wishlist failed');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error: any) {
//         console.log('error', error);
//         return {
//             status: false,
//             error: error.message || "Something went wrong",
//         };
//     }
// }

// export async function removeItemToWishlist(productId: string) {
//     try {
//         const token = await getUsertoken();

//         if (!token) {
//             return {
//                 status: false,
//                 error: "User not authenticated",
//             };
//         }

//         const res = await fetch(`${API}/${productId}`, {
//             method: "DELETE",
//             headers: authHeaders(token),
//         });

//         const data = await res.json();

//         if (!res.ok) {
//             throw new Error(data.message || "Failed to remove item");
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error: any) {
//         console.log("error", error);
//         return {
//             status: false,
//             error: error.message || "Something went wrong",
//         };
//     }
// }

// export async function getAllWishlist() {
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
//             throw new Error(data.message || 'Failed to fetch wishlist');
//         }

//         return {
//             ...data,
//             status: true,
//         };

//     } catch (error: any) {
//         console.log('error', error);
//         return {
//             status: false,
//             error: error.message || "Something went wrong",
//         };
//     }
// }