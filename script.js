// Bus schedule data from CSV files
// Last updated: August 12, 2025
const scheduleData = {
    terminalA: [
        { depart_airport: "", sv3: "4:30", sv6: "4:35", arrive_airport: "5:00" },
        { depart_airport: "5:00", sv3: "5:30", sv6: "5:35", arrive_airport: "6:00" },
        { depart_airport: "6:00", sv3: "6:30", sv6: "6:35", arrive_airport: "7:00" },
        { depart_airport: "7:00", sv3: "7:30", sv6: "7:35", arrive_airport: "8:00" },
        { depart_airport: "7:30", sv3: "8:00", sv6: "8:05", arrive_airport: "8:30" },
        { depart_airport: "8:00", sv3: "8:30", sv6: "8:35", arrive_airport: "9:00" },
        { depart_airport: "8:30", sv3: "9:00", sv6: "9:05", arrive_airport: "9:30" },
        { depart_airport: "9:00", sv3: "9:30", sv6: "9:35", arrive_airport: "10:00" },
        { depart_airport: "9:30", sv3: "10:00", sv6: "10:05", arrive_airport: "10:30" },
        { depart_airport: "10:00", sv3: "10:30", sv6: "10:35", arrive_airport: "11:00" },
        { depart_airport: "10:30", sv3: "11:00", sv6: "11:05", arrive_airport: "11:30" },
        { depart_airport: "11:00", sv3: "11:30", sv6: "11:35", arrive_airport: "12:00" },
        { depart_airport: "11:30", sv3: "12:00", sv6: "12:05", arrive_airport: "12:30" },
        { depart_airport: "12:00", sv3: "12:30", sv6: "12:35", arrive_airport: "13:00" },
        { depart_airport: "12:30", sv3: "13:00", sv6: "13:05", arrive_airport: "13:30" },
        { depart_airport: "13:00", sv3: "13:30", sv6: "13:35", arrive_airport: "14:00" },
        { depart_airport: "13:30", sv3: "14:00", sv6: "14:05", arrive_airport: "14:30" },
        { depart_airport: "14:00", sv3: "14:30", sv6: "14:35", arrive_airport: "15:00" },
        { depart_airport: "14:30", sv3: "15:00", sv6: "15:05", arrive_airport: "15:30" },
        { depart_airport: "15:00", sv3: "15:30", sv6: "15:35", arrive_airport: "16:00" },
        { depart_airport: "15:30", sv3: "16:00", sv6: "16:05", arrive_airport: "16:30" },
        { depart_airport: "16:00", sv3: "16:30", sv6: "16:35", arrive_airport: "17:00" },
        { depart_airport: "16:30", sv3: "17:00", sv6: "17:05", arrive_airport: "17:30" },
        { depart_airport: "17:00", sv3: "17:30", sv6: "17:35", arrive_airport: "18:00" },
        { depart_airport: "17:30", sv3: "18:00", sv6: "18:05", arrive_airport: "18:30" },
        { depart_airport: "18:00", sv3: "18:30", sv6: "18:35", arrive_airport: "19:00" },
        { depart_airport: "18:30", sv3: "19:00", sv6: "19:05", arrive_airport: "19:30" },
        { depart_airport: "19:00", sv3: "19:30", sv6: "19:35", arrive_airport: "20:00" },
        { depart_airport: "19:30", sv3: "20:00", sv6: "20:05", arrive_airport: "20:30" },
        { depart_airport: "20:00", sv3: "20:30", sv6: "20:35", arrive_airport: "21:00" },
        { depart_airport: "20:30", sv3: "21:00", sv6: "21:05", arrive_airport: "21:30" },
        { depart_airport: "21:00", sv3: "21:30", sv6: "21:35", arrive_airport: "22:00" },
        { depart_airport: "21:30", sv3: "22:00", sv6: "22:05", arrive_airport: "22:30" },
        { depart_airport: "22:00", sv3: "22:30", sv6: "22:35", arrive_airport: "23:00" },
        { depart_airport: "23:00", sv3: "23:30", sv6: "23:35", arrive_airport: "00:00" },
        { depart_airport: "00:00", sv3: "00:30", sv6: "00:35", arrive_airport: "01:00" }
    ],
    terminalD: [
        { depart_airport: "07:15", sv3: "07:30", sv6: "07:35", arrive_airport: "07:50" },
        { depart_airport: "07:55", sv3: "08:10", sv6: "08:15", arrive_airport: "08:30" },
        { depart_airport: "08:35", sv3: "08:50", sv6: "08:55", arrive_airport: "09:10" },
        { depart_airport: "09:15", sv3: "09:30", sv6: "09:35", arrive_airport: "09:50" },
        { depart_airport: "09:55", sv3: "10:10", sv6: "10:15", arrive_airport: "10:30" },
        { depart_airport: "10:35", sv3: "10:50", sv6: "10:55", arrive_airport: "11:10" },
        { depart_airport: "11:15", sv3: "11:30", sv6: "11:35", arrive_airport: "11:50" },
        { depart_airport: "11:55", sv3: "12:10", sv6: "12:15", arrive_airport: "12:30" },
        { depart_airport: "12:35", sv3: "12:50", sv6: "12:55", arrive_airport: "13:10" },
        { depart_airport: "13:15", sv3: "13:30", sv6: "13:35", arrive_airport: "13:50" },
        { depart_airport: "13:55", sv3: "14:10", sv6: "14:15", arrive_airport: "14:30" },
        { depart_airport: "14:35", sv3: "14:50", sv6: "14:55", arrive_airport: "15:10" },
        { depart_airport: "15:15", sv3: "15:30", sv6: "15:35", arrive_airport: "15:50" },
        { depart_airport: "15:55", sv3: "16:10", sv6: "16:15", arrive_airport: "16:30" },
        { depart_airport: "16:35", sv3: "16:50", sv6: "16:55", arrive_airport: "17:10" },
        { depart_airport: "17:15", sv3: "17:30", sv6: "17:35", arrive_airport: "17:50" },
        { depart_airport: "17:55", sv3: "18:10", sv6: "18:15", arrive_airport: "18:30" },
        { depart_airport: "18:35", sv3: "18:50", sv6: "18:55", arrive_airport: "19:10" },
        { depart_airport: "19:15", sv3: "19:30", sv6: "19:35", arrive_airport: "19:50" },
        { depart_airport: "19:55", sv3: "20:10", sv6: "20:15", arrive_airport: "20:30" },
        { depart_airport: "20:35", sv3: "20:50", sv6: "20:55", arrive_airport: "21:10" },
        { depart_airport: "21:15", sv3: "21:30", sv6: "21:35", arrive_airport: "21:50" },
        { depart_airport: "21:55", sv3: "22:10", sv6: "22:15", arrive_airport: "22:30" },
        { depart_airport: "22:35", sv3: "22:50", sv6: "22:55", arrive_airport: "23:10" },
        { depart_airport: "23:15", sv3: "23:30", sv6: "23:35", arrive_airport: "23:50" }
    ]
};

