import React from 'react';
import {serial as test} from 'ava';
import {renderToString} from 'ink';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';

test('render', t => {
	// TODO: Find out why this doesn't work to prevent color
	process.env.FORCE_COLOR = 0;
	clearModule.all();
	const BigText = require('.');

	const actual = renderToString(
		<BigText text="unicorns"/>
	);
	console.log(actual);
	t.snapshot(stripAnsi(actual));

	delete process.env.FORCE_COLOR;
});
