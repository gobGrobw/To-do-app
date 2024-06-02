'use client';

import { useEffect, useState } from 'react';
import TodosList from '@/components/TodosList';

export default function HomePage() {
	const [todos, setTodos] = useState([]);

	async function getTodos() {
		try {
			const resData = await fetch(`/api/getTodos`, { method: 'GET' });
			const data = await resData.json();
			setTodos(data.allTodos);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getTodos();
	}, []);

	return <TodosList title={'Your task'} todos={todos} />;
}

