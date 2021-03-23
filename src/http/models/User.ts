interface User {
    email: string; // required
    profilePictureURL: string; // default default image url
    postalCode: string; // required
    categories: string[]; // required
    events: {
        eventID: string; // _id in EventSchema
        shiftIDs: string[]; // _id in ShiftSchema
    }[]; // NOTE: this is a list
    notifications: Notification[]; // _id's in NotificationSchema, default empty list
    numUnreadNotifications: number; // default 0
    verified: boolean; // default False
}

export interface Student extends User {
    firstName: string;
    lastName: string;
    school: string;
    savedEventIDs: string[];
}

export interface Organization extends User {
    companyName: string;
    description: string;
    website: string;
    rating?: number;
    reviewIDs: string[];
}
