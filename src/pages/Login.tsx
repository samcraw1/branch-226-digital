import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Login Successful" : "Registration Successful",
      description: "Welcome to NALC Branch 226 member portal.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container max-w-md">
          <div className="card-union p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">226</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {isLogin ? 'Member Login' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground text-sm">
                {isLogin 
                  ? 'Access your NALC Branch 226 member portal' 
                  : 'Register for member portal access'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-foreground"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-foreground"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-secondary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-secondary font-semibold hover:underline"
                >
                  {isLogin ? 'Register' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Member portal access is for NALC Branch 226 members only.
            Contact the branch office for assistance.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
