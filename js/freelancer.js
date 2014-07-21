// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
        ga('send', 'event', 'navigation', 'click', $anchor.attr('href'));
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$("#contact-form").submit(function (event) {
  $('#form-contact-error, #form-contact-success').addClass('hidden').slideUp();

  var name = $('input[name=name]');
  var email = $('input[name=email]');
  var message = $('textarea[name=message-body]');

  if (name.val().length == 0 || email.val().length == 0 || message.val().length == 0) {
    $('#form-contact-error').removeClass('hidden').slideDown();
    ga('send', 'event', 'contact', 'error', 'empty field(s)');
    return false;
  }

  $.post('/send-mail', $(this).serialize(), function (response) {
    if (response.result) {
      $('#form-contact-success').removeClass('hidden').slideDown();
      $('#contact-form').get(0).reset();
      ga('send', 'event', 'contact', 'success', email.val());
    } else {
      $('#form-contact-error').removeClass('hidden').slideDown();
      ga('send', 'event', 'contact', 'error', email.val());
    }
  });
  return false;
});

$('.modal').on('show.bs.modal', function (e) {
  ga('send', 'event', 'portfolio', 'open', $(this).find('.modal-body h2').text());
});

$('.modal').on('hide.bs.modal', function (e) {
  ga('send', 'event', 'portfolio', 'close', $(this).find('.modal-body h2').text());
});
