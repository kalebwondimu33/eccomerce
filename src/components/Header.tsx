"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import ThemeToggle from '@/components/ThemeToggle';
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { items: wishlistItems } = useWishlist();
  const { getTotalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowAccountMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      {/* Top Header (announcement + language) */}
      <div className="bg-black text-white">
        <Container>
          <div className="flex h-12 items-center justify-between text-[14px]">
            <p className="truncate">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="underline">ShopNow</a>
            </p>
            <button className="flex items-center gap-1">
              <span>English</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="border-b border-border bg-background">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-wide text-foreground">
              Exclusive
            </Link>

            {/* Nav */}
            <nav className="hidden items-center gap-8 text-[16px] text-foreground md:flex">
              <Link href="/" className="relative">
                Home
                <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground/50" />
              </Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
              {!isAuthenticated && <Link href="/signup">Sign Up</Link>}
            </nav>

            {/* Search + Icons */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded hover:bg-muted text-foreground"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {/* Hamburger / Close icon */}
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
              <ThemeToggle />
              <div className="hidden items-center gap-3 rounded bg-muted px-4 py-2 text-[12px] text-foreground/70 md:flex">
                <input
                  className="w-56 bg-transparent placeholder-foreground/60 focus:outline-none"
                  placeholder="What are you looking for?"
                />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Link href="/wishlist" aria-label="Wishlist" className="relative p-1 text-foreground">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1 20.3l-.1.1-.1-.1C7.14 16.36 4 13.53 4 10.5 4 8.5 5.5 7 7.5 7c1.54 0 3.04.99 3.57 2.36h1.87C13.46 7.99 14.96 7 16.5 7 18.5 7 20 8.5 20 10.5c0 3.03-3.14 5.86-7.9 9.8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <Link href="/cart" aria-label="Cart" className="relative p-1 text-foreground">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
                  <circle cx="17" cy="20" r="1.5" fill="currentColor"/>
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
              
              {/* Account Menu */}
              {isAuthenticated && (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowAccountMenu(!showAccountMenu)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                    aria-label="Account menu"
                  >
                    <span className="text-sm font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </button>
                  
                  {showAccountMenu && (
                    <div className="absolute right-0 top-full mt-3 w-56 rounded bg-gradient-to-b from-neutral-800 to-black backdrop-blur-xl shadow-2xl py-3 z-50">
                      <Link
                        href="/account"
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Manage My Account
                      </Link>
                      <Link
                        href="/account/orders"
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M3 6h18l-2 13H5L3 6z" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="9" cy="21" r="1" fill="currentColor"/>
                          <circle cx="17" cy="21" r="1" fill="currentColor"/>
                        </svg>
                        My Order
                      </Link>
                      <Link
                        href="/account/cancellations"
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        My Cancellations
                      </Link>
                      <Link
                        href="/account/reviews"
                        className="flex items-center gap-3 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                        My Reviews
                      </Link>
                      <div className="my-2 h-px bg-white/20" />
                      <button
                        onClick={() => {
                          logout();
                          setShowAccountMenu(false);
                        }}
                        className="flex w-full items-center gap-3 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition-colors text-left"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Nav (animated) */}
      <div
        className={`border-b border-border bg-background md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <Container>
          <nav
            className={`flex flex-col gap-2 py-3 text-[16px] text-foreground transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-1 py-2">Home</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-1 py-2">Contact</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-1 py-2">About</Link>
            {!isAuthenticated && (
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="px-1 py-2">Sign Up</Link>
            )}
          </nav>
        </Container>
      </div>
    </header>
  );
}


