import { io } from "socket.io-client";

export class SocketScript{
    constructor(){
        this.io = ""
    }
    
    server(url){
       this.io = io(`${url}`)
    }
}