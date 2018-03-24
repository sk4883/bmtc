import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import AppHeader from "./../App Header/App_Header.js"
 export default class Search_Buses extends Component{
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
			      <label className="w3-col s4 m4 l2"> Source </label>
			      <input className="w3-col s4 m4 l2" type="text" placeholder="From" />  <br />
			   </div>

			   <div className="Form_position w3-row">
			      <label className="w3-col s4 m4 l2"> Destination </label>
			      <input className="w3-col s4 m4 l2"  type="text" placeholder="To" />  <br />
			   </div>

			   <div className="Form_position w3-row">
			      <label className="w3-col s4 m4 l2"> Via routes </label>&nbsp;&nbsp;&nbsp;
			      <input className="w3-col s4 m4 l2" type="text" placeholder="Routes" />  &nbsp; <label className="Tips"> Optional </label> <br/>
			   </div>

			   <div className=" w3-row Form_position">
			      <button className="w3-col s4 m4 l2 w3-Blue w3-hovor-grey"> Search </button>
			   </div>
            </div>
	  </div>
</div>
			   );
	     }
	 }
