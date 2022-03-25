/**
 * Contains all the type definitions and classes to interact with Pronote
 * Type definitions are based on Litarvan's Pronote API Wrapper (that got deleted unfortunately)
 * @file Pronote API Wrapper
 * @version 1.0.0
 * @author RichardDorian
 */

/**
 * @typedef {Object} Lesson
 * @property {Date} from The start date of the lesson
 * @property {Date} to The end date of the lesson
 * @property {boolean} isDetention Indicates if the lesson is a detention
 * @property {boolean} hasDuplicate Indicates if the lesson has a duplicate
 * @property {boolean} remoteLesson Indicates if the lesson is a remote lesson
 * @property {string} [subject] The subject of the lesson
 * @property {string} [teacher] The teacher of the lesson
 * @property {string} [room] The room of the lesson
 * @property {string} [status] The status of the lesson
 * @property {boolean} [isAway] Indicates if the teacher is away
 * @property {boolean} [isCancelled] Indicates if the lesson is cancelled
 * @property {string} [color] The color of the lesson
 */

/**
 * @typedef {Object} Mark
 * @property {string} title The title of the mark
 * @property {number} [value] The value of the mark
 * @property {number} scale Maximum value of the mark
 * @property {number} [average] The average of the mark
 * @property {number} coefficient The coefficient of the mark
 * @property {number} min Lower bound of the average
 * @property {number} max Upper bound of the average
 * @property {Date} date Date of the mark
 * @property {boolean} isAway Student was away
 */

/**
 * @typedef {Object} MarksSubjectAverage
 * @property {number} student The student's average
 * @property {number} studentClass The class' average
 * @property {number} min Lower bound of the average
 * @property {number} max Upper bound of the average
 */

/**
 * @typedef {Object} MarksSubject
 * @property {string} name The name of the subject
 * @property {MarksSubjectAverage} averages The average of the subject
 * @property {string} color The color of the subject
 * @property {Mark[]} marks The marks of the subject
 */

/**
 * @typedef {Object} MarksAverage
 * @property {number} student The student's average
 * @property {number} studentClass The class' average
 */

/**
 * @typedef {Object} Marks
 * @property {MarksSubject[]} subjects The marks of the student
 * @property {MarksAverage} averages General average of the student and the class
 */

const pronote = {
  /**
   * @type {Lesson[]}
   */
  lessons: [
    {
      from: new Date(1647846300000),
      to: new Date(1647849600000),
      isDetention: false,
      hasDuplicate: false,
      remoteLesson: false,
      subject: 'Histoire',
      teacher: "Rejeton d'hétaïre",
      room: 'C423 HG',
      isAway: false,
      isCancelled: false,
      color: '#84d494',
    },
  ],
};
