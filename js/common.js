var swiper = new Swiper(".offerbanner-swiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
    const currentUrl1 = window.location.href;

  // If you're submitting via form:
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    let hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = 'source_url';
    hidden.value = currentUrl1;
    form.appendChild(hidden);
  });
  function formatSlugToTitle(url) {
    // Get the last part of the URL
    const parts = url.split("/").filter(Boolean);
    const lastPart = parts[parts.length - 1];

    // Convert kebab-case to Title Case
    return lastPart
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
}
var currentUrl = window.location.href;
var basename = formatSlugToTitle(currentUrl);
  $('#basename').val(basename);
  $('input[name="email_subject"]').val("Let's Talk About "+basename);
  $('meta[property="og:url"]').attr('content', currentUrl);
  $('link[rel="canonical"]').attr('href', currentUrl);

  function getPdfUrl(){
    const fullUrl = window.location.href;
    return new URL(fullUrl).origin;
  }
  //document.addEventListener('touchstart', handler, {capture: true});
  var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    window.location.pathname === '/' ||
    segment === 'uber-clone' ||
    segment === 'multiservices-app-development' ||
    segment === 'fulfillment-policy' ||
    segment === 'all-in-one-delivery' ||
    segment === 'ubereats-clone-spanish-language' ||
    segment === 'products' ||
     segment === 'uber-for-babysitters' ||
    segment === 'tinder-clone' ||
    segment === 'careem-clone' ||
    segment === 'bolt-clone' ||
    segment === 'lyft-grab-clone' ||
    segment === 'uber-for-towing' ||
    segment === 'honk-clone' ||
    segment === 'entrepreneur' ||
    segment === 'delivery-script' ||
    segment === 'lalamove-clone' ||
    segment === 'package-delivery-script' ||
    segment === 'delivery-app-clone' ||
    segment === 'gopuff-clone' ||
    segment === 'getir-clone' ||
    segment === 'flink-clone' ||
    segment === 'delivery-all-script' ||
    segment === 'postmates-clone' ||
    segment === 'rappi-clone' ||
    segment === 'talabat-clone' ||
    segment === 'hungerstation-clone' ||
    segment === 'glovo-clone' ||
    segment === 'marijuana-delivery-script' ||
    segment === 'pharmacy-delivery-script' ||
    segment === 'alcohol-delivery-script' ||
    segment === 'drizly-clone' ||
    segment === 'grocery-delivery-script' ||
    segment === 'instacart-clone' ||
    segment === 'grofers-clone' ||
    segment === 'onecart-clone' ||
    segment === 'bigbasket-clone' ||
    segment === 'pest-control-service-script' ||
    segment === 'zapp-clone' ||
    segment === 'zepto-clone' ||
    segment === 'gorillas-clone' ||
    segment === 'ubereats-clone' ||
    segment === 'swiggy-clone' ||
    segment === 'zomato-clone' ||
    segment === 'foodpanda-clone' ||
    segment === 'deliveroo-clone' ||
    segment === 'grubhub-clone' ||
    segment === 'doordash-clone' ||
    segment === 'delivery-hero-clone' ||
    segment === 'justeat-clone' ||
    segment === 'foodspotting-clone' ||
    segment === 'handyman-script' ||
    segment === 'taskrabbit-clone' ||
    segment === 'urbanclap-clone' ||
    segment === 'on-demand-services-app' ||
    segment === 'styleseat-clone' ||
    segment === 'thumbtack-clone' ||
    segment === 'uber-for-haircuts' ||
    segment === 'plumbing-service-script' ||
    segment === 'babysitter-service-script' ||
    segment === 'house-cleaning-service-script' ||
    segment === 'doctor-service-script' ||
    segment === 'electricians-service-script' ||
    segment === 'maid-service-script' ||
    segment === 'car-wash-service-script' ||
    segment === 'car-repair-script' ||
    segment === 'beauty-on-demand-script' ||
    segment === 'tutor-service-script' ||
    segment === 'carpenter-script' ||
    segment === 'uber-for-carpet-repair-service' ||
    segment === 'udemy-clone' ||
    segment === 'lynda-clone' ||
    segment === 'coursera-clone' ||
    segment === 'online-education-script' ||
    segment === 'pluralsight-clone' ||
    segment === 'unacademy-clone' ||
    segment === 'lms-clone' ||
    segment === 'duolingo-clone' ||
    segment === 'byjus-clone' ||
    segment === 'udacity-clone' ||
    segment === 'letgo-clone' ||
    segment === 'offerup-clone' ||
    segment === 'shpock-clone' ||
    segment === 'carousell-clone' ||
    segment === 'online-classified-script' ||
    segment === 'pets-classified-script' ||
    segment === 'cars-classified-script' ||
    segment === 'real-estate-classified-script' ||
    segment === 'jobs-classified-script' ||
    segment === 'olx-clone-script' ||
    segment === 'auto-classified-script' ||
    segment === 'airbnb-clone' ||
    segment === 'wimdu-clone' ||
    segment === 'airbnb-like-app-development' ||
    segment === 'tripping-com-clone' ||
    segment === 'bnb-clone' ||
    segment === 'lastminute-clone' ||
    segment === 'vacation-rental-script' ||
    segment === 'zillow-clone' ||
    segment === 'trulia-clone' ||
    segment === 'homeaway-clone' ||
    segment === 'tripadvisor-clone' ||
    segment === 'trivago-clone' ||
    segment === 'blueground-clone' ||
    segment === 'priceline-clone' ||
    segment === 'yatra-clone' ||
    segment === 'condo-rental-script' ||
    segment === 'realtor-clone' ||
    segment === 'airbnb-clone-for-car-rentals' ||
    segment === 'car-rental-software' ||
    segment === 'turo-clone' ||
    segment === 'airbnb-clone-for-boat-rentals' ||
    segment === 'space-rental-script' ||
    segment === 'splacer-clone' ||
    segment === 'peerspace-clone' ||
    segment === 'event-booking-script' ||
    segment === 'hotel-booking-script' ||
    segment === 'hotel-tonight-clone' ||
    segment === '9flats-clone' ||
    segment === 'holidaylettings-clone' ||
    segment === 'vrbo-clone' ||
    segment === 'decolar-clone' ||
    segment === 'venue-booking-script' ||
    segment === 'hotel-reservation-script' ||
    segment === 'room-reservation-script' ||
    segment === 'booking-clone' ||
    segment === 'makemytrip-clone' ||
    segment === 'skyscanner-clone' ||
    segment === 'jovago-clone' ||
    segment === 'rental-script' ||
    segment === 'online-teaching-script' ||
    segment === 'expedia-clone' ||
    segment === 'parking-booking-script' ||
    segment === 'online-property-rental-solutions' ||
    segment === 'tiktok-clone' ||
    segment === 'justpark-clone' ||
    segment === 'handyman-script' ||
    segment === 'handyman-app-development' ||
    segment === 'whitepaper' ||
    segment === 'portfolio' ||
    segment === 'success-stories' ||
    segment === 'careers' ||
     segment === 'support' ||
      segment === 'end-user-license-agreement' ||
      segment === 'iso-certified-company' ||
    segment === 'cameo-clone'
  ) {
    var offer_banner_value = `
     <div class="fixed_btm offer_img mobile-btm d-none d-md-block d-md-block d-none">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/spring-makent-25-web.webp?format=webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
    <div class="fixed_btm offer_img_new d-block d-md-none mobile-banner">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model" rel="noreferrer">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/spring-makent-25-mob.webp?format=webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
        `
    $('#offer-banner-append').append(offer_banner_value);
  }

    var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    segment === 'matrimonial-script' ||
    segment === 'dating-app-development' ||
    segment === 'pets-dating-script'
  ) {
    var offer_banner_value = `
     <div class="fixed_btm offer_img mobile-btm d-none d-md-block d-md-block d-none">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/igniter-web.webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
    <div class="fixed_btm offer_img_new d-block d-md-none mobile-banner">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model" rel="noreferrer">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/igniter-mob.webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
        `
    $('#offer-banner-append').append(offer_banner_value);
  }

   var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    segment === 'online-classified-software'
  ) {
    var offer_banner_value = `
     <div class="fixed_btm offer_img mobile-btm d-none d-md-block d-md-block d-none">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/passup-web.webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
    <div class="fixed_btm offer_img_new d-block d-md-none mobile-banner">
        <div class="alert  alert-warning alert-dismissible p-0 fade show p-0 mb-1" role="alert">
            <a href="/javascript:void(0)" data-bs-toggle="modal" data-bs-target="#offer-contact-model" rel="noreferrer">
                <picture>
                    <img class="lazyload desktop-offer" src="/images/offerbanner/passup-mob.webp"
                        alt="Spring Season Offer" />
                </picture>
            </a>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
        `
    $('#offer-banner-append').append(offer_banner_value);
  }


  //Offer banner showing
  $(".bannerimg video").css("opacity", 1);
  $(".banner-img-new").css("opacity", 1);
  $(".fixed_btm").css("opacity", 1);
  //Offer banner showing

  //Offer Banner showing only blockchain pages
  // $(".fixed_btm_blockchain .fixed_btm").css("opacity", 1);
  // Offer Banner Hiding
  if (!$(".fixed_btm").hasClass("fixed_btm_blockchain")) {
    // $(".fixed_btm").css("opacity",0);
    // $(".fixed_btm").removeClass('d-md-block');
    // $(".fixed_btm").removeClass('d-block');
    // $(".fixed_btm").addClass('d-none');
  } else {
    $(".fixed_btm").css("opacity", 1);
  }
  //Offer Banner Hiding

  if ($(window).width() <= 576) {
    $(
      ".service-new, .subheader, #uniqueness-div, #refer-earn, #pricing, #solutions, .benefit-web"
    ).remove();
  } else {
    $(
      ".relativeul, .mob-quickbar-div, .description-btn, .benefit-mob"
    ).remove();
  }

  //Industrial Hover BEGIN
  $(".industrial-box").bind("mouseover", function (event) {
    $(this).addClass("unset-height");
  });
  $(".industrial-box").bind("mouseleave", function (e) {
    $(this).removeClass("unset-height");
  });
  //Industrial Hover END

  // -----On hover menu---

  $(".service-new .nav-pills button").hover(function () {
    $(this).tab("show");
  });
  $('button[data-bs-toggle="pill"]').on("shown.bs.tab", function (e) {
    var target = $(e.relatedTarget).attr("data-bs-target");

    $(target).removeClass("active");
  });

  //Cut Off Client Video BEGIN
  $("#miloud").on("hidden.bs.modal", function (e) {
    $("#miloud iframe").attr("src", $("#miloud iframe").attr("src"));
  });
  $("#stefania").on("hidden.bs.modal", function (e) {
    $("#stefania iframe").attr("src", $("#stefania iframe").attr("src"));
  });
  $("#dayo-amon").on("hidden.bs.modal", function (e) {
    $("#dayo-amon iframe").attr("src", $("#dayo-amon iframe").attr("src"));
  });
  $("#luis-angel").on("hidden.bs.modal", function (e) {
    $("#luis-angel iframe").attr("src", $("#luis-angel iframe").attr("src"));
  });
  $("#sebastiaan").on("hidden.bs.modal", function (e) {
    $("#sebastiaan iframe").attr("src", $("#sebastiaan iframe").attr("src"));
  });
  $("#americo").on("hidden.bs.modal", function (e) {
    $("#americo iframe").attr("src", $("#americo iframe").attr("src"));
  });
  $("#khaldoon").on("hidden.bs.modal", function (e) {
    $("#khaldoon iframe").attr("src", $("#khaldoon iframe").attr("src"));
  });
  //Cut Off Client Video END

  $(".faq-title").click(function () {
    $(".faq-para").css("height", 0);
  });

  $("#testmonial-new").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
  });

  window.addEventListener("scroll", function () {
    var myElement = document.getElementById("phonenumber");
    if (!myElement) return false;
    var bounding = myElement.getBoundingClientRect();

    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      $(".share-icons").addClass("hide-link-box");
    } else {
      $(".share-icons").removeClass("hide-link-box");
    }
  });

  jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
      // this.addEventListener('touchstart', handler, {capture: true});
    },
  };

  //Quick Navbar Active BEGIN
  $(".quickbar-nav li a").click(function () {
    $(".quickbar-nav li a.active").removeClass("active");
    $(this).addClass("active");
  });
  //Quick Navbar Active END

  //See More Responsive BEGIN
  $(".btn-see-more").click(function () {
    $(this).parent().parent().find(".see-more-extend-none").slideToggle();
    // $('.see-more-extend-none')
    if ($(this).text() == "See More") {
      $(this).text("See Less");
    } else {
      $(this).text("See More");
    }
  });
  //See More Responsive END

  //See More Description Responsive BEGIN
  $(".btn-desc-btn").click(function () {
    $(".second-para-hide").slideToggle();
    if ($(".btn-desc-btn").text() == "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });
  //See More Description Responsive END

  //Schedule Demo BEGIN
  setTimeout(function () {
    $(".btn-schedule").addClass("schedule-shake");
    setTimeout(function () {
      $(".btn-schedule").fadeOut(400, function () {
        $(this).text("Startup Special Sale").fadeIn(400);
      });
    }, 1000);
  }, 2000);
  function shake() {
    setTimeout(function () {
      $(".btn-schedule").addClass("schedule-shake");
    }, 5000);
    $(".btn-schedule").removeClass("schedule-shake");
  }
  setInterval(shake, 10000);
  $(function () {
    count = 0;
    wordsArray = ["Get Quote", "Startup Special Sale"];
    setInterval(function () {
      count++;
      $(".btn-schedule").fadeOut(400, function () {
        $(this)
          .text(wordsArray[count % wordsArray.length])
          .fadeIn(400);
      });
    }, 10000);
  });
  //Schedule Demo END

  if ($(window).width() < 576) {
    $(".homebanner").removeClass("mobile-subheader");
  }

  $(".premium-features-owl").owlCarousel({
    lazyLoad: true,
    items: 1,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
      '<button aria-label="arrow" class="feature-btn-owl"><i class="bi bi-chevron-left"></i></button>',
      '<button aria-label="arrow" class="feature-btn-owl ms-2"><i class="bi bi-chevron-right"></i></button>',
    ],
  });
  //Go through each carousel on the page
  $(".premium-features-owl").each(function () {
    //Find each set of dots in this carousel
    $(this)
      .find(".owl-nav button")
      .each(function (index) {
        //Add one to index so it starts from 1
        $(this).attr("aria-label", `features${index}`);
      });
  });

  $(".alert-client").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    arrow: false,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".offerbanner-owl").owlCarousel({
    loop: true,
    nav: false,
    arrow: false,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  //Go through each carousel on the page
  $(".alert-client").each(function () {
    //Find each set of dots in this carousel
    $(this)
      .find(".owl-dot")
      .each(function (index) {
        //Add one to index so it starts from 1
        $(this).attr("aria-label", `nav-client${index}`);
      });
  });
  $(".our-benifits-mob").owlCarousel({
    loop: true,
    dots: false,
    // margin:10,
    nav: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  if ($(window).width() < 576) {
    $("#pills-tabContent2 .tab-pane").addClass("show active");
    $("#pills-tabContent2 .tab-pane").wrapAll(
      "<div class='owl-carousel owl-theme benifit-car'></div>"
    );
    $(".benifit-car").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      navText: [
        '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
        '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    $("#mob-choose .col-lg-4").wrapAll(
      "<div class='owl-carousel owl-theme mob-choose-wrap'></div>"
    );
    $(".mob-choose-wrap").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      navText: [
        '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
        '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }

  $(".offer-zone-client").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".why-choose-mob").owlCarousel({
    loop: true,
    dots: false,
    // margin:10,
    nav: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  // $(window).scrollTop(0);
  $("#whychoose").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn clicknext"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn clickprev ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
        margin: 10,
      },
    },
  });
  $("#newclient").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    // stagePadding: 150,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
        // stagePadding: 10,
      },
      600: {
        items: 1,
        nav: true,
        loop: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
  $(".owl-client-new").owlCarousel({
    stagePadding: 60,
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
 

  document.querySelectorAll('.owl-dots button').forEach((button, index) => {
    button.setAttribute('aria-label', `Slide ${index + 1}`);
  });

  $(".mobile-book-access").owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    items: 1,
  });

  $(".offering-demo-img").owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    items: 1,
  });

  $("#about_slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    // stagePadding: 200,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    // navText: [
    //     '<button class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
    //     '<button class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    // ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        stagePadding: 10,
      },
      600: {
        items: 1,
        nav: false,
        loop: true,
        margin: 10,
      },
      1000: {
        items: 1,
        nav: false,
        loop: true,
        margin: 10,
      },
    },
  });

  $("#ourservice").owlCarousel({
    item: 1,
    responsiveClass: true,
    dots: false,
    checkVisible: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
  $('#ourclients').owlCarousel({
    loop:true,
    dots:false,
    // margin:10,
    nav:true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
  ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  $("#ourProduct").owlCarousel({
    item: 1,
    responsiveClass: true,
    dots: false,
    checkVisible: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        // stagePadding: 50,
        nav: true,
        loop: true,
      },
      600: {
        items: 1,
        // stagePadding: 50,
        nav: true,
        loop: true,
      },
      1000: {
        items: 1,
        // stagePadding: 150,
        nav: true,
        loop: true,
      },
    },
  });

  $("#similarProduct").owlCarousel({
    item: 1,
    responsiveClass: true,
    dots: false,
    checkVisible: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        // stagePadding: 50,
        nav: true,
        loop: true,
      },
      600: {
        items: 1,
        // stagePadding: 50,
        nav: true,
        loop: true,
      },
      1000: {
        items: 1,
        // stagePadding: 150,
        nav: true,
        loop: true,
      },
    },
  });

  $("#ourJourney").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
        // stagePadding: 10
      },
      600: {
        items: 1,
        nav: true,
        loop: true,
        // stagePadding: 50
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
        margin: 10,
        // stagePadding: 80
      },
      2000: {
        items: 5,
        nav: true,
        loop: true,
        margin: 10,
        // stagePadding: 80
      },
    },
  });
  $("#demoVideo").owlCarousel({
    item: 1,
    responsiveClass: true,
    dots: false,
    checkVisible: true,
    stagePadding: 10,
    margin: 60,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow"  class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow"  class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });

  $(".revenue-slider.owl-carousel").owlCarousel({
    items: 1,
    loop: !0,
    autoplay: false,
    dots: !1,
    autoplayHoverPause: true,
    nav: !0,
    autoplaySpeed: 500,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<button aria-label="arrow" class="owl-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      '<button aria-label="arrow" class="owl-btn ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
    ],
  });
  // let ourservicep = document.querySelectorAll("#ourservice .active .whytxt > h3");
  //         document.getElementById("ourservicep").innerHTML = ourservicep[0].innerText;

  // $(".owl-prev , .owl-next").on("click", function () {

  //     let ourservicep = document.querySelectorAll("#ourservice .active .whytxt > h3");
  //         document.getElementById("ourservicep").innerHTML = ourservicep[0].innerText;

  //     // owl.trigger("prev.owl.carousel");
  // });

  let ourProduct = document.querySelectorAll(
    "#ourProduct .active .whyin .whytxt > h1"
  );
  if (ourProduct === undefined) {
    document.getElementById("ourProductP").innerHTML = ourProduct[0].innerText;
  }
  $(".owl-prev , .owl-next").on("click", function () {
    let ourProduct = document.querySelectorAll(
      "#ourProduct .active .whyin .whytxt > h1"
    );
    if (ourProduct === undefined) {
      document.getElementById("ourProductP").innerHTML =
        ourProduct[0].innerText;
    }
    // owl.trigger("prev.owl.carousel");
  });

  $(".ebookpaper-btn").click(function () {
    $("#file_url").val("");
  });
});

