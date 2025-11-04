import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Container>
        <div className="py-16">
          {/* Breadcrumb */}
          <div className="mb-16 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">404 Error</span>
          </div>

          {/* 404 Content */}
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Large 404 Text */}
            <h1 className="text-[110px] font-medium leading-none tracking-wider text-foreground mb-10">
              404 Not Found
            </h1>

            {/* Description */}
            <p className="mb-12 text-base text-foreground">
              Your visited page not found. You may go home page.
            </p>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded bg-red-500 px-12 py-4 text-base font-medium text-white hover:bg-red-600 transition-colors"
            >
              Back to home page
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

