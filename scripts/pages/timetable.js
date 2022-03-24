/** @typedef {'monday'|'tuesday'|'wednesday'|'thursday'|'friday'} Day */

/**
 * Timetable Item object
 * @typedef {Object} TimetableItem
 * @property {string} startTime Start time of the item
 * @property {string} endTime End time of the item
 * @property {string} subject Subject of the item
 * @property {string} room Room of the item
 * @property {string} teacher Teacher of the item
 */

/**
 * Timetable object containing the timetable items and the day
 * @typedef {Object} Timetable
 * @property {Day} day Day of the timetable
 * @property {TimetableItem[]} items Items of the timetable
 */

/**
 * List of all the timetables
 * @type {Timetable[]}
 */
const timetables = [
  {
    day: 'monday',
    items: [
      {
        startTime: '08:05 AM',
        subject: 'Histoire',
        room: 'C423',
      },
      {
        startTime: '09:05 AM',
        subject: 'Espagnol',
        room: 'C409',
      },
      {
        startTime: '10:15 AM',
        subject: 'Français',
        room: 'C409',
      },
      {
        startTime: '12:10 PM',
        subject: 'Mathématiques',
        room: 'C127',
      },
      {
        startTime: '01:55 PM',
        subject: "Science de l'ingénieur",
        room: 'LABO SI',
      },
      {
        startTime: '04:05 PM',
        subject: 'Histoire',
        room: 'C423',
      },
    ],
  },
  {
    day: 'tuesday',
    items: [
      {
        startTime: '10:15 AM',
        subject: "Science de l'ingénieur",
        room: 'LABO SI',
      },
      {
        startTime: '01:55 PM',
        subject: 'Mathématiques',
        room: 'C311 INFO',
      },
      {
        startTime: '10:15 AM',
        subject: 'Français',
        room: 'THEORIE THEATRE',
      },
    ],
  },
  {
    day: 'wednesday',
    items: [
      {
        startTime: '10:15 AM',
        subject: 'Mathématiques',
        room: 'C311 INFO',
      },
      {
        startTime: '12:10 PM',
        subject: 'Français',
        room: 'G24',
      },
    ],
  },
  {
    day: 'thursday',
    items: [
      {
        startTime: '08:05 AM',
        subject: 'NSI',
        room: 'I920',
      },
      {
        startTime: '10:15 AM',
        subject: 'Sport',
        room: 'IDFK',
      },
      {
        startTime: '01:00 PM',
        subject: 'Espagnol',
        room: 'C409',
      },
      {
        startTime: '01:55 PM',
        subject: 'Histoire',
        room: 'C423',
      },
      {
        startTime: '02:55 PM',
        subject: 'Anglais',
        room: 'C309',
      },
    ],
  },
  {
    day: 'friday',
    items: [
      {
        startTime: '08:05 AM',
        subject: 'Angais',
        room: 'I550',
      },
      {
        startTime: '10:15 AM',
        subject: 'ESC',
        room: 'IDFK',
      },
      {
        startTime: '01:55 PM',
        subject: 'NSI',
        room: 'I920',
      },
    ],
  },
];

const dayDivs = document.querySelectorAll(
  '#timetable-days-container > .timetable-day-item'
);

/** Current day of the week */
let currentSelectedDay = new Date().getDay();

// Mark the current day as active
if (currentSelectedDay < 6) {
  // Ignoring Saturday and Sunday
  const currentDayDiv = dayDivs[currentSelectedDay - 1];
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
    const currentDayDiv = dayDivs[currentSelectedDay - 1];
    currentDayDiv.classList.remove('active');

    // Add the active class to the new day
    const newDayDiv = dayDivs[DayMap[day] - 1];
    newDayDiv.classList.add('active');
    currentSelectedDay = DayMap[day];

    // Show corresponding timetable
    timetable.renderDay(day);
  },
  /**
   * Render the timetable to the screen
   * @param {Timetable} _timetable Timetable to show
   */
  renderTimetable: (_timetable) => {
    /** @type {HTMLElement[]} */
    const items = [];
    for (const key in _timetable.items) {
      if (!Object.hasOwnProperty.call(_timetable.items, key)) return;
      const item = _timetable.items[key];

      const element = document.createElement('timetable-item');
      element.setAttribute('starting-time', item.startTime);
      element.setAttribute('subject', item.subject);
      element.setAttribute('room', item.room);
      items.push(element);
    }
    const container = document.getElementById('timetable-content');
    container.innerHTML = ''; // Clear the container
    items.forEach((item) => container.appendChild(item));
  },
  /**
   * Render the timetable to the screen for the current day
   * @param {Day} day Day to get the timetable for
   */
  renderDay: (day) => {
    const timetableForDay = timetables.find(
      (timetable) => timetable.day === day
    );
    if (!timetableForDay) return console.warn('No timetable for this day');
    timetable.renderTimetable(timetableForDay);
  },
};

// Could have been done with the onclick property but it wasn't a good idea because repeated code
dayDivs.forEach((dayDiv) => {
  dayDiv.addEventListener('click', () => {
    timetable.setActiveDay(dayDiv.getAttribute('data-day'));
  });
});

timetable.renderDay('monday');
