'use client';
import TodosList from '@/components/TodosList';
import { useState, useEffect } from 'react';

export default function ProgressPage() {
	const [todos, setTodos] = useState([]);

	async function getTodos() {
		const query = { progress: 'In-progress' };
		try {
			const resData = await fetch(
				`/api/getTodos?${new URLSearchParams(query).toString()}`,
				{
					method: 'GET',
				}
			);
			const data = await resData.json();
			console.log(data.allTodos);
			setTodos(data.allTodos);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getTodos();
	}, []);

	return <TodosList title={'In progress'} todos={todos} />;
}

