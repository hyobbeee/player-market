import Nav from 'react-bootstrap/Nav';

function List(props) {
	return (
		<div className="col-md-4">
			<Nav.Link href={'detail/' + props.i} style={{ display: 'inline-block' }}>
				<img src={process.env.PUBLIC_URL + '/' + props.player.id + '.jpeg'} width="70%" alt="" />
			</Nav.Link>
			<h4>{props.player.name}</h4>
			<p>{props.player.age}</p>
			<p>{props.player.position}</p>
		</div>
	);
}
export default List;
