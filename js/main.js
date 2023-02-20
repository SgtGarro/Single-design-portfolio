"use strict";

const workSlides = document.querySelectorAll(".work__slide");
const rightArrow = document.querySelector(".arrow--right");
const leftArrow = document.querySelector(".arrow--left");

class Slider {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 1;
  }
  changeSlide() {
    this.slides.forEach((slide, i) => {
      const value = i - this.currentSlide;
      slide.style.transform = `translateX(calc(${100 * value}% + ${
        20 * value
      }px))`;
    });
  }
  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
    this.changeSlide();
  }
  prevSlide() {
    this.currentSlide--;
    if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;
    this.changeSlide();
  }
}

const slider = new Slider(workSlides);
slider.changeSlide();

rightArrow.addEventListener("click", slider.nextSlide.bind(slider));
leftArrow.addEventListener("click", slider.prevSlide.bind(slider));
