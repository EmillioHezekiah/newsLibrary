(async () => {
    const apiUrl = 'https://api.webflow.com/collections/65fb88c995cfb7f51b6769ed/items';
    const apiToken = '0d9590cb829734bf0ca46cb0486b6689d6c64d12234e751ed9f693c7a98e961c';
  
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'accept-version': '1.0.0'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        const items = data.items; // Your news data is here
        
        let widgetHtml = '<div id="news-widget-container" style="display: flex; flex-direction: column;">';
        
        items.forEach(item => {
          // Constructing the HTML for each news item
          widgetHtml += `
            <div style="margin-bottom: 20px;">
              <h2>${item.Heading}</h2>
              <img src="${item['Thumbnail image']}" alt="${item.Heading}" style="width: 100px; height: auto;">
              <p>${item['Brief thumbnail news']}</p>
            </div>
          `; 
        });
  
        widgetHtml += '</div>';
  
        // Append widget to the body or a specific element
        document.body.innerHTML += widgetHtml;
  
        // Add any necessary CSS directly or link to an external stylesheet
      }
    } catch (error) {
      console.error('Failed to fetch CMS data:', error);
    }
  })();
  
