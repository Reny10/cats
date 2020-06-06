import React,{ Component } from 'react';
import CounterButton from './CounterButton.js';

class Header extends Component{
	render(){
		console.log('Header')
		return (
			<div><h1 className='f1'>Cats</h1>
			<CounterButton color={'red'}/>
			</div> 	);
	}}
export default Header;
