import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
	TextField,
	FormControlLabel,
	Container,
	Typography,
	Radio,
	RadioGroup,
	FormLabel,
	FormControl,
	Button,
} from '@material-ui/core'; // * is a Components
import { makeStyles } from '@material-ui/core'; // * is a function
import ArrowForwardIosRounded from '@material-ui/icons/ArrowForwardIosRounded';

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	},
	btn: {
		fontSize: 20,
		fontWeight: 700,
	},
});

const Create = () => {
	const classes = useStyles();
	const history = useHistory();
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [errorTitle, setErrorTitle] = useState(false);
	const [errorDetails, setErrorDetails] = useState(false);
	const [category, setCategory] = useState('todos');

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrorTitle(false);
		setErrorDetails(false);

		if (title === '') {
			setErrorTitle(true);
		}

		if (details === '') {
			setErrorDetails(true);
		}

		if (title && details) {
			fetch(`http://localhost:8000/notes`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ title, details, category }),
			}).then(() => history.push('/'));
		}
	};

	return (
		<Container>
			<Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
				Create a New Note
			</Typography>

			<form noValidate autoComplete='off' onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					className={classes.field}
					label='Note Title'
					variant='outlined'
					color='secondary'
					fullWidth
					required
					autoFocus
					error={errorTitle}
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					className={classes.field}
					label='Details'
					variant='outlined'
					color='secondary'
					multiline
					minRows={4}
					fullWidth
					required
					error={errorDetails}
				/>

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
						<FormControlLabel control={<Radio />} label='Money' value='money' />
						<FormControlLabel control={<Radio />} label='Todos' value={'todos'} />
						<FormControlLabel control={<Radio />} label='Reminders' value='reminders' />
						<FormControlLabel control={<Radio />} label='Work' value='work' />
					</RadioGroup>
				</FormControl>

				<Button
					className={classes.btn}
					type='submit'
					color='secondary'
					variant='contained'
					endIcon={<ArrowForwardIosRounded />}>
					Submit
				</Button>
			</form>
		</Container>
	);
};

export default Create;