//for offer contact pop-up
$(document).ready(function () {
  if ($(window).width() < 767) {
    $("#phonenumber1").on("click keyup", function () {
      code_value = $("#select_value2").text();
      if (code_value == "Select") {
        $("#phone_code1").focus();
        $(".country-field").addClass("blinking");
      } else {
        $("#phone_code1").blur();
        $(".country-field").removeClass("blinking");
      }
    });
  } else {
    $("#phonenumber1").on("click keyup", function () {
      code_value = $("#select_value2").text();
      if (code_value == "Select") $("#phonenumber1").val("");
      console.log(code_value, $(".phone_code1").length);

      if (
        code_value == "Select" &&
        $(".phone_code1").length != 1 &&
        $(".phone_code1").length != 2
      ) {
        console.log(3234234);
        var $target = $("#phone_code1");
        var $clone = $target.clone().removeAttr("id");
        $clone
          .val("Select")
          .css({
            overflowx: "auto",
            position: "absolute",
            "z-index": 999,
            left: -88,
            top: 14,
            width: "auto",
            opacity: 1,
            background: "#fff",
            border: "1px solid",
          })
          .attr(
            "size",
            $clone.find("option").length > 10
              ? 10
              : $clone.find("option").length
          )
          .on("click blur keypress", function (e) {
            if (
              e.type == "blur" &&
              $(this).val() == "Select" &&
              $("#phonenumber1").val()
            ) {
              return false;
            }
            if (e.type !== "keypress" || e.which === 13) {
              $(this).remove();
            }
            $("#phone_code1").val($(this).val()).trigger("change");
          });
        console.log(21323);
        $(".append_clone").append($clone);
        $clone.focus();
      }
    });
  }
  var $countryValue2 = $("#select_value2");
  var $countryValue3 = $("#select_value3");

  if ($('#offer-contact-form').is(':visible')) {
    var element = document.getElementById("submit");
    element.classList.add("disable_btn");
  $("#full_name1,#email1,#phonenumber1").on("click keyup", function () {
    if ($("#offer-contact-form").valid()) {
      $(".theme_btn_resource").removeAttr("disabled", "disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn_resource").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });
  };
  $(".country-code1 select").on("change", function () {
    if ($(this).val() != "Select") {
      val = "+ " + $(this).val();
      $(".country-code1 select option[value*='Select']").prop("disabled", true);
    } else {
      val = $(this).val();
    }
    // $countryValue.text(val);
    $countryValue2.text(val);
    $countryValue3.text(val);
  });

  setTimeout(function () {
    $("#phone_code1").val("Select").trigger("change");
    $("#phone_code1_new").val("").trigger("change");
    $("#select_value3").text("Select");
    $("#select_value2").text("Select");
  }, 500);

  function getRole_new() {
    return $("#new_validation_check").val() ?? "";
  }

  function getRoleRequire_new() {
    if ($("#new_validation_check").val() == "yes")
      return $("#new_validation_check").val() ?? "";
    else return $("#addon").length;
  }
});
//for offer contact pop-up

$(function () {
  var dd = document.querySelectorAll(".processflowimg video");
  dd.forEach((p) => {
    var offset = $("#" + p.id).offset().top;
    $(window).scroll(function () {
      var offset = $("#" + p.id).offset().top;
      var hT = Math.round(offset);
      var hH = $("#" + p.id).outerHeight();
      (wH = $(window).height()), (wS = $(this).scrollTop());
      if (wS > hT - 380 && wS < hT + hH) {
        $("#" + p.id)
          .get(0)
          .play();
      } else {
        $("#" + p.id)
          .get(0)
          .load();
        $("#" + p.id).get(0).currentTime = 0;
        $("#" + p.id)
          .get(0)
          .pause();
      }
    });
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".main_header").addClass("fixed-bg");
    //  $(".custom-nav").addClass("active-nav");
    $(".homebanner").addClass("fixed-bg");
    $("#scrolltop").addClass("scroll-top");
  } else {
    $(".main_header").removeClass("fixed-bg");
    //  $(".custom-nav").removeClass("active-nav");
    $(".homebanner").removeClass("fixed-bg");
    $("#scrolltop").removeClass("scroll-top");
  }
});

$(function () {
  //run when the DOM is ready
  $("#Full_name").focus(function () {
    $(".form-label.msg").addClass("active");
  });
  $("#Email").focus(function () {
    $(".form-label.msg").addClass("active");
  });

  $("#Phonenumber").focus(function () {
    $(".form-label.msg").addClass("active");
  });
  $("#Full_name-error").focus(function () {
    $(".form-label.msg").addClass("active");
  });
});

$(function () {
  $(".view_btn").click(function () {
    // remove classes from all
    $(".view_btn").css("display", "none");
    // add class to the one we clicked
    $(".view_pricing").css("display", "block");
    var clientHeight = document.getElementById("view_more").clientHeight;
    $(this).scrollTop(clientHeight);
  });
});

$(document).ready(function () {
  var checkOffer = $("#offer_panel");
  var checkoffer1 = $(".fix-top.noactive ");

  if (checkOffer) {
    $(".navbar.fixed-top").addClass("active");
    $(".subheader .activetop").addClass("active");
  }
  if (checkoffer1) {
    $(".navbar.fixed-top").removeClass("active");
    $(".subheader .activetop").removeClass("active");
  }
  // if($(window).width() > 991){
  //   $('#feature1 .nav-link').addClass('scroll');
  //   $("#feature1 .nav-link.scroll").click(function () {
  //       $(window).scrollTop(1600);
  //   });
  // }

  const gojekURL = window.location.href.split("/");
  if (gojekURL === "gojek-clone") {
    if ($(window).width() > 991) {
      $(".benifits .nav-link").addClass("scroll1");
      $("#feature1 .nav-link").removeClass("scroll1");
      $(".benifits .nav-link.scroll1").click(function () {
        $(window).scrollTop(1350);
      });
    }
    if ($(window).width() > 991) {
      $("#feature2 .nav-link").addClass("scroll2");
      $("#feature2 .nav-link.scroll2").click(function () {
        $(window).scrollTop(6000);
      });
    }
  }

  if ($(window).width() > 991) {
    $("#navbarSupportedContent .nav-link.contactus").click(function () {
      $(window).scrollTop(2500);
      console.log("test");
    });
  }

  //Initialize tooltips
  $(".nav-item > li a[title]").tooltip();
  // $('.main_header').css("margin-top", "96px");
  var mainheight = $(".main_header .navbar").outerHeight();
  $(".homebanner").css("margin-top", mainheight);

  //Wizard
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    var $target = $(e.target);
    if ($target.parent().hasClass("disabled")) {
      return false;
    }
  });

  $(".next-step").click(function (e) {
    var $active = $(".nav-item .active");
    $active.parent().next().find(".nav-link").removeClass("disabled");
    nextTab($active);
  });

  $(".prev-step").click(function (e) {
    var $active = $(".nav-item .active");
    prevTab($active);
  });

  $(".top_res").click(function (e) {
    $(this).hide();
    $("#playvideo")[0].src += "&autoplay=1";
    ev.preventDefault();
  });

  $(".downarrow").click(function () {
    $(this).parent().toggleClass("added");
  });
  $(".leftarrow").click(function () {
    $(this).parent().toggleClass("added");
  });
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("not-scroll");
    $("html").toggleClass("not-scroll");
  });

  //  $(".downarrow").click(function (e) {
  //     $(".cls_dropdown").css('display','block')
  // });
  if (window.location.href == "https://www.trioangledemo.com/e-books/") {
    $(".main_header").addClass("ebook-top");
  } else if (
    window.location.href == "https://www.trioangledemo.com/whitepaper/"
  ) {
    $(".main_header").addClass("ebook-top");
  } else if (
    window.location.href == "https://www.trioangledemo.com/binance-clone/"
  ) {
    $(".main_header").addClass("ebook-top");
  }

  if (window.location.href == "https://www.trioangle.com/e-books/") {
    $(".main_header").addClass("ebook-top");
  } else if (window.location.href == "https://www.trioangle.com/whitepaper/") {
    $(".main_header").addClass("ebook-top");
  } else if (
    window.location.href == "https://www.trioangle.com/binance-clone/"
  ) {
    $(".main_header").addClass("ebook-top");
  }
});

