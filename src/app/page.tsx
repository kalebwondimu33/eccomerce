import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import CountdownTimer from "@/components/CountdownTimer";
import { HERO_IMG, APPLE_LOGO, JBL_IMG, PS5_IMG, ECHO_IMG, PERFUME_IMG, WOMAN_HAT_IMG } from "@/lib/figmaAssets";

export default function Home() {
  return (
    <div className="py-10 overflow-x-hidden">
      {/* Hero with categories + banner */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <aside className="rounded-lg bg-black dark:bg-neutral-900 p-4 border-r border-neutral-800 md:col-span-1">
          <ul className="space-y-4">
            {[
              { name: "Woman's Fashion", hasSubmenu: true },
              { name: "Men's Fashion", hasSubmenu: true },
              { name: "Electronics", hasSubmenu: false },
              { name: "Home & Lifestyle", hasSubmenu: false },
              { name: "Medicine", hasSubmenu: false },
              { name: "Sports & Outdoor", hasSubmenu: false },
              { name: "Baby's & Toys", hasSubmenu: false },
              { name: "Groceries & Pets", hasSubmenu: false },
              { name: "Health & Beauty", hasSubmenu: false },
            ].map((c) => (
              <li key={c.name}>
                <a 
                  href={`/products?category=${c.name.toLowerCase().replace(/['&\s]+/g, '-')}`}
                  className="flex items-center justify-between text-white hover:text-red-500 transition-colors group"
                >
                  <span className="text-base font-normal">{c.name}</span>
                  {c.hasSubmenu && (
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white group-hover:text-red-500 transition-colors"
                    >
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="rounded-lg bg-card p-6 ring-1 ring-border md:col-span-2">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              {/* Apple brand + copy */}
              <div className="flex items-center gap-3">
                <ImageWithSkeleton src={APPLE_LOGO} alt="Apple" containerClassName="h-8 w-8 rounded" imgClassName="object-contain" />
                <span className="text-sm font-medium">iPhone 14 Series</span>
              </div>
              <h1 className="mt-3 text-3xl font-semibold">Up to 10% off Voucher</h1>
              <a href="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-8 decoration-1 hover:text-primary transition-colors">
                Shop Now
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            {/* Hero image with carousel dots */}
            <div className="relative">
              <ImageWithSkeleton src={HERO_IMG} alt="Hero" containerClassName="h-full w-full rounded-md" imgClassName="object-cover" />
              {/* Carousel dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {[0, 1, 2, 3, 4].map((index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full transition-all ${
                      index === 2
                        ? "bg-red-500 ring-2 ring-white ring-offset-2"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Flash Sales */}
      <section className="mt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:flex-wrap sm:gap-8 md:gap-16 min-w-0">
            <SectionTitle label="Today's" title="Flash Sales" />
            <div className="w-full sm:w-auto">
              <CountdownTimer />
            </div>
          </div>
          <a 
            href="/products"
            className="shrink-0 rounded bg-red-500 px-8 py-3 text-sm font-medium text-white hover:bg-red-600 transition-colors"
          >
            View All
          </a>
        </div>
        <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {[
            { title: "JBL Boombox", price: "$119.00", originalPrice: "$199.00", imageUrl: JBL_IMG, rating: 4.5, reviews: 88, discount: "40%" },
            { title: "PlayStation 5", price: "$349.00", originalPrice: "$499.00", imageUrl: PS5_IMG, rating: 5, reviews: 325, discount: "30%", isNew: true },
            { title: "Amazon Echo", price: "$58.00", originalPrice: "$89.00", imageUrl: ECHO_IMG, rating: 4, reviews: 145, discount: "35%" },
            { title: "GUCCI Perfume", price: "$90.00", originalPrice: "$129.00", imageUrl: PERFUME_IMG, rating: 4.5, reviews: 99, isNew: true, discount: "30%" },
            { title: "Women Collection", price: "$55.00", originalPrice: "$79.00", imageUrl: WOMAN_HAT_IMG, rating: 4, reviews: 55, discount: "30%" },
            { title: "JBL Boombox", price: "$119.00", originalPrice: "$199.00", imageUrl: JBL_IMG, rating: 4.5, reviews: 88, discount: "40%" },
            { title: "PlayStation 5", price: "$349.00", originalPrice: "$499.00", imageUrl: PS5_IMG, rating: 5, reviews: 325, discount: "30%" },
          ].map((p, index) => (
            <div key={`${p.title}-${index}`} className="min-w-[250px] snap-start">
              <ProductCard title={p.title} price={p.price} originalPrice={p.originalPrice} imageUrl={p.imageUrl} rating={p.rating} reviews={p.reviews} isNew={p.isNew} discount={p.discount} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Browse By Category */}
      <section className="mt-12">
        <SectionTitle label="Categories" title="Browse By Category" />
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {[
            "Phones",
            "Computers",
            "SmartWatch",
            "Camera",
            "Headphones",
            "Gaming",
          ].map((name) => (
            <div key={name} className="min-w-[150px] snap-start">
              <CategoryCard name={name} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Best Selling Products */}
      <section className="mt-16">
        <SectionTitle label="This Month" title="Best Selling Products" />
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { title: "PlayStation 5", price: "$499.00", imageUrl: PS5_IMG, rating: 5, reviews: 325, isNew: true },
            { title: "JBL Boombox", price: "$199.00", imageUrl: JBL_IMG, rating: 4.5, reviews: 88 },
            { title: "Amazon Echo", price: "$89.00", imageUrl: ECHO_IMG, rating: 4, reviews: 145 },
            { title: "GUCCI Perfume", price: "$129.00", imageUrl: PERFUME_IMG, rating: 4.5, reviews: 99 },
          ].map((p) => (
            <ProductCard key={p.title} title={p.title} price={p.price} imageUrl={p.imageUrl} rating={p.rating} reviews={p.reviews} isNew={p.isNew} />
          ))}
        </div>
      </section>

      {/* Enhance Your Music Experience banner */}
      <section className="mt-16">
        <div className="rounded-lg bg-black p-6 ring-1 ring-border text-white overflow-hidden">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <p className="text-[16px] font-semibold text-[#00ff66]">Categories</p>
              <h3 className="mt-3 text-3xl md:text-4xl font-semibold">Enhance Your Music Experience</h3>
              <div className="mt-6 flex items-center gap-4">
                {[
                  { label: "Days", value: "05" },
                  { label: "Hours", value: "23" },
                  { label: "Minutes", value: "59" },
                  { label: "Seconds", value: "35" },
                ].map((t) => (
                  <div key={t.label} className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white text-black">
                    <span className="text-[16px] font-semibold leading-5">{t.value}</span>
                    <span className="text-[11px] leading-4 opacity-80">{t.label}</span>
                  </div>
                ))}
              </div>
              <a href="/products" className="mt-6 inline-flex items-center justify-center rounded bg-[#00ff66] px-12 py-4 text-[16px] font-medium text-white">
                Buy Now!
              </a>
            </div>
            <div>
              <ImageWithSkeleton src={JBL_IMG} alt="JBL Boombox" containerClassName="h-[330px] w-full rounded-md" imgClassName="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <SectionTitle label="Our Products" title="Explore Our Products" />
          <a 
            href="/products"
            className="rounded bg-red-500 px-8 py-3 text-sm font-medium text-white hover:bg-red-600 transition-colors"
          >
            View All Products
          </a>
        </div>
        <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {[
            { title: "PlayStation 5", price: "$499.00", imageUrl: PS5_IMG, rating: 5, reviews: 325, isNew: true },
            { title: "Women Collection", price: "$79.00", imageUrl: WOMAN_HAT_IMG, rating: 4, reviews: 55, isNew: true },
            { title: "Amazon Echo", price: "$89.00", imageUrl: ECHO_IMG, rating: 4, reviews: 145 },
            { title: "GUCCI Perfume", price: "$129.00", imageUrl: PERFUME_IMG, rating: 4.5, reviews: 99 },
            { title: "JBL Boombox", price: "$199.00", imageUrl: JBL_IMG, rating: 4.5, reviews: 88 },
            { title: "PlayStation 5", price: "$499.00", imageUrl: PS5_IMG, rating: 5, reviews: 325 },
            { title: "Women Collection", price: "$79.00", imageUrl: WOMAN_HAT_IMG, rating: 4, reviews: 55 },
            { title: "Amazon Echo", price: "$89.00", imageUrl: ECHO_IMG, rating: 4, reviews: 145 },
          ].map((p, index) => (
            <div key={`${p.title}-${index}`} className="min-w-[250px] snap-start">
              <ProductCard title={p.title} price={p.price} imageUrl={p.imageUrl} rating={p.rating} reviews={p.reviews} isNew={p.isNew} />
            </div>
          ))}
        </div>
      </section>
      
      {/* New Arrival (PS5 big left, Women top right, two small bottom) */}
      <section className="mt-16">
        <SectionTitle label="Featured" title="New Arrival" />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left PS5 */}
          <div className="relative rounded-lg bg-card p-4 ring-1 ring-border">
            <ImageWithSkeleton src={PS5_IMG} alt="PS5" containerClassName="h-[480px] w-full rounded-md" imgClassName="object-cover" />
            <div className="mt-4">
              <p className="text-lg font-semibold">PlayStation 5</p>
              <p className="text-sm text-muted-foreground">Black and White version of the PS5 coming out on sale.</p>
              <a href="/products" className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
                Shop Now
                <span className="block h-[1px] w-16 bg-foreground" />
              </a>
            </div>
          </div>
          {/* Right column */}
          <div className="grid gap-6">
            {/* Top women collection */}
            <div className="rounded-lg bg-card p-4 ring-1 ring-border">
              <ImageWithSkeleton src={WOMAN_HAT_IMG} alt="Women Collection" containerClassName="h-56 w-full rounded-md" imgClassName="object-cover" />
              <div className="mt-4"> 
                <p className="text-lg font-semibold">Women’s Collections</p>
                <p className="text-sm text-muted-foreground">Featured woman collections that give you another vibe.</p>
                <a href="/products" className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
                  Shop Now
                  <span className="block h-[1px] w-16 bg-foreground" />
                </a>
              </div>
            </div>
            {/* Bottom two cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-card p-4 ring-1 ring-border">
                <ImageWithSkeleton src={ECHO_IMG} alt="Speakers" containerClassName="h-40 w-full rounded-md" imgClassName="object-cover" />
                <div className="mt-3">
                  <p className="font-medium">Speakers</p>
                  <p className="text-sm text-muted-foreground">Amazon wireless speakers</p>
                  <a href="/products" className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
                    Shop Now
                    <span className="block h-[1px] w-16 bg-foreground" />
                  </a>
                </div>
              </div>
              <div className="rounded-lg bg-card p-4 ring-1 ring-border">
                <ImageWithSkeleton src={PERFUME_IMG} alt="Perfume" containerClassName="h-40 w-full rounded-md" imgClassName="object-cover" />
                <div className="mt-3">
                  <p className="font-medium">Perfume</p>
                  <p className="text-sm text-muted-foreground">GUCCI INTENSE OUD EDP</p>
                  <a href="/products" className="mt-2 inline-flex items-center gap-2 text-sm font-medium">
                    Shop Now
                    <span className="block h-[1px] w-16 bg-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services row (after New Arrival) */}
      <section className="mt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              title: "FREE AND FAST DELIVERY",
              desc: "Free delivery for all orders over $140",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
                  <rect x="2" y="6" width="13" height="10" rx="2" />
                  <path d="M15 10h3l3 3v3h-3" />
                  <circle cx="7" cy="19" r="2" />
                  <circle cx="18" cy="19" r="2" />
                </svg>
              ),
            },
            {
              title: "24/7 CUSTOMER SERVICE",
              desc: "Friendly 24/7 customer support",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
                  <path d="M4 12a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-3" />
                  <rect x="2" y="11" width="4" height="6" rx="1.5" />
                  <path d="M11 20h2" />
                </svg>
              ),
            },
            {
              title: "MONEY BACK GUARANTEE",
              desc: "We return money within 30 days",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
                  <path d="M12 3a9 9 0 1 0 9 9" />
                  <path d="M12 7v6l4 2" />
                </svg>
              ),
            },
          ].map((s) => (
            <div key={s.title} className="flex flex-col items-center gap-4 text-center text-foreground">
              <div className="relative h-20 w-20">
                <span className="absolute inset-0 rounded-full bg-black/10" />
                <span className="absolute inset-3 flex items-center justify-center rounded-full bg-black text-white">
                  {s.icon}
                </span>
              </div>
              <div>
                <p className="text-[20px] font-semibold leading-7">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
