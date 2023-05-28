import * as React from "react"
import Link from "next/link"

import { cn } from "../lib/utils"
import { AccordionDemo } from "../components/ui/latests/accordion/demo"
import { AlertDialogDemo } from "../components/ui/latests/alert-dialog/demo"
import { AspectRatioDemo } from "../components/ui/latests/aspect-ratio/demo"
import { AvatarDemo } from "../components/ui/latests/avatar/demo"
import { BadgeDemo } from "../components/ui/latests/badge/demo"
import { BadgeDestructive } from "../components/ui/latests/badge/destructive"
import { BadgeOutline } from "../components/ui/latests/badge/outline"
import { BadgeSecondary } from "../components/ui/latests/badge/secondary"

export default function KitchenSinkPage() {
  return (
    <div className="container">
      <div className="grid gap-4 py-10">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="grid gap-4">
            <ComponentWrapper>
             
            </ComponentWrapper>
            <ComponentWrapper>
            </ComponentWrapper>
            <ComponentWrapper
              className="spa flex-col items-start space-x-0
				space-y-2"
            >
              <p className="text-foreground-muted text-sm">Documentation</p>
              <p className="text-sm font-medium leading-none">
                You can customize the theme using{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground">
                  CSS variables
                </code>
                .{" "}
                <Link
                  href="#"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Click here
                </Link>{" "}
                to learn more.
              </p>
            </ComponentWrapper>
            <ComponentWrapper>
            <AlertDialogDemo />

            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
           
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper className="flex-col items-start space-x-0 space-y-2">
              <div className="flex space-x-2">
              
              </div>
              <div className="flex space-x-2">
               
              </div>
              <div className="flex space-x-2">
               
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
             
            </ComponentWrapper>
            <ComponentWrapper>
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper className="[&_ul>li:last-child]:hidden">
            </ComponentWrapper>
            <ComponentWrapper className="justify-between">
           
            </ComponentWrapper>
            <ComponentWrapper>
            </ComponentWrapper>
            <ComponentWrapper>
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper>
           
            </ComponentWrapper>
          </div>
          <div className="grid gap-4">
            <ComponentWrapper>
             
            </ComponentWrapper>
            <ComponentWrapper>
            
            </ComponentWrapper>
            <ComponentWrapper className="[&>span]:h-[80px] [&>span]:w-[200px]">
            
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
               
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
                <BadgeDemo />
                <BadgeSecondary />
                <BadgeDestructive />
                <BadgeOutline />
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
            
            </ComponentWrapper>
            <ComponentWrapper className="[&>div]:w-full">
            
            </ComponentWrapper>
            <ComponentWrapper>
              <div className="flex space-x-2">
             
              </div>
            </ComponentWrapper>
            <ComponentWrapper>
            </ComponentWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentWrapper({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between space-x-4 rounded-md border p-4",
        className
      )}
    >
      {children}
    </div>
  )
}
