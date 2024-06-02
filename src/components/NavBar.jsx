'use client';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function NavBar({ showBar }) {
	const linkStyle = 'hover:bg-blue-800 rounded-sm transition-all pt-1 pb-1';

	return (
		<nav
			className={`p-2 flex flex-col w-48 bg-blue-950 text-white h-full medium:absolute ${
				showBar ? 'medium:translate-x-0' : 'medium:-translate-x-48'
			}`}
		>
			<div className="p-1 flex gap-2 justify-center items-center medium:mt-12">
				<SignedIn>
					<UserButton />
				</SignedIn>
				<p className="text-lg font-bold">Welcome</p>
			</div>

			<ul className="flex flex-col gap-3 mt-10 text-center">
				{/* Loads all task */}
				<Link className={linkStyle} href={'/home'}>
					Home
				</Link>

				{/* Load completed task */}
				<Link className={linkStyle} href={'/home/complete'}>
					Completed
				</Link>

				{/* Load in-progress task */}
				<Link className={linkStyle} href={'/home/progress'}>
					In-Progress
				</Link>
			</ul>
		</nav>
	);
}

