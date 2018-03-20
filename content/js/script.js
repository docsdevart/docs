$(function () {
		
	//Collapse item menu sidebar
	$('.nav-item h5').click(function () {
		$(this).toggleClass('active');
		var checkElement = $(this).next();
		checkElement.stop().animate({ 'height': 'toggle' }, 500);
		if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});
	//==============================================================

	$(window).on('load', function () {
		var itemCollapse = $('.collapse-menu li a');
		var counter = 0;
		$.each(itemCollapse, function () {
			$(this).attr('id', 'collapse' + ++counter);
		});
	});

	$('.nav-item > a').click(function (event) {
		event.preventDefault();
        var addr = $(this).attr('href');
        var id = $(this).attr('id');
        var $li = $(this).closest('li');
        var $listLi = $('nav.sidebar-menu-docs ul li ul li');
        var newUrl = addr;
        var $container = $($('div.row').find('div')[2]);
        $listLi.removeClass('current');
        $container.empty();
        $li.addClass('current');
        $.get(newUrl, (data) => {
            contentHtml = $($(data).find('div.row').find('div')[2]).html();
            $container.html(contentHtml);
        });
	});

	//Max height for sidebar scroll
	var winHeight = $(window).height();
	$('.sidebar-menu-list').css('maxHeight', winHeight - 172);
	//=============================================================
});