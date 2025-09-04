// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load document based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
  const docSrc = getUrlParameter('src');
  const docTitle = getUrlParameter('title'); // Ambil parameter title
  const docFrame = document.getElementById('doc-frame');
  const docTitleElement = document.getElementById('docTitle');
  
  // Set judul dokumen jika ada
  if (docTitle) {
    docTitleElement.textContent = decodeURIComponent(docTitle);
  } else {
    docTitleElement.textContent = '';
  }
  
  if (docSrc) {
    // Convert Google Drive URL to embedded viewer if needed
    let embedUrl = docSrc;
    
    // Handle Google Drive links
    if (docSrc.includes('drive.google.com')) {
      if (docSrc.includes('/file/d/')) {
        // Convert regular Google Drive link to embeddable preview
        const fileId = docSrc.match(/\/file\/d\/([^\/]+)/)[1];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      } else if (docSrc.includes('/open?id=')) {
        const fileId = docSrc.match(/id=([^&]+)/)[1];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    
    docFrame.src = embedUrl;
  } else {
    docFrame.src = 'about:blank';
    docFrame.innerHTML = '<div class="text-center p-4"><p>Dokumen tidak ditemukan atau parameter URL tidak valid.</p></div>';
  }
});

// Load document based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
  const docSrc = getUrlParameter('src');
  const docFrame = document.getElementById('doc-frame');
  
  if (docSrc) {
    // Convert Google Drive URL to embedded viewer if needed
    let embedUrl = docSrc;
    
    // Handle Google Drive links
    if (docSrc.includes('drive.google.com')) {
      if (docSrc.includes('/file/d/')) {
        // Convert regular Google Drive link to embeddable preview
        const fileId = docSrc.match(/\/file\/d\/([^\/]+)/)[1];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      } else if (docSrc.includes('/open?id=')) {
        const fileId = docSrc.match(/id=([^&]+)/)[1];
        embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    
    docFrame.src = embedUrl;
  } else {
    docFrame.src = 'about:blank';
    docFrame.innerHTML = '<div class="text-center p-4"><p>Dokumen tidak ditemukan atau parameter URL tidak valid.</p></div>';
  }
});

// Check if background image exists
function checkBackgroundImage() {
  const img = new Image();
  img.src = 'assets/bg.jpg';
  img.onload = function() {
    document.body.classList.add('has-bg');
  };
  img.onerror = function() {
    document.body.classList.remove('has-bg');
  };
}

// Run when page loads
window.addEventListener('load', checkBackgroundImage);