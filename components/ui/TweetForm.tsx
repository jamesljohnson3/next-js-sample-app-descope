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
    router.push('/start');
  };


  
  return (
    <div className={TweetFormStyles({ width })}>
      <Avatar src={profileImageUrl} alt={fullName} initials="RQ" />
      <form className="flex flex-col flex-1 gap-y-4">
        <div className="flex flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="E.g. Anything"
            className="w-full px-4 py-3 text-xl border-transparent placeholder:text-slate-600 outline-0 focus:outline-none appearance-none focus:ring-0 focus:border-transparent"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4 px-4">
            <Link href="https://accounts.unlimitpotential.com/upload">
              <RiImage2Line className="w-5 h-5" />
              <span className="sr-only">Image</span>
            </Link>
            <Link href="https://accounts.unlimitpotential.com/upload">
              <RiFileGifLine className="w-5 h-5" />
              <span className="sr-only">Gif</span>
            </Link>
            <Link href="https://lillieai-betav1b.unlimitpotential.com/abilene">
              <RiChatPollLine className="w-5 h-5" />
              <span className="sr-only">Poll</span>
            </Link>
            <Link href="https://accounts.unlimitpotential.com/upload">
              <RiEmotionLine className="w-5 h-5" />
              <span className="sr-only">Emoji</span>
            </Link>
            <Link href="https://lillieai-betav1b.unlimitpotential.com/recent">
              <RiMapPin2Line className="w-5 h-5" />
              <span className="sr-only">Tag location</span>
            </Link>
          </div>
          <div>
            <button
              disabled={!input}
              onClick={handleBoostClick}
              className="inline-flex items-center font-bold rounded-full border px-4 py-2 text-sm bg-slate-900 text-white border-transparent disabled:opacity-50 transition-opacity duration-200"
            >
              Do more
            </button>
          </div>
        </div>
      </form>

	  </div>
	);
}

export default TweetForm;
