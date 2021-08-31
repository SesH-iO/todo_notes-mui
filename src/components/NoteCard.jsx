import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { yellow, green, pink, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
	avatar: {
		backgroundColor: (note) => {
			if (note.category == 'work') {
				return yellow[700];
			}
			if (note.category == 'money') {
				return green[500];
			}
			if (note.category == 'todos') {
				return pink[500];
			}
			return blue[500];
		},
	},
});

const NoteCard = ({ note, deleteHandler }) => {
	const classes = useStyles(note);

	return (
		<div>
			<Card elevation={2}>
				<CardHeader
					avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>}
					action={
						<IconButton onClick={() => deleteHandler(note.id)}>
							<DeleteOutlined />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant='body2' color='textSecondary'>
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default NoteCard;
