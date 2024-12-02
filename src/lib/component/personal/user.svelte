<script>
    import FaAuth from "./FaAuth.svelte";
    import { user, app } from "$lib/store/app.js";
    
</script>

<div class="break-inside-avoid space-y-4 mb-4">
    <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 text-center">
        <div class="mb-2">
            <img class="object-fill mx-auto w-16 h-16 rounded-full" src="{$user?.user?.photoURL}" alt="">
        </div>
        <div>
            <h3 class="font-bold text-app-gray-800 mb-2">{$user?.user?.displayName}</h3>
            <p class="text-xs text-app-gray-400 mb-1">{$user?.user?.email}</p>
            <button type="button" class="leading-none text-xs font-semibold hover:underline" style="color: rgb(11, 173, 74);">{$user?.depositAmount ? `+${$user?.depositAmount} ETH` : ""}</button>
        </div>
        <hr class="h-px my-3 bg-app-gray-200 border-0 undefined">
        <button on:click={()=> $app.copyToClipboard($user?.walletAddress)} type="button" class="flex
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
text-sm w-full" title="Copy">
<span class="overflow-hidden overflow-ellipsis">{$user?.walletAddress}</span>
<div class="ml-2 flex-shrink-0">
<img src="data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M2.45166%202.26636C2.45166%201.16179%203.51498%200.266357%204.82666%200.266357H11.16C12.4717%200.266357%2013.535%201.16179%2013.535%202.26636V9.59969C13.535%2010.7043%2012.4717%2011.5997%2011.16%2011.5997C11.16%2012.7043%2010.0967%2013.5997%208.78499%2013.5997H2.45166C1.13998%2013.5997%200.0766602%2012.7043%200.0766602%2011.5997V4.26636C0.0766602%203.16179%201.13998%202.26636%202.45166%202.26636ZM2.45166%203.59969C2.01443%203.59969%201.65999%203.89817%201.65999%204.26636V11.5997C1.65999%2011.9679%202.01443%2012.2664%202.45166%2012.2664H8.78499C9.22222%2012.2664%209.57666%2011.9679%209.57666%2011.5997H4.82666C3.51498%2011.5997%202.45166%2010.7043%202.45166%209.59969V3.59969ZM4.82666%201.59969C4.38943%201.59969%204.03499%201.89817%204.03499%202.26636V9.59969C4.03499%209.96788%204.38943%2010.2664%204.82666%2010.2664H11.16C11.5972%2010.2664%2011.9517%209.96788%2011.9517%209.59969V2.26636C11.9517%201.89817%2011.5972%201.59969%2011.16%201.59969H4.82666Z'%20fill='currentColor'%20/%3e%3c/svg%3e" class="w-3 h-3" alt="">
</div>
</button>
</div>
<FaAuth />
</div>