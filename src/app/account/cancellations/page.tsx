"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Container from "@/components/Container";

export default function CancellationsPage() {
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
            <span className="text-foreground">My Cancellations</span>
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
                        className="text-sm text-red-500 hover:text-red-600 transition-colors"
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
                  My Cancellations
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
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg text-muted-foreground">
                    No cancelled orders.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </div>
  );
}

