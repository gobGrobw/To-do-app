import TodoModel from '@/models/TodoModel';
import dbConnect from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function DELETE(req, { params }) {
	try {
		await dbConnect();
		console.log('Database connected');

		await TodoModel.findByIdAndDelete(params.id);
		revalidatePath('/home');
		return NextResponse.json({ msg: 'Succcess delete todo' });
	} catch (error) {
		return NextResponse.json({ error });
	}
}

