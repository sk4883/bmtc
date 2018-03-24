import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import routes from "./routes.js";
import {Provider} from "react-redux";

//actions 





//const store = createStore(reducers, middleware);localStorage.getItem("myItem") === "null"

//const persistedState = localStorage.getItem("reduxState")  ? JSON.parse(localStorage.getItem("reduxState")) : {};


// store.subscribe(()=>{
// 	localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });
// store.subscribe(()=>{
// 	localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });
// localStorage.removeItem("tip");
render(
	<Provider>
		{routes}
	</Provider>, document.getElementById("container"));

	



