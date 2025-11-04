"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Container from "@/components/Container";

export default function ReviewsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Container>
        <div className="py-16">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/account" className="hover:text-foreground transition-colors">
              My Account
            </Link>
            <span>/</span>
            <span className="text-foreground">My Reviews</span>
          </div>

          <div className="flex gap-24">
            {/* Sidebar */}
            <aside className="w-64 shrink-0">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-base font-medium text-foreground">
                    Manage My Account
                  </h3>
                  <ul className="space-y-2 pl-8">
                    <li>
                      <Link
                        href="/account"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/address"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Address Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/payment"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        My Payment Options
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-base font-medium text-foreground">
                    My Orders
                  </h3>
                  <ul className="space-y-2 pl-8">
                    <li>
                      <Link
                        href="/account/orders"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        My Returns
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/account/cancellations"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        My Cancellations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-base font-medium text-foreground">
                    My WishList
                  </h3>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <div className="rounded-lg bg-background p-12 shadow-sm border border-border">
                <h2 className="mb-6 text-xl font-medium text-red-500">
                  My Reviews
                </h2>
                <div className="py-16 text-center">
                  <svg
                    className="mx-auto mb-4 h-16 w-16 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <p className="text-lg text-muted-foreground">
                    You haven't reviewed any products yet.
                  </p>
                  <Link
                    href="/products"
                    className="mt-4 inline-block rounded bg-red-500 px-8 py-3 text-sm font-medium text-white hover:bg-red-600 transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </div>
  );
}

