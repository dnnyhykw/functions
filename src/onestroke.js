exports.handler = async (event) => {

	let text1 = '※表示に問題がある場合はページの再読み込みを試してみてください。';
	let text2 = '※ページを再度読み込んでください。';

	let textError1 = '※現在、トラッキング作業におきまして予期せぬトラブルが発生しております。全力で復旧に努めておりますが、まだ回復の目処は立っておりません。今しばらくお待ちいただけますと幸いです。';
	let textError2 = '※トラッキング作業におきまして予期せぬトラブルが発生しておりました。全力で復旧に努めましたが残念ながら回復不可能なエラーと判明した次第です。プロジェクトを応援してくださっているみなさまには大変ご不便をおかけしてしまい申し訳ありませんが、ご理解いただけますと幸いです。本チャレンジの結果につきましては本日中あるいは後日、こちらのページおよびレッドブル公式SNSアカウントにてお知らせいたしますので、引き続きご愛顧のほどお願い申し上げます。';

	const data = {
		state: "during", //before, during, after, error
		starttime: "2022/7/12 16:27:00",
		showtime: false,
		text: text1,
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