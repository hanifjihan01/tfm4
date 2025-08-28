'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Kirim ke API atau layanan newsletter di sini
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-white dark:text-body">
        Please enter your e-mail if you want to receive updates
      </p>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Masukkan email anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-accent-200 px-4 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-accent-700 dark:bg-transparent dark:text-white"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
