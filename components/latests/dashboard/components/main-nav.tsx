import Link from "next/link"

import { cn } from "../../../../lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="https://connect.unlimitpotential.com/stats"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="https://connect.unlimitpotential.com/leads"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="https://connect.unlimitpotential.com/feed"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="https://connect.unlimitpotential.com/collections"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Campaigns
      </Link>
    </nav>
  )
}
