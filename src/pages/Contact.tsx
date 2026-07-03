import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      desc: 'Our team responds within 1 hour',
      action: 'hello@nebulahost.com',
      href: 'mailto:hello@nebulahost.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      desc: '24/7 phone support available',
      action: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      desc: 'Average response time: 2 min',
      action: 'Start a chat',
      href: '#',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in touch</h1>
            <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Have a question, need help, or want to talk about your project?
              We're here for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} className="block">
                <Card className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-950/50 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{method.desc}</p>
                  <span className="text-sm font-medium text-accent-500">{method.action}</span>
                </Card>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card hover={false}>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-3">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">
                    Message sent!
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    We'll get back to you within 1 hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us more about your project..."
                      className="w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-900 focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <Card hover={false}>
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-accent-500" />
                    <div>
                      <span className="font-medium">Mon – Fri</span>
                      <span className="text-gray-500 dark:text-gray-500"> 9:00 AM – 6:00 PM PST</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-accent-500" />
                    <div>
                      <span className="font-medium">Weekend</span>
                      <span className="text-gray-500 dark:text-gray-500"> Limited support (chat only)</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <h3 className="font-semibold mb-4">Our Headquarters</h3>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent-500 mt-0.5" />
                  <div>
                    <p>548 Market Street</p>
                    <p>Suite 98420</p>
                    <p>San Francisco, CA 94104</p>
                    <p className="text-gray-500 dark:text-gray-500 mt-2">United States</p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="/pricing" className="block text-accent-500 hover:text-accent-600 transition-colors">
                    → View our pricing plans
                  </a>
                  <a href="/privacy" className="block text-accent-500 hover:text-accent-600 transition-colors">
                    → Privacy Policy
                  </a>
                  <a href="mailto:support@nebulahost.com" className="block text-accent-500 hover:text-accent-600 transition-colors">
                    → support@nebulahost.com
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}