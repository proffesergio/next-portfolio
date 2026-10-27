'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

import { sendEmailAction } from '@/actions/send-email';
import { SocialContactLinks } from '@/components/social-contact-links';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });
  const onSubmit = async (values: TFormSchema) => {
    try {
      const { data, error } = await sendEmailAction(values);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success(data);
      reset();
    } catch {
      toast.error('Unable to send right now. Please use the email link.');
    }
  };
  return (
    <section ref={ref} id="contact" className="contact-section">
      <div>
        <span className="eyebrow text-violet-400">Have a good idea?</span>
        <h2>
          Let’s make
          <br />
          <span className="gradient-text">it happen.</span>
        </h2>
        <p className="contact-description">
          A new product, a fresh identity, or something a little unexpected. I’d
          love to hear what you’re thinking.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <SocialContactLinks />
        </div>
        <a
          href="mailto:bilal.hossai1@gmail.com"
          className="mt-7 inline-flex items-center gap-2 text-sm"
        >
          <Mail size={15} /> bilal.hossai1@gmail.com <ArrowUpRight size={14} />
        </a>
        <p className="text-muted-foreground mt-5 flex items-center gap-2 text-xs">
          <span className="status-dot" /> Open to freelance collaborations
        </p>
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label htmlFor="email">
            Your email
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </label>
          {errors.email && (
            <p id="email-error" className="error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message">
            What are you thinking?
            <textarea
              id="message"
              placeholder="A little about your project…"
              {...register('message')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
          </label>
          {errors.message && (
            <p id="message-error" className="error" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="gradient-button self-start disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Send a message'}
          <Send size={14} />
        </button>
      </form>
    </section>
  );
};
