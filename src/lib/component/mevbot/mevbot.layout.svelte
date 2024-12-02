 <script>
    import { user } from "$lib/store/app.js";
    import { toast } from "svelte-sonner";
    import Initialize from "./initialize.svelte";
    import { onMount } from "svelte";

    $: showMedal = false
    $: isRunning = "Initialize Mevbot";
    const startBot = (()=>{
      if($user?.isRunning){
          toast.warning("Bot is running")
          return
      } 
      if($user?.balance <= 0){
        toast.error("Your mevbot wallet is Empty")
        return
    }
        showMedal = true
    })
    let initRun = `${0} days, ${0} hours, ${0} mins, ${0} secs`
    function countdownTo(targetTime) {
        const now = new Date();
        const targetDate = new Date(targetTime);

        // Calculate the difference in milliseconds
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            return "Time is up!";
        }

        // Convert milliseconds to time components
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    $: countdown = 0
    let interval;
    onMount(()=>{
        interval = setInterval(() => {
            countdown = countdownTo($user?.nextWithdraw)
        }, 1000);

        // Cleanup the interval when component is destroyed
        return () => {
            clearInterval(interval);
        };
    })
</script>
 
 <!-- ==================================================== -->
<div class="break-inside-avoid xl:break-after-column mb-4">
                <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 undefined">
                    <div class="mb-4 text-center">
                        <h3 class="font-semibold text-app-gray-900  mb-1">Mevbot Services</h3>
                        <p class="text-xs text-app-gray-500 ">Make the best out of mevbot in seconds</p></div>
                        <img src="/media/nftSample-DbsbvZLt.svg" class="w-full max-w-xs mx-auto h-auto mb-6" alt="">
                        <div class="space-y-2 mb-4">
                            <button on:click={startBot} type="button" class="flex
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
                            w-full">{$user?.isRunning ? "Bot is running" : isRunning}
                            {#if $user?.isRunning}
                              <span class="KJjehh"></span>
                            {/if}
                           
                          </button>
            <button type="button" class="flex
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
            w-full">{!$user?.isRunning ? initRun : countdown}</button>
        </div>
    </div>
</div>

{#if showMedal}
  <Initialize on:close={()=>  showMedal = false}/>
{/if}


<style>
.KJjehh{
    background-color: rgb(20, 206, 20);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 5px;
    animation: blink 1s infinite; /* Animates the blinking effect */
}
/* Keyframes for blinking */
@keyframes blink {
    0%, 100% {
        opacity: 1; /* Fully visible at the start and end of the cycle */
    }
    50% {
        opacity: 0; /* Invisible in the middle of the cycle */
    }
}
</style>