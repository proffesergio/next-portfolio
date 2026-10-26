'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { formSchema, TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  const parsed = formSchema.safeParse({ email, message });
  if (!parsed.success)
    return { error: 'Please enter a valid email and message.' };
  if (!env.RESEND_API_KEY)
    return {
      error:
        'The contact form is currently unavailable. Please email bilal.hossai1@gmail.com directly.',
    };
  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'proffesergio@gmail.com',
      subject: 'Message from portfolio contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    if (error)
      return { error: 'Unable to send right now. Please use the email link.' };

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Something went wrong!`,
    };
  }
};
