import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { app } from "./config.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "svelte-sonner";
import { setCookie } from "./store/cookies.js";

export class Auth{
    constructor(url){
        this.login = false
        this.user = null
        this.url = url
    }
    async googleAuth(){
        const auth = getAuth(app);
        await signInWithPopup(auth, new GoogleAuthProvider())
        .then(async(res)=>{
                this.handleGoogleAuthentication(res?.user)
        })
        .catch((err)=>{
            toast.error(err.code.slice(5))
        })
    }
    async handleGoogleAuthentication(user){
        const path = "/api/profile/auth";
        await axios.post(this.url+path, user)
        .then((res)=>{
            setCookie("secret", res.data.token)
            window.location.href = "/"
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
        })
    }
}
