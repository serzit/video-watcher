import React from 'react';

class SearchBar extends React.Component {
	state = {
		input: ''
	};

	onInputChange = event => {
		this.setState({
			input: event.target.value
		})
	};

	onFormSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.input}
							onChange={this.onInputChange}/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar