// Function to update counters
function updateCounter(elementId, startYear) {
    let currentYear = new Date().getFullYear();
    let counterValue = startYear + (currentYear - startYear);
    document.getElementById(elementId).innerText = counterValue;
}

// Function to update Big Mac counter
function updateBigMacCounter() {
    let baseBigMacs = 100_000_000_000; // 100 Billion starting count
    let startTime = new Date("2024-01-01T00:00:00Z").getTime();
    let currentTime = new Date().getTime();
    let elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    let currentBigMacCount = baseBigMacs + (elapsedSeconds * 75); // 75 Big Macs per second

    document.getElementById("bigMacCounter").innerText = currentBigMacCount.toLocaleString();
}

// Initial Counter Updates
updateCounter("globalCounter", 2000);   // 🌍 Global Counter (Started in 2000)
updateCounter("personalCounter", 2015); // 📅 Personal Counter (Started in 2015)
updateCounter("eventCounter", 2023);    // 🚀 Custom Event (Started in 2023)
updateBigMacCounter();                  // 🍔 Big Mac Counter

// Update every second
setInterval(() => {
    updateCounter("globalCounter", 2000);
    updateCounter("personalCounter", 2015);
    updateCounter("eventCounter", 2023);
    updateBigMacCounter();
}, 1000);
