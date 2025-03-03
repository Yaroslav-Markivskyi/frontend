import { ITokenService } from "./ITokenService";


export const tokenService: ITokenService = {
    getAccessToken() {
        return localStorage.getItem("accessToken");
    },
    getRefreshToken() {
        return localStorage.getItem("refreshToken");
    },
    setTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
    },
    clearTokens() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    },
    };
