export default function calcVotes(votes) {
	const calcResult = {
		sumVotes: 0,
		positiveShare: 0,
	};

	for (const key in votes) {
		calcResult.sumVotes += votes[key];
	}

	calcResult.positiveShare = Math.round(
		(votes.good / calcResult.sumVotes) * 100
	);

	return calcResult;
}
