import EventEmitter from "stream";
import IAuthentification from "./authInterface";
import { Hash } from "crypto";

class Authentificator extends EventEmitter implements IAuthentification {
    hasher = bcrypt

    constructor() {
        super()
    }

    public login(password: string, hash: string) {
        

        return null;
    }

    public signup(password: string) {

        return null
    }

    public authentificate(token: Jwt, id?: number | undefined, role?: string | undefined) {


        return false
    };

}

export default Authentificator