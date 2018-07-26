import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';

class App extends Component {
	render() {
		return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
			</header>
			
			<ul>
				<li> <Link to="/">Landing</Link> </li>
				<li> <Link to="/home">Home</Link> </li>
				<li> <Link to="/about">About</Link> </li>
				<li> <Link to="/njoy">Njoy</Link> </li>
			</ul>
			
			<Route path="/" exact={true} component={Landing} /> 
			<Route path="/home" component={Home} /> 
			<Route path="/about" component={About} /> 
			<Route path="/njoy" component={Njoy} /> 

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

const Njoy = (props) => {
	return (
		<div>
			<h1>Let's Njoy</h1>
		</div>
	);
}

export default App;
