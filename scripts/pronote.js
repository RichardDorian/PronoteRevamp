/**
 * Contains all the type definitions and classes to interact with Pronote
 * Type definitions are based on Litarvan's Pronote API Wrapper (that got deleted unfortunately)
 * @file Pronote API Wrapper
 * @version 1.0.0
 * @author RichardDorian
 */

/**
 * @typedef {Object} Lesson Lesson object
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
