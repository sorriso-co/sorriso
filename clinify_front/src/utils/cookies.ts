// utils/cookies.ts
export const removeTrackingCookies = () => {
    // Add your cookie names here that you want to clear
    const cookiesToRemove = ["_ga", "_gid", "_gat", "fbp", "sorrisoCookieConsent"];
    
    cookiesToRemove.forEach((cookieName) => {
      document.cookie = `${cookieName}=; Max-Age=-99999999;`;
    });
  
    console.log("Tracking cookies removed");
  };

  
  export const setDoNotTrackFlag = () => {
    localStorage.setItem("doNotTrack", "true");
    console.log("Do Not Track flag set");
  };

  
  export const shouldBlockTracking = () => {
    return localStorage.getItem("doNotTrack") === "true";
  };

  
  