import React from 'react';
import './card.css';
function Card() {
	return (
		<div className="card">
			<img src="" class="card-img-top" alt="" />
			<div className="card-body">
				<h5 className="card-title">card tital</h5>
				<p className="card-text">detales</p>
				<a href="/" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
export default Card;
