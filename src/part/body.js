import React from 'react';
import './body.css';
import img1 from './img/html.png';
import img2 from './img/react.png';
import img3 from './img/node.png';
import img4 from './img/bootstrap.png';
import img5 from './img/exprees.png';
import img6 from './img/mtsql.png';
import img7 from './img/db.png';
export default function Body() {
	return (
		<div className="container-fluid" style={{ backgroundColor: '#bfbfa2c9' }}>
			<div className="row">
				<div className="col-sm">
					<img className="img" src={img1} />
					<img className="img2" src={img2} />
					<img className="img4" src={img4} />
					<img className="img3" src={img3} />
					<img className="img5" src={img5} />
					<img className="img6" src={img6} />
					<img className="img7" src={img7} />
					{/* <img className="img6" src={} /> */}
				</div>
				<div className="col">
					<h1 className="textariea">Hi</h1>
					<h2 className="textariea">I am Khaled Ali,full stack web developer</h2>
					<h4 className="textariea">I learned the code through RBK & Anera java script</h4>
					<h4 className="textariea">
						in frontend react.js ,bootstrap and material-ui and backend node.Js, Mysql and mongoDB
					</h4>
				</div>
			</div>
		</div>
	);
}

// git push --set-upstream master master
