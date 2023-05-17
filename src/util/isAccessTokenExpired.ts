import * as jose from "jose";

export function isAccessTokenExpired(accessToken: string): boolean {
    const decoded = jose.decodeJWT(accessToken);
    if( typeof decoded.exp !== "number" ) {
        return false;
    }
    return new Date(decoded.exp * 1000) < new Date();
}