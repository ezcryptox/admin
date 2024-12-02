
<script>
    import { socket, user } from "$lib/store/app.js";
    import { onMount } from "svelte";
    import { handleETHtoFIXED } from "$lib/util.js";
    
    $: strategy = 'ARBITRAGE'
    onMount(()=>{
        $socket.io.on("strategy", ((data)=>{
            strategy = data
        }))
        $socket.io.emit("currentStrategy")
    })
</script>


        <!-- ============================================================================================ -->
        <div class="break-inside-avoid space-y-4">
            <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 undefined">
                <div class="mb-4">
                    <h3 class="font-semibold text-app-gray-900  mb-1">Mevbot Activity</h3>
                    <p class="text-xs text-app-gray-500 ">Monitor your bot as it works for you</p>
                </div>
                    
                    <button  class="flex
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
        gap-2 w-full border  flex border-app-gray-300 text-app-gray-800 mb-2" >CurrentStrategy: <p class="JHjhkekj">{strategy}</p></button>
        <button  class="flex
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
        gap-2 w-full border  flex border-app-gray-300 text-app-gray-800" >Profits: <p class="JHjhkekj"> {handleETHtoFIXED($user?.profit)} ETH</p></button>
    </div>
    <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 undefined">
        <p class="text-sm text-app-gray-800">Have any questions?
            <a class="text-app-primary-600 hover:underline inline mx-1" href="https://t.me/Valiantcodez" target="_blank" rel="noopener noreferrer">Chat </a> with our team today</p></div></div>     

        <style>
            .JHjhkekj{
                color: rgb(11, 173, 74);
                font-weight: 600;
            }
        </style>