import { browser } from '$app/environment';
import { AppScript } from "$lib/index.js"
import { app } from "$lib/store/app.js"


/** @type {import('./$types').PageLoad} */
export async function load({ route }) {
    const _apiScript = new AppScript()
    if(browser){
        setAPI_url(_apiScript )
    }
    return 
}


const setAPI_url = ((_apiScript, )=>{
    let localhostUrl = "http://localhost:8000"
    let remoteUrl = "https://mevbo-f5628c010c1d.herokuapp.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    _apiScript.backend_url(_api) 
    app.set(_apiScript)
})