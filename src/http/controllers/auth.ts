import { iContributeApiInstance, iContributeAuthInstance } from "../config";
import {
    AuthUser,
    DeleteAccountBody,
    LogoutBody,
    RefreshBody,
} from "../models/Auth";
import { Organization, Student } from "../models/User";

export async function login(auth: AuthUser) {
    try {
        const response = await iContributeAuthInstance.post("/login", auth);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function signup(auth: AuthUser, user: Organization | Student) {
    try {
        const { role } = auth;

        // check if the role is valid
        const allowedRoles = new Set(["student", "organization"]);
        if (!allowedRoles.has(role)) {
            throw "Invalid Role";
        }

        // register a new user in the auth server
        const authResponse = await iContributeAuthInstance.post(
            "/signup",
            auth
        );

        // add the new user to the api server
        await iContributeApiInstance.post(`/${role}s`, user);

        return authResponse;
    } catch (error) {
        return error.response;
    }
}

export async function refreshToken(refreshBody: RefreshBody) {
    try {
        const response = await iContributeAuthInstance.post(
            "/token",
            refreshBody
        );
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function logout(logoutBody: LogoutBody) {
    try {
        const response = await iContributeAuthInstance.delete("/logout", {
            data: logoutBody,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function changePassword() {}

export async function deleteAccount(deleteAccountBody: DeleteAccountBody) {
    try {
        const response = await iContributeAuthInstance.delete("/account", {
            data: deleteAccountBody,
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
