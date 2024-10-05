// const dropdownToggle = document.getElementById("dropdown-toggle");
// const dropdownMenu = document.getElementById("dropdown-menu");

// dropdownToggle.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("show");
// });

// // Close dropdown when clicking outside
// document.addEventListener("click", (event) => {
//   if (
//     !dropdownToggle.contains(event.target) &&
//     !dropdownMenu.contains(event.target)
//   ) {
//     dropdownMenu.classList.remove("show");
//   }
// });

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
let currentIndex = 1;
        const slides = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');

        // Function to change slides
        function showSlides(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${100 * (i - index)}%)`;
            });
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        // Initialize slider with first slide
        showSlides(currentIndex);

        function currentSlide(index) {
            currentIndex = index - 1;
            showSlides(currentIndex);
        }

        // Auto slider (optional)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlides(currentIndex);
        }, 5000);