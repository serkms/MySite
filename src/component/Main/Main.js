import React from 'react'
import './Main.css'
import {Route} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";

const Main = ()=> {
	return (
		<div className='main'>
			<Route path="/home"
					 render={() =>
						 <Home/>}
			/>
			<Route path="/about"
					 render={() =>
						 <About/>}
			/>
			<Route path="/services"
					 render={() =>
						 <Services/>}
			/>
			<Route path="/blog"
					 render={() =>
						 <Blog/>}
			/>
		</div>
	)
}

export default Main