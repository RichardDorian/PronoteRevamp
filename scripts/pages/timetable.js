/** @typedef {'monday'|'tuesday'|'wednesday'|'thursday'|'friday'} Day */

const dayDivs = document.querySelectorAll(
  '#timetable-days-container > .timetable-day-item'
);

/** Object to map numbers and days */
const DayMap = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
};

/**
 * Timetable object containing all the methods to manipulate the timetable
 */
const timetable = {
  /** Current day of the week */
  currentSelectedDay: new Date().getDay(),
  /**
   * Colors that can be used to color the timetable
   */
  colors: Object.freeze({
    red: '#d48484',
    orange: '#d4ab84',
    yellow: '#d4cb84',
    lightGreen: '#b1d484',
    green: '#84d494',
    aqua: '#84d4c4',
    lightBlue: '#84c3d4',
    blue: '#8487d4',
    purple: '#a784d4',
    pink: '#d484c7',
  }),
  /**
   * Set the new day as active in the timetable page
   * @param {Day} day Day to set as active
   */
  setActiveDay: (day) => {
    // Remove the active class from the current day
    const currentDayDiv = dayDivs[timetable.currentSelectedDay - 1];
    currentDayDiv.classList.remove('active');

    // Add the active class to the new day
    const newDayDiv = dayDivs[DayMap[day] - 1];
    newDayDiv.classList.add('active');
    timetable.currentSelectedDay = DayMap[day];
  },
};

// Could have been done with the onclick property but it wasn't a good idea because repeated code
dayDivs.forEach((dayDiv) => {
  dayDiv.addEventListener('click', () => {
    timetable.setActiveDay(dayDiv.getAttribute('data-day'));
  });
});

// Mark the current day as active
if (timetable.currentSelectedDay < 6) {
  // Ignoring Saturday and Sunday
  const currentDayDiv = dayDivs[timetable.currentSelectedDay - 1];
  currentDayDiv.classList.add('active');
} else {
  dayDivs[0].classList.add('active');
  timetable.currentSelectedDay = 1;
}
