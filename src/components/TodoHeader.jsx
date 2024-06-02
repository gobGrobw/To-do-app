import Link from 'next/link';

export default function TodoHeader({ children, title }) {
	return (
		<main className="flex flex-col items-center mt-16 mb-16 w-full">
			<header className="w-8/12">
				<div className="flex justify-between items-baseline">
					<h1 className="text-4xl font-bold">{title}</h1>
					<Link
						className="text-blue-700 underline hover:text-blue-800 transition-all"
						href={{
							pathname: '/todo-form',
							query: { title: 'Create task' },
						}}
					>
						Add task
					</Link>
				</div>
				<hr className="border-neutral-500 mt-5 mb-5" />
			</header>

			<section className="w-8/12">{children}</section>
		</main>
	);
}

