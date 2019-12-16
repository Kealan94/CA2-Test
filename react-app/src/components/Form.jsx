import React    from 'react';
import ReactDOM from 'react-dom';

let MNMLogo = 'http://www.mercurynewmedia.com/images/default-source/logos/mercury-logo-circle-201x201.png';

class Form extends React.Component {
	// React components are simple functions that take in props and state, and render HTML
	render() {
		return (
			<div>{/* React components must have a wrapper node/element */}

				<div className="Form">
					<label htmlFor="simpleInput">Simple Label</label> {/* for is reserved in JS, so htmlFor must be used */}
					<input type="text" className="form-control" id="simpleInput" />
				</div>
				<div className="form-group">
					<button type="button" className="btn btn-primary" disabled={true}>Submit</button> {/* Some form attributes use an expression to set true or false: they include disabled, required, checked and readOnly */}
				</div>
				<p className="help-block" dangerouslySetInnerHTML={{__html: 'Please submit<span class="text-danger">your</span> information here.'}} />{/* This inserts raw HTML and is also a self-closing tag */}
			</div>
		);
	}
}
export default Form;