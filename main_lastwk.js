(function(){
	var style = $("<style>.popup-box{background-color:#ffffff;bottom:0;height:80%;position:fixed;right:30px;max-width:400px;width:100%;font-family:'Open Sans', sans-serif;bottom:75px;transition:all 0.2s ease-in;transform:translateY(calc(100% + 120px));border-radius:8px;overflow:hidden;box-shadow:rgba(0, 0, 0, 0.16) 0px 5px 40px;border-bottom-right-radius: 20px;border-bottom-left-radius: 20px;} .popup-box.active-chatbox{transform:translateY(0);} #showcharbox{height:100%;} .chat-btn{color:#fff;border-radius:50px;outline:none !important;position:fixed;bottom:2%;right:2%;font-size:20px;width:55px;height:55px;transition:all 0.2s ease-in;background:none;} .chat-btn.focus, .chat-btn:focus, .chat-btn:hover{color:#fff;text-decoration:none;} .close-icon{background: url(https://mindpathtech.blob.core.windows.net/chatbot/travel-booking/assets/logo.svg) no-repeat 14px center;height: 60px; width: 50px;background-size: 100% 100%;transform: rotate(180deg);filter: invert(63%) sepia(43%) saturate(1745%) hue-rotate(328deg) brightness(99%) contrast(103%);} .chat-icon {background: url(https://mindpathtech.blob.core.windows.net/chatbot/travel-booking/assets/logo.svg) no-repeat 14px center;height: 60px; width: 50px;display: block;filter: invert(63%) sepia(43%) saturate(1745%) hue-rotate(328deg) brightness(99%) contrast(103%);} @media (max-width:450px) { .popup-box { max-width: 300px; }}</style>");
	var html = $('<button class="chat-btn" id="hidechatbtn"><i class="chat-icon"></i></button><div class="popup-box chat-popup"><div id="showcharbox"><object width="100%" height="100%" type="text/html" data="https://mindpathtech.blob.core.windows.net/chatbot/travel-booking/index.html"></object></div></div>');
	var element = $('#chatbot');

	$('#chatbot').append([style, html]);

	$("#hidechatbtn").on("click", function (t) {
		$(this).find("i").toggleClass("close-icon"), t.preventDefault(), $(".popup-box").toggleClass("active-chatbox");
	});
})();