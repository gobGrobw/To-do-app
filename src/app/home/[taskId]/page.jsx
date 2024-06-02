'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ViewTask({ params }) {
	// Get task detail
	const [task, setTask] = useState([]);
	const linkStyle = 'underline text-blue-500 hover:text-blue-700 transition-all';
	const pathname = usePathname();

	async function getTask() {
		try {
			const resData = await fetch(`/api/getTask/${params.taskId}`);
			const data = await resData.json();
			setTask(data.task);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getTask();
	}, []);

	return (
		<main className="w-full flex flex-col items-center mt-16 mb-16">
			{/* Task name */}
			<div className="w-3/6">
				<h1 className="text-3xl font-bold">{task.task_name}</h1>
				<hr className="border-neutral-600 mt-5 mb-5" />

				{/* Wrapper */}
				<div className="w-3/6 mb-11 flex gap-3">
					<Link
						className={linkStyle}
						href={{
							pathname: '/todo-form',
							query: {
								title: 'Update Task',
								data: JSON.stringify(task),
								status: 'update',
							},
						}}
					>
						Update task
					</Link>
					<Link className={linkStyle} href={pathname + '/confirm-delete'}>
						Delete task
					</Link>
				</div>
			</div>

			<ul className="w-3/6 flex flex-col gap-3">
				{/* Progress */}
				<li className="text-lg">
					Progress:{' '}
					<span
						className={`${task.progress} pl-1 pr-1 text-white rounded-md `}
					>
						{task.progress}
					</span>
				</li>
				{/* Due date */}
				<li className="text-lg">
					Due Date: <span>{task.due_date?.slice(0, 10)}</span>
				</li>
				{/* Task description */}
				<div className="mt-10">
					<h1 className="text-2xl font-bold mb-2">Description</h1>
					<li className="text-lg">{task.desc}</li>
				</div>
			</ul>
		</main>
	);
}

