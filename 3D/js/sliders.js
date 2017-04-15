$(document).ready(function() {
			var controls_input = $("#controls input"),
			image = $(".swiper-container");

			function updateDisplay() {
				var newCSS = '';
				controls_input.each(function(){
					var units = '';

					if ($(this).attr('id') == 'blur') {
						units = 'px';
					} else if ($(this).attr('id') == 'hue-rotate') {
						units = 'deg';
					}
					newCSS += $(this).attr('id')+"("+$(this).val()+units+") ";
					$("#"+$(this).attr('id')+"_output").text($(this).attr('id')+"("+$(this).val()+units+")");
				})
				image.css("-webkit-filter", newCSS);
				image.css("-moz-filter", newCSS);
				image.css("-ms-filter", newCSS);
				image.css("-o-filter", newCSS);
				image.css("filter", newCSS);
			}
			updateDisplay();

			controls_input.mousemove(updateDisplay);

			$("#reset").click(function(){
				controls_input.each(function(){
					$(this).val($(this).attr('data-default'));
				});
				updateDisplay();
				return false;
			});
		});