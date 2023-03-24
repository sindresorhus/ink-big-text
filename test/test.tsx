import process from 'node:process';
import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';
import BigText from '../source/index.js';

test('render', t => {
	// TODO: Find out why this doesn't work to prevent color
	process.env.FORCE_COLOR = '0';
	clearModule.all();
	// Const BigText = require('.');

	const {lastFrame} = render(<BigText text='unicorns'/>);
	console.log(lastFrame());
	t.snapshot(stripAnsi(lastFrame()));

	delete process.env.FORCE_COLOR;
});
