"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOGIN_SIDE, UNDERLINE_IMG } from "@/lib/figmaAssets";
import { useAuth } from "@/contexts/AuthContext";

function UnderLine({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <img alt="" className="block max-w-none size-full" src={UNDERLINE_IMG} />
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/account");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-10">
      <div className="content-stretch flex gap-[129px] items-center relative min-h-screen">
        <div className="bg-[#cbe4e8] h-[781px] overflow-clip relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[805px]">
          <div className="absolute h-[706px] left-[-8px] top-[75px] w-[919px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Shopping" className="absolute h-full left-[-10.08%] max-w-none top-0 w-[115.26%]" src={LOGIN_SIDE} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-black">
            <p className="font-['Inter'] font-medium leading-[30px] relative shrink-0 text-[36px] tracking-[1.44px] text-black dark:text-white">
              Log in to Exclusive
            </p>
            <p className="font-['Poppins'] leading-[24px] relative shrink-0 text-[16px] text-black dark:text-white">
              Enter your details below
            </p>
          </div>
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
            {error && (
              <div className="w-[370px] rounded bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-800 px-4 py-3 text-red-700 dark:text-red-300 text-sm">
                {error}
              </div>
            )}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <input 
                type="email"
                placeholder="Email or Phone Number" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[370px] bg-transparent border-none outline-none font-['Poppins'] leading-[24px] text-[16px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40" 
              />
              <UnderLine className="h-0 opacity-50 relative shrink-0 w-[370px] dark:invert" />
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <input 
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-[370px] bg-transparent border-none outline-none font-['Poppins'] leading-[24px] text-[16px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40" 
              />
              <UnderLine className="h-0 opacity-50 relative shrink-0 w-[370px]" />
            </div>
            <div className="content-stretch flex gap-[87px] items-center relative shrink-0">
              <button 
                type="submit"
                disabled={loading}
                className="bg-[#db4444] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[16px] relative rounded-[4px] shrink-0 text-neutral-50 font-['Poppins'] font-medium leading-[24px] text-[16px] hover:bg-[#c33d3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Log In"}
              </button>
              <a href="#" className="font-['Poppins'] leading-[24px] not-italic relative shrink-0 text-[#db4444] text-[16px] hover:text-[#c33d3d] transition-colors">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
