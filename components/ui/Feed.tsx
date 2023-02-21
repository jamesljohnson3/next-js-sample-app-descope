/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@nextui-org/react';
import Post from '../ui/Post';
import { ReactNode } from 'react';
import { Suspense } from 'react';

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
					src="https://res.cloudinary.com/unlimitednow/image/upload/v1670607966/site/aa7d04145690529.62a27e3b4c57f_fhaxae.jpg"
				/>
			</div>
		),
	}
];

const Feed = () => (
	<Suspense fallback={<Loading />}>
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
							src={src}
							initials={initials}
							description={description}
							followers={followers}
							following={following}
						>
							{image}
						</Post>
					</li>
				),
			)}
		</ul>
	</Suspense>
);

export default Feed;

function Loading() {
	return <h2>Loading...</h2>;
}
