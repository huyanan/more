/**
 * 这是一个非正式版本的jQuery插件
 * 这是在工作的时候自己实现的小脚本
 * 只需要传递几个参数
 */
;(function(window,document,$,undefined){
	if ($ === undefined) {
		console.log('more need jQuery');
		return;
	}
	/**
	 * 隐藏，查看更多
	 * @param  {[String||jQuery]} wrap      [容器]
	 * @param  {[String||jQuery]} item      [隐藏对象]
	 * @param  {[Number]} max       [超出多少数量隐藏]
	 * @param  {[String||jQuery]} toggleBtn [隐藏和显示切换按钮]
	 * @return {[type]}           [description]
	 */
	var more = function(wrap, item, max, toggleBtn) {
		var $wrap = $(wrap),
			$item = $wrap.find(item),
			$toggle = $(toggleBtn),
			state = '',
			$moreItem;
		if (!$wrap.length || !item.length || !wrap || !item || isNaN(max)) {
			return;
		}
		if (!$toggle.length) {
			$toggle = $('<button class="lookmore compress btn">查看更多</button>');

		}
		if ($item.length > max) {
			//隐藏更多
			$moreItem = $item.filter(function(index) {
				return index + 1 > max;
			});
			$moreItem.hide();
			state = 'compress';
			$toggle.click(function(event) {
				var $this = $(this);
				if ($moreItem.length) {
					if (state == 'compress') {
						$moreItem.show();
						$this.removeClass("compress")
							.addClass('expand')
							.text('收起');
						state = 'expand';
					} else if (state == 'expand') {
						$moreItem.hide();
						$this.removeClass("expand")
							.addClass('compress')
							.text('查看全部');
						state = 'compress';
					}
				}
			});
			$wrap.append($toggle);
		}
	}
	var moreForArray = function (wrapList, item, max, toggleBtn){
		if (!wrapList) {
			return;
		}
		if (!(wrapList instanceof Array) || !wrapList.length) {
			return;
		}
		if (!item || isNaN(max)) {
			return;
		}
		var wrapListSelectStr = wrapList.toString(),
			$wrapList = $(wrapListSelectStr);

		more($wrapList ,item, max, toggleBtn);
	}
	window.more = window.more || more;
	window.moreForArray = window.moreForArray || moreForArray;
})(window,document,jQuery);
