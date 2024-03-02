// JavaScript function to open the default mail client with the 'info@magnvs.io' email address
function openEmail() {
  // You can add a default subject or body if you wish
  var subject = encodeURIComponent("Help Request");
  var emailBody = encodeURIComponent("Hello,\n\nI need assistance with...");

  // Construct the mailto link with subject and body
  window.location.href = `mailto:info@magnvs.io?subject=${subject}&body=${emailBody}`;
}
