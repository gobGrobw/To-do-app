'use client';
import NavBar from '@/components/NavBar';
import { useState } from 'react';

export default function HomeLayout({ children }) {
	const [showBar, setShowBar] = useState(true);

	function onClick() {
		setShowBar(!showBar);
	}

	return (
		<main className="h-full flex">
			<button
				className="size-0 medium:absolute medium:z-10 medium:m-2 medium:p-2"
				onClick={onClick}
			>
				<div
					className={`border-2 h-1 m-1 w-6 ${
						showBar ? 'border-white' : 'border-black'
					}`}
				></div>
				<div
					className={`border-2 h-1 m-1 w-6 ${
						showBar ? 'border-white' : 'border-black'
					}`}
				></div>
				<div
					className={`border-2 h-1 m-1 w-6 ${
						showBar ? 'border-white' : 'border-black'
					}`}
				></div>
			</button>
			<NavBar showBar={showBar} />
			{children}
		</main>
	);
}

