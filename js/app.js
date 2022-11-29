function shortString() {
	var shorts = document.querySelectorAll('.short');
	if (shorts) {
		Array.prototype.forEach.call(shorts, function(ele) {
			var str = ele.innerText,
				indt = '...';

			if (ele.hasAttribute('data-limit')) {
				if (str.length > ele.dataset.limit) {
					var result = `${str.substring(0, ele.dataset.limit - indt.length).trim()}${indt}`;
					ele.innerText = result;
					str = null;
					result = null;
				}
			} else {
				throw Error('Cannot find attribute \'data-limit\'');
			}
		});
	}
}

$(function() {
	shortString();
	
	$('#my_form').change(function(){
		var str = "<em>First name:</em><strong> " + $( "#name" ).val() + "</strong><br><em>Last name:</em><strong> " + $( "#surname" ).val() + "</strong><br><em>My car:</em><strong> " + $( "select#cars option:selected" ).text() + "</strong><br><em>My country:</em><strong> " + $( "select#countries option:selected" ).text() + "</strong>";

		$('#check_before_submit').html( str );
	});

	$( "#my_form" ).on( "submit", function( event ) {
		event.preventDefault();
		var str = "<em>First name:</em><strong> " + $( "#name" ).val() + "</strong><br><em>Last name:</em><strong> " + $( "#surname" ).val() + "</strong><br><em>My car:</em><strong> " + $( "select#cars option:selected" ).text() + "</strong><br><em>My country:</em><strong> " + $( "select#countries option:selected" ).text() + "</strong><br><em>Form's query-string:</em><strong> " + $( this ).serialize() + "</strong>"; // the query-string will use the "name" attribute as key and the "value" attribute as value

		$('#check_before_submit').html( str );
	});
});