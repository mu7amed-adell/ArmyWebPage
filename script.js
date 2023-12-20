const currentDateSpan = document.getElementById('current-date');
const daysUntilStartSpan = document.getElementById('days-until-start');
const daysLeftInServiceSpan = document.getElementById('days-left-in-service');
const totalDaysLeftSpan = document.getElementById('total-days-left');

const startDate = new Date('2024-01-06');
const serviceDuration = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds
const endDate = new Date(startDate.getTime() + serviceDuration);

function updateCountdown() {
    const now = new Date();
    currentDateSpan.textContent = now.toLocaleDateString();

    const timeUntilStart = Math.max(startDate - now, 0);
    const daysUntilStart = Math.ceil(timeUntilStart / (1000 * 60 * 60 * 24));
    daysUntilStartSpan.textContent = daysUntilStart;

    const timeLeftInService = Math.max(endDate - now, 0);
    const daysLeftInService = daysUntilStart > 0 ? serviceDuration / (1000 * 60 * 60 * 24) : Math.ceil(timeLeftInService / (1000 * 60 * 60 * 24));
    daysLeftInServiceSpan.textContent = daysLeftInService;

    // Assuming 'total days left' is the sum of days until the start and days left in service
    const totalDaysLeft = daysUntilStart + daysLeftInService;
    totalDaysLeftSpan.textContent = totalDaysLeft;
}

setInterval(updateCountdown, 1000);
updateCountdown();
