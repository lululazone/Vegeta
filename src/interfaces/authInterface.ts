import { Hash } from "crypto";
import jwt, { Jwt } from "jsonwebtoken";

export default interface IAUthentification {
    login: (password: string, hash: string) => Jwt | null,
    signup: (password: string) => Hash | null,
    authentificate: (token: Jwt, id?: number, role?: string) => boolean
}