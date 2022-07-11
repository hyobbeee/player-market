import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import data from './route/data.js';

function App() {
	let [player] = useState(data);
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
					{/* {player.map(function (a, i) {
						return <List player={player[i]} i={i} />;
					})} */}
					<List />;
				</div>
			</div>
		</>
	);
}

function List(props) {
	return (
		<div className="col-md-4">
			<Nav.Link href={'detail/' + props.i} style={{ display: 'inline-block' }}>
				<img
					src={process.env.PUBLIC_URL + '/' + props.i + '.png'}
					width="70%"
					height="200px"
					alt=""
				/>
			</Nav.Link>
			<h4>{props.player.name}</h4>
			<p>{props.player.age}</p>
			<p>{props.player.position}</p>
		</div>
	);
}
export default App;
