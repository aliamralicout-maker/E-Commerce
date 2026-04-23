
import * as z from "zod";

export const defaultValues = {
    password: '',
    rePassword: '',
    newPassword: '',
}

export const changePasswordSchema = z.object({
    password: z
        .string()
        .nonempty({ message: "*required email" })
        .email({ message: "*You must enter an email that contains a username, the @ symbol, and a valid domain like gmail.com." }),
        
        rePassword: z
        .string()
        .nonempty({ message: "*required password" })
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "* Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
        ),
        newPassword: z
            .string()
            .nonempty({ message: "*required email" })
            .email({ message: "*You must enter an email that contains a username, the @ symbol, and a valid domain like gmail.com." }),
}).refine((data) => {
    if (data.password === data.rePassword) {
        return true;
    }
    return false;
}, { error: '*Password Are Not Match', path: ['rePassword'] });

export type changePasswordPaylodType = z.infer<typeof changePasswordSchema>