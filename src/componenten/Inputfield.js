import React from "react";

class InputField extends React.Component {
	constructor() {
		super();
		this.state = {
			input: ""
		};
	}

	render() {
		const onInput = (event) => {
			this.setState({
				input: event.target.value
			});
		};

		const onSubmit = (event) => {
			event.preventDefault();
			this.props.onSubmit(this.state.input);
			this.setState({ input: "" });
		};

		return (
			<form className="groceries-input" onSubmit={onSubmit}>
				<input
					placeholder="Voeg een boodschap toe"
					type="search"
					onChange={onInput}
					value={this.state.input}
				></input>
				<button className="submit-button" type="submit">
					Voeg toe
				</button>
			</form>
		);
	}
}

export default InputField;
