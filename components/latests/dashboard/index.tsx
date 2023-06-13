import Image from "next/image"
import { Activity, CreditCard, DollarSign, Download, Users } from "lucide-react"

import { Button } from "../../../components/ui/button"
import Box from "./edit-testing";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { Search } from "./components/search"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"
import { ClerkProvider, useUser, SignIn, SignedOut, useClerk } from '@clerk/nextjs'


interface PostData {
  index: number;
  id: string;
  featuredImage: string;
  title: string;
  desc: string;
  date: string;
  href: string;
  commentCount: number;
  viewedCount: number;
  readingTime: number;
  bookmark: { count: number; isBookmarked: boolean };
  like: { count: number; isLiked: boolean };
  authorId: number;
  categoriesId: number[];
  postType: string;
  galleryImgs: string[];
  company:string[];
  country:string[];
}



export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }


  let postData: PostData | null = null;
  if (user && user.unsafeMetadata) {
    postData = user.unsafeMetadata as unknown as PostData;
  }

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button size="sm">
              <a href={postData.href} type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
          {postData.desc} 
          </a>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Quick Edit</TabsTrigger>
             <a href="https://space.unlimitpotential.com/blueprints" ><TabsTrigger value="analytics" disabled>
               Use A.I.
              </TabsTrigger>
              </a> <a href="https://console.unlimitpotential.com/start" target="_blank" rel="noreferrer" >
              <TabsTrigger value="notifications" disabled>
               Go to Console
              </TabsTrigger></a>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
               <Box/>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
