var wrapper = document.querySelector(".slider__wrapper");
var wrapperPrices = document.querySelector(".slider__wrapper--prices");
var btnLeftReviews = document.querySelector(".slider__btn--left");
var btnLeftPrices = document.querySelector(".prices .slider__btn--left");
var btnRightReviews = document.querySelector(".slider__btn--right");
var btnRightPrices = document.querySelector(".prices .slider__btn--right");
var slide1 = document.querySelector(".slider__slide--slide-1");
var slide2 = document.querySelector(".slider__slide--slide-2");
var slide3 = document.querySelector(".slider__slide--slide-3");
var sliderController = document.querySelectorAll(".slider__controller");
var reviewsSliderController1 = document.querySelector("label[for=reviews-slide-1]");
var reviewsSliderController2 = document.querySelector("label[for=reviews-slide-2]");
var reviewsSliderController3 = document.querySelector("label[for=reviews-slide-3]");
var reviewsRadioInput1 = document.querySelector("#reviews-slide-1");
var pricesSliderController1 = document.querySelector("label[for=prices-slide-1]");
var pricesSliderController2 = document.querySelector("label[for=prices-slide-2]");
var pricesSliderController3 = document.querySelector("label[for=prices-slide-3]");
var pricesRadioInput1 = document.querySelector("#prices-slide-1");

reviewsRadioInput1.removeAttribute("checked");
slide1.classList.add("slider__slide--current");
btnLeftReviews.classList.add("slider__btn--disable");
reviewsSliderController1.classList.add("slider__controller--current");
pricesRadioInput1.removeAttribute("checked");
pricesSliderController1.classList.add("slider__controller--current");

//for (var i = 0; i < sliderController.length; i++) {
//    sliderController[i].addEventListener("click", function(event) {
//        event.preventDefault();
//    })
//};

btnRightReviews.addEventListener("click", function(event) {
   event.preventDefault();
    if (slide1.classList.contains("slider__slide--current")) {
        wrapper.classList.add("slider__wrapper--show-slide-2");
        slide1.classList.remove("slider__slide--current");
        slide2.classList.add("slider__slide--current");
        btnLeftReviews.classList.remove("slider__btn--disable");
        reviewsSliderController1.classList.remove("slider__controller--current");
        reviewsSliderController2.classList.add("slider__controller--current");
    } else {
        wrapper.classList.remove("slider__wrapper--show-slide-2");
        wrapper.classList.add("slider__wrapper--show-slide-3");
        slide2.classList.remove("slider__slide--current");
        slide3.classList.add("slider__slide--current");
        btnRightReviews.classList.add("slider__btn--disable");
        reviewsSliderController2.classList.remove("slider__controller--current");
        reviewsSliderController3.classList.add("slider__controller--current");
    }
});

btnLeftReviews.addEventListener("click", function(event) {
   event.preventDefault();
    if (slide3.classList.contains("slider__slide--current")) {
        wrapper.classList.remove("slider__wrapper--show-slide-3");
        wrapper.classList.add("slider__wrapper--show-slide-2");
        slide3.classList.remove("slider__slide--current");
        slide2.classList.add("slider__slide--current");
        btnRightReviews.classList.remove("slider__btn--disable");
        reviewsSliderController3.classList.remove("slider__controller--current");
        reviewsSliderController2.classList.add("slider__controller--current");
    } else {
        wrapper.classList.remove("slider__wrapper--show-slide-2");
        slide2.classList.remove("slider__slide--current");
        slide1.classList.add("slider__slide--current");
        btnLeftReviews.classList.add("slider__btn--disable");
        reviewsSliderController2.classList.remove("slider__controller--current");
        reviewsSliderController1.classList.add("slider__controller--current");
    }
});

