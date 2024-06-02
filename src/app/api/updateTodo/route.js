import dbConnect from '@/lib/dbConnect';
import TodoModel from '@/models/TodoModel';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

// Update task
export async function PUT(req) {
	try {
		// Connect to database
		await dbConnect();
		console.log('Database connected');

		const data = await req.json();
		console.log(data);

		const todo = new TodoModel({
			_id: data._id,
			user: data.userId,
			task_name: data.task_name,
			date: new Date(),
			due_date: data.due_date,
			desc: data.desc,
			progress: data.progress,
		});

		await TodoModel.findByIdAndUpdate(data._id, todo);
		revalidatePath(`/home/${data._id}`);
		return NextResponse.json({ msg: 'Success update todo' });
	} catch (error) {
		return NextResponse.json({ error });
	}
}

