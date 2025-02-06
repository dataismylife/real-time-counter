// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to calculate counter values and reset yearly
function updateCounter(elementId, startYear) {
    let currentYear = getCurrentYear();
    
    // Reset counter at the beginning of each new year
    let yearProgress = new Date().getMonth() / 12; // Progress in the year (0 to 1)
    let counterValue = startYear + yearProgress; // Resets each year to startYear

    document.getElementById(elementId).innerText = Math.floor(counterValue);
}

// Function to update Big Mac counter (Total & This Year)
function updateBigMacCounters() {
    let baseBigMacs = 100_000_000_000; // 100 Billion starting count
    let startOfYear = new Date(getCurrentYear(), 0, 1).getTime(); // Midnight of Jan 1
    let currentTime = new Date().getTime();
    
    let elapsedSecondsTotal = Math.floor((currentTime - new Date("2024-01-01T00:00:00Z").getTime()) / 1000);
    let elapsedSecondsThisYear = Math.floor((currentTime - startOfYear) / 1000);

    let currentBigMacCount = baseBigMacs + (elapsedSecondsTotal * 75); // 75 Big Macs per second (Global)
    let bigMacsThisYear = elapsedSecondsThisYear * 75; // Reset each year

    document.getElementById("bigMacCounter").innerText = currentBigMacCount.toLocaleString();
    document.getElementById("bigMacThisYear").innerText = bigMacsThisYear.toLocaleString();
}

// Initial Counter Updates (Resets Each Year)
updateCounter("globalCounter", 2000);   // 🌍 Global Counter (Resets each year)
updateCounter("personalCounter", 2015); // 📅 Personal Counter (Resets each year)
updateCounter("eventCounter", 2023);    // 🚀 Custom Event (Resets each year)
updateBigMacCounters();                  // 🍔 Big Mac Counters

// Update every second
setInterval(() => {
    updateCounter("globalCounter", 2000);
    updateCounter("personalCounter", 2015);
    updateCounter("eventCounter", 2023);
    updateBigMacCounters();
}, 1000);
