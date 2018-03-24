import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
 export default class Add_Stops extends Component{
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
			      	<label className="w3-col s4 m4 l2">Source</label>
			      	<input className="w3-col s4 m4 l2" type="text" placeholder="From"/> 
			      </div>

			      <div className="Form_position w3-row">
			         <label className="w3-col s4 m4 l2"> Stops</label>
			         <input className="w3-col s4 m4 l2" type="text" /> 
			      </div>
			     <div className="Form_position w3-row">
			         <input className="w3-col s4 m4 l2 " type="text"  placeholder="Km"/>
			         <button className="w3-col s4 m4 l2"> Add </button>
			      </div>

			      
			      <div  className="Form_position w3-row">
			         <label className="w3-col s4 m4 l2"> Destination </label> 
			         <input className="w3-col s4 m4 l2" type="text"/> 
			      </div>

			     <div  className="Form_position w3-row">
			         <button className="w3-col s4 m4 l2"> Add </button>
			         <button className="w3-col s4 m4 l2 btn_Style"> Update </button>
			     </div>
			</div>
		</div>
			      
			   );
	     }
}