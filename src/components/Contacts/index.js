import { useState, useEffect } from 'react';
import './style.css';
import List from './List';
import Form from './Form';

function Contact() {
	const [contacts, setContacts] = useState([
		{
			fullName: 'Aland Mariwan',
			number: '+491727134842',
		},
		{
			fullName: 'Tasio AG',
			number: '+491727134842',
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);
	return (
		<div id='container'>
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}
export default Contact;