function nextTab(elem) {
  $(elem).parent().next().find('button[data-bs-toggle="pill"]').click();
}
function prevTab(elem) {
  $(elem).parent().prev().find('button[data-bs-toggle="pill"]').click();
}

$(document).ready(function () {
  var winWidth = $(window).width();
  $(".banner-section img").addClass("active");

  $(function () {
    $(".subheader li a").click(function () {
      // remove classes from all
      $(".subheader li a").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
    });
  });

  $(function () {
    $("#tab1 .nav-link").click(function () {
      // remove classes from all
      $("#tab2 .nav-link").removeClass("active");
    });
  });

  $(function () {
    $("#tab2 .nav-link").click(function () {
      // remove classes from all
      $("#tab1 .nav-link").removeClass("active");
    });
  });
});

$(document).ready(function () {
  $("#phone_code").val("Select").trigger("change");

  // Cache the target element
  var $countryValue = $("#select_value");
  var $countryValue2 = $(".select_value2");

  // Get initial value
  $countryValue.text("Select");
  $countryValue2.text("Select");

  // Initialize Selectric and bind to 'change' event
  $(".country-code select").on("change", function () {
    if ($(this).val() != "Select") {
      val = "+ " + $(this).val();

      $(".country-code select option[value*='Select']").prop("disabled", true);
    } else {
      val = $(this).val();
    }
    $countryValue.text(val);
    // $countryValue2.text(val);
  });

  $("#Phonenumber").on("wheel", function () {
    return false;
  });

  $("#Phonenumber").on("keydown", function (e) {
    if (e.which === 38 || e.which === 40) {
      return false;
    }
  });

  if ($(window).width() < 767) {
    $("#Phonenumber").on("click keyup", function () {
      code_value = $("#select_value").text();
      if (code_value == "Select") {
        $("#phone_code").focus();
        $(".country-field").addClass("blinking");
      } else {
        $("#phone_code").blur();
        $(".country-field").removeClass("blinking");
      }
    });
  } else {
    $("#Phonenumber").on("click keyup", function () {
      code_value = $("#select_value").text();

      if (code_value == "Select") $("#Phonenumber").val("");

      if (code_value == "Select" && $(".phone_code").length == 1) {
        var $target = $("#phone_code");
        var $clone = $target.clone().removeAttr("id");

        $clone
          .val("Select")
          .css({
            overflowx: "auto",
            position: "absolute",
            "z-index": 999,
            left: $target.offset().left,
            top: $target.offset().top + $target.outerHeight(),
            width: "auto",
          })
          .attr(
            "size",
            $clone.find("option").length > 10
              ? 10
              : $clone.find("option").length
          )
          .on("click blur keypress", function (e) {
            if (
              e.type == "blur" &&
              $(this).val() == "Select" &&
              $("#Phonenumber").val()
            )
              return false;
            if (e.type !== "keypress" || e.which === 13) $(this).remove();

            $("#phone_code").val($(this).val()).trigger("change");
          });
        $("body").append($clone);
        $clone.focus();
      }
    });
  }

  if ($(window).width() < 767) {
    $("#phonenumber").on("click keyup", function () {
      code_value = $("#select_value").text();
      if (code_value == "Select") {
        $("#phone_code").focus();
        $(".country-field").addClass("blinking");
      } else {
        $("#phone_code").blur();
        $(".country-field").removeClass("blinking");
      }
    });
  } else {
    $("#phonenumber").on("click keyup", function () {
      code_value = $("#select_value").text();

      if (code_value == "Select") $("#phonenumber").val("");

      if (code_value == "Select" && $(".phone_code").length == 1) {
        var $target = $("#phone_code");
        var $clone = $target.clone().removeAttr("id");

        $clone
          .val("Select")
          .css({
            overflowx: "auto",
            position: "absolute",
            "z-index": 999,
            left: $target.offset().left,
            top: $target.offset().top + $target.outerHeight(),
            width: "auto",
          })
          .attr(
            "size",
            $clone.find("option").length > 10
              ? 10
              : $clone.find("option").length
          )
          .on("click blur keypress", function (e) {
            if (
              e.type == "blur" &&
              $(this).val() == "Select" &&
              $("#phonenumber").val()
            )
              return false;
            if (e.type !== "keypress" || e.which === 13) $(this).remove();

            $("#phone_code").val($(this).val()).trigger("change");
          });
        $("body").append($clone);
        $clone.focus();
      }
    });
  }

  //$('.theme_btn .g-recaptcha').css("display","none");
  $(".theme_btn").attr("disabled", "disabled");
  if ($('#form').length > 0) {
  var element = document.getElementById("submit");
  element.classList.add("disable_btn");

  $("#full_name,#email,#phonenumber").on("click keyup", function () {
    var valid = $("#form").valid();
    console.log(valid, "test");
    if ($("#form").valid()) {
      $(".theme_btn").removeAttr("disabled", "disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });
  }
  $("#reach-textarea").on("click keyup", function () {
    var valid = $("#form").valid();
    console.log(valid, "test");
    if ($("#form").valid()) {
      $(".theme_btn").removeAttr("disabled", "disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });

  $("#product_select").on("change", function () {
    var valid = $("#form").valid();
    if ($("#form").valid()) {
      $(".theme_btn").removeAttr("disabled", "disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });

  $("#reachus_select").on("change", function (e) {
    if (e.target.value == "Other") {
      $(".reachus-textarea-div").show();
    } else {
      $(".reachus-textarea-div").hide();
    }
    var valid = $("#form").valid();
    console.log(valid, "test");
    if ($("#form").valid()) {
      $(".theme_btn").removeAttr("disabled", "disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });

  $("#Full_name,#Email,#Phonenumber").on("click keyup", function () {
    if ($("#contactform").valid()) {
      $(".theme_btn").removeAttr("disabled");
      element.classList.remove("disable_btn");
    } else {
      $(".theme_btn").attr("disabled", "disabled");
      element.classList.add("disable_btn");
    }
  });
});

const placeholder = "";
const targets = document.querySelectorAll("[data-src]");
const imgtargets = document.querySelectorAll("img[data-src]");
targets.forEach((target) => {
  target.src = placeholder;
});
imgtargets.forEach((imgtarget) => {
  imgtarget.classList.add("lazy");
});

$("#feature_theme_btn").click(function () {
  $(".nav").removeClass("d-none");
  $("#feature_theme_btn").addClass("d-none");
});

//============= IntersectionObserver

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.05,
};

const loadImage = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains("lazy")) {
      entry.target.src = entry.target.getAttribute("data-src");
      entry.target.onload = () => {
        entry.target.classList.remove("lazy");
        entry.target.removeAttribute("data-src");
      };
    }
  });
};

const observer = new IntersectionObserver(loadImage, options);
targets.forEach((target) => {
  observer.observe(target);
});

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByName("first-contentful-paint")) {
    console.log("FCP candidate:", entry.startTime, entry);
  }
}).observe({ type: "paint", buffered: true });

// $(".navbar-nav li a").bind("click", function(e) {
// // e.preventDefault();
// var o = $(this).attr("href"),
// t = ($(".navbar-nav").outerHeight());
// return $("html, body").stop().animate({
//   scrollTop: $(o).offset().top - t
// }, 100, function() {}), !1
// });

// $(".view_btn").bind("click", function(e) {
//   // e.preventDefault();
//   var o = $(this).attr("href"),
//   t = ($(".view-more").outerHeight());
//   return $("html, body").stop().animate({
//     scrollTop: $(o).offset().top - t
//   }, 100, function() {}), !1
// });

document.addEventListener("DOMContentLoaded", function () {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

// for ebooks and white paper functionality:
function setProductTitle(product, fileType) {
  if (fileType === "EBook") {
    var segment = fileType.toLowerCase();
  } else {
    var segment = fileType[0].toLowerCase() + fileType.slice(1);
  }
  const fullUrl = window.location.href;
  const pdfurl = new URL(fullUrl).origin;
  $("#file_url").val(pdfurl+'/resources/pdf/' + segment + "/" + product + fileType + ".pdf");
  $("#file_url").attr("data-filename", product + fileType + ".pdf");
}

function copy_clipboard(value, section = "") {
  var tooltip = document.getElementById("myTooltip");

  // if (value === 'mouse_out') {
  //   tooltip.innerHTML = "";
  //   return false;
  // }
  var value = $("#" + value).text();

  navigator.clipboard.writeText(value);

  tooltip.innerHTML = "<span class='copied-txt'>Copied: </span>" + value;
  // setTimeout(() => {
  //   tooltip.innerHTML = "";
  // }, "5000")
}
$("[href='#pricing']").one("click", function () {
  $("#pricing").css("scroll-margin-top", "-750px");
  setTimeout(function () {
    $("#pricing").css("scroll-margin-top", "0px");
  }, 1000);
});

$("[href='#ouroffer']").one("click", function () {
  $("#ouroffer").css("scroll-margin-top", "-650px");
  setTimeout(function () {
    $("#ouroffer").css("scroll-margin-top", "0px");
  }, 1000);
});

//Get Origin URL
let getUrl = window.location.origin;

//Get Base URL
let baseURL =
  getUrl == "http://localhost"
    ? getUrl + "/project/trioanglenew/"
    : getUrl + "/";

//Generate Random NUmber for Version Changes
var number = Math.floor(1000 + Math.random() * 9000);

// $( window ).on("load", function() {

//   //Bootstrap Icon Append
//   var iconAppend = $("<link>", {
//     rel: "stylesheet",
//     type: "text/css",
//     href: baseURL + 'css/bootstrap-fonts-icons/bootstrap-icons.css?version=' + number
//   });

//   setTimeout(function () {
//     iconAppend.appendTo('head');
//   }, 1000);

// });
//Pricing Table
$.ajax({
  type: "GET",
  url:
    getUrl == "http://localhost"
      ? getUrl + "/project/trioanglenew/common/database"
      : getUrl + "/common/database",
  data: {},
  success: function (data) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".append-table").html(data);
        $("#remv-table").removeClass("append-table");
      }
    });
  },
});

//Review
$.ajax({
  type: "GET",
  url:
    getUrl == "http://localhost"
      ? getUrl + "/project/trioanglenew/common/review"
      : getUrl + "/common/review",
  data: {},
  success: function (data) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".append-review").html(data);
        $("#remv-review").removeClass("append-review");
      }
    });
  },
});

