import { iContributeApiInstance } from "../config";
import ApplyBody from "../models/ApplyBody";
import Event from "../models/Event";
import EventQuery from "../models/EventQuery";

/**
 * Query all events
 *
 *
 * @param
 * @returns all events, or error if status is not 2xx
 */
export async function getEvents() {
    try {
        const response = await iContributeApiInstance.get("/events");
        const events: Event[] = response.data.map((e: Event) => e);
        return { status: response.status, data: events };
    } catch (error) {
        return error.response;
    }
}

export async function getEvent(id: string) {
    try {
        const response = await iContributeApiInstance.get(`/events/${id}`);

        return { status: response.status, data: <Event>response.data };
    } catch (error) {
        return error.response;
    }
}

export async function searchEvent(eventQuery: EventQuery) {
    try {
        const response = await iContributeApiInstance.get("/events", {
            params: eventQuery,
        });
        const events: Event[] = response.data.map((e: Event) => e);
        return { status: response.status, data: events };
    } catch (error) {
        return error.response;
    }
}

export async function applyEvent(applyBody: ApplyBody) {
    try {
        const response = await iContributeApiInstance.post("/events/apply", {
            data: applyBody,
        });
        return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    }
}

export async function editEvent(id: string, updatedEvent: Event) {
    try {
        const response = await iContributeApiInstance.put(`/events/${id}`, {
            data: updatedEvent,
        });
        return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    }
}

export async function createEvent(event: Event) {
    try {
        const response = await iContributeApiInstance.post("events", {
            data: event,
        });
        return { status: response.status, data: <Event>response.data };
    } catch (error) {
        return error.response;
    }
}

export async function deleteEvent(id: string) {
    try {
        const response = await iContributeApiInstance.delete(`/events/${id}`);
        return { status: response.status, data: response.data };
    } catch (error) {
        return error.response;
    }
}
