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
    
    const options = {
        timeZone: 'America/Chicago',
        hour12: !use24Hour,
        hour: use24Hour ? '2-digit' : 'numeric',
        minute: '2-digit'
    };
    
    return time.toLocaleTimeString('en-US', options);
}

function getCurrentTime() {
    const now = new Date();
    const options = {
        timeZone: 'America/Chicago',
        hour12: !is24HourFormat,
        hour: is24HourFormat ? '2-digit' : 'numeric',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const timeString = now.toLocaleTimeString('en-US', options);
    return `${timeString} Dallas`;
}

function findConnectedTrips(schedule) {
    const connections = [];
    const busColors = ['bus-1', 'bus-2', 'bus-3', 'bus-4'];
    let colorIndex = 0;
    const used = new Set();
    
    // Sort schedule by departure time to process in chronological order
    const sortedSchedule = schedule.map((trip, index) => ({ trip, originalIndex: index }))
        .filter(item => item.trip.depart_airport && item.trip.depart_airport.trim() !== '')
        .sort((a, b) => {
            const timeA = timeToMinutes(a.trip.depart_airport);
            const timeB = timeToMinutes(b.trip.depart_airport);
            return timeA - timeB;
        });
    
    for (let i = 0; i < sortedSchedule.length; i++) {
        const currentItem = sortedSchedule[i];
        if (used.has(currentItem.originalIndex)) continue;
        
        const busTrips = [currentItem.originalIndex];
        used.add(currentItem.originalIndex);
        
        let currentTrip = currentItem.trip;
        
        // Build this bus route by finding the next logical connection
        while (true) {
            let nextConnection = null;
            let shortestWait = Infinity;
            
            // Look for the next trip that could be the same bus
            for (let j = 0; j < sortedSchedule.length; j++) {
                const candidateItem = sortedSchedule[j];
                if (used.has(candidateItem.originalIndex)) continue;
                
                const candidateTrip = candidateItem.trip;
                
                // Check if this trip could follow the current trip
                if (isConnectedTrip(currentTrip.arrive_airport, candidateTrip.depart_airport)) {
                    const arrivalMinutes = timeToMinutes(currentTrip.arrive_airport);
                    const departureMinutes = timeToMinutes(candidateTrip.depart_airport);
                    
                    if (arrivalMinutes !== null && departureMinutes !== null) {
                        let waitTime = departureMinutes - arrivalMinutes;
                        
                        // Handle overnight
                        if (waitTime < 0) {
                            waitTime = (departureMinutes + 1440) - arrivalMinutes;
                        }
                        
                        // Prefer shorter waits (more likely to be same bus)
                        // But also prefer connections that are reasonable (under 4 hours)
                        if (waitTime < shortestWait && waitTime <= 240) { // Max 4 hour wait
                            shortestWait = waitTime;
                            nextConnection = candidateItem;
                        }
                    }
                }
            }
            
            if (nextConnection) {
                busTrips.push(nextConnection.originalIndex);
                used.add(nextConnection.originalIndex);
                currentTrip = nextConnection.trip;
            } else {
                break; // No more connections for this bus
            }
        }
        
        // Only create a bus route if it has multiple trips
        if (busTrips.length > 1) {
            connections.push({
                trips: busTrips,
                color: busColors[colorIndex % busColors.length]
            });
            colorIndex++;
        }
    }
    
    return connections;
}

function isConnectedTrip(arrivalTime, departureTime) {
    if (!arrivalTime || !departureTime) return false;
    
    // Parse times and convert to minutes
    const arrivalMinutes = timeToMinutes(arrivalTime);
    const departureMinutes = timeToMinutes(departureTime);
    
    if (arrivalMinutes === null || departureMinutes === null) return false;
    
    // Bus can depart at arrival time or any time after, but never before
    const timeDiff = departureMinutes - arrivalMinutes;
    
    // Handle overnight scenarios (departure next day)
    if (timeDiff < -720) { // If difference is more than 12 hours negative, likely overnight
        const adjustedTimeDiff = (departureMinutes + 1440) - arrivalMinutes;
        return adjustedTimeDiff >= 0;
    }
    
    return timeDiff >= 0;
}

function timeToMinutes(timeStr) {
    if (!timeStr) return null;
    
    // Remove quotes and clean up
    timeStr = timeStr.replace(/"/g, '').trim();
    
    const parts = timeStr.split(':');
    if (parts.length !== 2) return null;
    
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    
    if (isNaN(hours) || isNaN(minutes)) return null;
    
    return hours * 60 + minutes;
}

function getTripColor(tripIndex, connections) {
    for (const connection of connections) {
        if (connection.trips.includes(tripIndex)) {
            return connection.color;
        }
    }
    return '';
}

function getDetectedBuses(terminal) {
    const schedule = terminal === 'A' ? scheduleData.terminalA : scheduleData.terminalD;
    const connections = findConnectedTrips(schedule);
    return connections.map(conn => conn.color);
}

function filterScheduleByTime(schedule) {
    if (!showRemainingOnly) {
        return schedule;
    }
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    return schedule.filter(departure => {
        if (!departure.arrive_airport || departure.arrive_airport.trim() === '') {
            return false;
        }
        
        const arriveTime = parseTime(departure.arrive_airport);
        if (!arriveTime) return false;
        
        const arriveMinutes = arriveTime.getHours() * 60 + arriveTime.getMinutes();
        
        // Hide trip only if it's been 10+ minutes since arrival at airport
        // Show if arrival + 10 minutes is still in the future
        const tripEndMinutes = arriveMinutes + 10;
        
        if (tripEndMinutes >= currentMinutes) {
            return true;
        }
        
        // Handle overnight schedules - show early morning arrivals if it's late evening
        if (currentMinutes >= 1320 && arriveMinutes < 360) { // After 10 PM, show before 6 AM
            return true;
        }
        
        return false;
    });
}

function isCurrentlyActive(departure) {
    if (!departure.depart_airport || !departure.arrive_airport) return false;
    
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const departTime = parseTime(departure.depart_airport);
    const arriveTime = parseTime(departure.arrive_airport);
    
    if (!departTime || !arriveTime) return false;
    
    const departMinutes = departTime.getHours() * 60 + departTime.getMinutes();
    let arriveMinutes = arriveTime.getHours() * 60 + arriveTime.getMinutes();
    
    // Handle overnight trips
    if (arriveMinutes < departMinutes) {
        arriveMinutes += 1440; // Add 24 hours
        
        // If it's early morning and we have an overnight trip
        if (currentMinutes < 360 && departMinutes > 1200) { // Before 6 AM and departure after 8 PM
            const adjustedCurrentMinutes = currentMinutes + 1440;
            return adjustedCurrentMinutes >= departMinutes && adjustedCurrentMinutes <= arriveMinutes;
        }
        
        // Regular overnight check
        return currentMinutes >= departMinutes || currentMinutes <= (arriveMinutes - 1440);
    }
    
    // Regular same-day trip
    return currentMinutes >= departMinutes && currentMinutes <= arriveMinutes;
}

function renderSchedule(terminal) {
    const schedule = terminal === 'A' ? scheduleData.terminalA : scheduleData.terminalD;
    const filteredSchedule = filterScheduleByTime(schedule);
    const tableBody = document.getElementById(`schedule-${terminal.toLowerCase()}-body`);
    
    // Find connected trips for color coding
    const connections = findConnectedTrips(schedule);
    
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
    filteredSchedule.forEach((departure, filteredIndex) => {
        const row = document.createElement('tr');
        
        // Find the original index in the full schedule for color coding
        const originalIndex = schedule.findIndex(item => 
            item.depart_airport === departure.depart_airport && 
            item.sv3 === departure.sv3 && 
            item.sv6 === departure.sv6 && 
            item.arrive_airport === departure.arrive_airport
        );
        
        // Add bus color class if this trip is part of a connected bus route
        const busColor = getTripColor(originalIndex, connections);
        if (busColor) {
            row.classList.add(busColor);
        }
        
        // Add active trip highlight if currently in progress
        if (isCurrentlyActive(departure)) {
            row.classList.add('active-trip');
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

function updateLegend(terminal) {
    const detectedBuses = getDetectedBuses(terminal);
    const legendContainer = document.querySelector('.legend');
    
    if (detectedBuses.length === 0) {
        legendContainer.innerHTML = `
            <div class="legend-item">
                <span>No connected bus routes detected</span>
            </div>
        `;
        return;
    }
    
    const busNames = {
        'bus-1': 'Bus Route 1',
        'bus-2': 'Bus Route 2', 
        'bus-3': 'Bus Route 3',
        'bus-4': 'Bus Route 4'
    };
    
    legendContainer.innerHTML = detectedBuses.map(busColor => `
        <div class="legend-item">
            <div class="legend-color ${busColor}-color"></div>
            <span>${busNames[busColor]}</span>
        </div>
    `).join('');
}

function switchTerminal(terminal) {
    currentTerminal = terminal;
    
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
    
    // Re-render the schedule and update legend
    renderSchedule(terminal);
    updateLegend(terminal);
}

function updateCurrentTime() {
    currentTimeDisplay.textContent = getCurrentTime();
}

function toggleTimeFormat() {
    is24HourFormat = timeFormatToggle.checked;
    renderSchedule(currentTerminal);
    renderBusStatus(); // Add this to update the timeline
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
                
                if (adjustedCurrentMinutes >= adjustedDepartMinutes && adjustedCurrentMinutes < adjustedSv3Minutes) {
                    location = 'En route to Flight Academy (SV3)';
                    const etaMinutes = adjustedSv3Minutes - adjustedCurrentMinutes;
                    locationDetail = `Left DFW Airport at ${formatTime(departure.depart_airport, is24HourFormat)}, arriving at SV3 in ~${etaMinutes} min`;
                } else if (adjustedCurrentMinutes >= adjustedSv3Minutes && adjustedCurrentMinutes < adjustedSv3Minutes + 5) {
                    location = 'At Flight Academy (SV3)';
                    const departureMinutes = adjustedSv6Minutes - adjustedCurrentMinutes;
                    if (departureMinutes > 0) {
                        locationDetail = `Arrived at ${formatTime(departure.sv3, is24HourFormat)}, departing for The Landing in ~${departureMinutes} min`;
                    } else {
                        locationDetail = `Departing for The Landing at ${formatTime(departure.sv6, is24HourFormat)}`;
                    }
                } else if (adjustedCurrentMinutes >= adjustedSv3Minutes + 5 && adjustedCurrentMinutes < adjustedSv6Minutes) {
                    location = 'En route to The Landing (SV6)';
                    const etaMinutes = adjustedSv6Minutes - adjustedCurrentMinutes;
                    locationDetail = `Left Flight Academy at ${formatTime(departure.sv3, is24HourFormat)}, arriving at The Landing in ~${etaMinutes} min`;
                } else if (adjustedCurrentMinutes >= adjustedSv6Minutes && adjustedCurrentMinutes < adjustedSv6Minutes + 5) {
                    location = 'At The Landing (SV6)';
                    const departureMinutes = adjustedArriveMinutes - adjustedCurrentMinutes;
                    if (departureMinutes > 0) {
                        locationDetail = `Arrived at ${formatTime(departure.sv6, is24HourFormat)}, departing for DFW in ~${departureMinutes} min`;
                    } else {
                        locationDetail = `Departing for DFW Airport at ${formatTime(departure.arrive_airport, is24HourFormat)}`;
                    }
                } else if (adjustedCurrentMinutes >= adjustedSv6Minutes + 5 && adjustedCurrentMinutes < adjustedArriveMinutes) {
                    location = 'En route to DFW Airport';
                    const etaMinutes = adjustedArriveMinutes - adjustedCurrentMinutes;
                    locationDetail = `Left The Landing at ${formatTime(departure.sv6, is24HourFormat)}, arriving at DFW in ~${etaMinutes} min`;
                }
                
                activeBuses.push({
                    terminal: terminalLabel,
                    terminalClass: terminal === 'terminalA' ? 'terminal-a' : 'terminal-d',
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
    
    busStatusContainer.innerHTML = activeBuses.map(bus => {
        const departure = bus.departure;
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        // Helper function to calculate minutes until a time
        function getMinutesUntil(timeStr) {
            if (!timeStr) return null;
            const time = parseTime(timeStr);
            if (!time) return null;
            
            let targetMinutes = time.getHours() * 60 + time.getMinutes();
            let diff = targetMinutes - currentMinutes;
            
            // Handle overnight scenarios
            if (diff < -720) { // If more than 12 hours ago, probably tomorrow
                diff += 1440;
            }
            
            return diff;
        }
        
        // Create timeline with all stops and time calculations
        const timelineStops = [
            { 
                name: 'DFW Airport', 
                time: formatTime(departure.depart_airport, is24HourFormat),
                minutesUntil: getMinutesUntil(departure.depart_airport),
                status: getStopStatus(getMinutesUntil(departure.depart_airport), bus.location, 'DFW Airport')
            },
            { 
                name: 'Flight Academy (SV3)', 
                time: formatTime(departure.sv3, is24HourFormat),
                minutesUntil: getMinutesUntil(departure.sv3),
                status: getStopStatus(getMinutesUntil(departure.sv3), bus.location, 'Flight Academy')
            },
            { 
                name: 'The Landing (SV6)', 
                time: formatTime(departure.sv6, is24HourFormat),
                minutesUntil: getMinutesUntil(departure.sv6),
                status: getStopStatus(getMinutesUntil(departure.sv6), bus.location, 'The Landing')
            },
            { 
                name: 'DFW Airport', 
                time: formatTime(departure.arrive_airport, is24HourFormat),
                minutesUntil: getMinutesUntil(departure.arrive_airport),
                status: getStopStatus(getMinutesUntil(departure.arrive_airport), bus.location, 'DFW Airport Return')
            }
        ];

        // Helper function to determine stop status based on time and location
        function getStopStatus(minutesUntil, busLocation, stopName) {
            // If the time has passed by more than 10 minutes, it's definitely completed
            if (minutesUntil < -10) {
                return 'completed';
            }
            
            // If time has passed at all (even by a few minutes), it's completed
            if (minutesUntil < 0) {
                return 'completed';
            }
            
            // Current stop logic - only if time hasn't passed yet
            if (stopName === 'DFW Airport' && busLocation.includes('DFW')) {
                return 'current';
            }
            if (stopName === 'Flight Academy' && (busLocation.includes('Flight Academy') || busLocation.includes('En route to Flight Academy'))) {
                return 'current';
            }
            if (stopName === 'The Landing' && (busLocation.includes('The Landing') || busLocation.includes('En route to The Landing'))) {
                return 'current';
            }
            if (stopName === 'DFW Airport Return' && busLocation.includes('En route to DFW')) {
                return 'current';
            }
            
            // If within 15 minutes of the scheduled time and not past, it could be current
            if (minutesUntil >= 0 && minutesUntil <= 15) {
                // Check for transitional states
                if (stopName === 'Flight Academy' && busLocation.includes('En route to Flight Academy')) {
                    return 'current';
                }
                if (stopName === 'The Landing' && (busLocation.includes('At Flight Academy') || busLocation.includes('En route to The Landing'))) {
                    return 'current';
                }
                if (stopName === 'DFW Airport Return' && (busLocation.includes('At The Landing') || busLocation.includes('En route to DFW'))) {
                    return 'current';
                }
            }
            
            // Everything else is upcoming
            return 'upcoming';
        }
        
        const timelineHTML = timelineStops.map(stop => {
            let timeUntilText = '';
            if (stop.minutesUntil !== null) {
                if (stop.minutesUntil <= 0) {
                    timeUntilText = Math.abs(stop.minutesUntil) === 0 ? 'now' : `${Math.abs(stop.minutesUntil)} mins ago`;
                } else {
                    timeUntilText = `in ${stop.minutesUntil} mins`;
                }
            }
            
            return `
                <div class="timeline-stop ${stop.status}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="stop-name">${stop.name}</div>
                        <div class="stop-time">${stop.time}</div>
                        <div class="time-until">${timeUntilText}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="bus-status-item ${bus.terminalClass}">
                <div class="bus-header">
                    <span class="bus-terminal">${bus.terminal}</span>
                </div>
                <div class="bus-timeline">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }).join('');
}

// Event listeners
terminalABtn.addEventListener('click', () => switchTerminal('A'));
terminalDBtn.addEventListener('click', () => switchTerminal('D'));
timeFormatToggle.addEventListener('change', toggleTimeFormat);
remainingOnlyToggle.addEventListener('change', toggleRemainingOnly);

// Toggle route info visibility
function toggleRouteInfo() {
    const routeContent = document.querySelector('.route-content');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (routeContent.style.display === 'none') {
        routeContent.style.display = 'block';
        toggleIcon.textContent = '▲';
    } else {
        routeContent.style.display = 'none';
        toggleIcon.textContent = '▼';
    }
}

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