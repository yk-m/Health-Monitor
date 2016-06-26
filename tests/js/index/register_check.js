$(function(){
	//submitしたときに呼び出される関数を設定
	//falseを返すとキャンセルされる
	$(".login form").submit(function(){
		if(!$("input[name=username]").val().match(/^[0-9a-zA-Z]{2,32}$/)
		|| !$("input[name=password]").val().match(/^[0-9a-zA-Z]{8,32}$/)){
			alert("入力エラー");
			return false;
		}
		return true;
	});
});