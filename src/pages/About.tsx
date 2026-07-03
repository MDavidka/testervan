import { Link } from 'react-router-dom';
import { Shield, Heart, Globe, Zap, Users, Award } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      desc: 'We treat our customers&#39; data like our own. Security-first mindset, SOC 2 compliant infrastructure.',
    },
    {
      icon: Heart,
      title: 'Customer Obsession',
      desc: 'Every product decision starts with what&#39;s best for our customers. Support that actually cares.',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      desc: '12 data centers spanning 4 continents. A truly global infrastructure with local performance.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      desc: 'We obsess over speed and performance. Our engineering team pushes the boundaries of what&#39;s possible.',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'Building an open ecosystem. We contribute to open-source and foster a community of developers.',
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'We hold ourselves to the highest standards. Every detail matters, from our code to our customer service.',
    },
  ];

  const team = [
    {
      name: 'Alex Volkov',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Maria Santos',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'James Park',
      role: 'VP of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    },
    {
      name: 'Lisa Chen',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                We're on a mission to make hosting
                <span className="text-accent-500"> effortless</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                NebulaHost was founded in 2018 by a team of cloud infrastructure engineers who
                believed web hosting should be faster, more reliable, and genuinely supportive.
                Today we serve over 10,000 customers across 120 countries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/pricing">
                  <Button size="lg">See Our Plans</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent-500" />
                  <span className="font-semibold">10K+ customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our values</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title}>
                <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-950/50 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the team</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
              A diverse group of engineers, designers, and problem-solvers spread across the globe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to join us?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            We're always looking for talented people who share our values. Check our careers page
            for open positions.
          </p>
          <Link to="/contact">
            <Button size="lg">View Open Positions</Button>
          </Link>
        </div>
      </section>
    </>
  );
}