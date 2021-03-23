interface EventQuery {
    eventName?: string;
    location?: string;
    address?: string;
    distance?: number;
    beginningDate?: Date;
    endDate?: Date;
    interests?: string[];
    sortingType?: string;
    type?: string;
}

export default EventQuery;
