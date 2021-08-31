import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { format } from 'date-fns';
import { Avatar, makeStyles } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';

import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import img from '../alex-suprun-ZHvM3XIOHoE-unsplash.jpg';

const drawWidth = 340;

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: 'flex',
		},
		page: {
			backgroundColor: '#f9f9f9',
			width: '100%',
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawWidth,
		},
		drawerPaper: {
			width: drawWidth,
		},
		active: {
			backgroundColor: '#f4f4f4',
		},
		title: {
			padding: theme.spacing(2),
		},
		appbar: {
			width: `calc(100% - ${drawWidth}px)`,
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: 1,
		},
		avatar: {
			marginLeft: theme.spacing(2),
		},
	};
});

const Layout = ({ children }) => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const menuItems = [
		{ text: 'My Notes', icon: <SubjectOutlined color='secondary' />, path: '/' },
		{ text: 'Create Note', icon: <AddCircleOutlineOutlined color='secondary' />, path: '/create' },
	];

	return (
		<div className={classes.root}>
			{/* App Bar */}
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography className={classes.date}>
						Today is the {format(new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>Alex</Typography>
					<Avatar src={img} className={classes.avatar} />
				</Toolbar>
			</AppBar>

			{/* Side Drawer */}
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='left'
				classes={{ paper: classes.drawerPaper }}>
				<div>
					<Typography variant='h5' align='center' gutterBottom className={classes.title}>
						Todo Notes
					</Typography>
				</div>

				{/* Lists / Links */}
				<List>
					{menuItems.map((item) => (
						<ListItem
							key={item.text}
							button
							onClick={() => history.push(item.path)}
							className={location.pathname == item.path ? classes.active : null}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar} />
				{children}
			</div>
		</div>
	);
};

export default Layout;
