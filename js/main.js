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

// Adding class to footer if the page have no bottom CTA box
if (!$(".wrapAll:not(.home) .wrapContent section").hasClass("cta-block")) {
  $(".footer.d").addClass("pTopLess");
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

  // jQuery Validation form
  $("#contactSubmission").validate({
    rules: {
      Nom: {
        required: true,
        minlength: 3
      },
      Courriel: {
        required: true,
        email: true
      },
      Telephone: {
        required: true,
        phoneUS: true
      },
      Secteur: {
      },
      Demande: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      Nom: {
        required: "Champ requis",
        minlength: "Votre nom complet doit contenir plus de 3 lettres."
      },
      Courriel: {
        required: "Champ requis",
        email: "Veuillez utiliser un courriel valide."
      },
      Telephone: {
        required: "Champ requis",
        tel: "Veuillez utiliser un numéro de téléphone valide."
      },
      Secteur: {
      },
      Demande: {
        required: "Champ requis",
        minlength: "Votre demande doit contenir un minimum de 3 caractères."
      }
    },
    submitHandler: function (form) {
      if ($("#region").val() == "drummondville") {
        form.action = "mailto:srochefort@nmedia.ca";
      } else {
        form.action = "mailto:jlagace@nmedia.ca";
      }

      // Add gtag only when submit is success
      if (typeof gtag != 'undefined') {
        gtag('event', 'Formulaire', { 'event_category': 'Prise de contact', 'event_label': document.getElementById("submitBtn").innerText });
      }

      form.submit();
    }
  });
});


