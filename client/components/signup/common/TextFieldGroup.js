import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({field, value, label, error, type, onChange}) => {
	return (
		<div className={classnames("form-group", {'has-error': error})}>
			<label className="control-label">{label}</label>
			<input 
				type={type} 
				name={field}
				className="form-control"
				onChange={onChange}
				value={value}
				/>
				{error && <span className="help-block">{error}</span>}
		</div>
	);
}

TextFieldGroup.propTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;