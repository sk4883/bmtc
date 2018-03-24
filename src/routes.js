import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
	HashRouter
} from "react-router-dom";

import App from "./Components/Home_Screen/app.js";
import Search_Buses from "./Components/Search Buses/Search_Buses.js"
import Bus_Stations from "./Components/Bus Stations/Bus_Stations.js"
import Bus_Fare from "./Components/Bus_Fare/Bus_Fare.js"
import Locate_Buses from "./Components/Locate_Buses/Locate_Buses.js"
import Add_Buses from "./Components/Add_Buses/Add_Buses.js"
import Add_Route from "./Components/Add_Route/Add_Route.js"
import Bus_Status from "./Components/Bus_Status/Bus_Status.js"
import Bus_Details from "./Components/Bus_Details/Bus_Details.js"
import Add_Stops from "./Components/Add_Stops/Add_Stops.js"

const appRoutes = [
	{
		path: "/",
		isExactPath: true,
		component: <App />
	
	},

	{
		path: "/Search_Buses",
		isExactPath: true,
		component: <Search_Buses />
	
	},
	{
		path: "/Bus_Stations",
		isExactPath: true,
		component: <Bus_Stations />
	
	},

	{
		path: "/Bus_Fare",
		isExactPath: true,
		component: <Bus_Fare />
	
	},

	{
		path: "/Locate_Buses",
		isExactPath: true,
		component: <Locate_Buses />
	
	},

	{
		path: "/Add_Buses",
		isExactPath: true,
		component: <Add_Buses />
	
	},

	{
		path: "/Add_Route",
		isExactPath: true,
		component: <Add_Route />
	
	},

	{
		path: "/Bus_Status",
		isExactPath: true,
		component: <Bus_Status />
	
	},

	{
		path: "/Bus_Details",
		isExactPath: true,
		component: <Bus_Details />
	
	},

	{
		path: "/Add_Stops",
		isExactPath: true,
		component: <Add_Stops />
	
	},

	
];


const routes = (
	<HashRouter>
		<Switch>
			{appRoutes.map((routeItem, idx) => {
				return <Route
					key={routeItem.path}
					path={routeItem.path}
					exact={routeItem.isExactPath}
					render={(params) => {
						return routeItem.component;
					}}
				/>;
			})}
		</Switch>
	</HashRouter>
);

export default routes;