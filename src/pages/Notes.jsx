import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

import Masonry from 'react-masonry-css';

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:8000/notes`)
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []); // * get data only once!

	const deleteHandler = async (id) => {
		await fetch(`http://localhost:8000/notes/${id}`, {
			method: 'DELETE',
		});

		const newNotes = notes.filter((note) => note.id != id);
		setNotes(newNotes);
	};

	const breakpoints = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'>
				{notes.map((note) => (
					<div key={note.id}>
						<NoteCard note={note} deleteHandler={deleteHandler} />
					</div>
				))}
			</Masonry>
		</Container>
	);
};

export default Notes;

/* <Grid container>
<Grid item xs={12} s={6} md={3}>
	<Paper>1</Paper>
</Grid>
<Grid item xs={12} s={6} md={3}>
	<Paper>2</Paper>
</Grid>
<Grid item xs={12} s={6} md={3}>
	<Paper>3</Paper>
</Grid>
<Grid item xs={12} s={6} md={3}>
	<Paper>4</Paper>
</Grid>
</Grid> */