// Global state
let currentTerminal = 'A';
let is24HourFormat = false;
let showRemainingOnly = true;
const scheduleLastUpdated = 'August 12, 2025';

// DOM elements
const terminalABtn = document.getElementById('terminal-a');
const terminalDBtn = document.getElementById('terminal-d');
const scheduleASection = document.getElementById('schedule-a');
const scheduleDSection = document.getElementById('schedule-d');
const timeFormatToggle = document.getElementById('time-format-toggle');
const remainingOnlyToggle = document.getElementById('remaining-only-toggle');
const currentTimeDisplay = document.getElementById('current-time');
const busStatusContainer = document.getElementById('bus-status-container');

// Time formatting functions
function parseTime(timeStr) {
    if (!timeStr || timeStr.trim() === '') return null;
    
    // Remove quotes if present
    timeStr = timeStr.replace(/"/g, '');
    
    const [hours, minutes] = timeStr.split(':').map(num => parseInt(num));
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

function formatTime(timeStr, use24Hour = false) {
    if (!timeStr || timeStr.trim() === '') return '-';
    
    const time = parseTime(timeStr);
    if (!time) return '-';
    
    if (use24Hour) {
        return time.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        });
    } else {
        return time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true 
        });
    }
}

function getCurrentTime() {
    const now = new Date();
    if (is24HourFormat) {
        return now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });
    } else {
        return now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: true 
        });
    }
}

function findCurrentAndNextDepartures(schedule) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    let currentIndex = -1;
    let nextIndex = -1;
    
    for (let i = 0; i < schedule.length; i++) {
        const departure = schedule[i];
        if (!departure.depart_airport || departure.depart_airport.trim() === '') continue;
        
        const departTime = parseTime(departure.depart_airport);
        if (!departTime) continue;
        
        const departMinutes = departTime.getHours() * 60 + departTime.getMinutes();
        
        if (Math.abs(departMinutes - currentMinutes) <= 5) {
            currentIndex = i;
        } else if (departMinutes > currentMinutes && nextIndex === -1) {
            nextIndex = i;
            break;
        }
    }
    
    // If no next departure found, check for overnight schedules
    if (nextIndex === -1) {
        for (let i = 0; i < schedule.length; i++) {
            const departure = schedule[i];
            if (!departure.depart_airport || departure.depart_airport.trim() === '') continue;
            
            const departTime = parseTime(departure.depart_airport);
            if (!departTime) continue;
            
            const departMinutes = departTime.getHours() * 60 + departTime.getMinutes();
            
            // Check for early morning departures (next day)
            if (departMinutes < 360) { // Before 6 AM
                nextIndex = i;
                break;
            }
        }
    }
    
    return { currentIndex, nextIndex };
}

