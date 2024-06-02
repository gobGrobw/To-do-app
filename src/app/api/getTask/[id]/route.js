import TodoModel from '@/models/TodoModel';
import dbConnect from '@/lib/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	await dbConnect();
	console.log('Database connected');

	const task = await TodoModel.findById(params.id);
	return NextResponse.json({ task });
}

