// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to update counters (Only works between 2025-2026)
function updateCounter(elementId, startYear) {
    let currentYear = getCurrentYear();
    let currentTime = new Date().getTime();
    let startOf2025 = new Date("2025-01-01T00:00:00Z").getTime();
    let startOf2026 = new Date("2026-01-01T00:00:00Z").getTime();

    // Before 2025, show "Coming Soon..."
    if (currentTime < startOf2025) {
        document.getElementById(elementId).innerText = "Starting in 2025...";
        return;
    }

    // After 2026, reset to 2025
    if (currentTime >= startOf2026) {
        document.getElementById(elementId).innerText = startYear;
        return;
    }

    // Progress within the year 2025
    let startOfYear = new Date(currentYear, 0, 1).getTime();
    let yearProgress = (currentTime - startOfYear) / (1000 * 60 * 60 * 24 * 365); // 0 to 1
    let counterValue = startYear + yearProgress;

    document.getElementById(elementId).innerText = Math.floor(counterValue);
}

// Function to update Big Mac counter (Total & This Year)
function updateBigMacCounters() {
    let baseBigMacs = 100_000_000_000; // 100 Billion starting count
    let currentTime = new Date().getTime();
    let startOf2025 = new Date("2025-01-01T00:00:00Z").getTime();
    let startOfYear = new Date(getCurrentYear(), 0, 1).getTime();
    let startOf2026 = new Date("2026-01-01T00:00:00Z").getTime();

    // Before 2025, show "Coming Soon..."
    if (currentTime < startOf2025) {
        document.getElementById("bigMacCounter").innerText = "Starting in 2025...";
        document.getElementById("bigMacThisYear").innerText = "Starting in 2025...";
        return;
    }

    // If we are in 2026, reset Big Mac counter for the year
    if (currentTime >= startOf2026) {
        document.getElementById("bigMacThisYear").innerText = "0";
    }

    let elapsedSecondsTotal = Math.floor((currentTime - startOf2025) / 1000);
    let elapsedSecondsThisYear = Math.floor((currentTime - startOfYear) / 1000);

    let currentBigMacCount = baseBigMacs + (elapsedSecondsTotal * 75); // 75 Big Macs per second
    let bigMacsThisYear = elapsedSecondsThisYear * 75; // Reset each year

    document.getElementById("bigMacCounter").innerText = currentBigMacCount.toLocaleString();
    document.getElementById("bigMacThisYear").innerText = bigMacsThisYear.toLocaleString();
}

// **Initialize counters**
updateCounter("globalCounter", 2025);
updateCounter("personalCounter", 2025);
updateCounter("eventCounter", 2025);
updateBigMacCounters();

// **Update counters every second**
setInterval(() => {
    updateCounter("globalCounter", 2025);
    updateCounter("personalCounter", 2025);
    updateCounter("eventCounter", 2025);
    updateBigMacCounters();
}, 1000);
