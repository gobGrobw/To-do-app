import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema({
	user: { type: String },
	task_name: { type: String },
	date: { type: Date },
	due_date: { type: Date },
	desc: { type: String },
	progress: { type: String },
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default TodoModel;

