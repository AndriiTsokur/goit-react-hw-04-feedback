import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import capitalizeOptName from 'utils/capitalizeOptName';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
	const optionsNames = [...Object.keys(options)];

	return (
		<section>
			<h1 className={css.feedback__title}>Please leave feedback</h1>
			<ul className={css.feedback__buttonsList}>
				{optionsNames.map(optionName => {
					return (
						<li key={optionName}>
							<button
								className={css.item__button}
								type="button"
								onClick={onLeaveFeedback}
							>
								{capitalizeOptName(optionName)}
							</button>
						</li>
					);
				})}
			</ul>

			<Statistics votes={options} />
		</section>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
