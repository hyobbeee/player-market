function List(props) {
	return (
		<div className="col-md-4">
			<img src={process.env.PUBLIC_URL + '/' + props.player.id + '.jpeg'} width="70%" alt="" />
			<h4>{props.player.name}</h4>
			<p>{props.player.age}</p>
			<p>{props.player.position}</p>
		</div>
	);
}
export default List;
