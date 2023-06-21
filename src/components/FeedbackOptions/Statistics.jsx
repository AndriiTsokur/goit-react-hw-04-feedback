import React from 'react';
import PropTypes from 'prop-types';
import calcVotes from 'utils/calcVotes';
import css from './Statistics.module.css';

export default function Statistics({ votes }) {
	const { good, neutral, bad } = votes;

	const { sumVotes, positiveShare } = calcVotes(votes);

	if (sumVotes > 0) {
		return (
			<>
				<h3 className={css.statistics__title}>Statistics</h3>

				<ul className={css.statistics__list}>
					<li className={css.statistics__item}>Good: {good}</li>
					<li className={css.statistics__item}>Neutral: {neutral}</li>
					<li className={css.statistics__item}>Bad: {bad}</li>
					<li className={css.statistics__itemBold}>Total: {sumVotes}</li>
					<li className={css.statistics__itemBold}>
						Positive feedback: {positiveShare}%
					</li>
				</ul>
			</>
		);
	}
}

Statistics.propTypes = {
	votes: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
};
