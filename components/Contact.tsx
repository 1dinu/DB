
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">Get in Touch</h1>
          <p className="text-xl text-stone-600 mb-12 leading-relaxed font-light">
            Have a question about our products or want to discuss a customized order? We'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-900 text-2xl">📍</div>
              <div>
                <h4 className="font-bold text-stone-900">Visit Us</h4>
                <p className="text-stone-600 font-light">No. 12, Homagama, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-900 text-2xl">📞</div>
              <div>
                <h4 className="font-bold text-stone-900">Call Us</h4>
                <p className="text-stone-600 font-light">077 790 5840</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-900 text-2xl">✉️</div>
              <div>
                <h4 className="font-bold text-stone-900">Email Us</h4>
                <p className="text-stone-600 font-light">info@dd.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-stone-100 rounded-3xl border border-stone-200">
            <h4 className="font-bold text-stone-900 mb-2">Business Hours</h4>
            <ul className="space-y-1 text-stone-600 text-sm font-light">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-100">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl">✓</div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">Message Sent!</h3>
              <p className="text-stone-600">Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all font-light"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all font-light"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Subject</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all font-light"
                  placeholder="Order Inquiry"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-all font-light"
                  placeholder="Tell us about your requirements..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/10 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
