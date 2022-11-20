export default function Cards(props) {
	return (
		<div className="card--one">
			<div className="heroshotContainer">
				<img className="card-img-one" src={props.img} alt="" />
				<h4 className="soldout">{props.sell}</h4>
			</div>
			<div className="stars">
				<img className="star-img" src={props.star} alt="" />
				<h4 className="stars-title">
					{props.rating} <span className="grey">{props.span}</span>
				</h4>
			</div>

			<div className="card-description">
				<h3 className="title-offer one">{props.desc}</h3>
				<h3 className="title-offer">
					<span className="two">{props.price}</span> {props.per}
				</h3>
			</div>
		</div>
	);
}
