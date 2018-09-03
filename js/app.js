console.log('JS Connected!')
$(() => {
  const $header = $('header');
  const $window = $(window);
  const $links = $('nav a');
  const $menu = $('.menu');



  $window.scroll(updateHeader).trigger('scroll');
  $links.on('click', scrollToSection);
  $menu.on('click', toggleMenu);


  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    const bottomOfHeader = $header.offset().top + $header.height();
    const viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate( {
      scrollTop: $(section).offset().top
    }, 1000, () => {
      if ($window.width() < 575) {
        $('dropdown').slideToggle();
      }
    });
  }

// london
TweenMax.to("#Wheel, #Wheel", 10, {
  rotation:360,
  transformOrigin:"50% 50%",
  repeat:-1,
  ease: Linear.easeNone
});

TweenMax.to("#tire_1, #tire_1", 2, {
  rotation:360,
  transformOrigin:"50% 50%",
  repeat:-1,
  ease: Linear.easeNone
});

TweenMax.to("#tire_2, #tire_2", 2, {
  rotation:360,
  transformOrigin:"50% 50%",
  repeat:-1,
  ease: Linear.easeNone
});

var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
tl
  .from("#buildings_2", 0.5, {
    y: "700px",
    ease: Bounce.easeIn
  })
  .from(
    "#buildings_1",
    0.75,
    {
      y: "600px",
      ease: Bounce.easeIn
    },
    "-=0.5"
  )
  .from(
    "#bus",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeIn
    },
    "-=0.5"
  )
  .from(
    "#bigben",
    1,
    {
      y: "700px",
      ease: Bounce.easeIn
    },
    "-=1.5"
  )
  .from(
    "#eye",
    1,
    {
      y: "600px",
      ease: Bounce.easeIn
    },
    "-=1.25"
  )
  .from(
    "#gherkin",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "-=0.3"
  )
  .to(
    "#gherkin",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "+=10"
  )
  .to(
    "#eye",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "-=0.7"
  )
  .to(
    "#bigben",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "-=0.6"
  )
  .to(
    "#buildings_2",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "-=0.4"
  )
  .to(
    "#buildings_1",
    0.5,
    {
      y: "600px",
      ease: Bounce.easeOut
    },
    "-=0.3"
  );
// london end

});
