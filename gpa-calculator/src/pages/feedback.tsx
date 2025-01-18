'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    type: 'suggestion'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.feedback
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        feedback: '',
        type: 'suggestion'
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send feedback');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-background text-text-primary pt-16">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Share Your Feedback</h1>
        
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="text-lg font-semibold text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-glow w-full"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="text-lg font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-glow w-full"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="type" className="text-lg font-semibold text-primary mb-2">
                Feedback Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="select-glow w-full"
                disabled={status === 'loading'}
              >
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="feedback" className="text-lg font-semibold text-primary mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={5}
                className="input-glow w-full resize-none"
                required
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Feedback'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/10 rounded-lg">
                <p className="text-green-400 text-center">
                  Thank you for your feedback! We'll review it shortly.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 rounded-lg">
                <p className="text-red-400 text-center">
                  {errorMessage}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default FeedbackPage;
