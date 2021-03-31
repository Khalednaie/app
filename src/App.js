import './App.css';
import Nav from './part/nav';
import Card from './part/card';
import Body from './part/body';
import git from './part/img/git.png';
import gamil from './part/img/gmail.png';
import linkedin from './part/img/linkedin.png';
function App() {
	return (
		<div className="App">
			<br />
			<Nav id="home" data-bs-target="#navbar-example2" />
			<br />
			<Body id="body" data-bs-target="#navbar-example2" />
			<hr />
			<br />
			<Card id="about" data-bs-target="#navbar-example2" />
			<hr />
			<br />
			<div id="conuect" data-bs-target="#navbar-example2" style={{ backgroundColor: '#b6b9a2', height: '43vh' }}>
				<a href="https://github.com/Khalednaie">
					<img className="icon" src={git} />
				</a>
				<a href="https://www.linkedin.com/in/khaled-ali-11908116a/">
					<img className="icon2" src={linkedin} />
				</a>
				<br />
				<img className="icon3" src={gamil} />
				<h4>abo.naie.93@gmail.com</h4>
			</div>
		</div>
	);
}

export default App;
