import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import List from './components/List';

import data from './route/data.js';

function App() {
	let [player, setPlayer] = useState(data);
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">AT Market</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<div className="main-bg"></div>
			<div className="container">
				<div className="row">
					{player.map(function (a, i) {
						return <List player={player[i]} i={i} />;
					})}
				</div>
			</div>
		</>
	);
}

export default App;
