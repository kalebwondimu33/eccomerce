"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Container from "@/components/Container";

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (user) {
      // Pre-fill form data
      const nameParts = user.name.split(" ");
      setFormData((prev) => ({
        ...prev,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: user.email,
      }));
    }
  }, [isAuthenticated, router, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  if (!isAuthenticated || !user) {
    return null; // Or a loading spinner
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
            <span className="text-foreground">My Account</span>
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
                        className="text-sm text-red-500 hover:text-red-600 transition-colors"
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
                  Edit Your Profile
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-normal text-foreground"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-normal text-foreground"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  {/* Email and Address */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-normal text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="mb-2 block text-sm font-normal text-foreground"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Kingston, 5236, United State"
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="currentPassword"
                        className="mb-2 block text-sm font-normal text-foreground"
                      >
                        Password Changes
                      </label>
                      <input
                        type="password"
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Current Password"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="New Password"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full rounded bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Confirm New Password"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-8 pt-4">
                    <button
                      type="button"
                      className="px-12 py-4 text-base text-foreground hover:text-muted-foreground transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded bg-red-500 px-12 py-4 text-base font-medium text-white hover:bg-red-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </div>
  );
}

