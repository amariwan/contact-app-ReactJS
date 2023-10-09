import { useState } from 'react';

export function List({ contacts }) {
	const [filterText, setFilterText] = useState('');

	const filtered = contacts.filter((item) => {
		return Object.keys(item).some((key) => {
			return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
		});
	});
	return (
		<div>
			<input
				placeholder='Filter Number'
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
			/>
			<ul className='list'>
				{filtered.map((concat, i) => (
					<li key={i}>
						<span>{concat.fullName}</span>
						<span>{concat.number}</span>
					</li>
				))}
			</ul>
			<p>Total contacts({filtered.length})</p>
		</div>
	);
}

export default List;