reviewsSliderController1.addEventListener("click", function(event) {
    event.preventDefault();
    wrapper.classList.remove("slider__wrapper--show-slide-2");
    wrapper.classList.remove("slider__wrapper--show-slide-3");
    slide2.classList.remove("slider__slide--current");
    slide3.classList.remove("slider__slide--current");
    slide1.classList.add("slider__slide--current");
    reviewsSliderController2.classList.remove("slider__controller--current");
    reviewsSliderController3.classList.remove("slider__controller--current");
    reviewsSliderController1.classList.add("slider__controller--current");
    btnRightReviews.classList.remove("slider__btn--disable");
    btnLeftReviews.classList.add("slider__btn--disable");
});

reviewsSliderController2.addEventListener("click", function(event) {
    event.preventDefault();
    wrapper.classList.remove("slider__wrapper--show-slide-3");
    wrapper.classList.add("slider__wrapper--show-slide-2");
    slide1.classList.remove("slider__slide--current");
    slide3.classList.remove("slider__slide--current");
    slide2.classList.add("slider__slide--current");
    reviewsSliderController1.classList.remove("slider__controller--current");
    reviewsSliderController3.classList.remove("slider__controller--current");
    reviewsSliderController2.classList.add("slider__controller--current");
    btnLeftReviews.classList.remove("slider__btn--disable");
    btnRightReviews.classList.remove("slider__btn--disable");
});

reviewsSliderController3.addEventListener("click", function(event) {
    event.preventDefault();
    wrapper.classList.remove("slider__wrapper--show-slide-2");
    wrapper.classList.add("slider__wrapper--show-slide-3");
    slide1.classList.remove("slider__slide--current");
    slide2.classList.remove("slider__slide--current");
    slide3.classList.add("slider__slide--current");
    reviewsSliderController1.classList.remove("slider__controller--current");
    reviewsSliderController2.classList.remove("slider__controller--current");
    reviewsSliderController3.classList.add("slider__controller--current");
    btnLeftReviews.classList.remove("slider__btn--disable");
    btnRightReviews.classList.add("slider__btn--disable");
});

btnRightPrices.addEventListener("click", function(event) {
   event.preventDefault();
    if (pricesSliderController1.classList.contains("slider__controller--current")) {
        wrapperPrices.classList.add("slider__wrapper--prices--show-slide-2");
        pricesSliderController1.classList.remove("slider__controller--current");
        pricesSliderController2.classList.add("slider__controller--current");
    } else {
        wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-2");
        wrapperPrices.classList.add("slider__wrapper--prices--show-slide-3");
        pricesSliderController2.classList.remove("slider__controller--current");
        pricesSliderController3.classList.add("slider__controller--current");
    }
});

btnLeftPrices.addEventListener("click", function(event) {
   event.preventDefault();
    if (pricesSliderController3.classList.contains("slider__controller--current")) {
        wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-3");
        wrapperPrices.classList.add("slider__wrapper--prices--show-slide-2");
        pricesSliderController3.classList.remove("slider__controller--current");
        pricesSliderController2.classList.add("slider__controller--current");
    } else {
        wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-2");
        pricesSliderController2.classList.remove("slider__controller--current");
        pricesSliderController1.classList.add("slider__controller--current");
    }
});

pricesSliderController1.addEventListener("click", function(event) {
    event.preventDefault();
    wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-2");
    wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-3");
    pricesSliderController2.classList.remove("slider__controller--current");
    pricesSliderController3.classList.remove("slider__controller--current");
    pricesSliderController1.classList.add("slider__controller--current");
});

pricesSliderController2.addEventListener("click", function(event) {
    event.preventDefault();
    wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-3");
    wrapperPrices.classList.add("slider__wrapper--prices--show-slide-2");
    pricesSliderController1.classList.remove("slider__controller--current");
    pricesSliderController3.classList.remove("slider__controller--current");
    pricesSliderController2.classList.add("slider__controller--current");
});

pricesSliderController3.addEventListener("click", function(event) {
    event.preventDefault();
    wrapperPrices.classList.remove("slider__wrapper--prices--show-slide-2");
    wrapperPrices.classList.add("slider__wrapper--prices--show-slide-3");
    pricesSliderController1.classList.remove("slider__controller--current");
    pricesSliderController2.classList.remove("slider__controller--current");
    pricesSliderController3.classList.add("slider__controller--current");
});


