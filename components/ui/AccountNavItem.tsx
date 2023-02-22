/* eslint-disable react-hooks/rules-of-hooks */
import Avatar from '../ui/radix/Avatar';
import Link from 'next/link';
import {  useUser } from "@clerk/clerk-react";

import { HiOutlineEllipsisHorizontal } from 'react-icons/hi2';
const { user } = useUser();
const profileImageUrl = user?.profileImageUrl ?? '';
  
const AccountNavItem = () => (
	<div className="flex flex-1 items-center gap-x-2 px-4 py-8 ">
		<div className="flex items-center gap-x-3 flex-1">
			<div className="flex flex-1 xl:flex-none justify-center xl:justify-start">
				<Avatar
					src={profileImageUrl}
					alt="Roy Quilor"
					initials="RQ"
				/>
			</div>
			<div className="hidden xl:flex flex-col ">
				<p className="text-base font-semibold">Roy Quilor</p>
				<p className="text-sm text-slate-600 font-medium">@RoyQuilor</p>
			</div>
		</div>
		<div className="hidden xl:flex">
			<Link href="/">
				<HiOutlineEllipsisHorizontal className="w-6 h-6" />
			</Link>
		</div>
	</div>
);

export default AccountNavItem;
