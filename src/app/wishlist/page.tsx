"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      href: item.href,
    });
  };

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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="mt-6 text-2xl font-semibold text-foreground">Your wishlist is empty</h2>
          <p className="mt-2 text-muted-foreground">
            Start adding products you love to your wishlist!
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Wishlist</h1>
          <p className="mt-2 text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearWishlist}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="group rounded-lg bg-card p-4 ring-1 ring-border">
            <div className="relative">
              <a href={item.href || "#"}>
                {item.imageUrl ? (
                  <ImageWithSkeleton
                    src={item.imageUrl}
                    alt={item.title}
                    containerClassName="aspect-[4/3] w-full rounded-md"
                    imgClassName="transition-transform group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted" />
                )}
              </a>
              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-md hover:bg-red-600 transition-colors"
                aria-label="Remove from wishlist"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
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
            </div>
            <div className="mt-3">
              <a href={item.href || "#"}>
                <p className="font-medium text-foreground hover:text-primary transition-colors">
                  {item.title}
                </p>
              </a>
              <p className="text-sm text-primary font-semibold">{item.price}</p>
              <button 
                onClick={() => handleAddToCart(item)}
                className="mt-3 w-full rounded-md bg-black dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

