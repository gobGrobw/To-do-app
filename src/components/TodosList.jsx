import Link from 'next/link';
import TodoHeader from './TodoHeader';

export default function TodosList({ title, todos }) {
	return (
		<TodoHeader title={title}>
			{todos.length === 0 ? (
				<p>You currently have no task</p>
			) : (
				<ul className="w-full">
					<li className="grid grid-cols-4 text-center mb-4">
						<p>Due Date</p>
						<p>Task name</p>
						<p>Progress</p>
						<p>Detail</p>
					</li>
					{todos.map((todo, i) => {
						return (
							<li
								className="grid grid-cols-4 text-center mb-4"
								key={i}
							>
								{/* Due date */}
								<p>{todo.due_date.slice(0, 10)}</p>
								{todo.task_name.length > 20 ? (
									<p>{todo.task_name.slice(0, 21)}...</p>
								) : (
									<p>{todo.task_name}</p>
								)}
								<p
									className={`detail-btn ${todo.progress} medium:m-0`}
								>
									{todo.progress}
								</p>
								<Link
									className="underline text-blue-500 hover:text-blue-700 transition-all"
									href={`/home/${todo._id}`}
								>
									View Detail
								</Link>
							</li>
						);
					})}
				</ul>
			)}
		</TodoHeader>
	);
}

