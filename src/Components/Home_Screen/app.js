import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
export default class App extends Component{
	constructor(args) {
		super(args);
		this.state = {
			
		};
	}

	render() {
		return (
			     
			<div className="w3-row">
				<div className="Layout w3-col s8 m10 l8" style={{marginLeft: "auto", marginRight: "auto", float: "none"}}>
			     <div className="Button_Position">
			      <Link to="Search_Buses">
			        <button className="w3-button w3-blue w3-hovor-grey style"> Search Buses </button>
			      </Link>

			      <Link to="Locate_Buses">
			        <button className="w3-button w3-blue w3-hovor-grey style"> Locate Buses </button><br/>
			      </Link> 

			       <Link to="Bus_Stations">
			        <button className="w3-button w3-blue w3-hovor-grey style"> Bus stations </button>
			       </Link>

			       <Link to="Bus_Fare">
			        <button className="w3-button w3-blue w3-hovor-grey style"> Bus Fare </button>
			       </Link>
			     </div>

			    </div>
			</div>    
		
			   );
	     }

}



