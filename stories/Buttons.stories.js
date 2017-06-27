import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button.js';

import HTMLButtonDefaultPrimary from '../components/button/button-default-primary.html';
import HTMLButtonDefaultWhite from '../components/button/button-default-white.html';
import HTMLButtonDefaultGray from '../components/button/button-default-gray.html';
import HTMLButtonDefaultPositive from '../components/button/button-default-positive.html';
import HTMLButtonDefaultNegative from '../components/button/button-default-negative.html';
import HTMLButtonDefaultWarning from '../components/button/button-default-warning.html';

import HTMLButtonOutlinePrimary from '../components/button/button-outline-primary.html';
import HTMLButtonOutlineGray from '../components/button/button-outline-gray.html';
import HTMLButtonOutlinePositive from '../components/button/button-outline-positive.html';
import HTMLButtonOutlineNegative from '../components/button/button-outline-negative.html';

import HTMLButtonOutlineRoundedPrimary from '../components/button/button-outline-rounded-primary.html';
import HTMLButtonOutlineRoundedGray from '../components/button/button-outline-rounded-gray.html';
import HTMLButtonOutlineRoundedPositive from '../components/button/button-outline-rounded-positive.html';
import HTMLButtonOutlineRoundedNegative from '../components/button/button-outline-rounded-negative.html';


import HTMLButtonDefaultPrimaryDisabled from '../components/button/button-default-primary-disabled.html';
import HTMLButtonDefaultWhiteDisabled from '../components/button/button-default-white-disabled.html';
import HTMLButtonDefaultGrayDisabled from '../components/button/button-default-gray-disabled.html';
import HTMLButtonDefaultPositiveDisabled from '../components/button/button-default-positive-disabled.html';
import HTMLButtonDefaultNegativeDisabled from '../components/button/button-default-negative-disabled.html';
import HTMLButtonDefaultWarningDisabled from '../components/button/button-default-warning-disabled.html';

import HTMLButtonOutlinePrimaryDisabled from '../components/button/button-outline-primary-disabled.html';
import HTMLButtonOutlineGrayDisabled from '../components/button/button-outline-gray-disabled.html';
import HTMLButtonOutlinePositiveDisabled from '../components/button/button-outline-positive-disabled.html';
import HTMLButtonOutlineNegativeDisabled from '../components/button/button-outline-negative-disabled.html';

import HTMLButtonOutlineRoundedPrimaryDisabled from '../components/button/button-outline-rounded-primary-disabled.html';
import HTMLButtonOutlineRoundedGrayDisabled from '../components/button/button-outline-rounded-gray-disabled.html';
import HTMLButtonOutlineRoundedPositiveDisabled from '../components/button/button-outline-rounded-positive-disabled.html';
import HTMLButtonOutlineRoundedNegativeDisabled from '../components/button/button-outline-rounded-negative-disabled.html';


let examples = {
	// Default buttons
	'Primary Default': {
		jsx: <ReactButton onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultPrimary
	},
	'Primary Default Disabled': {
		jsx: <ReactButton onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultPrimaryDisabled,
		displayTitle: false
	},
	'White Default': {
		jsx: <ReactButton color='white' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultWhite
	},
	'White Default Disabled': {
		jsx: <ReactButton color='white' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultWhiteDisabled,
		displayTitle: false
	},
	'Gray Default': {
		jsx: <ReactButton color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultGray
	},
	'Gray Default Disabled': {
		jsx: <ReactButton color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultGrayDisabled,
		displayTitle: false
	},
	'Positive Default': {
		jsx: <ReactButton color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultPositive
	},
	'Positive Default Disabled': {
		jsx: <ReactButton color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultPositiveDisabled,
		displayTitle: false
	},
	'Negative Default': {
		jsx: <ReactButton color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultNegative
	},
	'Negative Default Disabled': {
		jsx: <ReactButton color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultNegativeDisabled,
		displayTitle: false
	},
	'Warning Default': {
		jsx: <ReactButton color='warning' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultWarning
	},
	'Warning Default Disabled': {
		jsx: <ReactButton color='warning' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultWarningDisabled,
		displayTitle: false
	},

	// Outline buttons
	'Primary Outline': {
		jsx: <ReactButton btnType='outline' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlinePrimary
	},
	'Primary Outline Disabled': {
		jsx: <ReactButton btnType='outline' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlinePrimaryDisabled,
		displayTitle: false
	},
	'Gray Outline': {
		jsx: <ReactButton btnType='outline' color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineGray
	},
	'Gray Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineGrayDisabled,
		displayTitle: false
	},
	'Positive Outline': {
		jsx: <ReactButton btnType='outline' color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlinePositive
	},
	'Positive Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlinePositiveDisabled,
		displayTitle: false
	},
	'Negative Outline': {
		jsx: <ReactButton btnType='outline' color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineNegative
	},
	'Negative Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineNegativeDisabled,
		displayTitle: false
	},
	// Outline rounded buttons
	'Primary Outline Rounded': {
		jsx: <ReactButton btnType='outline-rounded' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPrimary
	},
	'Primary Outline Rounded Disabled': {
		jsx: <ReactButton btnType='outline-rounded' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPrimaryDisabled,
		displayTitle: false
	},
	'Gray Outline Rounded': {
		jsx: <ReactButton btnType='outline-rounded' color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedGray
	},
	'Gray Outline Rounded Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedGrayDisabled,
		displayTitle: false
	},
	'Positive Rounded Outline': {
		jsx: <ReactButton btnType='outline-rounded' color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPositive
	},
	'Positive Rounded Outline Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPositiveDisabled,
		displayTitle: false
	},
	'Negative Rounded Outline': {
		jsx: <ReactButton btnType='outline-rounded' color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedNegative
	},
	'Negative Rounded Outline Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedNegativeDisabled,
		displayTitle: false
	}
};

const Buttons = () => (
		<Examples examples={examples} />
);

export default Buttons;