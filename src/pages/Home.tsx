import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Server,
  HeadphonesIcon,
  Clock,
  BarChart3,
  ChevronRight,
  Star,
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      desc: 'NVMe SSDs and LiteSpeed caching deliver up to 10x faster page loads with our global CDN.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      desc: 'DDoS protection, free SSL, daily backups, and real-time malware scanning included on all plans.',
    },
    {
      icon: Server,
      title: '99.99% Uptime',
      desc: 'Our redundant infrastructure across 12 global data centers ensures your site stays online.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Expert Support',
      desc: 'Real humans, real fast. Our engineers are available around the clock via chat, email, or phone.',
    },
    {
      icon: Clock,
      title: 'Instant Scaling',
      desc: 'Scale from one site to thousands seamlessly. Pay only for what you use with auto-scaling.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      desc: 'Built-in analytics dashboard to track traffic, performance, and visitor insights in real-time.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder, TechFlow',
      content:
        'Switching to NebulaHost cut our page load times by 60%. Their support team helped us migrate 200+ sites in under 24 hours. Incredible service.',
      rating: 5,
    },
    {
      name: 'Marcus Rivera',
      role: 'CTO, ScaleUp Inc.',
      content:
        "We've tried every major host. NebulaHost's performance and reliability is unmatched. Our SaaS platform handles 10M+ requests daily without a hitch.",
      rating: 5,
    },
    {
      name: 'Emily Watson',
      role: 'Developer, IndieStack',
      content:
        'The developer experience is phenomenal. Git-based deployments, CLI tools, and a powerful API — it feels like Heroku but way faster and more affordable.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-blue-50 dark:from-gray-950 dark:via-accent-950/20 dark:to-gray-950" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-950/50 text-accent-700 dark:text-accent-300 text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>New: Global Edge Network now live</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Host your site
              <br />
              <span className="bg-gradient-to-r from-accent-500 to-blue-600 bg-clip-text text-transparent">
                at the speed of light
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance">
              Enterprise-grade cloud hosting for modern teams. Deploy globally in seconds,
              scale infinitely, and sleep soundly with our 99.99% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button size="lg">
                  View Plans
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free migration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative border-y bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Sites Hosted', value: '50K+' },
              { label: 'Uptime', value: '99.99%' },
              { label: 'Global Data Centers', value: '12' },
              { label: 'Happy Customers', value: '10K+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to succeed online
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              From shared hosting to dedicated servers — we've got the tools, speed, and support
              to grow your online presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-950/50 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by thousands of developers
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              Don't just take our word for it — here's what our customers say.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-accent-500 to-blue-600 rounded-3xl p-12 lg:p-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to launch your site?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Join 10,000+ happy customers. Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button size="lg" className="bg-white text-accent-600 hover:bg-gray-100 shadow-xl">
                  Start Free Trial
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}