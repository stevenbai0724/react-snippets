interface EventQuery {
    eventName?: string;
    location?: string;
    address?: string;
    distance?: number;
    startDate?: Date;
    endDate?: Date;
    interests?: string[];
    order?: string;
    type?: string;
}

export default EventQuery;
