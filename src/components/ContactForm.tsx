import React, { useState } from 'react';
import { Send, Loader2, AlertTriangle } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({ type: 'loading', message: 'Nachricht wird gesendet...' });

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Netzwerkfehler');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setStatus({
        type: 'success',
        message: 'Ihre Nachricht wurde erfolgreich gesendet!'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Entschuldigung, es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.'
      });
    }
  };

  return (
    <div className={className}>
      <h4 className="text-xl font-serif mb-6">Kontaktieren Sie mich</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
            required
          ></textarea>
        </div>

        {status.type !== 'idle' && (
          <div className={`p-4 rounded-md flex items-start gap-3 ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-gray-50 text-gray-800'
          }`}>
            {status.type === 'error' && <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status.type === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Nachricht senden</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;