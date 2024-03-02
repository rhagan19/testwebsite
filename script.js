// JavaScript function to open the default mail client with the 'info@magnvs.io' email address
function openEmail() {
  // You can add a default subject or body if you wish
  var subject = encodeURIComponent("Help Request");
  var emailBody = encodeURIComponent("Hello,\n\nI need assistance with...");

  // Construct the mailto link with subject and body
  window.location.href = `mailto:info@magnvs.io?subject=${subject}&body=${emailBody}`;
}

// Event listener for the "Curriculums" button/link
document.addEventListener('DOMContentLoaded', function() {
  var curriculumsLink = document.querySelector('.curriculums-link');
  if (curriculumsLink) {
    curriculumsLink.addEventListener('click', function() {
      window.location.href = 'curriculums.html'; // Link to your curriculums page
    });
  }

  // Event listener for the "Updates" button/link
  var updatesLink = document.querySelector('.updates-link');
  if (updatesLink) {
    updatesLink.addEventListener('click', function() {
      window.location.href = 'updates.html'; // Link to your updates page
    });
  }
});
