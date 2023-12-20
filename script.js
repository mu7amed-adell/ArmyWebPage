const currentDateSpan = document.getElementById('current-date');
const daysUntilStartSpan = document.getElementById('days-until-start');
const daysLeftInServiceSpan = document.getElementById('days-left-in-service');
const timeUntilStartSpan = document.getElementById('time-until-start'); // For the detailed countdown to start date
const serviceTimeCountdownSpan = document.getElementById('service-time-countdown'); // For the detailed service countdown

const startDate = new Date('2024-01-06T00:00:00'); // Start date at midnight
const serviceDuration = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds
const endDate = new Date(startDate.getTime() + serviceDuration); // End date is 90 days from start date

function updateCountdown() {
    const now = new Date();
    currentDateSpan.textContent = now.toLocaleDateString();

    // Calculate the time until the start date
    const timeUntilStart = startDate - now;
    // Calculate the time left in service, which should only start counting after the start date
    const timeLeftInService = now >= startDate ? Math.max(endDate - now, 0) : serviceDuration;

    // Calculate the days until start and days left in service
    const daysUntilStart = timeUntilStart > 0 ? Math.floor(timeUntilStart / (1000 * 60 * 60 * 24)) : 0;
    const daysLeftInService = Math.floor(timeLeftInService / (1000 * 60 * 60 * 24));

    // Update the text content for days until start and days left in service
    daysUntilStartSpan.textContent = daysUntilStart;
    daysLeftInServiceSpan.textContent = daysLeftInService;

    // Update the detailed countdown to start date and service time
    timeUntilStartSpan.textContent = timeUntilStart > 0 ? formatTime(timeUntilStart) : "Service has started";
    serviceTimeCountdownSpan.textContent = now >= startDate ? formatTime(timeLeftInService) : "Service countdown begins on 6th Jan 2024";
}

function formatTime(duration) {
    if (duration <= 0) {
        return '0d 0h 0m 0s';
    }
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
