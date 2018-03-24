import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AppHeader from "./../App Header/App_Header.js"
 export default class Bus_Stations extends Component{
	constructor(args) {
		super(args);
		this.state = {
			
		};
	}

render() {
		return (
	<div>
 		<AppHeader />
		<div className="w3-row">
			<div className="Layout w3-col s12 m10 l8" style={{marginLeft: "auto", marginRight: "auto", float: "none"}}>
			     <div className="Form_position w3-row">
			        <label className="w3-col s4 m6 l2">Bus Stations </label>
			        <input className="w3-col s4 m6 l2" type="text" placeholder="From"/> <br/>
			     </div>
			     
			     <div className="Form_position w3-row">
			        <label className="w3-col s4 m6 l2">Route No </label>
			        <input className="w3-col s4 m6 l2" type="text" placeholder="500 D" /> <br />
			     </div> 
			     
			     <div className="Form_position w3-row">
			      <button className="w3-col s4 m6 l2 w3-blue"> Search </button>
			    </div>

			</div>
		</div>
	</div>	      
			   );
	     }
}