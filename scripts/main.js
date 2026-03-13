
// Remove id from the url when page refreshed
    window.location.replace("#", "");

// slice off the remaining '#' from URL when page refreshed    
    if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
  }
    
    
  
