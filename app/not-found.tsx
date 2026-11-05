import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="max-w-xl">
      <h1 className="font-serif text-3xl font-semibold">This page is not in the booklet.</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        The address does not match a topic or a practice page.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-5")}>
        Back to the start
      </Link>
    </div>
  );
}
