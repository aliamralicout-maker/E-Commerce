import * as z from "zod";

export const defaultValues = {
    password: "",
    rePassword: "",
    newPassword: "",
};

export const changePasswordSchema = z
    .object({
        currentPassword: z
            .string()
            .nonempty({ message: "*required password" }),

        password: z
            .string()
            .nonempty({ message: "*required new password" })
            .regex(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                "*Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
            ),

        rePassword: z
            .string()
            .nonempty({ message: "*required password confirmation" }),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "*Passwords do not match",
        path: ["rePassword"],
    });

export type changePasswordPaylodType = z.infer<typeof changePasswordSchema>;

