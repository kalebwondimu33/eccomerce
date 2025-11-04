"use client";

import { useCart } from "@/contexts/CartContext";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "cash">("bank");

  const subtotal = getTotalPrice();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Add some products to proceed to checkout
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/">Home</Link> / <Link href="/cart">Cart</Link> / <span className="text-foreground">Checkout</span>
      </div>

      <h1 className="text-3xl font-semibold text-foreground mb-10">Billing Details</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Billing Form */}
        <div className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-muted-foreground mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-muted-foreground mb-2">
              Street Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              required
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="apartment" className="block text-sm font-medium text-muted-foreground mb-2">
              Apartment, floor, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-muted-foreground mb-2">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              required
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full rounded bg-muted px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="saveInfo"
              className="h-5 w-5 rounded border-border bg-red-500 text-red-500 focus:ring-2 focus:ring-red-500"
            />
            <label htmlFor="saveInfo" className="text-sm text-foreground">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          {/* Products */}
          <div className="space-y-4">
            {items.map((item) => {
              const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
              const subtotal = price * item.quantity;

              return (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {item.imageUrl ? (
                      <ImageWithSkeleton
                        src={item.imageUrl}
                        alt={item.title}
                        containerClassName="h-16 w-16 rounded"
                        imgClassName="object-contain"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded bg-muted" />
                    )}
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium text-foreground">${subtotal.toFixed(2)}</p>
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="space-y-4 border-t border-border pt-6">
            <div className="flex justify-between">
              <span className="text-foreground">Subtotal:</span>
              <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-4">
              <span className="text-foreground">Shipping:</span>
              <span className="font-medium text-foreground">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Total:</span>
              <span className="text-xl font-semibold text-foreground">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="h-5 w-5"
                />
                <label htmlFor="bank" className="text-sm text-foreground">
                  Bank
                </label>
              </div>
              <div className="flex gap-2">
                <div className="h-7 w-10 rounded border border-border bg-white flex items-center justify-center text-[10px] font-bold">
                  VISA
                </div>
                <div className="h-7 w-10 rounded border border-border bg-white flex items-center justify-center">
                  <svg width="20" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="12" r="7" fill="#EB001B"/>
                    <circle cx="15" cy="12" r="7" fill="#F79E1B" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="cash"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="h-5 w-5"
              />
              <label htmlFor="cash" className="text-sm text-foreground">
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 rounded border border-border px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="rounded bg-red-500 px-8 py-3 text-sm font-medium text-white hover:bg-red-600 transition-colors">
              Apply Coupon
            </button>
          </div>

          {/* Place Order Button */}
          <button className="w-full rounded bg-red-500 px-6 py-4 text-base font-medium text-white hover:bg-red-600 transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}


