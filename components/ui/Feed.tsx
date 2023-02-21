/* eslint-disable jsx-a11y/alt-text */
import Post from '../../components/ui/Post';
import { Suspense } from 'react';
import Image from 'next/image';
import { ReactNode } from 'react';
import * as React from "react"
import {
  Album,
  ListMusic,
  PlusCircle,
} from "lucide-react"

import { cn } from "../../lib/utils"
import { AspectRatio } from "../../components/ui/aspect-ratio"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../../components/ui/context-menu"

interface PostItem {
	name: string;
	username: string;
	content: string;
	description: string;
	date: string;
	src: string;
	following: string;
	followers: string;
	initials: string;
	image?: ReactNode;
}

const items: PostItem[] = [
	{
		name: 'Jane Doe',
		username: 'janedoe',
		following: '249',
		followers: '663',
		content: 'Design and build templates',
		description:
			'Improve your design skills by making projects. 1 every week, practice with me on Youtube. I use Figma, Tailwind CSS and Webflow.',
		date: '1h',
		src: 'https://res.cloudinary.com/unlimitednow/image/upload/v1670607966/site/aa7d04145690529.62a27e3b4c57f_fhaxae.jpg',
		initials: 'JD',
		image: (
			<div className="w-full relative -z-10 h-80 mb-4">
				<Image
				fill={true} 
					style={{ objectFit: 'cover' }}
					className="rounded-3xl"
					src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
					alt="Gradient"/>
			</div>
		),
	}
];


const playlists = [
	"Recently Added",
	"Recently Played",
	"Top Songs",
	"Top Albums",
	"Top Artists",
	"Logic Discography",
	"Bedtime Beats",
	"Feeling Happy",
	"I miss Y2K Pop",
	"Runtober",
	"Mellow Days",
	"Eminem Essentials",
  ]
  
interface Album {
	name: string
	artist: string
	cover: string
  }
  
  const listenNowAlbums: Album[] = [
	{
	  name: "Async Awakenings",
	  artist: "Nina Netcode",
	  cover:
		"https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?w=300&dpr=2&q=80",
	},
	{
	  name: "The Art of Reusability",
	  artist: "Lena Logic",
	  cover:
		"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80",
	},
	{
	  name: "Stateful Symphony",
	  artist: "Beth Binary",
	  cover:
		"https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
	},
	{
	  name: "React Rendezvous",
	  artist: "Ethan Byte",
	  cover:
		"https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80",
	},
  ]
  
  const madeForYouAlbums: Album[] = [
	{
	  name: "Async Awakenings",
	  artist: "Nina Netcode",
	  cover:
		"https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?w=300&dpr=2&q=80",
	},
	{
	  name: "Stateful Symphony",
	  artist: "Beth Binary",
	  cover:
		"https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
	},
	{
	  name: "Stateful Symphony",
	  artist: "Beth Binary",
	  cover:
		"https://images.unsplash.com/photo-1598062548091-a6fb6a052562?w=300&dpr=2&q=80",
	},
	{
	  name: "The Art of Reusability",
	  artist: "Lena Logic",
	  cover:
		"https://images.unsplash.com/photo-1626759486966-c067e3f79982?w=300&dpr=2&q=80",
	},
	{
	  name: "Thinking Components",
	  artist: "Lena Logic",
	  cover:
		"https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=300&dpr=2&q=80",
	},
	{
	  name: "Functional Fury",
	  artist: "Beth Binary",
	  cover:
		"https://images.unsplash.com/photo-1606542758304-820b04394ac2?w=300&dpr=2&q=80",
	},
	{
	  name: "React Rendezvous",
	  artist: "Ethan Byte",
	  cover:
		"https://images.unsplash.com/photo-1598295893369-1918ffaf89a2?w=300&dpr=2&q=80",
	},
  ]


const Feed = () => (
<> <Suspense fallback={<Loading />}>
		<ul className="[&_p:last-child]:text-slate-500 [&_p:first-child]:text-lg divide-y divide-slate-200">
			{items.map(
				(
					{
						name,
						username,
						content,
						date,
						src,
						initials,
						image,
						following,
						followers,
						description,
					},
					i,
				) => (
					<li key={`username-${i}`} className="p-4">
						<Post
							name={name}
							username={username}
							content={content}
							date={date}
							initials={initials}
							description={description}
							followers={followers}
							following={following} src={''}						>
							{image}
						</Post>
						
					</li>
				),
			)}
		</ul>
	</Suspense> <div className="relative flex space-x-4">
                        {listenNowAlbums.map((album) => (
                          <AlbumArtwork
                            key={album.name}
                            album={album}
                            className="w-[450px]"
                          />
                        ))}
                      </div><div className="w-full relative -z-10 h-80 mb-4">
				<Image
				fill={true} 
					style={{ objectFit: 'cover' }}
					className="rounded-3xl"
					src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
					alt="Gradient"/>
			</div></>
);

export default Feed;

function Loading() {
	return <h2>Loading...</h2>;
}

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
	album: Album
	aspectRatio?: number
  }
function AlbumArtwork({
	album,
	aspectRatio = 3 / 4,
	className,
	...props
  }: AlbumArtworkProps) {
	return (
	  <div className={cn("space-y-3", className)} {...props}>
		<ContextMenu>
		  <ContextMenuTrigger>
			<AspectRatio
			  ratio={aspectRatio}
			  className="overflow-hidden rounded-md"
			>
			  <Image
				src={album.cover}
				alt={album.name}
				className="object-cover transition-all hover:scale-105"
			  />
			</AspectRatio>
		  </ContextMenuTrigger>
		  <ContextMenuContent className="w-40">
			<ContextMenuItem>Add to Library</ContextMenuItem>
			<ContextMenuSub>
			  <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
			  <ContextMenuSubContent className="w-48">
				<ContextMenuItem>
				  <PlusCircle className="mr-2 h-4 w-4" />
				  New Playlist
				</ContextMenuItem>
				<ContextMenuSeparator />
				{playlists.map((playlist) => (
				  <ContextMenuItem key={playlist}>
					<ListMusic className="mr-2 h-4 w-4" /> {playlist}
				  </ContextMenuItem>
				))}
			  </ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSeparator />
			<ContextMenuItem>Play Next</ContextMenuItem>
			<ContextMenuItem>Play Later</ContextMenuItem>
			<ContextMenuItem>Create Station</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Like</ContextMenuItem>
			<ContextMenuItem>Share</ContextMenuItem>
		  </ContextMenuContent>
		</ContextMenu>
		<div className="space-y-1 text-sm">
		  <h3 className="font-medium leading-none">{album.name}</h3>
		  <p className="text-xs text-slate-500 dark:text-slate-400">
			{album.artist}
		  </p>
		</div>
	  </div>
	)
  }
  