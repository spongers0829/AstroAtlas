// ====== Carousel Background Logic ======
const carouselImages = document.querySelectorAll(".carousel-img");
let currentSlide = 0;

function showSlide(index) {
  carouselImages.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) img.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselImages.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change image every 4 seconds
showSlide(currentSlide);

// ====== AOS Animation Init ======
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

// ====== Optional: Lazy Reveal for Image of Day Section ======
const imageDaySection = document.querySelector(".image-day-section");
if (imageDaySection) {
  imageDaySection.style.opacity = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imageDaySection.style.transition = "opacity 1.2s ease-out";
        imageDaySection.style.opacity = 1;
        observer.unobserve(imageDaySection);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(imageDaySection);
}

// ====== Broken Image Fallback ======
window.addEventListener('error', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.display = 'none';
  }
}, true);
