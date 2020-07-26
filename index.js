import React from 'react';
import {Text} from 'ink';
import PropTypes from 'prop-types';
import CFonts from 'cfonts';

const BigText = ({text, ...props}) => <Text>{CFonts.render(text, props).string}</Text>;

BigText.defaultProps = {
	font: 'block',
	align: 'left',
	colors: [
		'system'
	],
	backgroundColor: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	maxLength: 0
};

BigText.propTypes = {
	text: PropTypes.string.isRequired,
	font: PropTypes.oneOf([
		'block',
		'slick',
		'tiny',
		'grid',
		'pallet',
		'shade',
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
		PropTypes.string,
	),
	backgroundColor: PropTypes.oneOf([
		'transparent',
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
