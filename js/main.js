var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector('.intro');
	text.classList.add('red');
	var img = document.querySelector('.img');
	img.style.display = 'none';
	document.querySelector('.skill-java').style.marginLeft = '50px';
}


$(function () {
	$(window).scroll(function() {
		$('#future .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWimdow = $(window).scrollTop();
			if (imagePos < topOfWimdow+650) {
				$(this).addClass('animate__fadeInDown');
			}
		});
	});
	$(window).scroll(function() {
		$('.skill').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWimdow = $(window).scrollTop();
			if (imagePos < topOfWimdow+650) {
				$(this).addClass('animate__fadeInUp');
			}
		});
	});
})