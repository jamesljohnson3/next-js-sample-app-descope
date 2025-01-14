import { ReactNode } from 'react';
import DialogDemo from '../ui/radix/Dialog';
import PopoverDemo from '../ui/radix/PopoverDemo';
import NavItem from './NavItem';
import AccountNavItem from './AccountNavItem';
import { Image } from '@nextui-org/react';
import { UserButton,  useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

import { SiTwitter } from 'react-icons/si';
import {
	HiOutlineHome,
	HiHashtag,
	HiOutlineBell,
	HiOutlineEnvelope,
	HiOutlineBookmark,
	HiOutlineUser,
} from 'react-icons/hi2';

interface NavLinkItem {
	href: string;
	text: string;
	icon?: ReactNode;
}

const items: NavLinkItem[] = [
	{
		href: 'https://go.unlimitpotential.com/studio',
		text: 'Studio',
		icon: <HiOutlineHome className="w-6 h-6" />,
	},
	{
		href: 'https://explore.unlimitpotential.com/',
		text: 'Explore',
		icon: <HiHashtag className="w-6 h-6" />,
	},
	{
		href: '/notifications',
		text: 'Notifications',
		icon: <HiOutlineBell className="w-6 h-6" />,
	},
	{
		href: '/messages',
		text: 'Messages',
		icon: <HiOutlineEnvelope className="w-6 h-6" />,
	},
	{
		href: '/bookmarks',
		text: 'Bookmarks',
		icon: <HiOutlineBookmark className="w-6 h-6" />,
	},
	{
		href: '/profile',
		text: 'Profile',
		icon: <HiOutlineUser className="w-6 h-6" />,
	},
];

const Nav = () => (
	<header className="hidden sm:flex w-24 xl:col-span-2">
		<div className="flex flex-1 xl:w-60 flex-col fixed h-full">
			<div className="flex flex-col flex-1">
				<NavItem href="https://unlimitpotential.com" width="inline" size="default">
				<Image src="https://res.cloudinary.com/unlimitednow/image/upload/v1673587332/favicon_upb50k.png"   alt="gallery"
      width={80}
      height={60} />
	
				</NavItem>
				{items.map(({ href, text, icon }, i) => (
					<div
						key={`header-${i}`}
						// value={`item-${i + 1}`}
						className="rounded-lg focus:outline-none overflow-hidden"
					>
					  <SignedIn>	<NavItem href={href} width="inline" size="default">
							{icon}
							<div className="hidden xl:inline-flex flex-none text-lg font-medium">
								{text}
							</div>
						</NavItem></SignedIn>
					</div>
				))}
				<PopoverDemo />
				<DialogDemo />
			</div>
			<div>
			<a href="https://unlimitpotential.com">	© 2023 Unlimited Now</a>

			</div>
		</div>
	</header>
);

export default Nav;
