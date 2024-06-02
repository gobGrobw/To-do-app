'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DeleteTodo({ params }) {
	// Fetch request to delete task
	const router = useRouter();

	async function onSubmit() {
		const data = await fetch(`/api/deleteTodo/${params.taskId}`, {
			method: 'DELETE',
		});
		router.push('/home');
	}

	return (
		<form
			action={onSubmit}
			className="flex justify-center items-center gap-5 w-full flex-col"
		>
			<label htmlFor="taskId" className="text-4xl font-bold">
				Confirm deletion
			</label>
			<p className="text-xl">Are you sure you want to delete this task?</p>
			<input type="hidden" id="taskId" name="taskId" value={params.taskId} />

			<div className="flex flex-col">
				<button
					type="submit"
					className="pl-2 pr-2 pt-1 pb-1 bg-blue-600 rounded-lg text-white font-bold"
				>
					Delete
				</button>
				<Link
					className="underline text-blue-500 mt-5 hover:text-blue-700 transition-all"
					href={`/home/${params.taskId}`}
				>
					Go back
				</Link>
			</div>
		</form>
	);
}

