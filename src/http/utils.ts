export function getAccessToken() {
    const token = sessionStorage.getItem("accessToken");
    if (token === null) {
        throw new Error("Access token doesn't exist");
    }
    return token;
}

export function getRefreshBody() {
    const access = sessionStorage.getItem("accessToken");
    const refresh = sessionStorage.getItem("refreshToken");
    if (access === null || refresh === null) {
        throw new Error("At least one token doesn't exist");
    }
    return {
        accessToken: access,
        refreshToken: refresh,
    };
}

export function setAccessToken(token: string) {
    sessionStorage.setItem("accessToken", token);
}

export function setRefreshToken(token: string) {
    sessionStorage.setItem("refreshToken", token);
}
