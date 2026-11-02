'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Replace the missing URL so Back does not return to this redirect.
    window.location.replace('/');
  }, []);

  return (
    <main style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h1>Taking you home</h1>
      <p>
        This page doesn’t exist. <a href="/">Go to the homepage</a>.
      </p>
    </main>
  );
}
