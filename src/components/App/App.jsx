import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/FeedbackOptions/Statistics';
import css from './App.module.css';

export const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const handleButtons = e => {
		const targetBtn = e.target.innerText.toLowerCase();
		setFeedback({ ...feedback, [targetBtn]: feedback[targetBtn] + 1 });
	};

	return (
		<div className={css.feedback__container}>
			<section>
				<FeedbackOptions options={feedback} onLeaveFeedback={handleButtons} />
				<Statistics votes={feedback} />
			</section>
		</div>
	);
};
