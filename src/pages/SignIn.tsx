import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      if (username === "Adrian90miles" && password === "Tank10089##") {
        navigate("/dashboard");
      } else {
        setError("Please check your username and password and try again.");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav bar */}
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
          <a href="/" className="flex items-center gap-2 font-extrabold text-2xl tracking-tight">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="4" fill="currentColor" fillOpacity="0.15" />
              <path d="M8 8h7v7H8V8zm9 0h7v7h-7V8zm-9 9h7v7H8v-7zm9 0h7v7h-7v-7z" fill="currentColor" />
            </svg>
            <span>CHASE</span>
          </a>
        </div>
      </header>

      {/* Sign in form */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl shadow-lg border border-border p-8">
            <h1 className="text-2xl font-bold text-foreground mb-1">Sign in</h1>
            <p className="text-muted-foreground text-sm mb-6">Access your Chase accounts</p>

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive rounded-md p-3 mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  disabled={isLoading}
                  className="w-full h-11 rounded-md border border-input bg-background px-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    disabled={isLoading}
                    className="w-full h-11 rounded-md border border-input bg-background px-3 pr-10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-foreground">
                  <input type="checkbox" className="rounded border-input" />
                  Remember me
                </label>
                <a href="#" className="text-accent hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-primary text-primary-foreground rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                )}
                <span>{isLoading ? "Signing in..." : "Sign in"}</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Not enrolled? <a href="#" className="text-accent font-medium hover:underline">Sign up now</a>
              </p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            © 2024 JPMorgan Chase & Co. Member FDIC
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
