import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    type: 'suggestion'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Feedback submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      feedback: '',
      type: 'suggestion'
    });
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
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Feedback;
