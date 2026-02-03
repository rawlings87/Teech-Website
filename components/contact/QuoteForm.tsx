'use client';

import { useState, FormEvent } from 'react';
import { contact } from '@/lib/content';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form submission endpoint
    // Example: await fetch('/api/quote', { method: 'POST', body: formData })

    // Simulated submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold text-frost mb-6">
        {contact.form.heading}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.name.label}
            {contact.form.fields.name.required && (
              <span className="text-danger ml-1">*</span>
            )}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required={contact.form.fields.name.required}
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.email.label}
            {contact.form.fields.email.required && (
              <span className="text-danger ml-1">*</span>
            )}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required={contact.form.fields.email.required}
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.organisation.label}
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.service.label}
            {contact.form.fields.service.required && (
              <span className="text-danger ml-1">*</span>
            )}
          </label>
          <select
            id="service"
            name="service"
            required={contact.form.fields.service.required}
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select a service</option>
            {contact.form.fields.service.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.description.label}
            {contact.form.fields.description.required && (
              <span className="text-danger ml-1">*</span>
            )}
          </label>
          <textarea
            id="description"
            name="description"
            required={contact.form.fields.description.required}
            rows={5}
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-frost mb-2">
            {contact.form.fields.startDate.label}
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="w-full px-4 py-2 bg-slate border border-slate rounded-md text-frost focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : contact.form.submit}
        </Button>

        {submitStatus === 'success' && (
          <p className="text-success text-center">
            Thank you! We&apos;ll respond within one business day.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className="text-danger text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <p className="text-xs text-mist mt-6 italic">{contact.form.note}</p>
    </Card>
  );
}
