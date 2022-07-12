exports.handler = async (event) => {

	const data = {
		state: "before",
		starttime: "123",
	}
	return {
		statusCode: 200,
		body: JSON.stringify(data),
		headers: {
			"access-control-allow-origin": "*",
		},
	};
};
/*
exports.handler = async (event) => {
	// https://dev.to/weaponxii/handling-cors-with-netlify-post-requests-39ld
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
	};
	const data = {
		state: "before",
		starttime: "",
	}
	if (event.httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ message: "Successful preflight call." }),
		};
	} else if (event.httpMethod === "POST") {
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify(data),
		};
	}
};
*/