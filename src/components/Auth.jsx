import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Auth() {
	return (
		<main className="flex gap-10 justify-center items-center h-full flex-col">
			<h1 className="text-4xl font-bold">Easy way to manage your task</h1>
			<nav className="text-2xl">
				<SignedOut>
					<SignInButton className="hover:bg-neutral-200 pl-2 pr-2 rounded-lg" />
				</SignedOut>
			</nav>
		</main>
	);
}

