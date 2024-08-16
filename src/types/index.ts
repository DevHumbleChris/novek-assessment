import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string().min(6, {
    message: "6 characters minimum",
  }),
});

export interface User {
  email: string;
  password: string;
}
