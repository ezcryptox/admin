import { writable } from "svelte/store";

let _user = null
export let user = writable(_user)

let _app = {}
export let app = writable(_app)

let _searchUrl = {}
export let searchUrl = writable(_searchUrl)

let _loadPage = true
export let loadPage = writable(_loadPage)

let _socket = {}
export let socket = writable(_socket)