$("#phone_code1").change(function () {
  $("#phone_code_select1").val($(this).val());
});
$("#phone_code1_new").change(function () {
  $("#country_code").val($(this).val());
});

$("#phone_code").change(function () {
  $("#phone_code_select").val($(this).val());
});

$(document).on("click", ".client_view", function () {
  var src = $(this).data("src");
  $("#client_view_video").attr("src", src);
  setTimeout(function () {
    $("#miloud").modal("show");
  }, 500);
});

//demo video js
var demo_src_link;

$("#video-sec-modal").on("show.bs.modal", function (e) {
  demo_src_link = $("#video-sec-modal iframe").attr("src");
  $("#video-sec-modal iframe").attr("src", demo_src_link + "&autoplay=1");
  console.log(demo_src_link, $("#video-sec-modal iframe").attr("src"));
});

$("#workflow-modal").on("show.bs.modal", function (e) {
  demo_src_link = $("#workflow-modal iframe").attr("src");
  $("#workflow-modal iframe").attr("src", demo_src_link + "&autoplay=1");
  console.log(demo_src_link, $("#workflow-modal iframe").attr("src"));
});

$("#video-sec-modal").on("hide.bs.modal", function (e) {
  console.log(demo_src_link);
  $("#video-sec-modal iframe").attr("src", "");
  $("#video-sec-modal iframe").attr("src", demo_src_link);
});

$("#workflow-modal").on("hide.bs.modal", function (e) {
  console.log(demo_src_link);
  $("#workflow-modal iframe").attr("src", "");
  $("#workflow-modal iframe").attr("src", demo_src_link);
});
//demo video js

