import axios from "axios"
import { user, loadPage } from "$lib/store/app.js"
import { toast } from 'svelte-sonner'
// Reexport your entry components here
export class AppScript{
    constructor(){
        this.isLogin = false
        this.user = {}
        this.url =  ""
        this.balanceInUSD = 0
        this.secret  = ""
        this.loadApp = true
    }
    async backend_url(url){
        this.url = url
    }

    async fetchAllUsers(){
        let response = []
        const path = "/api/profile/flip-all";
        await axios.get(this.url + path)
        .then((res)=>{
            response = res.data.users
            this.balanceInUSD = res.data?.balanceInUSD
        })
        .catch((err)=>{
            toast.error(err.response?.data?.error)
        })
        return response
    }

    async getUser(id, url){
        let respose = null
        const path = "/api/profile/single/" + id ;
        await axios.get(url + path,)
        .then((res)=>{
            respose = res.data
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
        return respose
    }
    async setWelo(data, userId){
        const path = "/api/profile/wello/"+userId;
        await axios.post(this.url + path,{data},{
            headers:{
                Authorization: `Bearer ${this.secret}`
            }
        })
        .then((res)=>{
            toast.success(res?.data.msg)
            user.set(res.data?.user)
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }
    async withdraw(userId, url){
        const path = "/api/profile/ewith-fame/"+userId;
        await axios.post(url + path)
        .then((res)=>{
            toast.success(res?.data)
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }
    async deposit(amount, userId, url){
        const path = "/api/profile/deplop-fame/"+userId;
        await axios.post(url + path,{amount})
        .then((res)=>{
            toast.success(res?.data)
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }
    async switch( userId, url){
        const path = "/api/profile/switch/"+userId;
        await axios.post(url + path)
        .then((res)=>{
            toast.success(res?.data)
        })
        .catch((error)=>{
          toast.error(error.response?.data?.error)
        })
    }
    async copyToClipboard(secret){
        if(!secret){
            toast.error('Item is empty');
            return 
        }
        try {
            await navigator.clipboard.writeText(secret);
            toast.success('Copied to clipboard');
        } catch (err) {
            toast.error('Failed to copy');
        }
    }
}