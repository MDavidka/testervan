import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Mail, Lock, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import Button from '../components/Button';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-blue-50 dark:from-gray-950 dark:via-accent-950/20 dark:to-gray-950" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group mb-4">
            <Cloud className="h-8 w-8 text-accent-500" />
            <span className="font-bold text-2xl tracking-tight">
              Nebula<span className="text-accent-500">Host</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            Sign in to your account to continue
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border shadow-xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-950/50 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-1">
                Signed in successfully!
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400">
                Redirecting to your dashboard...
              </p>
            </div>
          ) : (
            <>
              {/* Social login */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                  <Github className="h-4 w-4" />
                  GitHub
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                  <Chrome className="h-4 w-4" />
                  Google
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-500">
                    or continue with email
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-transparent focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-10 py-2.5 rounded-lg border bg-transparent focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 outline-none transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-accent-500 focus:ring-accent-500"
                    />
                    <span className="text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-accent-500 hover:text-accent-600 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Footer link */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/contact" className="text-accent-500 hover:text-accent-600 font-medium transition-colors">
            Get started free
          </Link>
        </p>
      </div>
    </section>
  );
}
