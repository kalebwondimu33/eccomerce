"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SIGNUP_SIDE, UNDERLINE_IMG, GOOGLE1, GOOGLE2, GOOGLE3, GOOGLE4 } from "@/lib/figmaAssets";
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

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await signup(name, email, password);
      if (success) {
        router.push("/account");
      } else {
        setError("Failed to create account");
      }
    } catch {
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
              <img alt="Shopping" className="absolute h-full left-[-10.08%] max-w-none top-0 w-[115.26%]" src={SIGNUP_SIDE} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-black">
            <p className="font-['Inter'] font-medium leading-[30px] relative shrink-0 text-[36px] tracking-[1.44px] text-black dark:text-white">
              Create an account
            </p>
            <p className="font-['Poppins'] leading-[24px] relative shrink-0 text-[16px] text-black dark:text-white">
              Enter your details below
            </p>
          </div>
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
            {error && (
              <div className="w-[370px] rounded bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-800 px-4 py-3 text-red-700 dark:text-red-300 text-sm">
                {error}
              </div>
            )}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <input 
                  placeholder="Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-[370px] bg-transparent border-none outline-none font-['Poppins'] leading-[24px] text-[16px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40" 
                />
                <UnderLine className="h-0 opacity-50 relative shrink-0 w-[370px] dark:invert" />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <input 
                  type="email"
                  placeholder="Email or Phone Number" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-[370px] bg-transparent border-none outline-none font-['Poppins'] leading-[24px] text-[16px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40" 
                />
                <UnderLine className="h-0 opacity-50 relative shrink-0 w-[370px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <input 
                  placeholder="Password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-[370px] bg-transparent border-none outline-none font-['Poppins'] leading-[24px] text-[16px] text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40" 
                />
                <UnderLine className="h-0 opacity-50 relative shrink-0 w-[370px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
              <button 
                type="submit"
                disabled={loading}
                className="bg-[#db4444] box-border content-stretch flex gap-[10px] items-center justify-center px-[122px] py-[16px] relative rounded-[4px] shrink-0 text-neutral-50 font-['Poppins'] font-medium leading-[24px] text-[16px] hover:bg-[#c33d3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
                <button 
                  type="button"
                  className="border border-[rgba(0,0,0,0.4)] dark:border-white/40 box-border content-stretch flex flex-col gap-[10px] items-start px-[86px] py-[16px] relative rounded-[4px] shrink-0 bg-transparent dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <div className="absolute inset-[40.99%_0.97%_12.07%_51%]">
                        <img alt="" className="block max-w-none size-full" src={GOOGLE1} />
                      </div>
                      <div className="absolute bottom-0 left-[6.32%] right-[15.86%] top-[59.59%]">
                        <img alt="" className="block max-w-none size-full" src={GOOGLE2} />
                      </div>
                      <div className="absolute inset-[27.56%_77.07%_27.54%_1%]">
                        <img alt="" className="block max-w-none size-full" src={GOOGLE3} />
                      </div>
                      <div className="absolute bottom-[59.56%] left-[6.32%] right-[15.54%] top-0">
                        <img alt="" className="block max-w-none size-full" src={GOOGLE4} />
                      </div>
                    </div>
                    <p className="font-['Poppins'] leading-[24px] relative shrink-0 text-[16px] text-black dark:text-white">
                      Sign up with Google
                    </p>
                  </div>
                </button>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  <p className="font-['Poppins'] leading-[24px] opacity-70 relative shrink-0 text-[16px] text-black dark:text-white">
                    Already have account?
                  </p>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                    <a href="/login" className="block cursor-pointer font-['Poppins'] font-medium leading-[24px] opacity-70 relative shrink-0 text-[16px] text-black dark:text-white whitespace-nowrap hover:opacity-100 transition-opacity">
                      Log in
                    </a>
                    <UnderLine className="h-0 opacity-50 relative shrink-0 w-[47px]" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
