// --- Remove the dark mode toggle button dynamically and permanently ---
(function() {
  // Repeatedly check every 500ms in case the theme script re-adds it
  const removeDarkToggle = () => {
    document.querySelectorAll(
      ".js-toggle-dark-mode, [aria-label='toggle color scheme'], button.color-scheme-toggle"
    ).forEach(btn => btn.remove());
  };

  // Run immediately
  removeDarkToggle();

  // Run again every 0.5s for 5 seconds (covers delayed JS injection)
  let count = 0;
  const interval = setInterval(() => {
    removeDarkToggle();
    count++;
    if (count > 10) clearInterval(interval);
  }, 500);
})();
