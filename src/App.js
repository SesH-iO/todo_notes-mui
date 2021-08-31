import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';

import { theme } from './shared/Theme';

import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/'>
							<Notes />
						</Route>
						<Route path='/create'>
							<Create />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
