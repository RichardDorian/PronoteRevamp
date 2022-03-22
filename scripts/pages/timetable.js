/** @typedef {'monday'|'tuesday'|'wednesday'|'thursday'|'friday'} Day */

const dayDivs = document.querySelectorAll(
  '#timetable-days-container > .timetable-day-item'
);

/** Current day of the week */
let currentSelectedDay = new Date().getDay();
currentSelectedDay = 6;

// Mark the current day as active
if (currentSelectedDay < 6) {
  // Ignoring Saturday and Sunday
  let currentDayDiv = dayDivs[currentSelectedDay - 1];
  currentDayDiv.classList.add('active');
} else {
  dayDivs[0].classList.add('active');
  currentSelectedDay = 1;
}

/** Object to map numbers and days */
const DayMap = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
};

/**
 * Timetable object containing all the methods to manipulate the timetable
 */
const timetable = {
  /**
   * Set the new day as active in the timetable page
   * @param {Day} day Day to set as active
   */
  setActiveDay: (day) => {
    // Remove the active class from the current day
    let currentDayDiv = dayDivs[currentSelectedDay - 1];
    currentDayDiv.classList.remove('active');

    // Add the active class to the new day
    let newDayDiv = dayDivs[DayMap[day] - 1];
    newDayDiv.classList.add('active');
    currentSelectedDay = DayMap[day];
  },
};

// Could have been done with the onclick property but it wasn't a good idea because repeated code
dayDivs.forEach((dayDiv) => {
  dayDiv.addEventListener('click', () => {
    timetable.setActiveDay(dayDiv.getAttribute('data-day'));
  });
});
