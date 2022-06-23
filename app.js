const btnUp = document.querySelector('.controls__btn_up')
const btnDown = document.querySelector('.controls__btn_down')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.slider-container')
const containerHeight = container.clientHeight
const contentSlides = document.querySelector('.content')
const slidesCount = contentSlides.querySelectorAll('.content__slide').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1) * 100}vh`

btnUp.addEventListener('click', () => {
  changeSlide('up')
})

btnDown.addEventListener('click', () => {
  changeSlide('down')
})

const changeSlide = (direction) => {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) activeSlideIndex = 0
  }
  if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) activeSlideIndex = slidesCount-1
  }

  contentSlides.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`
}

const scrollWheel = (e) => {
  e.preventDefault()
  e.deltaY < 0 ? changeSlide('up') : changeSlide('down')
}

container.addEventListener('wheel', scrollWheel)
