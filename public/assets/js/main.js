function setTheme(themeName){localStorage.setItem("rj_event_website",themeName),document.documentElement.className=themeName}function toggleTheme(){"theme-dark"===localStorage.getItem("rj_event_website")?setTheme("theme-light"):setTheme("theme-dark")}jQuery(function($){"use strict";function callbackFunction(resp){"success"===resp.result?formSuccessSub():formErrorSub()}function formSuccessSub(){$(".newsletter-form")[0].reset(),submitMSGSub(!0,"Thank you for subscribing!"),setTimeout((function(){$("#validator-newsletter").addClass("hide")}),4e3)}function formErrorSub(){$(".newsletter-form").addClass("animated shake"),setTimeout((function(){$(".newsletter-form").removeClass("animated shake")}),1e3)}function submitMSGSub(valid,msg){if(valid)var msgClasses="validation-success";else var msgClasses="validation-danger";$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg)}var wow;$(window).on("scroll",(function(){$(this).scrollTop()>350?$(".navbar-area").addClass("is-sticky"):$(".navbar-area").removeClass("is-sticky")})),jQuery(".mean-menu").meanmenu({meanScreenWidth:"1199"}),$(".others-option-for-responsive .dot-menu").on("click",(function(){$(".others-option-for-responsive .container .container").toggleClass("active")})),$(".default-btn").on("mouseenter",(function(e){var parentOffset=$(this).offset(),relX=e.pageX-parentOffset.left,relY=e.pageY-parentOffset.top;$(this).find("span").css({top:relY,left:relX})})).on("mouseout",(function(e){var parentOffset=$(this).offset(),relX=e.pageX-parentOffset.left,relY=e.pageY-parentOffset.top;$(this).find("span").css({top:relY,left:relX})})),$(".home-slides").owlCarousel({loop:!0,nav:!0,dots:!1,autoplayHoverPause:!1,autoplay:!1,autoHeight:!0,items:1,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"]}),$(".expect-slides").owlCarousel({loop:!0,nav:!0,dots:!1,margin:25,autoplayHoverPause:!0,autoplay:!0,autoHeight:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:3},1200:{items:5}}}),$(".testimonial-slides").owlCarousel({loop:!0,nav:!0,dots:!1,margin:25,autoplayHoverPause:!0,autoplay:!0,autoHeight:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:2},1200:{items:4}}}),$(".testimonial-slides-two").owlCarousel({loop:!0,nav:!0,dots:!1,margin:25,autoplayHoverPause:!0,autoplay:!0,autoHeight:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:1},768:{items:2},1200:{items:2}}}),$(".partner-slides").owlCarousel({loop:!0,nav:!0,dots:!1,smartSpeed:500,margin:30,autoplayHoverPause:!0,autoplay:!0,autoHeight:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:3},1200:{items:5}}}),$(".odometer").appear((function(e){var odo;$(".odometer").each((function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber)}))})),$(".popup-youtube").magnificPopup({disableOn:320,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".newsletter-form").validator().on("submit",(function(event){event.isDefaultPrevented()?(formErrorSub(),submitMSGSub(!1,"Please enter your email correctly.")):event.preventDefault()})),$(".newsletter-form").ajaxChimp({url:"https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",callback:callbackFunction}),$(".input-counter").each((function(){var spinner=jQuery(this),input=spinner.find('input[type="text"]'),btnUp=spinner.find(".plus-btn"),btnDown=spinner.find(".minus-btn"),min=input.attr("min"),max=input.attr("max");btnUp.on("click",(function(){var oldValue=parseFloat(input.val());if(oldValue>=max)var newVal=oldValue;else var newVal=oldValue+1;spinner.find("input").val(newVal),spinner.find("input").trigger("change")})),btnDown.on("click",(function(){var oldValue=parseFloat(input.val());if(oldValue<=min)var newVal=oldValue;else var newVal=oldValue-1;spinner.find("input").val(newVal),spinner.find("input").trigger("change")}))})),$(".wow").length&&new WOW({mobile:!1}).init(),$(window).on("scroll",(function(){var scrolled=$(window).scrollTop();scrolled>600&&$(".go-top").addClass("active"),scrolled<600&&$(".go-top").removeClass("active")})),$(".go-top").on("click",(function(){$("html, body").animate({scrollTop:"0"},500)})),jQuery(window).on("load",(function(){jQuery(".preloader").fadeOut(500)}))}(jQuery)),"theme-dark"===localStorage.getItem("rj_event_website")?(setTheme("theme-dark"),document.getElementById("slider").checked=!1):(setTheme("theme-light"),document.getElementById("slider").checked=!0);
