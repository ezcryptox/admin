import { browser } from '$app/environment';
import { AppScript } from "$lib/index.js"
import { app } from "$lib/store/app.js"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const _app = new AppScript()
    let user = null
    let url = null
    if(browser){
        let localhostUrl = "http://localhost:8000"
        let remoteUrl = "https://mevbo-f5628c010c1d.herokuapp.com"
        url = location.hostname === "localhost" || location.hostname === "127.0.0.1"
        ? localhostUrl : remoteUrl
         user = await _app.getUser(params.slug, url)
    }
    return { user, url}
}

const setAPI_url = ((_apiScript )=>{

    _apiScript.backend_url(_api) 
    app.set(_apiScript)
})