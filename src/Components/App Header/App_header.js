import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
 export default class AppHeader extends Component{
	constructor(args) {
		super(args);
		this.state = {
			getUrlValue: ""
		};
	}

	componentDidMount(){
		console.log("this---", window.location.hash);
		var myString = window.location.hash
		var parts    = myString.split('/');
		var answer   = parts[parts.length - 1];
		console.log("answer", answer);
		this.state.getUrlValue = "";
		this.setState({
			getUrlValue: answer
		});
	}

render() {
		return (
	      <div className="w3-row">
			<div className="Layout w3-col s12 m10 l8" style={{marginLeft: "auto", marginRight: "auto", float: "none"}}>   

			      
                   <div className="Form_position w3-row">
                     <Link to="Search_Buses">
                       <button className={(this.state.getUrlValue === "Search_Buses") ? "w3-col s2 m2 l2 w3-blue": "w3-col s2 m2 l2"}> Search Buses </button>
                         </Link>
			          	 <div className="w3-col s1 m1 l1">
			          	 	&nbsp;
			          	 </div>
			          <Link to="Locate_Buses">
			          <button className={(this.state.getUrlValue === "Locate_Buses") ? "w3-col s2 m2 l2 w3-blue": "w3-col s2 m2 l2"}> Locate Buses</button>
			          </Link>
			          
                      <div className="w3-col s1 m1 l1">&nbsp;</div>
                      
                      <Link to="Bus_Stations">
			          <button className={(this.state.getUrlValue === "Bus_Stations") ? "w3-col s2 m2 l2 w3-blue": "w3-col s2 m2 l2"}> Bus Stations </button>
			          </Link>
			          
			          <div className="w3-col s1 m1 l1">&nbsp;</div>
                      
                      <Link to="Bus_Fare">
                      <button className={(this.state.getUrlValue === "Bus_Fare") ? "w3-col s2 m2 l2 w3-blue": "w3-col s2 m2 l2"}> Fare Details </button>
                      </Link>
                      <div className="w3-col s1 m1 l1">&nbsp;</div>
			      </div>
			 </div>
	  </div>		      
			   );
	     }
}