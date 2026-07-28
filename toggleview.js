function toggleLayoutView() {
    const body = document.body;
    const btn = document.getElementById('toggleViewBtn');
    
    // 1. Toggle the clean CSS class
    body.classList.toggle('grid-mode');
    
    // 2. Simply switch the plain text inside the button safely
    if (body.classList.contains('grid-mode')) {
        btn.innerHTML = '<span class="toggle-icon">✕</span> Close Grid View';
    } else {
        btn.innerHTML = '<span class="toggle-icon">⚏</span> Toggle Grid View';
    }
}
