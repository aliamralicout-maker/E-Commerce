import { Phone } from "lucide-react";
import * as z from "zod";


export const defaultValues = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    phone: '',
}


export const registerSchema = z.object({
    name: z.string()
        .nonempty({ message: '*Required Name' })
        .min(3, { message: '*The name must be at least 3 characters long.' })
        .max(15, { message: '*The name must be at less than 15 characters long.' }),

    email: z
        .string()
        .nonempty({ message: "*required email" })
        .email({ message: "*You must enter an email that contains a username, the @ symbol, and a valid domain like gmail.com." }),

    password: z
        .string()
        .nonempty({ message: "*Required password" })
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "* Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
        ),

    rePassword: z
        .string()
        .nonempty({ message: "*Required password" })
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "* Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
        ),

    Phone: z.string().nonempty({message:'*Required phone'}).regex(
        /^(002|\+?20)?1[0125][0-9]{8}$/,
        { message: '*Invalid phone number' }
    ),
}).refine((data) => {
    if (data.password === data.rePassword) {
        return true;
    }
    return false;
}, { error: '*Password Are Not Match', path: ['rePassword'] });


export type registerPaylodType = z.infer<typeof registerSchema>
