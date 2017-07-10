import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
	} 
	onInputChange(e){
		this.setState({term: e.target.value});
		console.log(e.target.value);
	}
	onFormSubmit(e){
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					value={this.state.term} 
					placeholder="Get a five day forecast in your favourite cities."
					className="form-control"
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}