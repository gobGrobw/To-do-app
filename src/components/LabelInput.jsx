import { useState } from 'react';

export function LabelInput({ id, name, placeholder, inputType, value }) {
	const inputStyle = 'border-2 border-slate-700 p-1 rounded-lg';
	const [inputValue, setValue] = useState(value ?? '');

	function onChange(e) {
		setValue(e.target.value);
	}

	return (
		<div className="flex flex-col">
			<label htmlFor={id} className="text-lg">
				{/* Capitalize first letter */}
				{name}
			</label>
			{inputType === 'textarea' ? (
				<textarea
					className={inputStyle}
					name={id}
					id={id}
					cols={50}
					placeholder={placeholder}
					value={inputValue}
					onChange={onChange}
					required
				></textarea>
			) : (
				<input
					className={inputStyle}
					type={inputType || 'text'}
					id={id}
					name={id}
					value={inputValue}
					onChange={onChange}
					placeholder={placeholder}
					required
				/>
			)}
		</div>
	);
}

export function LabelOption({ id, name, value }) {
	const [optValue, setOptValue] = useState(value);

	function onChange(e) {
		setOptValue(e.target.value);
	}

	return (
		<div className="flex flex-col">
			<label htmlFor={id}>{name}</label>
			<select
				className="border-2 border-slate-700 rounded-lg p-1 bg-transparent"
				name={id}
				id={id}
				value={optValue}
				onChange={onChange}
			>
				<option value="Complete">Complete</option>
				<option value="In-progress">In Progress</option>
			</select>
		</div>
	);
}

