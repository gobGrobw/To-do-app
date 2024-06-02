import dbConnect from '@/lib/dbConnect';
import TodoModel from '@/models/TodoModel';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(req) {
	await dbConnect();
	console.log('Database connected');

	const { userId } = getAuth(req);
	const searchParams = req.nextUrl.searchParams;

	const query = searchParams.get('progress');
	if (query) {
		const allTodos = await TodoModel.find({
			user: userId,
			progress: query,
		}).sort({ date: -1 });
		return NextResponse.json({ allTodos });
	} else {
		const allTodos = await TodoModel.find({ user: userId }).sort({ date: -1 });
		return NextResponse.json({ allTodos });
	}
}

