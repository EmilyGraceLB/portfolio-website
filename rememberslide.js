// This listener forces the script to wait until the HTML elements exist
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Instantly parse out the active URL browser string parameters
    const urlParams = new URLSearchParams(window.location.search);
    const targetSlideIndex = urlParams.get('slide');
    
    // 2. Locate and extract all structural project array squares inside your track
    const projectSquares = document.querySelectorAll('.project-square');
    
    if (targetSlideIndex !== null && projectSquares.length > 0) {
        const targetIndex = parseInt(targetSlideIndex, 10);
        
        // 3. Confirm index is clean, valid, and exists inside the card count
        if (targetIndex >= 0 && targetIndex < projectSquares.length) {
            
            // 4. Strip the default active class from whichever card loaded first
            projectSquares.forEach(square => square.classList.remove('active'));
            
            // 5. Mount the precise slide item the user just came back from!
            projectSquares[targetIndex].classList.add('active');
            
            // 6. UPDATE EXTERNAL CAROUSEL VARIABLES (Sets state inside slider.js)
            // Checks for common tracking variable names used in standard carousels
            if (typeof currentSlide !== 'undefined') currentSlide = targetIndex;
            if (typeof slideIndex !== 'undefined') slideIndex = targetIndex;
            if (typeof currentSlideIndex !== 'undefined') currentSlideIndex = targetIndex;
            
            // 7. Fire your carousel's rendering function if it exists to smoothly snap into place
            if (typeof updateSliderTrack === 'function') updateSliderTrack();
            if (typeof showSlide === 'function') showSlide(targetIndex);
        }
    }
});
