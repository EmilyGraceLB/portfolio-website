let currentSlideIndex = 0;
const slides = document.querySelectorAll('.project-square');

// Core Arrow Navigation Function
function moveSlide(direction) {
    if (slides.length === 0) return;
    
    // Hide current active slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Calculate next index (loops around seamlessly)
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Show new active slide
    slides[currentSlideIndex].classList.add('active');
}

// Touch/Swipe Gestures for Mobile Viewports
let touchStartX = 0;
let touchEndX = 0;
const sliderContainer = document.querySelector('.fullscreen-slider-container');

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50; 
    if (touchStartX - touchEndX > swipeThreshold) {
        moveSlide(1);  
    } else if (touchEndX - touchStartX > swipeThreshold) {
        moveSlide(-1); 
    }
}


/* ==========================================================================
   PERFECT RESUME CAROUSEL PARAMETER HOOK
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Instantly parse out the active URL parameter string numbers
    const urlParams = new URLSearchParams(window.location.search);
    const targetSlideParam = urlParams.get('slide');
    
    if (targetSlideParam !== null) {
        const targetIndex = parseInt(targetSlideParam, 10);
        
        // 2. Safely grab every portfolio card node currently on the page track
        const squares = document.querySelectorAll('.project-square');
        
        if (targetIndex >= 0 && targetIndex < squares.length) {
            
            // 3. Remove the fallback class from whichever card initiated first
            squares.forEach(slide => slide.classList.remove('active'));
            
            // 4. Set the exact slide card the visitor just left back to active
            squares[targetIndex].classList.add('active');
            
            // 5. BRIDGE TO YOUR INTERNAL ENGINE: Overwrites whatever tracking variable your script uses!
            // This forces every potential carousel indexing name to sync with our parameter index
            if (typeof currentSlide !== 'undefined') currentSlide = targetIndex;
            if (typeof slideIndex !== 'undefined') slideIndex = targetIndex;
            if (typeof currentIndex !== 'undefined') currentIndex = targetIndex;
            if (typeof activeSlide !== 'undefined') activeSlide = targetIndex;
            
            // 6. Tell your slider rendering updates function to smoothly snap into place if it exists
            if (typeof updateSliderTrack === 'function') updateSliderTrack();
            if (typeof showSlide === 'function') showSlide(targetIndex);
            if (typeof moveSlide === 'function') moveSlide(0); // Safely triggers an index pass re-calculation
        }
    }
});
