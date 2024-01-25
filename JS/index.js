document.addEventListener('DOMContentLoaded', function () {

    // Get slideshow elements
    const slideshow = document.getElementById('slideshow');
    const currentPhoto = document.getElementById('current-Photo');
    const currentTitle = document.getElementById('current-Title');
    const currentParagraph = document.getElementById('current-Paragraph');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    // Set up slideshow data
    const slides = [
        {
            photo: '../IMAGEs/SlideShow/Slide-1.jpg',
            title: 'Welcome ...',
            paragraph: "to our breathtaking journey through nature's wonders. Prepare to be captivated by stunning landscapes and remarkable wildlife.",
        },
        {
            photo: '../IMAGEs/SlideShow/Slide-2.jpg',
            title: 'Embark ...',
            paragraph: "on an adventure of a lifetime as we explore diverse cultures, ancient ruins, and vibrant cities across the globe.",
        },
        {
            photo: '../IMAGEs/SlideShow/Slide-3.jpg',
            title: 'Experience ...',
            paragraph: "the thrill of adrenaline-pumping activities and adrenaline-inducing destinations. Get ready for an unforgettable adventure!",
        },

        {
            photo: '../IMAGEs/SlideShow/Slide-4.jpg',
            title: 'Indulge ...',
            paragraph: "in ultimate relaxation and tranquility amidst breathtaking views and serene environments. Discover the perfect escape for your soul.",
        },

        {
            photo: '../IMAGEs/SlideShow/Slide-5.jpg',
            title: 'Immerse ...',
            paragraph: "yourself in the flavors and aromas of gastronomic delights from around the world. Join us on a culinary journey that will tantalize your taste buds.",
        },
    ];

    let currentSlide = 0;

    // Function to display current slide
    function showSlide() {
        const slide = slides[currentSlide];
        currentPhoto.classList.add('slide-out');
        setTimeout(() => {
            currentPhoto.src = slide.photo;
            currentTitle.textContent = slide.title;
            currentParagraph.textContent = slide.paragraph;
            currentPhoto.classList.remove('slide-out');
            currentPhoto.classList.add('slide-in');
            setTimeout(() => {
                currentPhoto.classList.remove('slide-in');
            }, 500); // Adjust the duration of the slide-in animation
        }, 500); // Adjust the duration of the slide-out animation
    }

    // Function to transition to the next slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide === slides.length) {
            currentSlide = 0;
        }
        showSlide();
    }

    // Function to transition to the previous slide
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide();
    }


    // Event listeners for arrow navigation
    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);

    // Initial slide display
    showSlide();

    // Automatic slideshow
    setInterval(nextSlide, 5000); // Adjust the interval duration (in milliseconds) as needed

});
