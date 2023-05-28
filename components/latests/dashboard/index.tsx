import { ClerkProvider, useUser, SignIn, SignedOut, useClerk } from '@clerk/nextjs'
import * as React from "react"
import { Check, ChevronsUpDown, PlusCircle } from "lucide-react"
import { cn } from "../../../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import { Button } from "../../../../components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../../components/ui/dialog"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"

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
company: string[];
country: string[];
}

const groups = [
{
label: "Personal Account",
teams: [
{
label: "Alicia Koch",
value: "personal",
},
],
},
{
label: "Teams",
teams: [
{
label: "Acme Inc.",
value: "acme-inc",
},
{
label: "Monsters Inc.",
value: "monsters",
},
],
},
]

type Team = (typeof groups)[number]["teams"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
const [open, setOpen] = React.useState(false)
const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
const [selectedTeam, setSelectedTeam] = React.useState<Team>(
groups[0].teams[0]
)
const { isLoaded, isSignedIn, user } = useUser()

if (!isLoaded || !isSignedIn) {
return null
}

let postData: PostData | null = null;
if (user && user.unsafeMetadata) {
postData = user.unsafeMetadata as unknown as PostData;
}

const [selectedArray, setSelectedArray] = React.useState<PostData | null>(null);
const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
const [tableTitle, setTableTitle] = React.useState('');

React.useEffect(() => {
if (selectedArray && selectedArray.galleryImgs.length > 0 && !selectedImage) {
setSelectedImage(selectedArray.galleryImgs[0]);
}
}, [selectedArray, selectedImage]);

const handleArraySelect = (array: PostData) => {
setSelectedArray(array);
setSelectedImage(null);
setTableTitle(array.title); // Update the table title when a new array is selected
};

const handleRowClick = (row: string) => {
setSelectedImage(row);
};

const findRowById = (id: string) => {
const selectedRow = selectedArray ? selectedArray.galleryImgs.find((row) => row.id === id) : null;
return (
  <>
    {postData ? (
      <>
        <p>
          <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  role="combobox"
                  aria-expanded={open}
                  aria-label="Select a team"
                  className={cn("w-[200px] justify-between", className)}
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={postData.featuredImage}
                      alt={selectedTeam.label}
                    />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  {selectedTeam.label}
                  <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
              </PopoverContent>
            </Popover>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create team</DialogTitle>
                <DialogDescription>
                  Add a new team to manage products and customers.
                </DialogDescription>
              </DialogHeader>
              <div>
                <div className="space-y-4 py-2 pb-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Team name</Label>
                    <Input id="name" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plan">Subscription plan</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="free">
                          <span className="font-medium">Free</span> -{" "}
                          <span className="text-muted-foreground">
                            Trial for two weeks
                          </span>
                        </SelectItem>
                        <SelectItem value="pro">
                          <span className="font-medium">Pro</span> -{" "}
                          <span className="text-muted-foreground">
                            $9/month per user
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </p>
      </>
    ) : (
      <>
        <p>You are not signed in.</p>
      </>
    )}
  </>
);
}

return (
<>
{findRowById(postData.id)}
</>
);
}