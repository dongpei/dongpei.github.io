<?php

	switch ($_GET['content']) {
		case '你好':
			echo '你好';
			break;
		case '是董沛先生吗？':
			echo '是的。';
			break;
		case '您明天有时间吗？':
			echo '有的。';
			break;
		case '那您来我公司参加面试可以吗？':
			echo '好的，明天几点过去？';
			break;
		case '明天10点。':
			echo '知道了，谢谢。';
			break;
		case '别忘了带上您的个人作品过来。':
			echo '明白。';
			break;
		default:
			echo '我现在不在线，有事请留言...';
			break;
	}

	sleep(1);

?>