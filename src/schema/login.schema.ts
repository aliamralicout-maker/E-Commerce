import * as z from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .nonempty({ message: "*required email" })
        .email({ message: "*You must enter an email that contains a username, the @ symbol, and a valid domain like gmail.com." }),

    password: z
        .string()
        .nonempty({ message: "*required password" })
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "* Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character."
        ),
});

export type loginPaylodType = z.infer<typeof loginSchema>