$(document).on(
  "pointerdown",
  "#phone_code, #phonenumber, #phone_code1, #phone_code1_new",
  function (response) {
    $("#phone_code, #phone_code1, #phonenumber, #phone_code1_new")
      .html(`<option value="">
    Select</option>
    <option value=" 93">
  Afghanistan</option>
<option value=" 355">
  Albania</option>
<option value=" 213">
  Algeria</option>
<option value=" 1684">
  American Samoa</option>
<option value=" 376">
  Andorra</option>
<option value=" 244">
  Angola</option>
<option value=" 1264">
  Anguilla</option>
<option value=" 0">
  Antarctica</option>
<option value=" 1268">
  Antigua and Barbuda</option>
<option value=" 54">
  Argentina</option>
<option value=" 374">
  Armenia</option>
<option value=" 297">
  Aruba</option>
<option value=" 61">
  Australia</option>
<option value=" 43">
  Austria</option>
<option value=" 994">
  Azerbaijan</option>
<option value=" 1242">
  Bahamas</option>
<option value=" 973">
  Bahrain</option>
<option value=" 880">
  Bangladesh</option>
<option value=" 1246">
  Barbados</option>
<option value=" 375">
  Belarus</option>
<option value=" 32">
  Belgium</option>
<option value=" 501">
  Belize</option>
<option value=" 229">
  Benin</option>
<option value=" 1441">
  Bermuda</option>
<option value=" 975">
  Bhutan</option>
<option value=" 591">
  Bolivia</option>
<option value=" 387">
  Bosnia and Herzegovina</option>
<option value=" 267">
  Botswana</option>
<option value=" 0">
  Bouvet Island</option>
<option value=" 55">
  Brazil</option>
<option value=" 246">
  British Indian Ocean Territory</option>
<option value=" 673">
  Brunei Darussalam</option>
<option value=" 359">
  Bulgaria</option>
<option value=" 226">
  Burkina Faso</option>
<option value=" 257">
  Burundi</option>
<option value=" 855">
  Cambodia</option>
<option value=" 237">
  Cameroon</option>
<option value=" 1">
  Canada</option>
<option value=" 238">
  Cape Verde</option>
<option value=" 1345">
  Cayman Islands</option>
<option value=" 236">
  Central African Republic</option>
<option value=" 235">
  Chad</option>
<option value=" 56">
  Chile</option>
<option value=" 86">
  China</option>
<option value=" 61">
  Christmas Island</option>
<option value=" 672">
  Cocos (Keeling) Islands</option>
<option value=" 57">
  Colombia</option>
<option value=" 269">
  Comoros</option>
<option value=" 242">
  Congo</option>
<option value=" 242">
  Congo, the Democratic Republic of the</option>
<option value=" 682">
  Cook Islands</option>
<option value=" 506">
  Costa Rica</option>
<option value=" 225">
  Cote D'Ivoire</option>
<option value=" 385">
  Croatia</option>
<option value=" 53">
  Cuba</option>
<option value=" 357">
  Cyprus</option>
<option value=" 420">
  Czech Republic</option>
<option value=" 45">
  Denmark</option>
<option value=" 253">
  Djibouti</option>
<option value=" 1767">
  Dominica</option>
<option value=" 1809">
  Dominican Republic</option>
<option value=" 593">
  Ecuador</option>
<option value=" 20">
  Egypt</option>
<option value=" 503">
  El Salvador</option>
<option value=" 240">
  Equatorial Guinea</option>
<option value=" 291">
  Eritrea</option>
<option value=" 372">
  Estonia</option>
<option value=" 251">
  Ethiopia</option>
<option value=" 500">
  Falkland Islands (Malvinas)</option>
<option value=" 298">
  Faroe Islands</option>
<option value=" 679">
  Fiji</option>
<option value=" 358">
  Finland</option>
<option value=" 33">
  France</option>
<option value=" 594">
  French Guiana</option>
<option value=" 689">
  French Polynesia</option>
<option value=" 0">
  French Southern Territories</option>
<option value=" 241">
  Gabon</option>
<option value=" 220">
  Gambia</option>
<option value=" 995">
  Georgia</option>
<option value=" 49">
  Germany</option>
<option value=" 233">
  Ghana</option>
<option value=" 350">
  Gibraltar</option>
<option value=" 30">
  Greece</option>
<option value=" 299">
  Greenland</option>
<option value=" 1473">
  Grenada</option>
<option value=" 590">
  Guadeloupe</option>
<option value=" 1671">
  Guam</option>
<option value=" 502">
  Guatemala</option>
<option value=" 224">
  Guinea</option>
<option value=" 245">
  Guinea-Bissau</option>
<option value=" 592">
  Guyana</option>
<option value=" 509">
  Haiti</option>
<option value=" 0">
  Heard Island and Mcdonald Islands</option>
<option value=" 39">
  Holy See (Vatican City State)</option>
<option value=" 504">
  Honduras</option>
<option value=" 852">
  Hong Kong</option>
<option value=" 36">
  Hungary</option>
<option value=" 354">
  Iceland</option>
<option value=" 91">
  India</option>
<option value=" 62">
  Indonesia</option>
<option value=" 98">
  Iran, Islamic Republic of</option>
<option value=" 964">
  Iraq</option>
<option value=" 353">
  Ireland</option>
<option value=" 972">
  Israel</option>
<option value=" 39">
  Italy</option>
<option value=" 1876">
  Jamaica</option>
<option value=" 81">
  Japan</option>
<option value=" 962">
  Jordan</option>
<option value=" 7">
  Kazakhstan</option>
<option value=" 254">
  Kenya</option>
<option value=" 686">
  Kiribati</option>
<option value=" 850">
  Korea, Democratic People's Republic of</option>
<option value=" 82">
  Korea, Republic of</option>
<option value=" 965">
  Kuwait</option>
<option value=" 996">
  Kyrgyzstan</option>
<option value=" 856">
  Lao People's Democratic Republic</option>
<option value=" 371">
  Latvia</option>
<option value=" 961">
  Lebanon</option>
<option value=" 266">
  Lesotho</option>
<option value=" 231">
  Liberia</option>
<option value=" 218">
  Libyan Arab Jamahiriya</option>
<option value=" 423">
  Liechtenstein</option>
<option value=" 370">
  Lithuania</option>
<option value=" 352">
  Luxembourg</option>
<option value=" 853">
  Macao</option>
<option value=" 389">
  Macedonia, the Former Yugoslav Republic of</option>
<option value=" 261">
  Madagascar</option>
<option value=" 265">
  Malawi</option>
<option value=" 60">
  Malaysia</option>
<option value=" 960">
  Maldives</option>
<option value=" 223">
  Mali</option>
<option value=" 356">
  Malta</option>
<option value=" 692">
  Marshall Islands</option>
<option value=" 596">
  Martinique</option>
<option value=" 222">
  Mauritania</option>
<option value=" 230">
  Mauritius</option>
<option value=" 269">
  Mayotte</option>
<option value=" 52">
  Mexico</option>
<option value=" 691">
  Micronesia, Federated States of</option>
<option value=" 373">
  Moldova, Republic of</option>
<option value=" 377">
  Monaco</option>
<option value=" 976">
  Mongolia</option>
<option value=" 1664">
  Montserrat</option>
<option value=" 212">
  Morocco</option>
<option value=" 258">
  Mozambique</option>
<option value=" 95">
  Myanmar</option>
<option value=" 264">
  Namibia</option>
<option value=" 674">
  Nauru</option>
<option value=" 977">
  Nepal</option>
<option value=" 31">
  Netherlands</option>
<option value=" 599">
  Netherlands Antilles</option>
<option value=" 687">
  New Caledonia</option>
<option value=" 64">
  New Zealand</option>
<option value=" 505">
  Nicaragua</option>
<option value=" 227">
  Niger</option>
<option value=" 234">
  Nigeria</option>
<option value=" 683">
  Niue</option>
<option value=" 672">
  Norfolk Island</option>
<option value=" 1670">
  Northern Mariana Islands</option>
<option value=" 47">
  Norway</option>
<option value=" 968">
  Oman</option>
<option value=" 92">
  Pakistan</option>
<option value=" 680">
  Palau</option>
<option value=" 970">
  Palestinian Territory, Occupied</option>
<option value=" 507">
  Panama</option>
<option value=" 675">
  Papua New Guinea</option>
<option value=" 595">
  Paraguay</option>
<option value=" 51">
  Peru</option>
<option value=" 63">
  Philippines</option>
<option value=" 0">
  Pitcairn</option>
<option value=" 48">
  Poland</option>
<option value=" 351">
  Portugal</option>
<option value=" 1787">
  Puerto Rico</option>
<option value=" 974">
  Qatar</option>
<option value=" 262">
  Reunion</option>
<option value=" 40">
  Romania</option>
<option value=" 70">
  Russian Federation</option>
<option value=" 250">
  Rwanda</option>
<option value=" 290">
  Saint Helena</option>
<option value=" 1869">
  Saint Kitts and Nevis</option>
<option value=" 1758">
  Saint Lucia</option>
<option value=" 508">
  Saint Pierre and Miquelon</option>
<option value=" 1784">
  Saint Vincent and the Grenadines</option>
<option value=" 684">
  Samoa</option>
<option value=" 378">
  San Marino</option>
<option value=" 239">
  Sao Tome and Principe</option>
<option value=" 966">
  Saudi Arabia</option>
<option value=" 221">
  Senegal</option>
<option value=" 381">
  Serbia and Montenegro</option>
<option value=" 248">
  Seychelles</option>
<option value=" 232">
  Sierra Leone</option>
<option value=" 65">
  Singapore</option>
<option value=" 421">
  Slovakia</option>
<option value=" 386">
  Slovenia</option>
<option value=" 677">
  Solomon Islands</option>
<option value=" 252">
  Somalia</option>
<option value=" 27">
  South Africa</option>
<option value=" 0">
  South Georgia and the South Sandwich Islands</option>
<option value=" 34">
  Spain</option>
<option value=" 94">
  Sri Lanka</option>
<option value=" 249">
  Sudan</option>
<option value=" 211">
  South Sudan</option>
<option value=" 597">
  Suriname</option>
<option value=" 47">
  Svalbard and Jan Mayen</option>
<option value=" 268">
  Swaziland</option>
<option value=" 46">
  Sweden</option>
<option value=" 41">
  Switzerland</option>
<option value=" 963">
  Syrian Arab Republic</option>
<option value=" 886">
  Taiwan, Province of China</option>
<option value=" 992">
  Tajikistan</option>
<option value=" 255">
  Tanzania, United Republic of</option>
<option value=" 66">
  Thailand</option>
<option value=" 670">
  Timor-Leste</option>
<option value=" 228">
  Togo</option>
<option value=" 690">
  Tokelau</option>
<option value=" 676">
  Tonga</option>
<option value=" 1868">
  Trinidad and Tobago</option>
<option value=" 216">
  Tunisia</option>
<option value=" 90">
  Turkey</option>
<option value=" 7370">
  Turkmenistan</option>
<option value=" 1649">
  Turks and Caicos Islands</option>
<option value=" 688">
  Tuvalu</option>
<option value=" 256">
  Uganda</option>
<option value=" 380">
  Ukraine</option>
<option value=" 971">
  United Arab Emirates</option>
<option value=" 44">
  United Kingdom</option>
<option value=" 1">
  United States</option>
<option value=" 1">
  United States Minor Outlying Islands</option>
<option value=" 598">
  Uruguay</option>
<option value=" 998">
  Uzbekistan</option>
<option value=" 678">
  Vanuatu</option>
<option value=" 58">
  Venezuela</option>
<option value=" 84">
  Viet Nam</option>
<option value=" 1284">
  Virgin Islands, British</option>
<option value=" 1340">
  Virgin Islands, U.s.</option>
<option value=" 681">
  Wallis and Futuna</option>
<option value=" 212">
  Western Sahara</option>
<option value=" 967">
  Yemen</option>
<option value=" 260">
  Zambia</option>
<option value=" 263">
  Zimbabwe</option>`);
  }
);
//For whatsapp link Functionality Start
$(document).ready(function () {
  $('[aria-label="Whatsapp Link"]').each(function () {
    $(this).attr("href", $(this).attr("href") + "\n\n" + window.location.href);
  });
});
//For whatsapp link Functionality End
//For Cananical Link and OG URL
$(document).ready(function () {
  // Guaranteed Live label
  var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    window.location.pathname === '/' ||
    segment === 'marijuana-delivery-script' ||
    segment === 'fulfillment-policy' ||
    segment === 'online-property-rental-solutions' ||
    segment === 'ubereats-clone-spanish-language' ||
    segment === 'products' ||
    segment === 'entrepreneur' ||
    segment === 'jovago-clone' ||
    segment === 'makemytrip-clone' ||
    segment === 'booking-clone' ||
    segment === 'room-reservation-script' ||
    segment === 'venue-booking-script' ||
     segment === 'uber-for-babysitters' ||
    segment === 'on-demand-services-app' ||
    segment === 'electricians-service-script' ||
    segment === 'matrimonial-script' ||
    segment === 'maid-service-script' ||
    segment === 'pest-control-service-script' ||
    segment === 'drizly-clone' ||
    segment === 'uber-for-carpet-repair-service' ||
    segment === 'pets-dating-script' ||
    segment === 'pharmacy-delivery-script' ||
    segment === 'package-delivery-script' ||
    segment === 'ecommerce-app-development' ||
    segment === 'online-food-delivery-solution' ||
    segment === 'dating-app-development' ||
    segment === 'online-classified-software' ||
    segment === 'on-demand-taxi-booking-app' ||
    segment === 'lalamove-clone' ||
    segment === 'grab-clone' ||
    segment === 'offer-zone' ||
    segment === 'portfolio' ||
    segment === 'multiservices-app-development' ||
    segment === 'binance-clone' ||
    segment === 'pricing-table' ||
    segment === 'opensea-clone' ||
    segment === 'nft-marketplace-development' ||
    segment === 'metamask-wallet-clone' ||
    segment === 'rarible-clone' ||
    segment === 'trust-wallet-clone' ||
    segment === 'white-label-nft-marketplace' ||
    segment === 'decentralized-exchange-script' ||
    segment === 'uniswap-clone' ||
    segment === 'sushiswap-clone' ||
    segment === 'pancakeswap-clone' ||
    segment === 'coinbase-clone' ||
    segment === 'remitano-clone' ||
    segment === 'paxful-clone' ||
    segment === 'cryptocurrency-exchange-script' ||
    segment === 'online-marketplace-software' ||
    segment === 'partner-with-us' ||
    segment === 'handyman-app-development' ||
    segment === 'online-classified-software' ||
    segment === 'travel-and-hospitality' ||
    segment === 'transportation-and-logistics' ||
    segment === 'social-media' ||
    segment === 'ecommerce' ||
    segment === 'rental-script' ||
    segment === 'parking-booking-script' ||
    segment === 'justpark-clone' ||
    segment === 'cameo-clone' 
  ) {
    var offer_popup = `
        <div class="container d-none">
                <div class="text-center">
                    <a class="m-0" href="#"
                        style="font-size:16px;font-weight: bold;display:inline-block;pointer-events: none;">Guaranteed
                        Live Within <strong>7
                            - Business Days </strong> If Not <strong> 100% Money Back </strong> <span
                            style="font-size:12px"> *Terms & Conditions Apply</span> </a>
                </div>
            </div>
        `
    $('#offer-panel').append(offer_popup);
  }

  // footer - disclaimer

  var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    window.location.pathname === '/' ||
    segment === 'airbnb-clone' ||
    segment === 'venue-booking-script' ||
    segment === 'careem-clone' ||
    segment === 'bolt-clone' ||
    segment === 'uber-for-carpet-repair-service' ||
    segment === 'pest-control-service-script' ||
    segment === 'lyft-grab-clone' ||
    segment === 'uber-for-towing' ||
    segment === 'honk-clone' ||
    segment === 'delivery-script' ||
    segment === 'lalamove-clone' ||
    segment === 'package-delivery-script' ||
    segment === 'delivery-app-clone' ||
    segment === 'gopuff-clone' ||
    segment === 'getir-clone' ||
    segment === 'flink-clone' ||
    segment === 'delivery-all-script' ||
    segment === 'postmates-clone' ||
    segment === 'rappi-clone' ||
    segment === 'talabat-clone' ||
    segment === 'hungerstation-clone' ||
    segment === 'glovo-clone' ||
    segment === 'marijuana-delivery-script' ||
    segment === 'pharmacy-delivery-script' ||
    segment === 'alcohol-delivery-script' ||
    segment === 'drizly-clone' ||
    segment === 'grocery-delivery-script' ||
    segment === 'instacart-clone' ||
    segment === 'grofers-clone' ||
    segment === 'onecart-clone' ||
    segment === 'bigbasket-clone' ||
    segment === 'zapp-clone' ||
    segment === 'zepto-clone' ||
    segment === 'gorillas-clone' ||
    segment === 'ubereats-clone' ||
    segment === 'swiggy-clone' ||
    segment === 'zomato-clone' ||
    segment === 'foodpanda-clone' ||
    segment === 'deliveroo-clone' ||
    segment === 'grubhub-clone' ||
    segment === 'doordash-clone' ||
    segment === 'delivery-hero-clone' ||
    segment === 'justeat-clone' ||
    segment === 'foodspotting-clone' ||
    segment === 'wimdu-clone' ||
    segment === 'airbnb-like-app-development' ||
    segment === 'tripping-com-clone' ||
    segment === 'bnb-clone' ||
    segment === 'lastminute-clone' ||
    segment === 'vacation-rental-script' ||
    segment === 'zillow-clone' ||
    segment === 'trulia-clone' ||
    segment === 'homeaway-clone' ||
    segment === 'tripadvisor-clone' ||
    segment === 'trivago-clone' ||
    segment === 'blueground-clone' ||
    segment === 'priceline-clone' ||
    segment === 'yatra-clone' ||
    segment === 'condo-rental-script' ||
    segment === 'realtor-clone' ||
    segment === 'airbnb-clone-for-car-rentals' ||
    segment === 'car-rental-software' ||
    segment === 'turo-clone' ||
    segment === 'airbnb-clone-for-boat-rentals' ||
    segment === 'space-rental-script' ||
    segment === 'splacer-clone' ||
    segment === 'peerspace-clone' ||
    segment === 'event-booking-script' ||
    segment === 'hotel-booking-script' ||
    segment === 'hotel-tonight-clone' ||
    segment === '9flats-clone' ||
    segment === 'holidaylettings-clone' ||
    segment === 'vrbo-clone' ||
    segment === 'decolar-clone' ||
    segment === 'hotel-reservation-script' ||
    segment === 'room-reservation-script' ||
    segment === 'booking-clone' ||
    segment === 'makemytrip-clone' ||
    segment === 'skyscanner-clone' ||
    segment === 'jovago-clone' ||
    segment === 'rental-script' ||
    segment === 'online-teaching-script' ||
    segment === 'expedia-clone' ||
    segment === 'parking-booking-script' ||
    segment === 'online-property-rental-solutions' ||
    segment === 'justpark-clone' ||
    segment === 'cameo-clone' ||
    segment === 'handyman-script' ||
    segment === 'taskrabbit-clone' ||
    segment === 'urbanclap-clone' ||
    segment === 'on-demand-services-app' ||
    segment === 'styleseat-clone' ||
    segment === 'uber-for-haircuts' ||
    segment === 'uber-clone' ||
    segment === 'plumbing-service-script' ||
    segment === 'babysitter-service-script' ||
    segment === 'house-cleaning-service-script' ||
    segment === 'doctor-service-script' ||
    segment === 'electricians-service-script' ||
    segment === 'maid-service-script' ||
    segment === 'car-wash-service-script' ||
    segment === 'car-repair-script' ||
    segment === 'car-wash-service-script' ||
    segment === 'car-repair-script' ||
    segment === 'tutor-service-script' ||
    segment === 'carpenter-script' ||
    segment === 'gojek-clone' ||
    segment === 'uber-for-x-clone' ||
    segment === 'multiservices-app-development' ||
    segment === 'lynda-clone' ||
    segment === 'coursera-clone' ||
    segment === 'online-education-script' ||
    segment === 'pluralsight-clone' ||
    segment === 'unacademy-clone' ||
    segment === 'lms-clone' ||
    segment === 'duolingo-clone' ||
    segment === 'byjus-clone' ||
    segment === 'udacity-clone' ||
    segment === 'letgo-clone' ||
    segment === 'offerup-clone' ||
    segment === 'shpock-clone' ||
    segment === 'carousell-clon' ||
    segment === 'online-classified-script' ||
    segment === 'pets-classified-script' ||
    segment === 'cars-classified-script' ||
    segment === 'real-estate-classified-script' ||
    segment === 'jobs-classified-script' ||
    segment === 'coursera-clone' ||
    segment === 'olx-clone-script' ||
    segment === 'auto-classified-script' ||
    segment === 'online-classified-software' ||
    segment === 'binance-clone' ||
    segment === 'cryptocurrency-exchange-script' ||
    segment === ' paxful-clone' ||
    segment === 'remitano-clone' ||
    segment === 'coinbase-clone' ||
    segment === 'wazirx-clone-script' ||
    segment === 'p2p-cryptocurrency-exchange-script' ||
    segment === 'pancakeswap-clone' ||
    segment === 'uniswap-clone' ||
    segment === 'sushiswap-clone' ||
    segment === 'decentralized-exchange-script' ||
    segment === 'defi-development' ||
    segment === 'opensea-clone' ||
    segment === 'rarible-clone' ||
    segment === 'white-label-nft-marketplace' ||
    segment === 'nft-marketplace-development'
  ) {
    var footer_disclaimer_content = `
      <div class="bottomfooter disclaimer-txt pt-4 pb-3">
                    <p class="txt-primary fw-medium fs-16">Disclaimer</p>
                    <p class="txt-primary fs-14">We have referenced terms like “Airbnb”, “Uber”, “Fancy”, “Tinder”, “Letgo”, “Swiggy”, “Amazon”, “Zomato”, “JustEat”, “Olx”, “Carousel”, “Binance”, “Remitano”, “Paxful”, “Coinbase”, “Wazirx”, "Bybit", "Kraken", "Kucoin", "LocalBitcoins", “OpenSea”, “Rarible”, "Foundation", "Axie Infinity", "Solanart", "Blur", “Pancakeswap”, “Sushiswap”, “Uniswap”, "Bakeryswap", "GMX", "dYdX ", "1inch" and others solely to demonstrate the functionality and workflow of related services in a detailed manner. </p>
                    <p class="txt-primary fs-14">As an independent app development provider, we affirm that we have no
                        association with or connection to any of the mentioned companies. The source code and design of
                        our products are entirely our own, and we do not use any of their copyrighted materials.</p>
                </div>
        `
    $('#footer_disclaimer').append(footer_disclaimer_content);
  }

  // bottom discalimer

  var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    segment === 'pharmacy-delivery-script'

  ) {
    var footer_disclaimer_pharmacy = `
       <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Uber" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>
        `
    $('#footer-old-declaimer').append(footer_disclaimer_pharmacy);
  } else if (
    segment === 'airbnb-clone' ||
    segment === 'rental-script'
  ) {
    var footer_disclaimer_airbnb = `
               <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Airbnb" for the purpose of easy understanding & identification. We are not related to Airbnb, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_airbnb);

  } else if (
    segment === 'matrimonial-script' ||
    segment === 'tinder-clone' ||
    segment === 'pets-dating-script'
    
  ) {
    var footer_disclaimer_tinder = `
               <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Tinder" for the purpose of easy understanding & identification. We are not related to IAC & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_tinder);

  } else if (

    segment === 'udemy-clone'
  ) {
    var footer_disclaimer_udemy = `
               <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Udemy" for the purpose of easy understanding & identification. We are not related to Udemy, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_udemy);

  } else if (

    segment === 'fancy-clone'
  ) {
    var footer_disclaimer_udemy = `
               <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Fancy" for the purpose of easy understanding & identification. We are not related to Fancy, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_udemy);

  } else if (

    segment === 'uber-clone'
  ) {
    var footer_disclaimer_uber = `
               <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>  We are using the term "Uber" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_uber);

  } else if (

    segment === 'justeat-clone'
  ) {
    var footer_disclaimer_justeat = `
              <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Just Eat" for the purpose of easy understanding & identification. We are not related to Just Eat Holding Limited & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_justeat);

  } else if (

    segment === 'ubereats-clone-spanish-language'
  ) {
    var footer_disclaimer_lang = `
              <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "UberEats" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_lang);

  } else if (

    segment === 'postmates-clone'
  ) {
    var footer_disclaimer_postmates = `
             <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Postmates" for the purpose of easy understanding & identification. We are not related to Postmates Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_postmates);

  } else if (

    segment === 'swiggy-clone'
  ) {
    var footer_disclaimer_swiggy = `
            <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Swiggy" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_swiggy);

  } else if (

    segment === 'zomato-clone'
  ) {
    var footer_disclaimer_zomato = `
            <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Zomato" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_zomato);

  } else if (

    segment === 'letgo-clone' ||
    segment === 'offerup-clone' ||
    segment === 'shpock-clone' ||
    segment === 'carousell-clone'
  ) {
    var footer_disclaimer_letgo = `
        <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Letgo" for the purpose of easy understanding & identification. We are not related to Letgo & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_letgo);

  } else if (

    segment === 'cars-classified-script'
  ) {
    var footer_disclaimer_cars = `
           <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Letgo" for the purpose of easy understanding & identification. We are not related to Letgo & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_cars);

  } else if (

    segment === 'jobs-classified-script'
  ) {
    var footer_disclaimer_job = `
         <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Letgo" for the purpose of easy understanding & identification. We are not related to Letgo & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_job);

  } else if (

    segment === 'airbnb-clone-for-car-rentals'
  ) {
    var footer_disclaimer_car_rental = `
         <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Airbnb" for the purpose of easy understanding & identification. We are not related to Airbnb Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_car_rental);

  } else if (

    segment === 'airbnb-clone-for-boat-rentals'
  ) {
    var footer_disclaimer_boat_rental = `
       <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Airbnb" for the purpose of easy understanding & identification. We are not related to Airbnb Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_boat_rental);

  } else if (

    segment === 'hotel-booking-script'
  ) {
    var footer_disclaimer_hotel = `
      <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Airbnb" for the purpose of easy understanding & identification. We are not related to Airbnb Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_hotel);

  } else if (

    segment === 'space-rental-script'
  ) {
    var footer_disclaimer_space = `
    <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Airbnb" for the purpose of easy understanding & identification. We are not related to Airbnb Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_space);

  } else if (

    segment === 'alcohol-delivery-script'
  ) {
    var footer_disclaimer_alcohol = `
    <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Uber" for the purpose of easy understanding & identification. We are not related to Uber Technologies Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_alcohol);

  } else if (

    segment === 'aliexpress-clone'
  ) {
    var footer_disclaimer_aliexpress = `
    <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Aliexpress" for the purpose of easy understanding & identification. We are not related to Aliexpress, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_aliexpress);

  } else if (

    segment === 'zoom-clone'
  ) {
    var footer_disclaimer_zoom = `
   <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Zoom" for the purpose of easy understanding & identification. We are not related to Zoom, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_zoom);

  } else if (

    segment === 'instagram-clone'
  ) {
    var footer_disclaimer_instagram = `
  <div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Instagram" for the purpose of easy understanding & identification. We are not related to Instagram, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_instagram);

  } else if (

    segment === 'netflix-clone'
  ) {
    var footer_disclaimer_netflix = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "Netflix" for the purpose of easy understanding & identification. We are not related to Netflix, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_netflix);

  } else if (

    segment === 'tiktok-clone'
  ) {
    var footer_disclaimer_tiktok = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "TikTok" for the purpose of easy understanding & identification. We are not related to TikTok, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_tiktok);

  } else if (

    segment === 'uber-for-towing'
  ) {
    var footer_disclaimer_towing = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Uber" for the purpose of easy understanding & identification. We are not related to Uber Technologies, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_towing);

  } else if (

    segment === 'lyft-grab-clone'
  ) {
    var footer_disclaimer_lyft = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Lyft & Grab" for the purpose of easy understanding & identification. We are not related to Lyft & Grab, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_lyft);

  } else if (

    segment === 'careem-clone'
  ) {
    var footer_disclaimer_careem = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "Careem" for the purpose of easy understanding & identification. We are not related to Careem, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_careem);

  } else if (

    segment === 'bolt-clone'
  ) {
    var footer_disclaimer_bolt = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "Bolt" for the purpose of easy understanding & identification. We are not related to Bolt, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_bolt);

  } else if (

    segment === 'amazon-clone'
  ) {
    var footer_disclaimer_amazon = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Amazon" for the purpose of easy understanding & identification. We are not related to Amazon, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_amazon);

  } else if (

    segment === 'flipkart-clone'
  ) {
    var footer_disclaimer_flipkart = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Flipkart" for the purpose of easy understanding & identification. We are not related to Flipkart, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_flipkart);

  } else if (

    segment === 'walmart-clone'
  ) {
    var footer_disclaimer_walmart = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong> We are using the term "Walmart" for the purpose of easy understanding & identification. We are not related to Walmart, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_walmart);

  } else if (

    segment === 'whatsapp-clone'
  ) {
    var footer_disclaimer_whatsapp = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "WhatsApp" for the purpose of easy understanding & identification. We are not related to WhatsApp, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_whatsapp);

  }else if (

    segment === 'gojek-clone'
  ) {
    var footer_disclaimer_gojek = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Gojek" for the purpose of easy understanding & identification. We are not related to Gojek, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_gojek);

  }else if (

    segment === 'on-demand-taxi-booking-app'
  ) {
    var footer_disclaimer_on_demand = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Gojek" for the purpose of easy understanding & identification. We are not related to Gojek, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_on_demand);

  }else if (

    segment === 'grab-clone'
  ) {
    var footer_disclaimer_grab_clone = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Grab" for the purpose of easy understanding & identification. We are not related to Grab, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_grab_clone);

  }else if (

    segment === 'lalamove-clone'
  ) {
    var footer_disclaimer_lalamove = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Lalamove" for the purpose of easy understanding & identification. We are not related to Lalamove, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_lalamove);

  }else if (

    segment === 'package-delivery-script'
  ) {
    var footer_disclaimer_package = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Lalamove" for the purpose of easy understanding & identification. We are not related to Lalamove, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_package);

  }else if (

    segment === 'alibaba-clone'
  ) {
    var footer_disclaimer_alibaba = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Amazon" for the purpose of easy understanding & identification. We are not related to Amazon, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_alibaba);

  }else if (

    segment === 'multiservices-app-development'
  ) {
    var footer_disclaimer_multiservices = `
<div class="disclaimer-txt py-4 text-center">
                <p> <strong> Disclaimer: </strong>We are using the term "Lalamove" for the purpose of easy understanding & identification. We are not related to Lalamove, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_multiservices);

  }else if (

    segment === 'youtube-clone'
  ) {
    var footer_disclaimer_youtube = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We are using the term "Youtube" for the purpose of easy understanding & identification. We are not related to Youtube, Inc. & not doing any promotion activities for them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_youtube);

  }

  else if (

    segment === 'uber-for-babysitters'
  ) {
    var footer_disclaimer_for_babysitters = `
<div class="disclaimer-txt py-4 text-center">
                <p> </strong>Disclaimer: We Are Using The Term "Uber" For The Purpose Of Easy Understanding & Identification. We Are Not Related To Uber Technologies Inc. & Not Doing Any Promotion Activities For Them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_for_babysitters);

  }
  
  
  
  else if (

    segment === 'handyman-script' ||
    segment === 'plumbing-service-script' ||
    segment === 'house-cleaning-service-script' ||
    segment === 'doctor-service-script' ||
    segment === 'electricians-service-script' ||
    segment === 'beauty-on-demand-script' ||
    segment === 'maid-service-script' ||
    segment === 'pest-control-service-script' ||
    segment === 'laundry-service-delivery-script' ||
    segment === 'tutor-service-script' ||
    segment === 'car-wash-service-script' ||
    segment === 'uber-for-babysitters' ||
    segment === 'car-repair-script' ||
    segment === 'carpenter-script' ||
    segment === 'uber-for-carpet-repair-service' 
  ) {
    var footer_disclaimer_handy = `
<div class="disclaimer-txt py-4 text-center">
                <p><strong> Disclaimer: </strong>We Are Using The Term "Uber" For The Purpose Of Easy Understanding & Identification. We Are Not Related To Uber Technologies Inc. & Not Doing Any Promotion Activities For Them.</p>
                </div>`
    $('#footer-old-declaimer').append(footer_disclaimer_handy);

  }


});
// contact form validations

$(document).ready(function () {
  var urlpath = 'https://trioangle.com/mailer/email.php'
  let pathName = window.location.pathname;

  function getRole(){
    return $('#new_validation_check').val() ?? '';
  }
  function getRoleRequire(){

    if($('#new_validation_check').val() == 'yes')
    return $('#new_validation_check').val() ?? '';
    else
    return $("#addon").length;

  }

 $("#form").validate({
      rules :{
        email : {
          required : true,
          email    : true,
          email_validate : true,
        },
        message : {required : false},
        phone_code: { required: function(element) {
                        return (getRole() == 'yes');
                    },
        },
        phone_number : {
                    required : {
                      depends: function(element) {
                        return getRoleRequire();
                      }
                    },
                    number: function(element) {
                        return (getRole() == 'yes');
                    },
                    minlength: function(element) {
                        if(getRole() == 'yes')
                        return 4;
                        else
                        return true;
                    },
        },
        full_name : {required : true},       
        reachus_select : {required : true},       
        reachus : {required : true},       
        product_select : {required : pathName === '/' ? true : false }, 
      },
      
      messages:{
        email : {
            required : "This Field is required",
            email    : "Please Enter Your Valid Email Id",
            email_validate    : "Please Enter Your Valid Email Id",
        },
        message : "This Field is required",
        country_code: "This Field is required",
        phone_code: "This Field is required",
        phone_number: {
            required : "This Field is required",
            number : "This Field Must Be A Number",
            minlength : 'Phone Number Must Be Mininum 4'
        },
        full_name    : "Please Enter Your Full Name ",
        product_select    : "Please Select Desired Product",
        reachus_select    : "Please Select Reach us",
      },
      errorElement: "span",
      errorClass: "text-danger ng-binding police_station",
      errorPlacement: function( label, element ) {
        if(element.attr( "data-error-placement" ) === "container" ){
          container = element.attr('data-error-container');
          $(container).append(label);
        }else if(element.attr( "id" ) === "reachus_select" || element.attr( "id" ) === "product_select" ){
          element.parents('.error_parent').append(label);
        } else {
          label.insertAfter( element ); 
        }
      },
      submitHandler:function(){
      // var title = document.getElementById("contact").innerHTML;
      if(typeof document.getElementById("contact").childNodes[0].childNodes[0] === 'undefined'){
        console.log(1);
        var title = document.getElementById("contact").innerText;
      }else{
        console.log(2);
        var title = document.getElementById("contact").childNodes[0].childNodes[0].innerText;
      }
      console.log(title);
      debugger;
      $('.theme_btn').attr('disabled','disabled');
      
      $.ajax({
      type: "POST",
      url: urlpath,
      data: $('#form').serialize() + "&email_subject=" + title, 
      success :function(data){
        console.log(data);
        if(data == 'failed'){
        $('#recaptcha_error').fadeIn().html('Recaptcha field is required');                    
        }
        else{
        $('#recaptcha_error').hide();
        $('.result').fadeIn().html('Successfully mail sent');          
        }

      // for ebooks and white paper to download:
      // if (typeof $('#file_url').val() !== 'undefined') {
      //   var link = document.createElement('a');
      //   link.href = $('#file_url').val();
      //   link.download = $('#file_url').attr('data-filename');
      //   link.click();
      //   link.remove();
      // }

      setTimeout(function() {
      $('.result').fadeOut("slow");
      }, 2000);
      $("#full_name").val("");
      $("#email").val("");
      $("#phonenumber").val("");
      $("#reach-textarea").val("");
      $("#reachus_select").val("");
      $("#product_select").val("");
      $("#phone_code").val('Select').trigger('change');

      // Cache the target element
      var $countryValue = $('#select_value');
      // var $countryValue2 = $('#select_value2');

      // Get initial value
      $countryValue.text('Select');
      // $countryValue2.text('Select');
      $("#message").val("");

      
      }
      })
      return false;
    }

    }); 
 });
$(document).ready(function () {

  jQuery.validator.addMethod("email_validate", function(value, element) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (!reg.test(value) == false) 
});

  var urlpath = 'https://trioangle.com/mailer/email.php'
    $("#contactform").validate({
      rules :{
        email : {
          required : true,
          email    : true,
          email_validate : true,
        },
        message : {required : false},
        phone_number1 : {required : {
          depends: function(element) {
            return $("#hireme").length
          }
        }}, 
        full_name : {required : true},         
      },
      
      messages:{
        email : {
            required : "This Field is required",
            email    : "Please Enter Your Valid Email Id",
            email_validate    : "Please Enter Your Valid Email Id",
        },
        message : "This Field is required",
        phone_number1 : "This Field is required",
        full_name    : "Please Enter Your Full Name ",
      },
      errorElement: "span",
      errorClass: "text-danger ng-binding",
      errorPlacement: function( label, element ) {
        if(element.attr( "data-error-placement" ) === "container" ){
            container = element.attr('data-error-container');
            $(container).append(label);
        } else {
            label.insertAfter( element ); 
            // label.insertAfter(element.closest('.input-form'));
        }
        },
     submitHandler:function(){
      // var title = document.getElementById("contact").innerHTML;
      if(typeof document.getElementById("contact").childNodes[0].childNodes[0] === 'undefined'){
        var title = document.getElementById("contact").innerHTML;
      }else{
        var title = document.getElementById("contact").childNodes[0].childNodes[0].innerHTML;
      }
      $('.theme_btn').attr('disabled','disabled');
      $.ajax({
      type:"POST",
      url: urlpath,
      data: $('#contactform').serialize() + "&email_subject=" + title,           
      success :function(data){
        $('.theme_btn').removeAttr('disabled');
        if(data == 'failed'){
        $('#hire_recaptcha_error').fadeIn().html('Recaptcha field is required');                    
        }
        else{
        $('#hire_recaptcha_error').hide();
        $('.result').fadeIn().html('Successfully mail sent');
        // grecaptcha.reset();
        }        
      setTimeout(function() {
      $('.result').fadeOut("slow");
      }, 2000);
      $("#Full_name").val("");
      $("#Email").val("");
      $("#phone_number1").val("");
      $("#phone_code, #phone_code1_new").val('Select').trigger('change');

      // Cache the target element
      var $countryValue = $('#select_value3');
      // var $countryValue2 = $('#select_value2');

      // Get initial value
      $countryValue.text('Select');
      // $countryValue2.text('Select');
      $("#Message").val("");
      }
    })
      return false;
    }

    }); 

    
     });
    //for offer contact pop-up
$(document).ready(function() {

  var segment = window.location.pathname.split("/").filter(function (v) {
    return v !== ''
  }).pop();
  if (
    //If We need to make phone number fiels required means we need to add the segment name in the below condition
    segment === 'condo-rental-script' ||
    segment === 'yatra-clone' ||
    segment === 'realtor-clone' ||
    segment === 'car-rental-software' ||
    segment === 'turo-clone' ||
    // segment === 'skyscanner-clone' ||
    //  segment === 'jovago-clone' ||
    // segment === 'rental-script' ||
    segment === '9flats-clone'
  ) {
$('#new_validation_check').val('yes');
$('#phone_number1').attr('placeholder', 'Phone Number (Required) ');
//If we need to remove product select field means we need to add the segment name in the below condition
  }else if (
    segment === 'venue-booking-script' ||
    segment === 'room-reservation-script' ||
    segment === 'makemytrip-clone' ||
    segment === 'skyscanner-clone' ||
    segment === 'jovago-clone' ||
    segment === 'rental-script' ||
    segment === 'parking-booking-script' ||
    segment === 'justpark-clone' ||
    segment === 'cameo-clone' ||
    segment === 'ubereats-clone-spanish-language' ||
    segment === 'all-in-one-delivery' ||
    segment === 'online-property-rental-solutions' ||
    segment === 'products' ||
    segment === 'support' ||
    segment === 'online-property-rental-solutions' ||
    segment === 'electricians-service-script' ||
    segment === 'on-demand-service-app' ||
    segment === 'maid-service-script' ||
    segment === 'pest-control-service-script' ||
    segment === 'uber-for-carpet-repair-service' ||
    segment === 'entrepreneur' ||
    segment === 'e-books' ||
    segment === 'whitepaper' ||
    segment === 'success-stories' ||
    segment === 'portfolio' ||
    segment === 'careers' ||
    segment === 'success-stories' 

  ) {
    $('#remove-product').remove();
    //If we need to remove reach us and Product field means we need to add the segment name in the below condition
    }else if (
    segment === 'laravel-development-services' ||
    segment === 'web-development-services' ||
    segment === 'wordpress-development-services' ||
    segment === 'codeigniter-development-services' ||
    segment === 'php-development-services' ||
    segment === 'mobile-app-development-services' ||
    segment === 'flutter-app-development-services' ||
    segment === 'android-app-development-services' ||
    segment === 'ios-app-development-services' ||
    segment === 'hybrid-app-development-services' ||
    segment === 'software-testing-services' ||
    segment === 'graphics-design-services' ||
    segment === 'digital-marketing-services' ||
    segment === 'information-technology-consultancy-services' ||
    segment === 'hire-dedicated-developers' ||
    segment === 'hire-vuejs-developer' ||
    segment === 'hire-reactjs-developer' ||
    segment === 'hire-nodejs-developer' ||
    segment === 'hire-angularjs-developer' ||
    segment === 'hire-codeigniter-developer' ||
    segment === 'hire-yii-developer' ||
    segment === 'hire-ios-developer' ||
    segment === 'hire-ionic-developer' ||
    segment === 'hire-php-developer' ||
    segment === 'hire-mern-developer' ||
    segment === 'hire-laravel-developer' ||
    segment === 'hire-cakephp-developer' ||
    segment === 'hire-ui-ux-developer' ||
    segment === 'hire-android-developer' ||
    segment === 'hire-react-developer' 
  ) {

    $('#remove-product').remove();
    $('#remove-reachus').remove();

    //For changing mail id and number
    $('#service-mail').attr("href", "mailto:service@trioangle.com").text("service@trioangle.com");
    $('#service-number').attr("href", "https://web.whatsapp.com/send?phone=+916374110275&text=Hi, I have contacted you through 'Trioangle' website. let's discuss about your clone script.").text("+91 637411027");
  }

  if ($(window).width() < 767) {
      $('#phonenumber1').on('click keyup', function() {
          code_value = $('#select_value2').text();
          if (code_value == 'Select') {
              $("#phone_code1").focus()
              $('.country-field').addClass('blinking')
          } else {
              $("#phone_code1").blur()
              $('.country-field').removeClass('blinking')
          }
      });
  } else {
      $('#phonenumber1').on('click keyup', function() {
        code_value = $('#select_value2').text();
        if (code_value == 'Select')
          $('#phonenumber1').val('');
        console.log(code_value,$(".phone_code1").length);

          if (code_value == 'Select' && $(".phone_code1").length != 1 && $(".phone_code1").length != 2) {
            console.log(3234234);
              var $target = $("#phone_code1");
              var $clone = $target.clone().removeAttr('id');
              $clone.val('Select').css({
                      overflowx: "auto",
                      position: 'absolute',
                      'z-index': 999,
                      left: -88,
                      top: 14,
                      width: 'auto',
                      opacity: 1,
                      background: '#fff',
                      border: '1px solid',
                  })
                  .attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length)
                  .on('click blur keypress', function(e) {
                      if (e.type == 'blur' && $(this).val() == 'Select' && $('#phonenumber1')
                          .val()) {
                          return false;
                      }
                      if (e.type !== "keypress" || e.which === 13) {
                          $(this).remove();
                      }
                      $("#phone_code1").val($(this).val()).trigger('change');
                  });
                  console.log(21323);
              $('.append_clone').append($clone);
              $clone.focus();
          }
      });
  }
  var urlpath = 'https://trioangle.com/mailer/email.php';
  var $countryValue2 = $('#select_value2');
  var $countryValue3 = $('#select_value3');
  if ($('#offer-contact-form').length > 0) {
    var element = document.getElementById('submit1');
    element.classList.add("disable_btn");
  $('#full_name1,#email1,#phonenumber1').on('click keyup', function() {
      var valid = $('#offer-contact-form').valid();
      if ($('#offer-contact-form').valid()) {
          $('.theme_btn_resource').removeAttr('disabled', 'disabled');
          element.classList.remove("disable_btn");
      } else {
          $('.theme_btn_resource').attr('disabled', 'disabled');
          element.classList.add("disable_btn");
      }
  });
  };
  $('.country-code1 select').on('change', function() {
      if ($(this).val() != 'Select') {
          val = '+ ' + $(this).val();
          $(".country-code1 select option[value*='Select']").prop('disabled', true);
      } else {
          val = $(this).val();
      }
      // $countryValue.text(val);
      $countryValue2.text(val);
      $countryValue3.text(val);
  });

  setTimeout(function(){
    $("#phone_code1").val('Select').trigger('change');
    $("#phone_code1_new").val('').trigger('change');
    $("#select_value3").text('Select');
    $("#select_value2").text('Select');
  },500)

  function getRole_new(){
    return $('#new_validation_check').val() ?? '';
  }

  function getRoleRequire_new(){

    if($('#new_validation_check').val() == 'yes')
    return $('#new_validation_check').val() ?? '';
    else
    return $("#addon").length;

  }

  $("#offer-contact-form").validate({
    rules: {
      email1: {
          required: true,
          email: true,
          email_validate: true,
      },
      message1: {
          required: false
      },
      phone_number1: {
        required : {
          depends: function(element) {
            return getRoleRequire_new();
          }
        },
        number: function(element) {
            return (getRole_new() == 'yes');
        },
        minlength: function(element) {
           return (getRole_new() == 'yes' ? 4 : false);
          },
        },
      full_name1: {
          required: true
      },
      phone_code1_new: { required : {
          depends: function(element) {
            return getRoleRequire_new();
          }
        },
      },
  },
  messages: {
      email1: {
          required: "This Field is required",
          email: "Please Enter Your Valid Email Id",
          email_validate: "Please Enter Your Valid Email Id",
      },
      message1: "This Field is required",
      phone_code1_new: "This Field is required",
      phone_number1: {
          required : "This Field is required",
          number : "This Field Must Be A Number",
          minlength : 'Phone Number Must Be Mininum 4'
      },
      full_name1: "Please Enter Your Full Name ",
  },
    errorElement: "span",
    errorClass: "text-danger ng-binding",
    errorPlacement: function( label, element ) {
      if(element.attr( "data-error-placement" ) === "container" ){
          container = element.attr('data-error-container');
          $(container).append(label);
      } else {
          label.insertAfter( element ); 
          // label.insertAfter(element.closest('.input-form'));
      }
      },
      submitHandler: function() {
          var title = 'Email from - '+ $("#basename").val();
          $('.theme_btn_resource').attr('disabled', 'disabled');
          $.ajax({
              type: "POST",
              url: urlpath,
              data: $('#offer-contact-form').serialize() + "&email_subject=" + title+"&no_reach_us=true",
              success: function(data) {
                  console.log(data);
                    if (data == 'failed') {
                      $('#recaptcha_error').fadeIn().html(
                        'Recaptcha field is required');
                    } else {
                      $('#recaptcha_error').hide();
                      $('.result').fadeIn().html('Successfully mail sent');
                      setTimeout(function () {
                        $('#offer-contact-model').modal('hide');
                      }, 1000);
                    }
                  setTimeout(function() {
                      $('.result').fadeOut("slow");
                  }, 2000);
                  // $('#offer-contact-model').modal('hide');
                  $('#binance-login-popup').modal('show');
                  $("#full_name1").val("");
                  $("#email1").val("");
                  $("#phone_number1").val("");
                  $("#phone_code1_new").val('').trigger('change');
                  $("#select_value3").text('Select');
                  $('#offer-contact-form')[0].reset();
                  // Cache the target element
                  // Get initial value
                  $countryValue2.text('Select');
                  $("#message1").val("");
              }
          })
          return false;
      }
  });
  
})
//for offer contact pop-up 
$(document).ready(function() {

  $("#phone_code").val('Select').trigger('change');
  
  // Cache the target element
  var $countryValue = $('#select_value');
  var $countryValue2 = $('.select_value2');
  
  // Get initial value
  $countryValue.text('Select');
  $countryValue2.text('Select');
  
  // Initialize Selectric and bind to 'change' event
  $('.country-code select').on('change', function() {
    if($(this).val()!='Select') {
      val = '+ ' + $(this).val();
  
      $(".country-code select option[value*='Select']").prop('disabled', true);
    } else {
      val = $(this).val();
    }
    $countryValue.text(val);
    // $countryValue2.text(val);
  });
  
  $('#Phonenumber').on('wheel',function() {
    return false;
  });
  
  $('#Phonenumber').on('keydown',function(e) {
    if(e.which===38 || e.which===40) {
      return false;
    }
  });
  
  if($(window).width() < 767) {
    $('#Phonenumber').on('click keyup',function() {
      code_value = $('#select_value').text();
      if(code_value=='Select') {
        $("#phone_code").focus()
        $('.country-field').addClass('blinking')
      } else {
        $("#phone_code").blur()
        $('.country-field').removeClass('blinking')
      }
    });
  } else {
  
    $('#Phonenumber').on('click keyup',function() {
      code_value = $('#select_value').text();
  
      if(code_value=='Select')
        $('#Phonenumber').val('');
  
      if(code_value=='Select' && $(".phone_code").length==1) {
  
        var $target = $("#phone_code");
        var $clone = $target.clone().removeAttr('id');
  
        $clone.val('Select').css({
          overflowx: "auto",
          position: 'absolute',
          'z-index': 999,
          left: $target.offset().left,
          top: $target.offset().top + $target.outerHeight(),
          width: 'auto'
        })
        .attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length)
        .on('click blur keypress',function(e) {
          if(e.type=='blur' && $(this).val()=='Select' && $('#Phonenumber').val())
            return false;
          if(e.type !== "keypress" || e.which === 13)
            $(this).remove();
  
          $("#phone_code").val($(this).val()).trigger('change');
        });
        $('body').append($clone);
        $clone.focus();
      }
    });
  }
  
  if($(window).width() < 767) {
    $('#phonenumber').on('click keyup',function() {
      code_value = $('#select_value').text();
      if(code_value=='Select') {
        $("#phone_code").focus()
        $('.country-field').addClass('blinking')
      } else {
        $("#phone_code").blur()
        $('.country-field').removeClass('blinking')
      }
    });
  } else {
  
    $('#phonenumber').on('click keyup',function() {
      code_value = $('#select_value').text();
  
      if(code_value=='Select')
        $('#phonenumber').val('');
  
      if(code_value=='Select' && $(".phone_code").length==1) {
  
        var $target = $("#phone_code");
        var $clone = $target.clone().removeAttr('id');
  
        $clone.val('Select').css({
          overflowx: "auto",
          position: 'absolute',
          'z-index': 999,
          left: $target.offset().left,
          top: $target.offset().top + $target.outerHeight(),
          width: 'auto'
        })
        .attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length)
        .on('click blur keypress',function(e) {
          if(e.type=='blur' && $(this).val()=='Select' && $('#phonenumber').val())
            return false;
          if(e.type !== "keypress" || e.which === 13)
            $(this).remove();
  
          $("#phone_code").val($(this).val()).trigger('change');
        });
        $('body').append($clone);
        $clone.focus();
      }
    });
  }
  
  //$('.theme_btn .g-recaptcha').css("display","none");
  $('.theme_btn').attr('disabled','disabled');
if($('#form').length > 0){
  var element = document.getElementById('submit');
  element.classList.add("disable_btn");
  $('#full_name,#email,#phonenumber').on('click keyup',function(){
    var valid = $('#form').valid();
    console.log(valid,"test");
    if($('#form').valid()) {
      $('.theme_btn').removeAttr('disabled','disabled');
      element.classList.remove("disable_btn");
    } else {
      $('.theme_btn').attr('disabled','disabled');
      element.classList.add("disable_btn");
    }
  });
  }
  $('#reach-textarea').on('click keyup',function(){
    var valid = $('#form').valid();
    console.log(valid,"test");
    if($('#form').valid()) {
      $('.theme_btn').removeAttr('disabled','disabled');
      element.classList.remove("disable_btn");
    } else {
      $('.theme_btn').attr('disabled','disabled');
      element.classList.add("disable_btn");
    }
  });
  
  $('#product_select').on('change', function() {
      var valid = $('#form').valid();
      if ($('#form').valid()) {
          $('.theme_btn').removeAttr('disabled', 'disabled');
          element.classList.remove("disable_btn");
      } else {
          $('.theme_btn').attr('disabled', 'disabled');
          element.classList.add("disable_btn");
      }
  });
  
  $('#reachus_select').on('change', function(e) {
    if(e.target.value == "Other"){
      $(".reachus-textarea-div").show();
    }else{
      $(".reachus-textarea-div").hide();
    }
      var valid = $('#form').valid();
    console.log(valid,"test");
    if($('#form').valid()) {
      $('.theme_btn').removeAttr('disabled','disabled');
      element.classList.remove("disable_btn");
    } else {
      $('.theme_btn').attr('disabled','disabled');
      element.classList.add("disable_btn");
    }
  });
  
  $('#Full_name,#Email,#Phonenumber').on('click keyup',function(){
    if($('#contactform').valid()) {
      $('.theme_btn').removeAttr("disabled");
      element.classList.remove("disable_btn");
    } else {
      $('.theme_btn').attr('disabled','disabled');
      element.classList.add("disable_btn");
    }
  });
  });
    $(document).ready(function() {
        if ($(window).width() < 767) {
            $('#phonenumber1').on('click keyup', function() {
                code_value = $('#select_value2').text();
                if (code_value == 'Select') {
                    $("#phone_code1").focus()
                    $('.country-field').addClass('blinking')
                } else {
                    $("#phone_code1").blur()
                    $('.country-field').removeClass('blinking')
                }
            });
        } else {
            $('#phonenumber1').on('click keyup', function() {
                code_value = $('#select_value2').text();
                if (code_value == 'Select')
                    $('#phonenumber1').val('');
                if (code_value == 'Select' && $(".phone_code1").length == 1) {
                    var $target = $("#phone_code1");
                    var $clone = $target.clone().removeAttr('id');
                    $clone.val('Select').css({
                            overflowx: "auto",
                            position: 'absolute',
                            'z-index': 999,
                            left: -88,
                            top: 14,
                            width: 'auto',
                            opacity: 1,
                            background: '#fff',
                            border: '1px solid',
                        })
                        .attr('size', $clone.find('option').length > 10 ? 10 : $clone.find('option').length)
                        .on('click blur keypress', function(e) {
                            if (e.type == 'blur' && $(this).val() == 'Select' && $('#phonenumber1')
                                .val()) {
                                return false;
                            }
                            if (e.type !== "keypress" || e.which === 13) {
                                $(this).remove();
                            }
                            $("#phone_code1").val($(this).val()).trigger('change');
                        });
                    $('.append_clone').append($clone);
                    $clone.focus();
                }
            });
        }
        var urlpath = EMAIL_URL;
        var $countryValue2 = $('#select_value2');
      if ($('#binance_form').length > 0) {
        var element = document.getElementById('submit1');
        element.classList.add("disable_btn");
        $('#full_name1,#email1,#phonenumber1').on('click keyup', function() {
            var valid = $('#binance_form').valid();
            if ($('#binance_form').valid()) {
                $('.theme_btn_resource').removeAttr('disabled', 'disabled');
                element.classList.remove("disable_btn");
            } else {
                $('.theme_btn_resource').attr('disabled', 'disabled');
                element.classList.add("disable_btn");
            }
        });
      }
        $('.country-code1 select').on('change', function() {
            if ($(this).val() != 'Select') {
                val = '+ ' + $(this).val();
                $(".country-code1 select option[value*='Select']").prop('disabled', true);
            } else {
                val = $(this).val();
            }
            // $countryValue.text(val);
            $countryValue2.text(val);
        });
        $("#phone_code1").val('Select').trigger('change');
        $("#binance_form").validate({
            rules: {
                email1: {
                    required: true,
                    email: true,
                    email_validate: true,
                },
                message1: {
                    required: false
                },
                phone_number1: {
                    required: {
                        depends: function(element) {
                            return $("#addon").length
                        }
                    }
                },
                full_name1: {
                    required: true
                },
            },
            messages: {
                email1: {
                    required: "This Field is required",
                    email: "Please Enter Your Valid Email Id",
                    email_validate: "Please Enter Your Valid Email Id",
                },
                message1: "This Field is required",
                phone_number1: "This Field is required",
                full_name1: "Please Enter Your Full Name ",
            },
            errorElement: "span",
            errorClass: "text-danger ng-binding",
            errorPlacement: function( label, element ) {
              if(element.attr( "data-error-placement" ) === "container" ){
                  container = element.attr('data-error-container');
                  $(container).append(label);
              } else {
                  label.insertAfter( element ); 
                  // label.insertAfter(element.closest('.input-form'));
              }
              },
            submitHandler: function() {
                var title = document.getElementById("contact").innerHTML;
                $('.theme_btn_resource').attr('disabled', 'disabled');
                $.ajax({
                    type: "POST",
                    url: urlpath,
                    data: $('#binance_form').serialize() + "&email_subject=" + title,
                    success: function(data) {
                        console.log(data);
                        if (data == 'failed') {
                            $('#recaptcha_error').fadeIn().html(
                                'Recaptcha field is required');
                        } else {
                            $('#recaptcha_error').hide();
                            $('.result').fadeIn().html('Successfully mail sent');
                        }
                        setTimeout(function() {
                            $('.result').fadeOut("slow");
                        }, 2000);
                        $('#binance-form-popup').modal('hide');
                        $('#binance-login-popup').modal('show');
                        $("#full_name1").val("");
                        $("#email1").val("");
                        $("#phonenumber1").val("");
                        $("#phone_code1").val('Select').trigger('change');
                        // Cache the target element
                        // Get initial value
                        $countryValue2.text('Select');
                        $("#message1").val("");
                    }
                })
                return false;
            }
        });
    })