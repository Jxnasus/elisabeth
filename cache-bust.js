// cache-bust.js
document.addEventListener("DOMContentLoaded", () => {
  // Alle Stylesheets, die style.css enthalten
  const stylesheets = document.querySelectorAll('link[href*="style.css"]');
  
  stylesheets.forEach(sheet => {
    // Hänge die aktuelle Zeit als Version an
    sheet.href = `${sheet.href.split('?')[0]}?v=${Date.now()}`;
  });
});
