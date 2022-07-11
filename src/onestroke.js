exports.handler = async () => {
	const data = {
		state: "before",
		starttime: "",
	}
	return {
		statusCode: 200,
		body: JSON.stringify(data)
	};
};