import {h} from 'ink';
import PropTypes from 'prop-types';
import CFonts from 'cfonts';

// TODO: Use object spread in the future
const BigText = props => {
	const {text} = props;
	props = Object.assign({}, props);
	delete props.text;

	// Fix bad API in CFonts
	if (props.backgroundColor) {
		props.background = props.backgroundColor;
		delete props.backgroundColor;
	}

	return <span>{CFonts.render(text, props).string}</span>;
};

BigText.defaultProps = {
	font: 'block',
	align: 'left',
	colors: [],
	backgroundColor: 'black',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	maxLength: 0
};

BigText.propTypes = {
	text: PropTypes.string.isRequired,
	font: PropTypes.oneOf([
		'block',
		'simple',
		'simpleBlock',
		'3d',
		'simple3d',
		'chrome',
		'huge'
	]),
	align: PropTypes.oneOf([
		'left',
		'center',
		'right'
	]),
	colors: PropTypes.arrayOf(
		PropTypes.oneOf([
			'black',
			'red',
			'green',
			'yellow',
			'blue',
			'magenta',
			'cyan',
			'white',
			'gray',
			'candy'
		])
	),
	backgroundColor: PropTypes.oneOf([
		'black',
		'red',
		'green',
		'yellow',
		'blue',
		'magenta',
		'cyan',
		'white'
	]),
	letterSpacing: PropTypes.number,
	lineHeight: PropTypes.number,
	space: PropTypes.bool,
	maxLength: PropTypes.number
};

module.exports = BigText;
