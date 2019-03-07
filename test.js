import React from 'react';
import {serial as test} from 'ava';
import {render} from 'ink-testing-library';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';

test('render', t => {
	// TODO: Find out why this doesn't work to prevent color
	process.env.FORCE_COLOR = 0;
	clearModule.all();
	const BigText = require('.');

	const {lastFrame} = render(
		<BigText text="unicorns"/>
	);
	console.log(lastFrame());
	t.snapshot(stripAnsi(lastFrame()));

	delete process.env.FORCE_COLOR;
});
