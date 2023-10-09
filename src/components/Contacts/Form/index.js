import { useState, useEffect } from 'react';

const defaultFormValues = { fullName: '', number: '' };
function Form({ addContact, contacts }) {
	//console.log(addContact)
	const [form, setForm] = useState({ fullName: '', number: '' });

	useEffect(() => {
		setForm(defaultFormValues);
	}, [contacts]);

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.fullName === '' || form.number === '') {
			return false;
		}

		addContact([...contacts, form]);
	};
	return (
		<div>
			<form>
				<div>
					<input
						name='fullName'
						placeholder='Fullname'
						onChange={onChangeInput}
						value={form.fullName}
					/>
				</div>
				<div>
					<input
						name='number'
						placeholder='Number'
						onChange={onChangeInput}
						value={form.number}
					/>
				</div>
				<div className='btn'>
					<button onClick={onSubmit}>Add</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
