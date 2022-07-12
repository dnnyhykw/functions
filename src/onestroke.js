exports.handler = async (event) => {

	let text1 = '※表示に問題がある場合はページの再読み込みを試してみてください。';
	let text2 = '※ページを再度読み込んでください。';

	let textError1 = '※現在、トラッキング作業におきまして予期せぬトラブルが発生しております。全力で復旧に努めておりますが、まだ回復の目処は立っておりません。今しばらくお待ちいただけますと幸いです。';
	let textError2 = '※トラッキング作業におきまして予期せぬトラブルが発生しておりました。全力で復旧に努めましたが残念ながら回復不可能なエラーと判明した次第です。プロジェクトを応援してくださっているみなさまには大変ご不便をおかけしてしまい申し訳ありませんが、ご理解いただけますと幸いです。本チャレンジの結果につきましては本日中あるいは後日、こちらのページおよびレッドブル公式SNSアカウントにてお知らせいたしますので、引き続きご愛顧のほどお願い申し上げます。';

	const data = {
		state: "during", //before, during, after, error
		starttime: "2022/7/13 04:50:00",
		showtime: true, //true, false
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