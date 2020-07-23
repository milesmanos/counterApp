import React, { Component } from 'react'

class CountButton extends Component {

	render() {
		return(
			<button onClick={this.props.change}>{this.props.name}</button>
		)
	}

}

export default CountButton