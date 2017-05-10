$( document ).ready(function( $ ) {
		$( '#full' ).sliderPro({
			width: '100%',//横幅
			arrows: true,//左右の矢印を出す
			fade: true,//フェードを使用するか否か
			fadeDuration: 1000,//フェードアニメーションの時間
			buttons: true,//ナビゲーションボタンを出す
			aspectRatio: 1.5,//スライドのアスペクト比
			forceSize: 'fullWindow',//ウィンドウ内全画面表示
			slideDistance:0,//スライド同士の距離
			arrows: false,//矢印ボタンの表示
			buttons: false,//スライドのページャの表示
			touchSwipe: false,//タッチスワイプをするか否か
		});
	});