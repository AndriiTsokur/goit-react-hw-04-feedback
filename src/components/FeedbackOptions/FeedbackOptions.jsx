import React from 'react';
import PropTypes from 'prop-types';
import capitalizeOptName from 'utils/capitalizeOptName';
import handleMouseOut from 'utils/handleMouseOut';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
	const optionsNames = [...Object.keys(options)];

	return (
		<>
			<h1 className={css.feedback__title}>Please leave feedback</h1>
			<ul className={css.feedback__buttonsList}>
				{optionsNames.map(optionName => {
					return (
						<li key={optionName}>
							<button
								className={css.item__button}
								type="button"
								onClick={onLeaveFeedback}
								onMouseOut={handleMouseOut}
							>
								{capitalizeOptName(optionName)}
							</button>
						</li>
					);
				})}
			</ul>
		</>
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
