import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AppHeader from "./../App Header/App_Header.js"
 export default class Locate_Buses extends Component{
	constructor(args) {
		super(args);
		this.state = {
			
		};
	}

render() {
		return (

		<div>
		  <AppHeader/>
	      <div className="w3-row">
			  <div className="Layout w3-col s12 m10 l8" style={{marginLeft: "auto", marginRight: "auto", float: "none"}}> 

			   <div className="Form_position w3-row">
			      <label className="w3-col s4 m4 l2">From</label>
			      <input className="w3-col s4 m4 l2" type="text" placeholder="Your Location"/>  <br/>
			   </div> 

			   <div className="Form_position w3-row">
			      <label className="w3-col s4 m4 l2"> Bus Stop </label>
			      <input className="w3-col s4 m4 l2" type="text" />&nbsp; 
			      <label className="Tips"> Auto Update </label>
			   </div>

			   <div className="Form_position w3-row">  
			      <label className="w3-col s4 m4 l2"> Destination </label>
			      <input className="w3-col s4 m4 l2" type="text" placeholder="To"/>
			   </div>

			   <div className="Form_position w3-row">  
			      <label className="w3-col s4 m4 l2"> Route No </label> 
			      <input className="w3-col s4 m4 l2" type="text" placeholder="optional"/>
			   </div>

			   <div className="Form_position w3-row"> 
			      <button className="w3-col s4 m4 l2 w3-Blue"> Search </button>
			   </div>
			</div>
	   </div>
	 </div>    
			   );
	     }
}