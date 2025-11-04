import Container from "@/components/Container";
import { FOOTER_QR, FOOTER_APP_STORE, FOOTER_GOOGLE_PLAY } from "@/lib/figmaAssets";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand + Subscribe */}
          <div>
            <p className="text-2xl font-bold tracking-wide">Exclusive</p>
            <p className="mt-6 text-lg font-medium">Subscribe</p>
            <p className="mt-2 text-sm">Get 10% off your first order</p>
            <div className="mt-4 flex items-center gap-3 rounded border border-white/80 px-3 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent placeholder-white/60 focus:outline-none"
              />
              <button aria-label="Send" className="text-white/80">→</button>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-lg font-medium">Support</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <p className="text-lg font-medium">Account</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="/account">My Account</a></li>
              <li><a href="/login">Login / Register</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/wishlist">Wishlist</a></li>
              <li><a href="/products">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <p className="text-lg font-medium">Quick Link</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Download App + Socials */}
          <div>
            <p className="text-lg font-medium">Download App</p>
            <p className="mt-2 text-xs opacity-70">Save $3 with App New User Only</p>
            <div className="mt-4 flex items-center gap-3">
              <ImageWithSkeleton src={FOOTER_QR} alt="QR code" containerClassName="h-20 w-20 rounded bg-black p-1" imgClassName="object-contain" />
              <div className="flex flex-col gap-2">
                <ImageWithSkeleton src={FOOTER_GOOGLE_PLAY} alt="Get it on Google Play" containerClassName="h-10 w-[110px] rounded bg-[#030406] p-1" imgClassName="object-contain" />
                <ImageWithSkeleton src={FOOTER_APP_STORE} alt="Download on the App Store" containerClassName="h-10 w-[110px] rounded bg-black p-1" imgClassName="object-contain" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <a aria-label="Facebook" href="#" className="hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8H16V5H14C11.79 5 10 6.79 10 9V11H8V14H10V21H13V14H15.5L16 11H13V9C13 8.45 13.45 8 14 8Z" fill="white"/>
                </svg>
              </a>
              <a aria-label="Twitter" href="#" className="hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.95C21.35 6.24 20.65 6.43 19.92 6.52C20.67 6.07 21.24 5.36 21.51 4.5C20.81 4.92 20.04 5.23 19.22 5.41C18.56 4.7 17.6 4.25 16.55 4.25C14.52 4.25 12.88 5.89 12.88 7.92C12.88 8.2 12.91 8.47 12.96 8.73C9.78 8.57 7 7.12 5.13 4.91C4.82 5.44 4.65 6.06 4.65 6.72C4.65 7.98 5.3 9.09 6.29 9.76C5.69 9.74 5.12 9.58 4.61 9.31V9.35C4.61 11.12 5.87 12.56 7.54 12.89C7.23 12.97 6.89 13.01 6.54 13.01C6.29 13.01 6.05 12.99 5.82 12.95C6.31 14.36 7.67 15.42 9.26 15.45C8 16.43 6.41 17.01 4.67 17.01C4.38 17.01 4.09 17 3.81 16.97C5.41 18.02 7.34 18.62 9.42 18.62C16.54 18.62 20.32 13.05 20.32 8.36C20.32 8.2 20.31 8.04 20.3 7.88C21 7.36 21.6 6.7 22 5.95Z" fill="white"/>
                </svg>
              </a>
              <a aria-label="Instagram" href="#" className="hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 2H17C20 2 22 4 22 7V17C22 20 20 22 17 22H7C4 22 2 20 2 17V7C2 4 4 2 7 2ZM17 4H7C5.35 4 4 5.35 4 7V17C4 18.65 5.35 20 7 20H17C18.65 20 20 18.65 20 17V7C20 5.35 18.65 4 17 4ZM17.5 6.5C18.05 6.5 18.5 6.95 18.5 7.5C18.5 8.05 18.05 8.5 17.5 8.5C16.95 8.5 16.5 8.05 16.5 7.5C16.5 6.95 16.95 6.5 17.5 6.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="white"/>
                </svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.94 6.5C6.94 7.6 6.05 8.5 4.94 8.5C3.83 8.5 2.94 7.6 2.94 6.5C2.94 5.39 3.83 4.5 4.94 4.5C6.05 4.5 6.94 5.39 6.94 6.5ZM7.06 9.5H2.81V21H7.06V9.5ZM13.47 9.5H9.32V21H13.47V15.35C13.47 12.54 17.11 12.29 17.11 15.35V21H21.25V14.31C21.25 8.85 14.87 9.06 13.47 11.84V9.5Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/40 py-4 text-center text-sm opacity-80">
          Copyright Rimel 2022. All right reserved
        </div>
      </Container>
    </footer>
  );
}


