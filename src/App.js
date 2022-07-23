import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './route/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './components/Deatil';
import List from './components/List';
import axios from 'axios';

function App() {
	let [player, setPlayer] = useState(data);
	let navigate = useNavigate();
	return (
		<>
			<div className="modal"></div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">AT Market</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => {
								navigate('/');
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate('/detail');
							}}
						>
							Detail
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="main-bg"></div>
							<div className="container">
								<button
									onClick={() => {
										let newPlayer = [...player];
										newPlayer.sort((a, b) =>
											a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1,
										);
										setPlayer(newPlayer); // 값을 업데이트
									}}
								>
									선수정렬
								</button>
								<button
									onClick={() => {
										axios
											.get('https://codingapple1.github.io/shop/data2.json')
											.then(result => {
												let add_player = [...player];
												let new_player = [...add_player, ...result.data];
												setPlayer(new_player);
												console.log(add_player);
											})
											.catch(() => {
												console.log('실패함ㅅㅂ');
											});
									}}
								>
									버튼
								</button>

								<div className="row">
									{player.map(function (a, i) {
										return <List player={player[i]} i={i} />;
									})}
								</div>
							</div>
						</>
					}
				/>
				<Route path="/detail/:id" element={<Detail player={player} />} />
				<Route path="*" element={<div>없는 페이지 입니다.</div>} />
			</Routes>
		</>
	);
}

export default App;
