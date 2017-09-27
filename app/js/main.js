$(function(){

	$(".phone .wrapper .tab").click(function() {
	$(".phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".sale_box .wrapper .tab").click(function() {
	$(".sale_box .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".sale_box .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".box_5 .tab").click(function() {
	$(".box_5 .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".box_5 .tab_content .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".box_6 .phone .wrapper .tab").click(function() {
	$(".box_6 .phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".box_6 .phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	


	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.owl_carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: false
	});


});