import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Navbar from './Navbar.js';

class App extends Component {
	render() {
		return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
			</header>

			<Navbar />
			
		
			
			<Route path="/" exact={true} component={Landing} /> 
			<Route path="/home" component={Home} /> 
			<Route path="/about" component={About} /> 
			<Route path="/cats" component={Cats} /> 
			<Route path="/cats/:cat" component={SpecificCat} /> 

		</div>
		);
	}
}

const Landing = (props) => {
	return (
		<div>
			<h1>Landing Page...</h1>
		</div>
	);
}

const Home = (props) => {
	return (
		<div>
			<h1>Welcome home</h1>
		</div>
	);
}

const About = (props) => {
	return (
		<div>
			<h1>About this app...</h1>
		</div>
	);
}

const formatAsLink = (toUrl,name) => {
	return <li><Link to={`${toUrl}/${name}`}>{name}</Link></li>
}

const Cats = (props) => {

	let allCats = [
		'Bernie',
		'Ernie',
		'Hank'
	];

	return (
		<div>
			<h1>Njoy Cats</h1>
			<ul>
				{allCats.map(cat => formatAsLink(props.match.url, cat))}
			</ul>
		</div>
	);
}

const SpecificCat = (props) => {
	console.log(props);
	return (
		<div>
			<h1>It's a specific cat..</h1>
			<h2>{props.match.params.cat}</h2>
		</div>
	);
}

export default App;
