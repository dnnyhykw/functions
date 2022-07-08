exports.handler = async () => {
	const data = { live: true }
	return {
		statusCode: 200,
		body: JSON.stringify(data)
	};
};