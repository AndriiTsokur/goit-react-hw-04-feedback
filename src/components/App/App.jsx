import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/FeedbackOptions/Statistics';
import css from './App.module.css';

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleButtons = e => {
		const targetBtn = e.target.innerText.toLowerCase();
		this.setState(prevState => ({ [targetBtn]: prevState[targetBtn] + 1 }));
	};

	render() {
		return (
			<div className={css.feedback__container}>
				<section>
					<FeedbackOptions
						options={this.state}
						onLeaveFeedback={this.handleButtons}
					/>
					<Statistics votes={this.state} />
				</section>
			</div>
		);
	}
}
