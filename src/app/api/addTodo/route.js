import dbConnect from '@/lib/dbConnect';
import TodoModel from '@/models/TodoModel';
import { getAuth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

// Add a new task to Database
export async function POST(req) {
	try {
		// Connect to database
		await dbConnect();
		console.log('Database connected');

		// Get user ID
		const { userId } = getAuth(req);

		const data = await req.json();

		const todo = new TodoModel({
			user: userId,
			task_name: data.task_name,
			date: new Date(),
			due_date: data.due_date,
			desc: data.desc,
			progress: data.progress,
		});

		await todo.save();
		revalidatePath('/home');
		return NextResponse.json({msg: 'Success add todo'})
	} catch (error) {
		return NextResponse.json({error})
	}
}

