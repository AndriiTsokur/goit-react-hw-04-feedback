import React from 'react';
import PropTypes from 'prop-types';
import calcVotes from 'utils/calcVotes';
import css from './Statistics.module.css';

export function Statistics({ votes }) {
	const { good, neutral, bad } = votes;

	const { sumVotes, positiveShare } = calcVotes(votes);

	return (
		<>
			<h2 className={css.statistics__title}>Statistics:</h2>

			{sumVotes === 0 ? (
				<p className={css.statistics__item}>No feedback given</p>
			) : (
				<ul className={css.statistics__list}>
					<li className={css.statistics__item}>Good: {good}</li>
					<li className={css.statistics__item}>Neutral: {neutral}</li>
					<li className={css.statistics__item}>Bad: {bad}</li>
					<li className={css.statistics__itemBold}>Total: {sumVotes}</li>
					<li className={css.statistics__itemBold}>
						Positive feedback: {positiveShare}%
					</li>
				</ul>
			)}
		</>
	);
}

Statistics.propTypes = {
	votes: PropTypes.exact({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
};
