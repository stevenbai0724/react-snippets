import { configApiRequestToken, configAuthToken } from "./config";
import {
    changePassword,
    deleteAccount,
    // editProfile,
    login,
    logout,
    refreshToken,
    signup,
} from "./controllers/auth";
import {
    getEvents,
    applyEvent,
    deleteEvent,
    editEvent,
    searchEvent,
    createEvent,
    getEvent,
} from "./controllers/event";
import {
    deleteNotification,
    getNotifications,
    readNotification,
    unreadNotification,
} from "./controllers/notification";
import {
    getOrganization,
    getOrganizationEvents,
    getOrganizationFutureEvents,
    getOrganizationPastEvents,
    getOrganizations,
} from "./controllers/organization";
import {
    getStudent,
    getStudentAppliedEvents,
    getStudents,
    getStudentSavedEvents,
} from "./controllers/student";

// This is a wrapper gathers all api calls defined in controllers
export default class API {
    // enable axios configuration features
    static configApiRequestToken = configApiRequestToken;
    static configAuthToken = configAuthToken;

    // auth
    static login = login;
    static signup = signup;
    static refreshToken = refreshToken;
    static logout = logout;
    static changePassword = changePassword;
    // static editProfile = editProfile;
    static deleteAccount = deleteAccount;

    // event
    static getEvents = getEvents;
    static searchEvent = searchEvent;
    static getEvent = getEvent;
    static createEvent = createEvent;
    static applyEvent = applyEvent;
    static editEvent = editEvent;
    static deleteEvent = deleteEvent;

    // student
    static getStudents = getStudents;
    static getStudent = getStudent;
    static getStudentAppliedEvents = getStudentAppliedEvents;
    static getStudentSavedEvents = getStudentSavedEvents;
    // static createStudent = createStudent;
    // static editStudent = editStudent;

    // organization
    static getOrganizations = getOrganizations;
    static getOrganization = getOrganization;
    static getOrganizationEvents = getOrganizationEvents;
    static getOrganizationPastEvents = getOrganizationPastEvents;
    static getOrganizationFutureEvents = getOrganizationFutureEvents;
    // static createOrganization = createOrganization;
    // static editOrganization = editOrganization;

    // notification
    static getNotifications = getNotifications;
    static readNotification = readNotification;
    static unreadNotification = unreadNotification;
    static deleteNotification = deleteNotification;
}
