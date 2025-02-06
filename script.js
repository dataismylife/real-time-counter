// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to update counters (resets every January 1st)
function updateCounter(elementId, startYear) {
    let currentYear = getCurrentYear();

    // Start counting only from 2025 and reset on Jan 1, 2026
    if (currentYear < 2025) {
        document.getElementById(elementId).innerText = "Starting in 2025...";
        return;
    }

    let startOfYear = new Date(currentYear, 0, 1).getTime();
    let currentTime = new Date().getTime();
    let yearProgress = (currentTime - startOfYear) / (1000 * 60 * 60 * 24 * 365); // Progress of the year
    let counterValue = startYear + yearProgress;

    document.getElementById(elementId).innerText = Math.floor(counterValue);
}

// Function to update Big Mac counter (Total & This Year)
function updateBigMacCounters() {
    let baseBigMacs = 100_000_000_000; // 100 Billion starting count
    let startOfYear = new Date(getCurrentYear(), 0, 1).getTime(); // Midnight of Jan 1
    let currentTime = new Date().getTime();
    
    // Start counting Big Macs from January 1, 2025
    let startOfBigMacCount = new Date("2025-01-01T00:00:00Z").getTime();
    if (currentTime < startOfBigMacCount) {
        document.getElementById("bigMacCounter").innerText = "Starting in 2025...";
        document.getElementById("bigMacThisYear").innerText = "Starting in 2025...";
        return;
    }

    let elapsedSecondsTotal = Math.floor((currentTime - startOfBigMacCount) / 1000);
    let elapsedSecondsThisYear = Math.floor((currentTime - startOfYear) / 1000);

    let currentBigMacCount = baseBigMacs + (elapsedSecondsTotal * 75); // 75 Big Macs per second (Global)
    let bigMacsThisYear = elapsedSecondsThisYear * 75; // Resets every year

    document.getElementById("bigMacCounter").innerText = currentBigMacCount.toLocaleString();
    document.getElementById("bigMacThisYear").innerText = bigMacsThisYear.toLocaleString();
}

// Initial Counter Updates
updateCounter("globalCounter", 2025);   // 🌍 Starts in 2025
updateCounter("personalCounter", 2025); // 📅 Personal Counter (Resets yearly)
updateCounter("eventCounter", 2025);    // 🚀 Custom Event (Resets yearly)
updateBigMacCounters();                  // 🍔 Big Mac Counters

// Update every second
setInterval(() => {
    updateCounter("globalCounter", 2025);
    updateCounter("personalCounter", 2025);
    updateCounter("eventCounter", 2025);
    updateBigMacCounters();
}, 1000);

