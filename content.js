function hideYouTubeMusic() {
    const entries = document.querySelectorAll('ytd-guide-entry-renderer');
    entries.forEach(entry => {
      // Get all text content within the element, including children
      const textContent = entry.textContent;
  
      // Normalize whitespace and case for comparison
      const normalizedText = textContent.replace(/\s+/g, ' ').trim().toLowerCase();
  
      if (normalizedText.includes('youtube music')) {
        entry.style.display = 'none';
      }
    });
  }
  
  
  // Observe changes in the DOM to catch dynamically added elements
  const observer = new MutationObserver(hideYouTubeMusic);
  observer.observe(document.body, { childList: true, subtree: true });
  
  
  // Initial check when the script loads
  hideYouTubeMusic();
  