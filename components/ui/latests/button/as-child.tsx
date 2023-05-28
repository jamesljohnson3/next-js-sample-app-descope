import Link from "next/link"

import { Button } from "../../../../components/ui/button2"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
