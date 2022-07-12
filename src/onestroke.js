exports.handler = async (event) => {

	const data = {
		state: "error", //before, during, after, error
		starttime: "2022/7/12 12:00:00",
		text: "※現在、トラッキング作業におきまして予期せぬトラブルが発生しております。全力で復旧に努めておりますが、まだ回復の目処は立っておりません。今しばらくお待ちいただけますと幸いです。",
		//"※表示に問題がある場合はページの再読み込みを試してみてください。",
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