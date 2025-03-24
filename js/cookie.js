// Cookie Consent Management
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")
    const cookieDecline = document.getElementById("cookieDecline")
  
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem("cookieConsent")
  
    if (!consentStatus) {
      // Show cookie consent banner immediately
      cookieConsent.classList.add("show")
    } else if (consentStatus === "accepted") {
      // Initialize analytics if consent was given
      initializeAnalytics()
    }
  
    // Accept button event listener
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted")
      cookieConsent.classList.remove("show")
      initializeAnalytics()
    })
  
    // Reject button event listener
    cookieDecline.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected")
      cookieConsent.classList.remove("show")
    })
  
    // Function to initialize analytics
    function initializeAnalytics() {
      // This would normally contain code to initialize analytics services
      console.log("Analytics initialized")
    }
  })
  
  