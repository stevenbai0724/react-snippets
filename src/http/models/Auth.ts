export interface AuthUser {
    email: string;
    password: string;
    role: string;
    refreshToken?: string;
}

export interface RefreshBody {
    accessToken: string;
    refreshToken: string;
}

export interface LogoutBody {
    refreshToken: string;
}

export interface DeleteAccountBody {
    email: string;
    accessToken: string;
    refreshToken: string;
}
