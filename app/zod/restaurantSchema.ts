import { z } from "zod";

export const restaurantSchema = z
    .object({
        restaurantName: z.string().min(2, {
            message: "restaurant must be at least 2 characters.",
        }),
        email: z.string().email({ message: "Enter a valid email" }),
        password: z.string(),
        city: z.string(),
        address: z.string(),
        contactNumber: z.string(),
        confirmPassword: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
