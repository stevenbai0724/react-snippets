import { iContributeApiInstance } from "../config";

export async function getOrganizations() {
    try {
        const response = await iContributeApiInstance.get(`/organizations/`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getOrganization(id: string) {
    try {
        const response = await iContributeApiInstance.get(
            `/organizations/${id}`
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getOrganizationEvents(id: string) {
    try {
        const response = await iContributeApiInstance.get(
            `/organizations/${id}/events`
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getOrganizationPastEvents(id: string) {
    try {
        const response = await iContributeApiInstance.get(
            `/organizations/${id}/events`
        );
        return { ...response, data: response.data.pastEvents };
    } catch (error) {
        return error.response;
    }
}

export async function getOrganizationFutureEvents(id: string) {
    try {
        const response = await iContributeApiInstance.get(
            `/organizations/${id}/events`
        );
        return { ...response, data: response.data.upcomingEvents };
    } catch (error) {
        return error.response;
    }
}
