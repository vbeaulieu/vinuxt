//Ouvrir un popup en mobile
$(".openPopin").click(function () {
  if ($(window).width() < 768) {
    $(window).scrollTop(0);
  }
});

setImgInBg();

//Ajout de classe pour notre beau IE
if (navigator.userAgent.indexOf("Trident") > -1) {
  document.getElementsByTagName("html")[0].classList.add("IE11");
}

if (navigator.userAgent.indexOf("Edge") > -1) {
  document.getElementsByTagName("html")[0].classList.add("IEedge");
}

// Adding class to footer if this a services template page
if ($(".wrapAll").hasClass("servicesTemplate")) {
  $(".footer").addClass("pTopPlus");
}

// Adding class to footer if the page have no bottom CTA box
if (!$(".wrapAll.contact .wrapContent section, .wrapAll.servicesTemplate .wrapContent section").hasClass("cta-block")) {
  $(".footer").addClass("pTopLess");
}

// Put selected on the active menu link
$(function ($) {
  var url = window.location.href;
  $('nav ul li a').each(function () {
    if (this.href === url) {
      $(this).closest('li').addClass('active');
      $(this).parents('.parent').addClass('active');
    }
  });
});