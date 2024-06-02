'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFormStatus } from 'react-dom';
import { LabelInput, LabelOption } from '@/components/LabelInput';

export default function CreateTodo() {
	const searchParams = useSearchParams();
	const title = searchParams.get('title'); // Get title
	const taskQuery = JSON.parse(searchParams.get('data')); // Get task data to fill out form automatically
	const status = searchParams.get('status'); // Check if form request is adding new task or updating task
	const router = useRouter();

	async function onSubmit(e) {
		e.preventDefault();

		// Get form value
		const formData = new FormData(e.target);

		const task = {
			task_name: formData.get('taskname'),
			due_date: formData.get('due-date'),
			desc: formData.get('desc'),
			progress: formData.get('progress'),
		};

		/**
		 * If status == update send fetch request to /updateTodo
		 * Else send fetch request to /addTodo
		 */
		if (status === 'update') {
			task.userId = taskQuery?.user;
			task._id = taskQuery?._id;

			const data = await fetch('/api/updateTodo', {
				method: 'PUT',
				body: JSON.stringify(task),
			}).then(() => {
				router.push(`/home/${task?._id}`);
			});
		} else {
			const data = await fetch('/api/addTodo', {
				method: 'POST',
				body: JSON.stringify(task),
			}).then(() => {
				router.push('/home');
			});
		}
	}

	return (
		<main className="h-full flex flex-col justify-center items-center">
			<div className="w-4/12 medium:w-8/12">
				<h1 className="text-4xl font-bold">{title}</h1>
				<hr className="border-neutral-700 mb-5 mt-5" />
			</div>

			<form onSubmit={onSubmit} className="w-4/12 flex flex-col gap-5 medium:w-8/12">
				{/* Task name */}
				<LabelInput
					id={'taskname'}
					name={'Task name'}
					placeholder={'Buy grocery...'}
					value={taskQuery?.task_name}
				></LabelInput>

				{/* Due date */}
				<LabelInput
					id={'due-date'}
					name={'Due date'}
					inputType={'date'}
					value={taskQuery?.due_date.slice(0, 10)}
				></LabelInput>

				{/* Description */}
				<LabelInput
					id={'desc'}
					name={'Description'}
					inputType={'textarea'}
					placeholder={'Buy 1kg of tomatoes, 2kg of rice, etc ... '}
					value={taskQuery?.desc}
				></LabelInput>

				{/* Progress */}
				<LabelOption
					name={'Progress'}
					id={'progress'}
					value={taskQuery?.progress}
				></LabelOption>

				{/* Submit button */}
				<SubmitButton>{title}</SubmitButton>
			</form>

			<Link
				className="flex mt-10 underline text-blue-800 hover:text-blue-600"
				href={'/home'}
			>
				Back home
			</Link>
		</main>
	);
}

function SubmitButton({ children }) {
	const { pending } = useFormStatus();

	return (
		<button
			className="cursor-pointer text-lg text-white bg-blue-800 pt-1 pb-1 pl-2 pr-2 rounded-lg hover:bg-blue-700 transition-all"
			type="submit"
			aria-disabled={pending}
		>
			{children}
		</button>
	);
}

