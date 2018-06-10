import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">click on tiles</h1>
					<button className="button" type="button">Reset</button>
				</header>
				<div className="container">
					<div className="wrapper">
						<div className="content">
							<ul className="tile-row">
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>	
							</ul>
							<ul className="tile-row">
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>	
							</ul>
							<ul className="tile-row">
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>	
							</ul>
							<ul className="tile-row">
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>
								<li className="tile-row__link">
									<a href="#" className="tile-row__item"></a>
								</li>	
							</ul>
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

export default App;
