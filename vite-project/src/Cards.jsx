export default function Cards(props) {
	const available = props.openSpots > 0 ? 'Book now' : 'Sold out';

	return (
		<div className="card--one">
			<div className="heroshotContainer">
				<div className="containerImg">
					<span className="soldout"> {available}</span>
					<img
						className="card-img-one"
						src={`../public/images/${props.coverImg}`}
						alt=""
					/>
				</div>

				<div className="details">
					<div className="stars">
						<img className="star-img" src={props.star} alt="" />
						<h4 className="stars-title title-offer rating">
							{props.rating}
						</h4>
						<h4 className="grey title-offer ">
							({props.reviewCount}) • {props.location}
						</h4>
					</div>

					<div className="card-description">
						<h4 className="title-offer one">{props.title}</h4>
						<h4 className="title-offer">
							<span className="two">${props.price}</span> / per
							person
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
