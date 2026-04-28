'use server';


import { registerPaylodType } from "@/schema/register.schema";





export async function registerHandler(formValue: registerPaylodType){

    try {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
            method: "POST",
            body: JSON.stringify(formValue),
            headers:{
                "Content-Type": 'application/json'
            }
        })

        const data = await res.json();

        if(!res.ok){
            throw new Error(data.message || 'invalid data');
        }

        return {
            ...data,
            ok: true,
        };

    } catch (error) {
        console.log(error);
        return {
            error,
            ok: false,
        };
    }
}
