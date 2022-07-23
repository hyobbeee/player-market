import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Deatil(props) {
	let { id } = useParams();
	let findItem = props.player.find(find => find.id == id);

	let [num, setNum] = useState('');
	useEffect(() => {
		console.log(num);
		if (isNaN(num) == true) {
			alert(`don't do that`);
		}
	});

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img src={process.env.PUBLIC_URL + `/${id}.jpeg`} width="70%" alt="" />
					</div>
					<div className="col-md-6">
						<input
							onChange={e => {
								setNum(e.target.value);
							}}
						/>
						<h4 className="pt-5">{findItem.name}</h4>
						<p>{findItem.age}</p>
						<p>{findItem.position}</p>
						<button className="btn btn-danger">주문하기</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Deatil;
