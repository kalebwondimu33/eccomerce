"use client";

import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

type Props = {
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl?: string;
  href?: string;
  rating?: number;
  reviews?: number;
  isNew?: boolean;
  discount?: string;
};

export default function ProductCard({ title, price, originalPrice, imageUrl, href, rating = 4.5, reviews = 88, isNew = false, discount }: Props) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  
  // Generate a simple ID from title
  const productId = title.toLowerCase().replace(/\s+/g, "-");
  const inWishlist = isInWishlist(productId);
  
  // Generate product URL if href not provided
  const productUrl = href || `/products/${productId}`;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeItem(productId);
    } else {
      addItem({
        id: productId,
        title,
        price,
        imageUrl,
        href: productUrl,
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: productId,
      title,
      price,
      imageUrl,
      href: productUrl,
    });
  };

  return (
    <Link href={productUrl} className="group block rounded-lg bg-card p-4 ring-1 ring-border">
      <div className="relative">
        {imageUrl ? (
          <ImageWithSkeleton
            src={imageUrl}
            alt={title}
            containerClassName="aspect-[4/3] w-full rounded-md"
            imgClassName="transition-transform group-hover:scale-[1.02]"
          />
        ) : (
          <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-muted" />
        )}
        
        {/* Badges (Top Left) */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <span className="rounded bg-red-500 px-3 py-1 text-xs font-medium text-white">
              -{discount}
            </span>
          )}
          {isNew && (
            <span className="rounded bg-green-500 px-3 py-1 text-xs font-medium text-white">
              NEW
            </span>
          )}
        </div>
        
        {/* Action Buttons (Top Right) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Wishlist Heart Icon */}
          <button 
            onClick={handleWishlistToggle}
            className={`flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-colors group/heart ${
              inWishlist 
                ? "bg-red-500 hover:bg-red-600" 
                : "bg-white dark:bg-neutral-800 hover:bg-red-50 dark:hover:bg-red-950"
            }`}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill={inWishlist ? "white" : "none"}
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors ${
                inWishlist 
                  ? "text-white" 
                  : "text-foreground group-hover/heart:text-red-500"
              }`}
            >
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Add to Cart Icon */}
          <button 
            onClick={handleAddToCart}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            aria-label="Add to cart"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="17" cy="20" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <p className="font-medium text-foreground">{title}</p>
        <div className="flex items-center gap-3">
          <p className="text-base text-red-500 font-semibold">{price}</p>
          {originalPrice && (
            <p className="text-base text-muted-foreground line-through font-medium opacity-50">
              {originalPrice}
            </p>
          )}
        </div>
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
      </div>
    </Link>
  );
}


