import { cn } from "~/utils";
import { FacebookIcon, Github, InstagramIcon, Twitter, XIcon } from "lucide-react";

import { env } from "~/env.mjs";
import { Shell } from "~/islands/wrappers/shell-variants";
import { Link } from "~/navigation";

export async function SiteFooter() {
  return (
    <footer className="py-0 w-full border-t bg-background">
      <Shell as="div">


  <div className="container flex flex-col gap-2 sm:flex-row py-1 w-full shrink-0 items-center px-4 md:px-6">
    <nav className="container flex justify-center pb-1 flex-wrap gap-4 sm:gap-6">
      <Link className="text-sm hover:underline underline-offset-4" href="/terms">
        Terms of Service
      </Link>
      <Link className="text-sm hover:underline underline-offset-4" href="/privacy">
        Privacy
      </Link>

      <Link className="text-sm hover:underline underline-offset-4" href="/contact">
        Contact
      </Link>
      <Link className="text-sm hover:underline underline-offset-4" href="/impressum">
        Impressum
      </Link>
       <Link className="text-sm hover:underline underline-offset-4" href="https://docs.fleura.de" target="_self">
        Docs
      </Link>

      <Link className="text-sm hover:underline underline-offset-4" href="https://www.instagram.com/fleura_germany/">
        <InstagramIcon className="h-5 w-5" />
      </Link>
      <Link className="text-sm hover:underline underline-offset-4" href="https://www.facebook.com/fleura.germany/">
        <FacebookIcon className="h-5 w-5" />
      </Link>
      <Link className="text-sm hover:underline underline-offset-4" href="https://twitter.com/fleura_germany">
        <XIcon className="h-5 w-5" />
      </Link>
    </nav>
  </div>
  <div className="container flex justify-center pb-1">
    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Fleura. All rights reserved.</p>
  </div>

      </Shell>
    </footer>
  );
}
