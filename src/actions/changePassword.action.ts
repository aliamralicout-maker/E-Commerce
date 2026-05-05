'use server';

import { getUsertoken } from "@/lib/server-utils";
import { changePasswordPaylodType } from "@/schema/changePassowrd.schema";


export async function apiChangePassword(formValue:changePasswordPaylodType) {
    try {
        const token = await getUsertoken();
        if (!token) {
            return {
                status: false,
                error: 'User not authenticated',
            };
        }

        const res = await fetch('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
            method: 'PUT',
            headers: {
                token: token as string,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue),
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.message || "You need to log in first");
        }

        return {
            ...data,
            status: true,
        }


    } catch (error) {
        console.log('error change Password', error);

        return {
            status: false,
            error: (error as Error)?.message || 'Something went wrong',
        };
    }
}