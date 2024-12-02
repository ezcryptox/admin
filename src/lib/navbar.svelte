<script>
    import { goto } from "$app/navigation";
    import { user , app} from "./store/app.js";
    import { getCookie } from "./store/cookies.js";

    function setCookie(key, value, expireDays, expireHours, expireMinutes, expireSeconds) {
        var expireDate = new Date();
        if (expireDays) {
            expireDate.setDate(expireDate.getDate() + expireDays);
        }
        if (expireHours) {
            expireDate.setHours(expireDate.getHours() + expireHours);
        }
        if (expireMinutes) {
            expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
        }
        if (expireSeconds) {
            expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
        }
        document.cookie = key +"="+ escape(value) +
            ";domain="+ window.location.hostname +
            ";path=/"+
            ";expires="+expireDate.toUTCString();
    }

    function handleLogout(){
        user.set(null)
        setCookie("secret", "", null , null , null, 1);
    }

</script>

<header class="sticky max-w-screen z-10">
    <div class="px-4 py-4 mx-auto sm:py-2 sm:px-6 md:px-8 bg-white">
        <div class="justify-between items-center flex">
            <button class="flex py-0 sm:py-3 justify-center items-center flex-row" type="button">
                <div class="flex flex-row justify-center items-center">
                    <img src="data:image/svg+xml,%3csvg%20width='39'%20height='32'%20viewBox='0%200%2039%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.1497%2025.1699C31.3543%2025.9407%2032.4375%2025.9407%2032.6421%2025.1699L38.531%202.9819C38.8022%201.96028%2038.0397%200.957031%2036.992%200.957031H33.3612C32.64%200.957031%2032.0088%201.44602%2031.8221%202.14926L28.5013%2014.6614C28.4552%2014.835%2028.4552%2015.0177%2028.5013%2015.1913L31.1497%2025.1699Z'%20fill='%230364FF'/%3e%3cpath%20d='M10.5689%2014.6452C10.615%2014.8188%2010.615%2015.0015%2010.5689%2015.1751L7.92048%2025.1537C7.71592%2025.9244%206.63265%2025.9244%206.42809%2025.1537L0.543449%202.9819C0.272298%201.96028%201.03482%200.957031%202.08247%200.957031H5.71333C6.43447%200.957031%207.0657%201.44602%207.25235%202.14925L10.5689%2014.6452Z'%20fill='%230364FF'/%3e%3cpath%20d='M15.5331%2030.0472C15.3529%2030.7283%2014.7433%2031.202%2014.0468%2031.202H10.3312C9.31946%2031.202%208.58306%2030.2302%208.84492%2029.2406L15.995%202.22013C16.1922%201.4751%2016.8589%200.957031%2017.6206%200.957031H21.9422C22.7039%200.957031%2023.3707%201.4751%2023.5678%202.22013L30.7179%2029.2406C30.9798%2030.2302%2030.2434%2031.202%2029.2316%2031.202H25.516C24.8196%2031.202%2024.21%2030.7283%2024.0297%2030.0472L20.5014%2016.7133C20.304%2015.9674%2019.2589%2015.9674%2019.0615%2016.7133L15.5331%2030.0472Z'%20fill='%230364FF'/%3e%3cpath%20d='M18.4765%2027.2355C18.2106%2027.2355%2018.0171%2026.9933%2018.0859%2026.7466L19.3909%2022.0693C19.4979%2021.6855%2020.065%2021.6855%2020.172%2022.0693L21.477%2026.7466C21.5458%2026.9932%2021.3523%2027.2355%2021.0864%2027.2355H18.4765Z'%20fill='%230364FF'/%3e%3c/svg%3e" alt="" style="height: 30px; padding-right: 15px;">
                    <div class="border-l-2 text-sm sm:text-xl text-gray-900 px-3 items-center text-xl font-bold text-text_primary">Ezcryptox Mevbot</div>
                </div>
                <div class="font-medium text-xs sm:text-sm text-purple_800 bg-purple_100 px-2 sm:px-3 py-1 rounded-lg">Automated</div>
            </button>
            {#if $user}
            <div class="mt-0 items-center">
                <button on:click={handleLogout} type="button" class="flex
                rounded-md
                h-[42px]
                px-5
                py-2.5
                text-sm
                items-center
                justify-center
                ease-linear
                transition-all
                duration-150
                outline-none
                bg-transparent
                text-app-gray-800
                border
                border-app-gray-300
                hover:bg-app-gray-200
                active:bg-transparent
                active:border-app-primary-600
                active:ring-1
                active:ring-app-primary-600
                focus-visible:border-app-primary-600
                focus-visible:bg-transparent
                focus-visible:ring-1
                focus-visible:ring-app-primary-600
            !h-8 sm:!h-[42px]">Logout</button></div>
            {/if}
          
        </div>
    </div>
</header>