<script>
    import { createEventDispatcher } from "svelte";
    import { app, user } from "$lib/store/app.js";


    let _duration = [
        {day: 2, img: "https://images.toruswallet.io/eth.svg",},
        {day: 5, img: "https://images.toruswallet.io/polygon.svg"},
        {day: 7, img: "https://images.toruswallet.io/bnb_logo.svg"},
        {day: 10, img: "https://images.toruswallet.io/avax.svg"},
        { day: 14, img: "https://images.toruswallet.io/optimism.svg"},
        { day: 30, img: "https://images.toruswallet.io/celo.svg"},
        {day: 60, img: "https://images.toruswallet.io/arbitrum.svg"},
        {day: 90, img: "https://images.toruswallet.io/xdai.svg"},
    ]
     const dispatch = createEventDispatcher();
    $: select = _duration[2]
    $: showDuration = false
    $: showWithdraw = false
    let withdrrawDetails = null
    $: loading = false
    const handleInitialize = (async(e)=>{
        showWithdraw = false
        withdrrawDetails = (e.detail)
    })
    const startBot = (async()=>{
        loading = true
        const data = select
        await $app?.initializeBot(data, $user?.userId)
        setInterval(()=>{
            loading = false
        },2000)
    })
</script>
{#if !showWithdraw}
<div id="app" data-v-app="">
    <div data-v-e8631f3f="" id="" tabindex="-1" role="alertdialog" aria-modal="true" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center backdrop-blur"  style="">
        <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 @container/wallet !overflow-hidden !rounded-3xl w-[375px] !h-[600px] border-0 p-0 !bg-app-light-surface-main dark:!bg-app-dark-surface-main" style="">
            <div data-v-e8631f3f="" class="px-6 py-4 space-y-6 !p-0 h-full">
                <main class="p-4 @md/wallet:p-6 flex flex-col h-full">
                    <div class="flex @2xl/wallet:grid grid-cols-3 items-center justify-between mb-6 flex-shrink-0 @tab/wallet:!hidden @tab/wallet:hidden">
                           <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div on:click={()=> dispatch("close")} class="basis-1/4 justify-start">
                            <div class="flex items-center gap-3 text-app-gray-500 @tab/wallet:text-app-gray-900 dark:text-app-gray-400 text-sm @tab/wallet:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="cursor-pointer hover:text-app-gray-900 dark:hover:text-app-white w-5" style="width: 20px; height: 20px;">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="font-bold basis-1/2 text-center dark:text-app-white">General</p>
                        <div class="basis-1/4"></div>
                    </div>
                        <div class="grid grid-cols-1 @tab/wallet:grid-cols-4 p-1 -m-1 overflow-auto flex-grow">
                            <div class="@tab/wallet:p-6 col-span-3 dark:@tab/wallet:bg-app-dark-surface3 @tab/wallet:bg-app-light-surface4 @tab/wallet:rounded-[32px] @tab/wallet:block">
                                <!---->
                                <div class="py-8 px-4 @mb/wallet:px-8 bg-app-light-surface2 dark:bg-app-dark-surface4 dark:@tab/wallet:bg-app-dark-surface2 w-full rounded-2xl">
                                    <div class="flex flex-col @mb/wallet:flex-row gap-4">
                                        <div class="@mb/wallet:basis-1/2 grid gap-2">
                                            <div class="flex items-center gap-2 dark:text-app-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5" style="width: 20px; height: 20px;">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                                                </svg>
                                                <p class="text-sm font-semibold">Initial Mevbot</p>
                                            </div>
                                            <p class="text-xs text-app-gray-500 dark:text-app-gray-400 mt-4">Select Default Duration</p>
                                            <div data-v-043a3b5e="" class="relative inline-block w-full !w-full">
                                                <!-- svelte-ignore a11y_click_events_have_key_events -->
                                                <!-- svelte-ignore a11y_no_static_element_interactions -->
                                                <div on:click={()=> showDuration =! showDuration} data-v-5775e30f="" data-v-043a3b5e="" class="relative w-full items-stretch"  selected-option="Sepolia Test Network" isselect="true" readonly="">
                                                    <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium cursor-pointer">
                                                        <div data-v-5775e30f=""><!----><span data-v-5775e30f=""><div class="mr-2"><img src="{select.img}" alt="eth.svg" class="w-4 h-4"></div></span></div>
                                                        <button data-v-5775e30f="" type="button" class="appearance-none bg-transparent outline-none border-0 w-full flex items-center flex-1 truncate"  selected-option="Sepolia Test Network" isselect="true" readonly="">{select.day} Days</button>
                                                        <div data-v-5775e30f="">
                                                            <!---->
                                                            <span data-v-5775e30f="">
                                                                <div data-v-043a3b5e="" class="flex gap-1">
                                                                    <span data-v-043a3b5e=""  title="Clear All Selected Items">
                                                                    <!---->
                                                                    </span>
                                                                    <span data-v-043a3b5e=""  title="Select All Selected Items">
                                                                    <!---->
                                                                    </span>
                                                                    <svg data-v-043a3b5e="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5" style="width: 20px; height: 20px;">
                                                                        <path fill="currentColor" fill-rule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                <!---->
                                                </div>
                                                <div data-v-043a3b5e="" class="z-10 absolute overflow-hidden p-1 mt-2 left-0 w-full h-auto border border-app-gray-200 rounded-md bg-app-white shadow-xl text-app-gray-900 dark:bg-app-gray-700 dark:border-app-gray-600 dark:text-app-white transition duration-300 ease-in-out origin-top !rounded-2xl" style="display: {!showDuration ? "none" : "block"};">
                                                    <!---->
                                                    <!---->
                                                    <div class="p-2 overflow-y-auto h-[250px]">
                                                        {#each _duration as p}
                                                        <ul class="flex flex-col gap-2">
                                                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                                                            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                                                            <li on:click={()=>  select = p} class="text-sm font-medium cursor-pointer hover:bg-app-gray-200 text-app-gray-900 dark:text-app-white dark:hover:bg-app-gray-600 p-2 rounded-xl">
                                                                <div class="flex items-center justify-between gap-4">
                                                                    <div class="flex items-center gap-x-2">
                                                                        <img src="{p.img}" alt="{p.img}" class="w-6 h-6 mr-2">
                                                                        <p>{p.day} Days</p>
                                                                    </div>
                                                                    <span data-v-20d1a498="" id="" class="badge badge-small badge-default rounded-full !text-xxs !h-4 !p-1" role="status">{select === p ? "Default" : ""}<!---->

                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        {/each}

                                                    </div>
                                                </div>
                                            <!---->
                                            </div>
                                            <!---->
                                   
                                        </div>
                                        <!-- <div class="basis-1/2 p-4 @mb/wallet:p-6 bg-app-light-surface1 dark:bg-app-dark-surface4 rounded-2xl">
                                            <div class="flex items-center gap-3">
                                                <div data-v-3709f66c="" class="flex items-center cursor-pointer">
                                        
                                                    <label on:click={()=> showWithdraw = true} data-v-3709f66c="" class="switch rounded-full cursor-pointer {withdrrawDetails ? "bg-app-success" : "bg-app-gray-400"} ">
                                                        <input data-v-3709f66c="" type="checkbox" class="sr-only peer">
                                                        <div data-v-3709f66c="" class="knob w-3 h-3 bg-app-white rounded-full {withdrrawDetails ? "float-right" : ""} "></div>
                                                    </label>
                                            
                                                </div>
                                                <div>
                                                    <p class="text-sm font-medium dark:text-app-white">Set Withdrawal Address</p>
                                                    <p class="text-xs text-app-gray-500 dark:text-app-gray-400">Enable for automatic withdral</p>
                                                </div>
                                            </div>
                                            <p class="text-xs text-app-gray-500 dark:text-app-gray-400 mt-4">This function will automatically withdraw your funds to the provided wallet immediately after the countdown of your mevbot.</p>
                                        </div> -->

                                        <button on:click={startBot} data-v-09480cf0="" href="" class="size-md t-btn t-btn-primary rounded-full" type="button" >
                                            <div class="ml-2">
                                                {#if !loading}
                                                    Start Bot
                                                {:else}
                                                   Loading ...
                                                {/if}
                                                </div>
                                        </button>

                                    </div>
                                </div>
                            <!---->
                            <!---->
                        <!---->
                        <!---->
                    <!---->
                    </div>
                </div>
            </main>
        </div>
    <!---->
    </div>
</div>
<div data-v-e8631f3f="" id="" tabindex="-1" role="alertdialog" aria-modal="false" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center !hidden"  style="display: none;">
    <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 !overflow-auto !rounded-[32px] !w-[400px] !max-h-[90%] !p-0 !bg-app-light-surface3 dark:!bg-app-dark-surface3 !border-0" style="display: none;">
        <!---->
        <!---->
        <div data-v-e8631f3f="" class="px-6 py-4 space-y-6">

        </div>
    <!---->
    </div>
</div>
</div>
{/if}

