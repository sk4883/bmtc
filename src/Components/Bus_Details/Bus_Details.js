import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
 export default class Bus_Details extends Component{
	constructor(args) {
		super(args);
		this.state = {
			
		};
	}

render() {
		return (

		<div className="w3-row">
			<div className="Layout w3-col s12 m10 l8" style={{marginLeft: "auto", marginRight: "auto", float: "none"}}> 
			      <div className="Form_position w3-row">
			      	<label className="w3-col s4 m4 l2">Bus Station</label>
			      	<input className="w3-col s4 m4 l2" type="text" placeholder="Bus stations"/> 
			      </div>

			      <div className="Form_position w3-row">
			         <label className="w3-col s4 m4 l2"> Bus Type</label>
			         <input className="w3-col s4 m4 l2"type="text"/> 
			      </div>

			     
			    <div className="Form_position w3-row">
			      <button className="w3-col s4 m4 l2 w3-blue"> View</button>
			    </div>
			</div>
	 </div>
			      
			   );
	     }
}