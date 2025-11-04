"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PS5_IMG, JBL_IMG, ECHO_IMG, PERFUME_IMG, WOMAN_HAT_IMG } from "@/lib/figmaAssets";

const categories = [
  "All Products",
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const allProducts = [
  { title: "JBL Boombox", price: "$199.00", imageUrl: JBL_IMG, category: "Electronics", rating: 4.5, reviews: 88, discount: "40%" },
  { title: "PlayStation 5", price: "$499.00", imageUrl: PS5_IMG, category: "Electronics", rating: 5, reviews: 325, isNew: true },
  { title: "Amazon Echo", price: "$89.00", imageUrl: ECHO_IMG, category: "Electronics", rating: 4, reviews: 145, discount: "35%" },
  { title: "GUCCI Perfume", price: "$129.00", imageUrl: PERFUME_IMG, category: "Health & Beauty", rating: 4.5, reviews: 99, isNew: true },
  { title: "Women Collection", price: "$79.00", imageUrl: WOMAN_HAT_IMG, category: "Woman's Fashion", rating: 4, reviews: 55, isNew: true },
  { title: "JBL Speaker Pro", price: "$299.00", imageUrl: JBL_IMG, category: "Electronics", rating: 4.5, reviews: 120 },
  { title: "PS5 Controller", price: "$59.00", imageUrl: PS5_IMG, category: "Electronics", rating: 4, reviews: 200, isNew: true },
  { title: "Smart Watch", price: "$149.00", imageUrl: ECHO_IMG, category: "Electronics", rating: 4.5, reviews: 175 },
  { title: "Designer Bag", price: "$249.00", imageUrl: WOMAN_HAT_IMG, category: "Woman's Fashion", rating: 5, reviews: 88 },
  { title: "Luxury Perfume", price: "$159.00", imageUrl: PERFUME_IMG, category: "Health & Beauty", rating: 4.5, reviews: 65 },
  { title: "Wireless Speaker", price: "$179.00", imageUrl: JBL_IMG, category: "Electronics", rating: 4, reviews: 95, discount: "25%" },
  { title: "Gaming Console", price: "$549.00", imageUrl: PS5_IMG, category: "Electronics", rating: 5, reviews: 410 },
  { title: "Men's Suit", price: "$399.00", imageUrl: PS5_IMG, category: "Men's Fashion", rating: 4.5, reviews: 72, isNew: true },
  { title: "Sports Equipment", price: "$89.00", imageUrl: JBL_IMG, category: "Sports & Outdoor", rating: 4, reviews: 120 },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    if (categoryFromUrl) {
      // Check if the category exists in our list
      const categoryExists = categories.find(cat => 
        cat.toLowerCase().replace(/['&\s]+/g, '-') === categoryFromUrl
      );
      
      if (categoryExists) {
        setSelectedCategory(categoryExists);
      }
    }
  }, [categoryFromUrl]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-8">
        <a href="/">Home</a> / <span className="text-foreground">Products</span>
      </div>

      <h1 className="text-3xl font-semibold text-foreground mb-8">All Products</h1>

      {/* Category Filter */}
      <div className="mb-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-muted text-foreground hover:bg-red-50 dark:hover:bg-red-950"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={`${product.title}-${index}`}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            rating={product.rating}
            reviews={product.reviews}
            isNew={product.isNew}
            discount={product.discount}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No products found in this category</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
