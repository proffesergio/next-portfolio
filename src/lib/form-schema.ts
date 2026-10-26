import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' })
    .max(254, { message: 'Email is too long' }),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Message is required' })
    .max(5000, { message: 'Please keep your message under 5,000 characters' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