function filterScheduleByTime(schedule) {
    if (!showRemainingOnly) {
        return schedule;
    }
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    return schedule.filter(departure => {
        if (!departure.depart_airport || departure.depart_airport.trim() === '') {
            return false;
        }
        
        const departTime = parseTime(departure.depart_airport);
        if (!departTime) return false;
        
        const departMinutes = departTime.getHours() * 60 + departTime.getMinutes();
        
        // Show departures that haven't left yet (with 2-minute buffer for boarding)
        // Also include overnight schedules (early morning departures)
        if (departMinutes >= currentMinutes - 2) {
            return true;
        }
        
        // Handle overnight schedules - show early morning departures if it's late evening
        if (currentMinutes >= 1320 && departMinutes < 360) { // After 10 PM, show before 6 AM
            return true;
        }
        
        return false;
    });
}

function renderSchedule(terminal) {
    const schedule = terminal === 'A' ? scheduleData.terminalA : scheduleData.terminalD;
    const filteredSchedule = filterScheduleByTime(schedule);
    const tableBody = document.getElementById(`schedule-${terminal.toLowerCase()}-body`);
    
    // Find current and next departures from filtered schedule
    const { currentIndex, nextIndex } = findCurrentAndNextDepartures(filteredSchedule);
    
    // Clear existing content
    tableBody.innerHTML = '';
    
    // Show message if no remaining departures
    if (filteredSchedule.length === 0 && showRemainingOnly) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="4" style="text-align: center; font-style: italic; padding: 2rem; color: #666;">
                No more departures today. Service resumes tomorrow.
            </td>
        `;
        tableBody.appendChild(row);
        return;
    }
    
    // Render schedule rows
    filteredSchedule.forEach((departure, index) => {
        const row = document.createElement('tr');
        
        // Add highlighting classes
        if (index === currentIndex) {
            row.classList.add('current');
        } else if (index === nextIndex) {
            row.classList.add('next');
        }
        
        row.innerHTML = `
            <td>${formatTime(departure.depart_airport, is24HourFormat)}</td>
            <td>${formatTime(departure.sv3, is24HourFormat)}</td>
            <td>${formatTime(departure.sv6, is24HourFormat)}</td>
            <td>${formatTime(departure.arrive_airport, is24HourFormat)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

function toggleRemainingOnly() {
    showRemainingOnly = remainingOnlyToggle.checked;
    renderSchedule(currentTerminal);
}

function switchTerminal(terminal) {
    
    // Update button states
    if (terminal === 'A') {
        terminalABtn.classList.add('active');
        terminalDBtn.classList.remove('active');
        scheduleASection.classList.add('active');
        scheduleDSection.classList.remove('active');
    } else {
        terminalDBtn.classList.add('active');
        terminalABtn.classList.remove('active');
        scheduleDSection.classList.add('active');
        scheduleASection.classList.remove('active');
    }
    
    // Re-render the schedule
    renderSchedule(terminal);
}

function updateCurrentTime() {
    currentTimeDisplay.textContent = getCurrentTime();
}

function toggleTimeFormat() {
    is24HourFormat = timeFormatToggle.checked;
    renderSchedule(currentTerminal);
    updateCurrentTime();
}

function getCurrentBusStatus() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const activeBuses = [];

    // Check both terminals for active buses/trips
    ['terminalA', 'terminalD'].forEach(terminal => {
        const schedule = terminal === 'terminalA' ? scheduleData.terminalA : scheduleData.terminalD;
        const terminalLabel = terminal === 'terminalA' ? 'Terminal A19/A20' : 'Terminal D29';
        
        schedule.forEach((departure, index) => {
            if (!departure.depart_airport || departure.depart_airport.trim() === '') return;
            
            const departTime = parseTime(departure.depart_airport);
            const sv3Time = parseTime(departure.sv3);
            const sv6Time = parseTime(departure.sv6);
            const arriveTime = parseTime(departure.arrive_airport);
            
            if (!departTime || !sv3Time || !sv6Time || !arriveTime) return;
            
            const departMinutes = departTime.getHours() * 60 + departTime.getMinutes();
            const sv3Minutes = sv3Time.getHours() * 60 + sv3Time.getMinutes();
            const sv6Minutes = sv6Time.getHours() * 60 + sv6Time.getMinutes();
            const arriveMinutes = arriveTime.getHours() * 60 + arriveTime.getMinutes();
            
            // Handle overnight schedules
            let adjustedDepartMinutes = departMinutes;
            let adjustedSv3Minutes = sv3Minutes;
            let adjustedSv6Minutes = sv6Minutes;
            let adjustedArriveMinutes = arriveMinutes;
            
            // If arrival is next day (smaller than departure), add 24 hours
            if (arriveMinutes < departMinutes) {
                adjustedArriveMinutes += 1440; // 24 * 60
                if (sv3Minutes < departMinutes) adjustedSv3Minutes += 1440;
                if (sv6Minutes < departMinutes) adjustedSv6Minutes += 1440;
            }
            
            // Check if this bus/trip is currently active
            let busIsActive = false;
            let adjustedCurrentMinutes = currentMinutes;
            
            // Handle overnight scenarios
            if (adjustedArriveMinutes > 1440) {
                if (currentMinutes < 360 && departMinutes > 1200) { // Before 6 AM and departure after 8 PM
                    adjustedCurrentMinutes += 1440;
                    busIsActive = adjustedCurrentMinutes >= adjustedDepartMinutes && adjustedCurrentMinutes <= adjustedArriveMinutes;
                } else {
                    busIsActive = currentMinutes >= departMinutes && currentMinutes <= arriveMinutes;
                }
            } else {
                busIsActive = adjustedCurrentMinutes >= adjustedDepartMinutes && adjustedCurrentMinutes <= adjustedArriveMinutes;
            }
            
            if (busIsActive) {
                let location = '';
                let locationDetail = '';
                let busNumber = `Bus #${index + 1}`;
                
                if (adjustedCurrentMinutes >= adjustedDepartMinutes && adjustedCurrentMinutes < adjustedSv3Minutes) {
                    location = 'En route to Flight Academy (SV3)';
                    const etaMinutes = adjustedSv3Minutes - adjustedCurrentMinutes;
                    locationDetail = `Left DFW Airport at ${formatTime(departure.depart_airport, is24HourFormat)}, arriving at SV3 in ~${etaMinutes} min`;
                } else if (adjustedCurrentMinutes >= adjustedSv3Minutes && adjustedCurrentMinutes < adjustedSv6Minutes) {
                    location = 'At Flight Academy (SV3)';
                    const departureMinutes = adjustedSv6Minutes - adjustedCurrentMinutes;
                    if (departureMinutes > 0) {
                        locationDetail = `Arrived at ${formatTime(departure.sv3, is24HourFormat)}, departing for The Landing in ~${departureMinutes} min`;
                    } else {
                        locationDetail = `Departing for The Landing at ${formatTime(departure.sv6, is24HourFormat)}`;
                    }
                } else if (adjustedCurrentMinutes >= adjustedSv6Minutes && adjustedCurrentMinutes < adjustedArriveMinutes) {
                    location = 'En route to DFW Airport';
                    const etaMinutes = adjustedArriveMinutes - adjustedCurrentMinutes;
                    locationDetail = `Left The Landing at ${formatTime(departure.sv6, is24HourFormat)}, arriving at DFW in ~${etaMinutes} min`;
                }
                
                activeBuses.push({
                    terminal: terminalLabel,
                    terminalClass: terminal === 'terminalA' ? 'terminal-a' : 'terminal-d',
                    busNumber: busNumber,
                    departure: departure,
                    location: location,
                    locationDetail: locationDetail,
                    currentTime: formatTime(departure.depart_airport, is24HourFormat)
                });
            }
        });
    });
    
    return activeBuses;
}

function renderBusStatus() {
    const activeBuses = getCurrentBusStatus();
    
    if (activeBuses.length === 0) {
        busStatusContainer.innerHTML = `
            <div class="no-buses">
                No buses currently in service
            </div>
        `;
        return;
    }
    
    busStatusContainer.innerHTML = activeBuses.map(bus => `
        <div class="bus-status-item ${bus.terminalClass}">
            <div class="bus-header">
                <span class="bus-terminal">${bus.terminal} - ${bus.busNumber}</span>
                <span class="bus-time">Departed: ${bus.currentTime}</span>
            </div>
            <div class="bus-location">
                <div class="location-indicator"></div>
                <div class="location-text">
                    <strong>${bus.location}</strong><br>
                    ${bus.locationDetail}
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners
terminalABtn.addEventListener('click', () => switchTerminal('A'));
terminalDBtn.addEventListener('click', () => switchTerminal('D'));
timeFormatToggle.addEventListener('change', toggleTimeFormat);
remainingOnlyToggle.addEventListener('change', toggleRemainingOnly);

// Initialize the page
function init() {
    // Set last updated date
    document.getElementById('last-updated-date').textContent = scheduleLastUpdated;
    
    // Initial render
    switchTerminal('A');
    updateCurrentTime();
    renderBusStatus();
    
    // Update time every second
    setInterval(updateCurrentTime, 1000);
    
    // Update schedule highlighting and bus status every minute
    setInterval(() => {
        renderSchedule(currentTerminal);
        renderBusStatus();
    }, 60000);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);