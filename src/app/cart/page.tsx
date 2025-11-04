"use client";

import { useCart } from "@/contexts/CartContext";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="mt-6 text-2xl font-semibold text-foreground">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Add some products to your cart to get started!
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
      <div className="text-sm text-foreground mb-8">
        <Link href="/">Home</Link> &gt; Cart
      </div>

      {/* Cart Table */}
      <div className="mb-8">
        <div className="rounded-lg border border-border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 bg-muted p-4 text-sm font-medium">
            <div className="col-span-5">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {/* Items */}
          {items.map((item) => {
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            const subtotal = price * item.quantity;

            return (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 border-t border-border p-4 items-center"
              >
                {/* Product */}
                <div className="col-span-5 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-950 text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
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
                  <span className="font-medium text-foreground">{item.title}</span>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center text-foreground">
                  {item.price}
                </div>

                {/* Quantity */}
                <div className="col-span-3 flex justify-center">
                  <div className="flex items-center rounded border border-border">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-muted transition-colors"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 1;
                        updateQuantity(item.id, val);
                      }}
                      className="w-12 text-center bg-transparent border-x border-border py-1 text-foreground focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-muted transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="col-span-2 text-right font-medium text-foreground">
                  ${subtotal.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <Link
            href="/"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Return To Shop
          </Link>
          <button
            onClick={clearCart}
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Cart Total */}
      <div className="flex justify-end">
        <div className="w-full max-w-md rounded-lg border border-border p-6">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Cart Total</h3>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-foreground">Subtotal:</span>
              <span className="font-medium text-foreground">${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-foreground">Shipping:</span>
              <span className="text-foreground">Free</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-foreground">Total:</span>
              <span className="text-xl font-semibold text-foreground">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-md bg-red-500 px-6 py-3 text-center text-sm font-medium text-white hover:bg-red-600 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
