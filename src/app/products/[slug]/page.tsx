"use client";

import { useState } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import Link from "next/link";
import { PS5_IMG, JBL_IMG, ECHO_IMG, PERFUME_IMG } from "@/lib/figmaAssets";

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  
  // Mock product data - in real app, fetch based on params.slug
  const product = {
    id: params.slug,
    title: params.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    price: "$192.00",
    originalPrice: "$400.00",
    rating: 4.5,
    reviews: 150,
    inStock: true,
    images: [
      PS5_IMG,
      JBL_IMG,
      ECHO_IMG,
      PERFUME_IMG,
    ],
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["#A0BCE0", "#E07575"],
    sizes: ["XS", "S", "M", "L", "XL"],
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.images[0],
      href: `/products/${params.slug}`,
    });
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      // Would need removeItem from wishlist context
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        imageUrl: product.images[0],
        href: `/products/${params.slug}`,
      });
    }
  };

  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span className="text-foreground">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`rounded-lg overflow-hidden transition-all ${
                  selectedImage === index
                    ? "ring-2 ring-red-500"
                    : "ring-1 ring-border hover:ring-2 hover:ring-gray-400"
                }`}
              >
                <ImageWithSkeleton
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  containerClassName="h-32 w-24 bg-muted"
                  imgClassName="object-contain"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 rounded-lg bg-muted p-8">
            <ImageWithSkeleton
              src={product.images[selectedImage]}
              alt={product.title}
              containerClassName="h-[500px] w-full"
              imgClassName="object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">{product.title}</h1>
            
            {/* Rating */}
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.reviews} Reviews)
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className={`text-sm ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold text-foreground">{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground border-b border-border pb-6">
            {product.description}
          </p>

          {/* Colors */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-foreground">Colours:</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full transition-all ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-gray-900 dark:ring-white"
                      : "ring-1 ring-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <p className="text-lg font-medium text-foreground">Size:</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 w-10 rounded border text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-border bg-transparent text-foreground hover:border-red-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center rounded border border-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
              >
                −
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-x border-border bg-transparent text-foreground focus:outline-none"
                min="1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:bg-red-500 hover:text-white transition-colors"
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 rounded bg-red-500 px-8 py-2.5 text-base font-medium text-white hover:bg-red-600 transition-colors"
            >
              Buy Now
            </button>

            {/* Wishlist Button */}
            <button
              onClick={handleToggleWishlist}
              className={`rounded border border-border p-2.5 transition-colors ${
                inWishlist
                  ? "bg-red-500 text-white"
                  : "bg-transparent hover:bg-red-50 dark:hover:bg-red-950"
              }`}
              aria-label="Add to wishlist"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={inWishlist ? "currentColor" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="rounded border border-border">
            <div className="flex gap-4 border-b border-border p-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
                <rect width="40" height="40" rx="20" fill="currentColor" opacity="0.1"/>
                <path d="M12 13h13l-1.5 9h-10z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="16" cy="28" r="2" fill="currentColor"/>
                <circle cx="24" cy="28" r="2" fill="currentColor"/>
              </svg>
              <div>
                <p className="font-medium text-foreground">Free Delivery</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
                <rect width="40" height="40" rx="20" fill="currentColor" opacity="0.1"/>
                <path d="M20 12a8 8 0 1 0 8 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M20 16v5l3 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <div>
                <p className="font-medium text-foreground">Return Delivery</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Free 30 Days Delivery Returns. <span className="underline">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 rounded bg-red-500" />
            <span className="text-base font-semibold text-red-500">Related Item</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {/* Related products will be added here */}
          <p className="col-span-full text-muted-foreground">Related products coming soon...</p>
        </div>
      </div>
    </div>
  );
}


