export default function Cards(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className="card--one">
			<div className="heroshotContainer">
				<div className="containerImg">
					{badgeText && <span className="soldout"> {badgeText}</span>}
					<img
						className="card-img-one"
						src={`../public/images/${props.item.coverImg}`}
						alt=""
					/>
				</div>

				<div className="details">
					<div className="stars">
						<img className="star-img" src={props.star} alt="" />
						<h4 className="stars-title title-offer rating">
							{props.item.stats.rating}
						</h4>
						<h4 className="grey title-offer ">
							({props.item.stats.reviewCount}) • {props.item.location}
						</h4>
					</div>

					<div className="card-description">
						<h4 className="title-offer one">{props.item.title}</h4>
						<h4 className="title-offer">
							<span className="two">${props.item.price}</span> / per
							person
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
