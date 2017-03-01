
(function($){

	$.fn.chocolate = function(args) {

		// Default Options
		var options = $.extend({
			interval 	: 3000,
			speed 		: 1000
		}, args);

		return this.each(function() {
			
			var original = $(this);

			// Create element
			$slide = $(document.createElement('slide'));
			$slide.css({
				position 	: 'absolute',
				zIndex 		: -1,
				overflow 	: 'hidden',
			});
			original.prepend($slide);
		    $slide.css(copybackground());
		    $slide.css('background-image', 'url(' + args.images[0] + ')');
			
			// This element background none
			original.css('background', 'none');
		    
		    // Clone bg element
		    $slide2 = $slide.clone();
		    $slide.after($slide2);
			
			// Set postion
			$slide.css(copyPosition());
			$slide2.css(copyPosition());

			// Resize window
			$(window).resize(function() {
				$slide.css(copyPosition());
				$slide2.css(copyPosition());
			});

			// Copy background style
			function copybackground() {
				var backgroundProperties = [
		        	'Attachment', 'Color', 'Repeat',
		        	'Position', 'Size', 'Clip', 'Origin'
		    		];
			    var prop,
			    	copyStyle 			= {},
			    	i 					= 0;

			    for (; i < backgroundProperties.length; i++) {
			    	prop = 'background' + backgroundProperties[i];
			    	copyStyle[prop] = original.css(prop);
			    }

			    return copyStyle;
			}

			// Copy position style
		    function copyPosition() {
		    	var corners 	= ['Top', 'Right', 'Bottom', 'Left'];
			    var i 			= 0,
			    	position 	= original.position(),
			    	copyStyle 	= {
			    		top 	: position.top,
			    		left 	: position.left,
			    		width 	: original.innerWidth(),
			    		height 	: original.innerHeight()
			    	};

			    for (; i < corners.length; i++) {
		    		corner = corners[i];
		    		copyStyle['margin' + corner] = original.css('margin' + corner);
		    		copyStyle['border' + corner] = original.css('border' + corner);
		    	}

		    	return copyStyle;
		    }

		    var count 	= 0,
		    	current = 0;

			// Change background function
			var slide = function() {
				if (current == args.images.length - 1) current = 0;
				else current++;
				
				if (count == 0) {
					$slide2.fadeOut(options.speed);
					$slide.css('background-image', 'url(' + args.images[current] + ')').fadeIn(options.speed);
					count++;
				} else {
					$slide.fadeOut(options.speed);
					$slide2.css('background-image', 'url(' + args.images[current] + ')').fadeIn(options.speed);
					count = 0;
				}
			}		

			setInterval(function() {slide();}, options.interval);
		});
	}

})(jQuery);