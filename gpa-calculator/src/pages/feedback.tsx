import { useState } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-primary hover:text-primary/90">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Feedback</h1>
        
        <div className="bg-background border border-primary/20 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border border-primary/40 text-text-primary px-4 py-2 rounded-md
                focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border border-primary/40 text-text-primary px-4 py-2 rounded-md
                focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-text-primary mb-2">
                Feedback Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-background border border-primary/40 text-text-primary px-4 py-2 rounded-md
                focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-text-primary mb-2">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={5}
                className="w-full bg-background border border-primary/40 text-text-primary px-4 py-2 rounded-md
                focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-background px-6 py-3 rounded-md hover:bg-primary/90 
              transition-colors font-semibold"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
