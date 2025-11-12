// --- Aggressively remove and disable dark-mode toggle functionality ---
(function() {
  const blockDarkToggle = () => {
    // Remove any buttons that already exist
    document.querySelectorAll(".js-toggle-dark-mode, [aria-label='toggle color scheme']").forEach(btn => {
      btn.remove();
    });

    // Disable any event listeners related to dark mode
    const scriptElements = Array.from(document.scripts);
    scriptElements.forEach(script => {
      if (script.src && script.src.includes('main.min.js')) {
        // Override the function that attaches dark mode if it exists
        window.matchMedia = () => ({ addEventListener: () => {}, removeEventListener: () => {} });
      }
    });

    // Remove any HTML attributes that enable theme switching
    document.documentElement.removeAttribute('data-theme');
  };

  // Run immediately and repeatedly for 5 seconds
  blockDarkToggle();
  let count = 0;
  const interval = setInterval(() => {
    blockDarkToggle();
    count++;
    if (count > 10) clearInterval(interval);
  }, 500);
})();
