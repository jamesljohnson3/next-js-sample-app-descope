/* eslint-disable react/no-unescaped-entities */
import Avatar from '../ui/radix/Avatar';
import Link from 'next/link';
import { RiImage2Line, RiFileGifLine, RiChatPollLine, RiEmotionLine, RiMapPin2Line } from 'react-icons/ri';
import { cva } from 'class-variance-authority';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {  useUser } from "@clerk/clerk-react";

const TweetFormStyles = cva('flex flex-1 gap-x-2', {
  variants: {
    width: {
      default: 'p-4 border-b border-slate-200',
      full: '',
    },
  },
  defaultVariants: {
    width: 'default',
  },
});

function TweetForm({ width }: { width: 'default' | 'full' }) {
  const { user } = useUser();
const username = user?.username ?? '';
const profileImageUrl = user?.profileImageUrl ?? '';

const fullName = user?.fullName ?? '';
  
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const handleBoostClick = async () => {
    // Send the data to the server
    await fetch('https://unlimitpotntlj.dataplane.rudderstack.com/v1/webhook?writeKey=2M3y8qFArUXO1kdLgUe0RPiFt97', {
      method: 'POST',
      body: JSON.stringify({ text: input, username }),
    });

    // Navigate to the home page
    router.push('/home');
  };


  
  return (
    <div className={TweetFormStyles({ width })}>
      <Avatar src={profileImageUrl} alt={fullName} initials="RQ" />
      <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
            <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
              You're in control.
            </h2>
            <p className="mt-4 text-lg">
              All of your stats are displayed in an easy to understand
              dashboard. Make decisions with confidence.
            </p>
            <img
              className="mt-6 lg:mt-14"
              src="https://i.imgur.com/5JzWVvz.png"
              alt=""
            />
          </div>

	  </div>
	);
}

export default TweetForm;
