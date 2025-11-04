import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { ABOUT_STORY_IMAGE, ABOUT_TOM_IMAGE, ABOUT_EMMA_IMAGE, ABOUT_WILL_IMAGE } from "@/lib/figmaAssets";

export default function About() {
  return (
    <div className="py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-foreground mb-8">
        Home &gt; About
      </div>

      {/* Our Story */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
        <div>
          <h1 className="text-5xl font-semibold mb-10">Our Story</h1>
          <p className="text-base mb-6">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className="text-base">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <ImageWithSkeleton 
          src={ABOUT_STORY_IMAGE} 
          alt="Our Story" 
          containerClassName="h-[500px] w-full rounded-lg" 
          imgClassName="object-cover"
        />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {[
          { number: "10.5k", label: "Sallers active our site" },
          { number: "33k", label: "Mopnthly Produduct Sale" },
          { number: "45.5k", label: "Customer active in our site" },
          { number: "25k", label: "Anual gross sale in our site" },
        ].map((stat) => (
          <div key={stat.label} className="rounded border border-border p-6 text-center">
            <p className="text-3xl font-bold">{stat.number}</p>
            <p className="mt-3 text-base">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
        {[
          { name: "Tom Cruise", role: "Founder & Chairman", image: ABOUT_TOM_IMAGE },
          { name: "Emma Watson", role: "Managing Director", image: ABOUT_EMMA_IMAGE },
          { name: "Will Smith", role: "Product Designer", image: ABOUT_WILL_IMAGE },
        ].map((person) => (
          <div key={person.name} className="rounded-lg overflow-hidden bg-[#F5F5F5] dark:bg-neutral-800">
            <div className="h-[430px] w-full bg-[#F5F5F5] dark:bg-neutral-800">
              <ImageWithSkeleton 
                src={person.image} 
                alt={person.name} 
                containerClassName="h-full w-full pt-4 px-4" 
                imgClassName="object-contain object-top"
              />
            </div>
            <div className="p-6 pt-8">
              <p className="text-[32px] font-medium leading-[30px] tracking-[0.04em] text-foreground">{person.name}</p>
              <p className="text-base mt-2 text-foreground">{person.role}</p>
              {/* Social icons */}
              <div className="mt-4 flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M7 10.2222V13.7778H9.66667V20.2222H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2657 13.2932 8.09427 13.4198 7.96758C13.5465 7.84089 13.7179 7.76999 13.8967 7.76999H16.7778V4.21444H13.8967C12.6191 4.21444 11.3938 4.72157 10.4973 5.61807C9.60078 6.51458 9.09365 7.73991 9.09365 9.01749V10.2222H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M11.9998 15.5C12.9281 15.5 13.818 15.1313 14.4744 14.4749C15.1308 13.8185 15.4995 12.9283 15.4995 12C15.4995 11.0717 15.1308 10.1815 14.4744 9.52513C13.818 8.86875 12.9281 8.5 11.9998 8.5C11.0714 8.5 10.1816 8.86875 9.52519 9.52513C8.86881 10.1815 8.50006 11.0717 8.50006 12C8.50006 12.9283 8.86881 13.8185 9.52519 14.4749C10.1816 15.1313 11.0714 15.5 11.9998 15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.99988 15.5V8.5C4.99988 7.57174 5.36863 6.68153 6.02501 5.99639C6.68139 5.31125 7.5716 4.9425 8.49986 4.9425H15.4999C16.4281 4.9425 17.3183 5.31125 17.9747 5.99639C18.6311 6.68153 18.9998 7.57174 18.9998 8.5V15.5C18.9998 16.4283 18.6311 17.3185 17.9747 18.0036C17.3183 18.6887 16.4281 19.0575 15.4999 19.0575H8.49986C7.5716 19.0575 6.68139 18.6887 6.02501 18.0036C5.36863 17.3185 4.99988 16.4283 4.99988 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M16.5 7.75C16.7071 7.75 16.875 7.58211 16.875 7.375C16.875 7.16789 16.7071 7 16.5 7C16.2929 7 16.125 7.16789 16.125 7.375C16.125 7.58211 16.2929 7.75 16.5 7.75Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                  <path d="M11.0489 7.92705C10.6115 8.40091 10.3611 9.02511 10.3496 9.67607C10.3382 10.327 10.5665 10.9598 10.9872 11.4481L11.0475 11.5154L21.4956 21.9635L21.5625 22.0222C21.9471 22.3179 22.4406 22.4462 22.9272 22.3783C23.4138 22.3103 23.8536 22.0516 24.1493 21.667C24.445 21.2824 24.5733 20.8043 24.5053 20.3177C24.4373 19.8311 24.1787 19.3913 23.794 19.0956L23.7353 19.0369L13.287 8.58849L13.2272 8.52128C12.7524 8.09797 12.1354 7.86296 11.4945 7.86296C10.8536 7.86296 10.2366 8.09797 9.76177 8.52128L11.0489 7.92705Z" fill="currentColor"/>
                  <path d="M21.533 2.53395L14.238 9.82895L14.179 9.89616C13.7557 10.3709 13.5207 10.9879 13.5207 11.6288C13.5207 12.2697 13.7557 12.8867 14.179 13.3615L14.238 13.4287L11.0428 16.6239L10.9756 16.5567C9.73417 15.3153 9.06305 13.6337 9.09984 11.8915C9.13663 10.1493 9.87807 8.49566 11.1726 7.30395L18.4676 0.00895111C18.677 -0.200379 18.9586 -0.313879 19.2508 -0.313879C19.543 -0.313879 19.8246 -0.200379 20.034 0.00895111L21.533 1.50795C21.7424 1.71732 21.8559 1.99893 21.8559 2.29115C21.8559 2.58336 21.7424 2.86497 21.533 3.07434V2.53395Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
              <span className="absolute inset-0 rounded-full bg-black/10 dark:bg-white/10" />
              <span className="absolute inset-3 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black">
                {s.icon}
              </span>
            </div>
            <div>
              <p className="text-[20px] font-semibold leading-7">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
