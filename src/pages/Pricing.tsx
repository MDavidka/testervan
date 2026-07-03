import { Check, X, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useState } from 'react';

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for personal projects and small blogs.',
      monthlyPrice: 9,
      yearlyPrice: 7,
      popular: false,
      features: [
        { included: true, text: '1 Website' },
        { included: true, text: '10 GB NVMe Storage' },
        { included: true, text: '50 GB Bandwidth' },
        { included: true, text: 'Free SSL Certificate' },
        { included: true, text: 'Daily Backups' },
        { included: false, text: 'Staging Environment' },
        { included: false, text: 'Priority Support' },
      ],
    },
    {
      name: 'Professional',
      desc: 'Ideal for growing businesses and e-commerce.',
      monthlyPrice: 29,
      yearlyPrice: 24,
      popular: true,
      features: [
        { included: true, text: '10 Websites' },
        { included: true, text: '50 GB NVMe Storage' },
        { included: true, text: '500 GB Bandwidth' },
        { included: true, text: 'Free SSL Certificate' },
        { included: true, text: 'Daily Backups' },
        { included: true, text: 'Staging Environment' },
        { included: true, text: 'Priority Support' },
      ],
    },
    {
      name: 'Enterprise',
      desc: 'For large-scale applications and high-traffic sites.',
      monthlyPrice: 99,
      yearlyPrice: 79,
      popular: false,
      features: [
        { included: true, text: 'Unlimited Websites' },
        { included: true, text: '200 GB NVMe Storage' },
        { included: true, text: '5 TB Bandwidth' },
        { included: true, text: 'Free SSL Certificate' },
        { included: true, text: 'Real-time Backups' },
        { included: true, text: 'Staging Environment' },
        { included: true, text: '24/7 Priority Support' },
      ],
    },
  ];

  const faqs = [
    {
      q: 'Can I upgrade or downgrade my plan at any time?',
      a: 'Absolutely. You can change your plan anytime with no penalties. Upgrades take effect immediately, downgrades apply at the next billing cycle.',
    },
    {
      q: 'Is there a setup fee?',
      a: 'No setup fees on any plan. You only pay the listed price — no surprises, no hidden charges.',
    },
    {
      q: 'What happens if I exceed my bandwidth?',
      a: "We'll notify you and temporarily throttle your site to prevent overage charges. You can upgrade your plan or purchase additional bandwidth anytime.",
    },
    {
      q: 'How does the 30-day guarantee work?',
      a: "If you're not satisfied within the first 30 days, we'll refund your payment in full — no questions asked. It's that simple.",
    },
    {
      q: 'Do you offer discounts for non-profits and startups?',
      a: 'Yes! We offer special pricing for registered non-profits and Y Combinator / Techstars startups. Contact our sales team for details.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
            No hidden fees. No surprises. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-sm font-medium transition-colors ${
                !yearly ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                yearly ? 'bg-accent-500' : 'bg-gray-300 dark:bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  yearly ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                yearly ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'
              }`}
            >
              Yearly{' '}
              <span className="text-green-500 font-semibold">Save 20%</span>
            </span>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                hover
                className={`relative flex flex-col ${
                  plan.popular
                    ? 'border-accent-500 ring-1 ring-accent-500 shadow-xl shadow-accent-500/10'
                    : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-500 text-sm">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={f.included ? '' : 'text-gray-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white dark:bg-gray-900 rounded-xl border p-5 [&[open]]:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-sm sm:text-base">{faq.q}</span>
                  <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}