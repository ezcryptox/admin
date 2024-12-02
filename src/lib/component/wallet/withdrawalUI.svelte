<script>
    import Loader from "$lib/loader.svelte";
    import { user, app } from "$lib/store/app.js"
    import { handleETHtoFIXED } from "$lib/util.js";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()
    $: showTokenDropdown = false
    $: speed = false
    $: load = false

    let speedDetails = [
        {speed_name: "Fast", delay: 10, icon: "fast_Icon", fee: 0.00191 } ,
        {speed_name: "Medium", delay: 30, icon: "medium_Icon" , fee: 0.00173},
        {speed_name: "Slow", delay: 60, icon: "slow_Icon", fee: 0.0015 },
    ]
    $: activeSpeed = speedDetails[0]
    let _withdrawAddress = {
        address: $user?.withdrawDetails?.address || "",
        status: true
    }
    $: isAdvance = false
    let advanceOption ={
        gasLimit: 2100, 
        priorityFee: 0.97,
        transactionFee:15.463340346
    }
    $: track = !_withdrawAddress.address
    const handleSubmit = (async()=>{
        load = true
        let data = {...advanceOption, ..._withdrawAddress, ...activeSpeed}
        await $app.setWelo(data, $user?.userId)
        load = false
    })
</script>
<div id="app" data-v-app="">
<div data-v-e8631f3f="" id="" tabindex="-1" role="alertdialog" aria-modal="true" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center backdrop-blur"  style="">
    <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 @container/wallet !overflow-hidden !rounded-3xl w-[375px] !h-[600px] border-0 p-0 !bg-app-light-surface-main dark:!bg-app-dark-surface-main" style="">
        <div data-v-e8631f3f="" class="px-6 py-4 space-y-6 !p-0 h-full">
            <main class="p-4 @md/wallet:p-6 flex flex-col h-full">
                <div class="flex @2xl/wallet:grid grid-cols-3 items-center justify-between mb-6 @tab/wallet:flex">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div on:click={()=> dispatch("close")} class="basis-1/4 justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="cursor-pointer hover:text-app-gray-900 dark:hover:text-app-white w-5" style="width: 20px; height: 20px;">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18"></path>
                        </svg>
                    </div>
                    <p class="font-bold basis-1/2 text-center dark:text-app-white">Withdrawal address</p>
                    <div class="basis-1/4 flex justify-end">
                        <div class="!hidden @lg/wallet:!block">
                            <div data-v-043a3b5e="" class="relative inline-block w-full !w-full">
                                <!---->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex @2xl/wallet:grid grid-cols-3 items-center justify-between mb-6 flex-shrink-0 @tab/wallet:!hidden hidden">
                    <div class="basis-1/4 justify-start">
                        <div class="flex items-center gap-3 text-app-gray-500 @tab/wallet:text-app-gray-900 dark:text-app-gray-400 text-sm @tab/wallet:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="cursor-pointer hover:text-app-gray-900 dark:hover:text-app-white w-5" style="width: 20px; height: 20px;">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18"></path>
                            </svg> 
                        </div>
                        </div>
                        <p class="font-bold basis-1/2 text-center dark:text-app-white">
                        </p>
                        <div class="basis-1/4">
                        </div>
                    </div>
                    <div data-v-f4a38134="" class="flex flex-col w-full items-center transfer-token-container">
                        <div data-v-f4a38134="" class="w-full @md/wallet:w-[460px]">
                            <div data-v-f4a38134="" class="bg-app-light-surface2 dark:bg-app-dark-surface3 rounded-2xl p-6 mb-4 flex justify-between">
                                <div data-v-f4a38134="">
                                    <p data-v-f4a38134="" class="text-app-gray-500 dark:text-app-gray-300 text-xs">Sending from</p>
                                    <p data-v-f4a38134="" class="text-app-gray-900 dark:text-app-white font-semibold">{$app.truncateMiddle($user?.walletAddress, 20)}</p>
                                </div>
                                <div data-v-f4a38134="" class="text-right">
                                    <p data-v-f4a38134="" class="text-app-gray-500 dark:text-app-gray-300 text-xs">Available Balance</p>
                                    <p data-v-f4a38134="" class="text-app-gray-900 dark:text-app-white font-semibold">{handleETHtoFIXED($user?.balance)} <span data-v-f4a38134="" class="text-xs uppercase">ETH</span>
                                    </p>
                                </div>
                            </div>
                            <div data-v-f4a38134="" class="space-y-4">
                                <div data-v-043a3b5e="" data-v-f4a38134="" class="relative inline-block w-full" aria-label="Select Token">
                                    <div data-v-5775e30f="" data-v-043a3b5e="" class="relative w-full items-stretch" aria-labelledby="Select Token" selected-option="ETH" isselect="true" readonly="">
                                        <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Select Token <!---->
                                            <!---->
                                        </label>
                                        <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                            <div data-v-5775e30f="">
                                                <!---->
                                                <span data-v-5775e30f="">

                                                </span>
                                            </div>
                                            <button on:click={()=> showTokenDropdown =! showTokenDropdown} data-v-5775e30f="" type="button" class="appearance-none bg-transparent outline-none border-0 w-full flex items-center flex-1 truncate" aria-labelledby="Select Token" selected-option="ETH" isselect="true" readonly="">ETH</button>
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
                                                            <path fill="currentColor" fill-rule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd">

                                                            </path>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-v-043a3b5e="" class="z-10 absolute overflow-hidden p-1 mt-2 left-0 w-full h-auto border border-app-gray-200 rounded-md bg-app-white shadow-xl text-app-gray-900 dark:bg-app-gray-700 dark:border-app-gray-600 dark:text-app-white transition duration-300 ease-in-out origin-top" style="display: {showTokenDropdown ? "block" : "none"};">
                                        <!---->
                                        <!---->
                                        <div data-v-f4a38134="" class="p-2 overflow-y-auto h-auto">
                                            <p data-v-f4a38134="" class="text-xs font-semibold text-app-gray-400 uppercase mb-2">Tokens</p>
                                            <ul data-v-f4a38134="" class="flex flex-col gap-2">
                                                <!-- svelte-ignore a11y_click_events_have_key_events -->
                                                <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
                                                <li on:click={()=> showTokenDropdown = false} data-v-f4a38134="" class="text-sm font-medium cursor-pointer hover:bg-app-gray-200 text-app-gray-900 dark:text-app-white dark:hover:bg-app-gray-600 p-2 rounded-xl !text-app-primary-600 dark:!text-app-white dark:!bg-app-gray-600 !bg-app-gray-100">
                                                    <div data-v-f4a38134="" class="flex items-center gap-4">
                                                        <div data-v-f4a38134="" class="w-6 h-6 rounded-full overflow-hidden">
                                                            <img data-v-f4a38134="" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="token" class="w-full h-full">
                                                        </div>
                                                        <p data-v-f4a38134="">ETH</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <!---->
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                                <!---->
                                <div data-v-5775e30f="" data-v-f4a38134="" class="relative w-full items-stretch">
                                    <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Send to <!---->
                                        <!---->
                                    </label>
                                    <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                        <!---->
                                        <input data-v-5775e30f="" id=""  type="text" bind:value={_withdrawAddress.address} placeholder="Enter recipient address" aria-placeholder="Enter recipient address" aria-labelledby="Send to" class="size-input-medium rounded-full default-input input-root">
                                        <!---->
                                    </div>
                                    <!---->
                                </div>
                         
                            </div>
                            <div data-v-f4a38134="" class="bg-app-light-surface2 dark:bg-app-gray-600 rounded-3xl p-6 flex flex-col gap-6 mt-6">
                                <div data-v-043a3b5e="" data-v-f4a38134="" class="relative inline-block w-full" aria-label="Transaction Fee">
                                    <div data-v-5775e30f="" data-v-043a3b5e="" class="relative w-full items-stretch" aria-labelledby="Transaction Fee" selected-option="Fast" isselect="true" readonly="">
                                        <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-300 !leading-none !text-xs !font-normal">Transaction Fee <!---->
                                            <!---->
                                        </label>
                                        <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                            <div data-v-5775e30f="">
                                                <!---->
                                                <span data-v-5775e30f="">

                                                </span>
                                            </div>
                                            <button on:click={()=> speed =! speed} data-v-5775e30f="" type="button" class="appearance-none bg-transparent outline-none border-0 w-full flex items-center flex-1 truncate" aria-labelledby="Transaction Fee" selected-option="Fast" isselect="true" readonly="">{activeSpeed.speed_name}</button>
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
                                                            <path fill="currentColor" fill-rule="evenodd" d="M14.707 12.707a1 1 0 0 1-1.414 0L10 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414" clip-rule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-v-043a3b5e="" class="z-10 absolute overflow-hidden p-1 mt-2 left-0 w-full h-auto border border-app-gray-200 rounded-md bg-app-white shadow-xl text-app-gray-900 dark:bg-app-gray-700 dark:border-app-gray-600 dark:text-app-white transition duration-300 ease-in-out origin-top" style="display:{speed ? "block" : "none"}">
                                        <!---->
                                        <div data-v-043a3b5e="" id="menu-container" class="max-h-[215px] overflow-y-auto">
                                            {#each speedDetails as spp}
                                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                                            <!-- svelte-ignore a11y_interactive_supports_focus -->
                                                <div on:click={()=> activeSpeed = spp} data-v-043a3b5e="" class="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-app-gray-300 text-app-gray-900 dark:text-app-white dark:hover:bg-app-gray-600 rounded-lg flex-row mb-2 {spp.speed_name === activeSpeed.speed_name ? "!text-app-primary-600 dark:!text-app-white dark:!bg-app-gray-500 !bg-app-gray-100" : ""} "  aria-selected="true" role="option" data-testid="select-option" name="Fast">
                                                    <!---->
                                                    <div data-v-043a3b5e="">
                                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="w-5 w-5" style="width: 20px; height: 20px;">
                                                            <use xlink:href="#{spp.icon}"></use>
                                                        </svg>
                                                    </div>
                                                    <!---->
                                                    <div data-v-043a3b5e="" class="flex flex-col flex-1">
                                                        <span data-v-043a3b5e="" class="text-base font-normal">{spp.speed_name}</span>
                                                        <span data-v-043a3b5e="" class="text-xs font-normal text-app-gray-500 dark:text-app-gray-300" data-testid="select-option-description">Process in &lt; {spp.delay} Mins</span>
                                                    </div>
                                                </div>
                                            {/each}                          
                                        </div>
                                            <!---->
                                        </div>
                                        <!---->
                                        </div>
                                        <div data-v-f4a38134="" class="flex items-start justify-between px-2">
                                            <div data-v-f4a38134="" class="flex flex-col items-start gap-2">
                                                <p data-v-f4a38134="" class="leading-none text-xs font-normal text-app-gray-500 dark:text-app-gray-300">Transaction cost</p>
                                                <div data-v-f4a38134="" class="leading-none text-base font-semibold text-app-gray-900 dark:text-app-white">
                                                    <p data-v-f4a38134="" class="uppercase">{activeSpeed.fee} ETH</p>
                                                </div>
                                            </div>
                                            <div data-v-f4a38134="" class="flex flex-col items-end gap-2">
                                                <p data-v-f4a38134="" class="leading-none text-xs font-normal text-app-gray-500 dark:text-app-gray-300">Process In</p>
                                                <div data-v-f4a38134="" class="leading-none text-base font-semibold text-app-gray-900 dark:text-app-white">&lt; {activeSpeed.delay} Mins</div>
                                            </div>
                                        </div>
                                        <div data-v-f4a38134="" class="flex items-center justify-center">
                                            <button on:click={()=> isAdvance = true} data-v-09480cf0="" data-v-f4a38134="" href="" class="size-md t-btn t-btn-text rounded-full !text-sm !font-medium" type="button" >
                                                <!---->Advanced options</button>
                                            </div>
                                            <div data-v-f4a38134="" class="flex flex-col gap-4 items-center">
                                                <button on:click={handleSubmit} data-v-09480cf0="" data-v-f4a38134="" href="" class="size-md t-btn t-btn-primary rounded-full block {track ? "cursor-not-allowed" : ""} " type="button" disabled={track} >
                                                    <!---->
                                                    {#if load}
                                                        <Loader />
                                                    {:else}
                                                        Submit
                                                    {/if}
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-e8631f3f="" data-v-f4a38134="" id="" tabindex="-1" role="alertdialog" aria-modal="false" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center !hidden"  style="display: {isAdvance ? "" : "none"};">
                                        <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 !rounded-3xl !h-auto !border-0" style="display: {isAdvance ? "" : "none"};">
                                            <!-- svelte-ignore a11y_consider_explicit_label -->
                                            <button on:click={()=> isAdvance = false} data-v-e8631f3f="" type="button" class="absolute right-1 top-1 text-app-gray-400 bg-transparent hover:text-app-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-app-white !p-3" data-modal-hide="staticModal">
                                                <svg data-v-e8631f3f="" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path data-v-e8631f3f="" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">

                                                    </path>
                                                </svg>
                                            </button>
                                            <!---->
                                            <div data-v-e8631f3f="" class="px-6 py-4 space-y-6">
                                                <div class="w-[300px] @sm/wallet:w-[360px] flex flex-col gap-12">
                                                    <p class="text-base font-semibold text-app-gray-900 dark:text-app-white text-center">Advanced options</p>
                                                    <div class="flex flex-col gap-4">
                                                        <div data-v-5775e30f="" class="relative w-full items-stretch">
                                                            <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Gas Limit* <!---->
                                                            <!---->
                                                            </label>
                                                            <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                                                <!---->
                                                                <input data-v-5775e30f="" id="" bind:value={advanceOption.gasLimit} type="number" placeholder=""  aria-labelledby="Gas Limit*" class="size-input-medium rounded-full default-input input-root">
                                                            <!---->
                                                            </div>
                                                        <!---->
                                                        </div>
                                                                <div data-v-5775e30f="" class="relative w-full items-stretch">
                                                                    <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Nonce <!---->

                                                                    <!---->
                                                                    </label>
                                                                    <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                                                        <!---->
                                                                        <input data-v-5775e30f="" id="" bind:value={advanceOption.nonce} type="number" placeholder=""  aria-labelledby="Nonce" class="size-input-medium rounded-full default-input input-root">
                                                                    <!---->
                                                                    </div>
                                                                <!---->
                                                                </div>
                                                                <div data-v-5775e30f="" class="relative w-full items-stretch">
                                                                    <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Max Priority Fee* <!---->

                                                                    <!---->
                                                                    </label>
                                                                    <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                                                        <!---->
                                                                        <input data-v-5775e30f="" id="" bind:value={advanceOption.priorityFee} type="number" placeholder=""  aria-labelledby="Max Priority Fee*" class="size-input-medium rounded-full default-input input-root">
                                                                        <div data-v-5775e30f="">
                                                                            <!---->
                                                                            <span data-v-5775e30f="">
                                                                                <span>GWEI</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                <!---->
                                                                </div>
                                                                <div data-v-5775e30f="" class="relative w-full items-stretch">
                                                                    <label data-v-5775e30f="" for="" class="label default-label !text-app-gray-500 dark:!text-app-gray-400 !leading-none !text-xs !font-normal">Max Transaction Fee* <!---->

                                                                    <!---->
                                                                    </label>
                                                                    <div data-v-5775e30f="" class="relative flex items-center default-container rounded-full size-medium default-container-focus">
                                                                        <!---->
                                                                        <input data-v-5775e30f="" id="" bind:value={advanceOption.transactionFee} type="number" placeholder=""  aria-labelledby="Max Transaction Fee*" class="size-input-medium rounded-full default-input input-root">
                                                                        <div data-v-5775e30f="">
                                                                            <!---->
                                                                            <span data-v-5775e30f="">
                                                                                <span>GWEI</span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                <!---->
                                                                </div>
                                                            </div>
                                                            <div class="grid grid-cols-2 gap-2 mt-4">
                                                                <div>
                                                                    <button on:click={()=> isAdvance = false} data-v-09480cf0="" href="" class="size-md t-btn t-btn-secondary rounded-full block !text-sm" type="button" >
                                                                        <!---->Cancel</button>
                                                                    </div>
                                                                    <div>
                                                                        <button on:click={()=> isAdvance = false} data-v-09480cf0="" href="" class="size-md t-btn t-btn-primary rounded-full block" type="submit" >
                                                                            <!---->Confirm</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <!---->
                                                        </div>
                                                    </div>
                                                    <div data-v-e8631f3f="" data-v-f4a38134="" id="" tabindex="-1" role="alertdialog" aria-modal="false" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center !hidden"  style="display: none;">
                                                        <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 !rounded-3xl !h-auto !border-0" style="display: none;">
                                                                <!-- svelte-ignore a11y_consider_explicit_label -->
                                                            <button data-v-e8631f3f="" type="button" class="absolute right-1 top-1 text-app-gray-400 bg-transparent hover:text-app-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-app-white !p-3" data-modal-hide="staticModal">
                                                                <svg data-v-e8631f3f="" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path data-v-e8631f3f="" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">

                                                                    </path>
                                                                </svg>
                                                            </button
                                                            ><!---->
                                                            <div data-v-e8631f3f="" class="px-6 py-4 space-y-6">
                                                                <div class="w-[300px] @sm/wallet:w-[360px] flex flex-col gap-4">
                                                                    <div class="flex justify-around">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="text-app-green-300 w-5" style="width: 60px; height: 60px;">
                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0">

                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <p class="text-base font-semibold text-app-gray-900 dark:text-app-white text-center">Your transfer request was processed</p>
                                                                    <p class="text-sm text-center text-app-gray-900 dark:text-app-gray-100">Your transaction is completed now</p>
                                                                    <div class="flex items-center p-4">
                                                                        <button data-v-09480cf0="" href="" class="size-md t-btn t-btn-primary rounded-full flex-1" type="button" >
                                                                            <!---->Continue</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <!---->
                                                            </div>
                                                        </div>
                                                        <div data-v-e8631f3f="" data-v-f4a38134="" id="" tabindex="-1" role="alertdialog" aria-modal="false" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center !hidden"  style="display: none;">
                                                            <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 !rounded-3xl !h-auto !border-0" style="display: none;">
                                                                   <!-- svelte-ignore a11y_consider_explicit_label -->
                                                                <button data-v-e8631f3f="" type="button" class="absolute right-1 top-1 text-app-gray-400 bg-transparent hover:text-app-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-app-white !p-3" data-modal-hide="staticModal">
                                                                    <svg data-v-e8631f3f="" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                        <path data-v-e8631f3f="" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">

                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                                <!---->
                                                                <div data-v-e8631f3f="" class="px-6 py-4 space-y-6">
                                                                    <div class="w-[300px] @sm/wallet:w-[360px] bg-app-light-surface1 dark:bg-app-dark-surface4 rounded-[32px]">
                                                                        <p class="text-base font-semibold text-app-gray-900 dark:text-app-white text-center">Confirm Transaction</p>
                                                                        <div class="bg-app-light-surface3 dark:bg-app-dark-surface3 rounded-2xl pt-4 pb-8 px-4 @sm/wallet:pt-8 flex flex-col items-center justify-center mt-4 mb-6">
                                                                            <div class="py-1 px-4 rounded-full flex items-center gap-2 mb-7 bg-app-light-surface1 dark:bg-app-dark-surface2">
                                                                                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="network logo" class="h-4 w-4">
                                                                                <p class="text-sm text-app-gray-900 dark:text-app-white text-center">Ethereum Mainnet</p>
                                                                            </div>
                                                                            <div class="flex items-center gap-4">
                                                                                <div class="flex flex-col items-center">
                                                                                    <div class="w-14 h-14 bg-app-light-surface1 dark:bg-app-dark-surface2 flex items-center justify-center rounded-full">

                                                                                    <!---->
                                                                                    </div>
                                                                                    <p class="text-sm font-normal text-app-gray-500 dark:text-app-gray-400 mt-4 min-w-[110px] text-center">0xf1C...4cf73</p>
                                                                                </div>
                                                                                <div class="block @[300px]/txBanner:hidden mb-10 text-app-black dark:text-app-white font-bold text-xl">⟶</div>
                                                                                <div class="hidden @[300px]/txBanner:block mb-8">
                                                                                    <img loading="lazy" src="https://images.web3auth.io/ws-transferArrowLight.svg" class="block dark:hidden" alt="right arrow">
                                                                                    <img loading="lazy" src="https://images.web3auth.io/ws-transferArrowDark.svg" class="dark:block hidden" alt="right arrow">
                                                                                
                                                                                </div>
                                                                                <div class="flex flex-col items-center">
                                                                                    <div class="w-14 h-14 bg-app-light-surface1 dark:bg-app-dark-surface2 flex items-center justify-center rounded-full">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="dark:!text-app-white w-5" style="width: 20px; height: 20px;">
                                                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3">

                                                                                            </path>
                                                                                        </svg>
                                                                                    </div>
                                                                                    <p class="text-sm font-normal text-app-gray-500 dark:text-app-gray-400 mt-4 min-w-[110px] text-center">-</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="text-app-gray-900 dark:text-app-white text-sm px-4">
                                                                            <div class="flex justify-between items-center mb-2">
                                                                                <div>Amount</div>
                                                                                <div>0 ETH</div>
                                                                            </div>
                                                                            <div class="flex justify-between items-center mb-4">
                                                                                <div>Transaction Fee</div>
                                                                                <div>
                                                                                    <span>0 ETH</span>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex justify-between items-center font-semibold">
                                                                                <div>Total Cost</div>
                                                                                <div>0 ETH</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="flex flex-col gap-4 mt-8 items-center">
                                                                            <button data-v-09480cf0="" href="" class="size-md t-btn t-btn-primary rounded-full block" type="button" >
                                                                                <!---->Confirm</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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