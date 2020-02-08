/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Mobile Hovering ******************/

var head = document.getElementsByTagName("head")[0];
var style = document.createElement("style");
var declarations = document.createTextNode(".img:hover img { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); -ms-transform: translate3d(-40px, 0, 0); }");
style.type = 'text/css';
    
// Get the portfolio overlays and images
var overlays = document.querySelectorAll(".expand");
var images = document.querySelectorAll(".img");
    
// Fix portfolio image hovering on mobile
if (/Android|webOS|iPhone|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
    for (var i = 0; i < images.length; i++) {
        var overlay = overlays[i];
        var image = images[i];
        overlay.innerHTML = "<i class=\"fa fa-info-circle\"></i><br>More Soon";
        image.onclick = function() {
            return false;
        }
    }
} else {
    // Add image transformation on hover for desktop users
    style.appendChild(declarations);
    head.appendChild(style);
}

/***************** Modals ******************/

function openModal() {
    $(document).ready(function() {
        $("#myModal").fadeIn();
    });
}
    
function closeModal() {
    $(document).ready(function() {
        $("#myModal").fadeOut();
    });
}
    
$(document).click(function (event) {
    if ($(event.target).is('#myModal')) {
        $('#myModal').fadeOut();
    }
});

/***************** Map Location ******************/

function openMap() {
    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1))
        window.open("https://maps.apple.com/?address=Orem,%20UT,%20United%20States&auid=3435614563473616118&ll=40.297173,-111.693518&lsp=6489&q=Orem");
    else
        window.open("https://goo.gl/maps/pc3tLmJiqBD2");
}

/***************** Email Validation ******************/
    
function validateInput() {
    var email = document.getElementById('useremail').value;
    var emailRGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var emailResult = emailRGEX.test(email);
    if (emailResult) {
        alert("You have been subscribed.");
    } else {
        alert("Please enter a valid email address.");
    }
}

/***************** Unfinished Alert ******************/

function unfinished() {
    alert("Sorry, this feature has not been implemented yet.");
}

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
                if (this.hash.slice(1) === 'portfolio') {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                } else if (this.hash.slice(1) === 'intro') {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                } else {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1800);
                }
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/
overlayOpen = false;

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (overlayOpen === false) {
                if (!$(this).hasClass("hover")) {
                    $(this).addClass("hover");
                }
                overlayOpen = true;
            }
        });
        // close overlay if x button clicked
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
            overlayOpen = false;
        });
        // close overlay if it is open
        $(".overlay").click(function(e){
            if (overlayOpen === true) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).closest(".img").hasClass("hover")) {
                    $(this).closest(".img").removeClass("hover");
                }
                overlayOpen = false;
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
