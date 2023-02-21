/* eslint-disable jsx-a11y/alt-text */
import { Image } from '@nextui-org/react';
import Post from '../ui/Post';
import { ReactNode } from 'react';
import { Suspense } from 'react';
import { builder, BuilderComponent } from '@builder.io/react'
import { BuilderContent } from '@builder.io/sdk';
builder.init('c1b3106624e34af79d2e33c90a9e9021')


export const getStaticProps = async (context: { resolvedUrl: any; }) => {
	const content = await builder.get('sections', { url: context.resolvedUrl }).promise();
  
	return { 
	  props: { content }, 
	  revalidate: true,
	  notFound: !content
	}
  }
  
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

const Feed = (props: { content: BuilderContent | undefined; }) => (
	<><BuilderComponent
			content={props.content}
			model="sections" /></>
);

export default Feed;

function Loading() {
	return <h2>Loading...</h2>;
}
