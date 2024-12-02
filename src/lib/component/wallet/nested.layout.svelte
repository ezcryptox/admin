
<script>
    import Tabs from "./tabs.svelte";
    import { user, app } from "$lib/store/app.js"
    import { handleETHtoFIXED, handleUSDtoFIXED } from "$lib/util.js";
    $: _tab = 0
    import { createEventDispatcher } from "svelte";
    import Layout from "../activity/layout.svelte";
    const dispatch = createEventDispatcher();


</script>
{#if !_tab}
<div data-v-e8631f3f="" id="" tabindex="-1" role="alertdialog" aria-modal="true" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center backdrop-blur"  style="">
    <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 @container/wallet !overflow-hidden !rounded-3xl w-[375px] !h-[600px] border-0 p-0 !bg-app-light-surface-main dark:!bg-app-dark-surface-main" style="">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={()=> dispatch("close")}  data-v-e8631f3f="" type="button" class="absolute right-1 top-1 text-app-gray-400 bg-transparent hover:text-app-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-app-white !top-[33px] !right-[25px] text-app-gray-800 dark:text-app-gray-300 z-30" data-modal-hide="staticModal">
            <svg data-v-e8631f3f="" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path data-v-e8631f3f="" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
        <!---->
        <div data-v-e8631f3f="" class="px-6 py-4 space-y-6 !p-0 h-full">
            <main class="p-0 @sm/wallet:p-4 @md/wallet:p-6 flex flex-col h-full">
        <div class="flex flex-col flex-grow overflow-hidden">
            <div data-v-62278ace="" class="p-7 @sm/wallet:p-8 flex-shrink-0 w-full rounded-b-[32px] @sm/wallet:rounded-t-[32px]  flex flex-col items-center justify-center relative overflow-hidden bg-app-light-surface1 dark:bg-app-dark-surface3 text-app-black dark:text-app-white">
            <div class="w-full flex justify-between items-center @sm/wallet:hidden mb-4"><div>
                <div class="h-8 font-semibold">Mevbot</div>
            </div>
            <div class="flex items-center space-x-2 mr-[42px]">
            <button data-v-09480cf0="" href="" class="icon icon-sm t-btn t-btn-text rounded-md !z-10" type="button" >
                <!---->
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="https://cryptologos.cc/logos/ethereum-eth-logo.png" class="w-6 h-6">
            </button>
            <div data-v-048dde58="" id="" class="relative !z-10" >
                <button data-v-09480cf0="" data-v-048dde58="" href="" class="size-md t-btn t-btn-text rounded-md dropdown-button undefined !p-0" type="button"  data-dropdown-toggle="dropdown">
                    <!---->
                    <div data-v-7f753ef2="" id=""  class="avatar-container w-8 h-8 rounded-full" >
                        <img class="w-10 h-10 max-w-full max-h-full" src="{$user?.user?.photoURL}" alt="{$user?.user?.displayName}">
                    </div>
                </button>
            <!----><!---->
            </div>
            <!---->
        </div>
    </div>
    <div data-v-62278ace="" class="flex flex-col @sm/wallet:flex-row items-start justify-between w-full">
        <div data-v-62278ace="" class="flex order-2 @sm/wallet:order-1 flex-col gap-2 items-center @sm/wallet:items-start w-full @sm/wallet:w-auto">
            <p data-v-62278ace="" class="hidden @sm/wallet:block text-sm font-normal">Total Wallet Balance</p>
            <div data-v-62278ace="" class="flex items-center gap-2">
                <p data-v-62278ace="" class="text-4xl @sm/wallet:text-5xl font-semibold">{ handleUSDtoFIXED($app?.balanceInUSD)}</p>
                <p data-v-62278ace="" class="font-semibold">USD</p>
            </div>
        </div>
        <div data-v-62278ace="" class="order-1 mb-2 @sm/wallet:mb-0 @sm/wallet:order-2 flex justify-center w-full @sm/wallet:w-auto !z-[5]">
            <button on:click={()=> $app.copyToClipboard($user?.walletAddress)} data-v-09480cf0="" data-v-62278ace="" href="" class="size-sm t-btn t-btn-text rounded-full relative !text-app-gray-900 dark:!text-app-white !no-underline @sm/wallet:!hidden" type="button" >
                <!----><!---->
                <span class="text-base">{$app.truncateMiddle($user?.walletAddress, 20)}</span>
                <div class="ml-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-5" style="width: 20px; height: 20px;">
                        <path d="M10.6665 12H11.3332C12.0696 12 12.6665 11.403 12.6665 10.6667V3.33333C12.6665 2.59695 12.0696 2 11.3332 2H5.99984C5.26346 2 4.6665 2.59695 4.6665 3.33333V4M10.6665 12H5.99984C5.26346 12 4.6665 11.403 4.6665 10.6667V4M10.6665 12V12.6667C10.6665 13.403 10.0696 14 9.33317 14H3.99984C3.26346 14 2.6665 13.403 2.6665 12.6667V5.33333C2.6665 4.59695 3.26346 4 3.99984 4H4.6665" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
    <Tabs />
</div>
    <div data-v-13413aed="" class="flex flex-col flex-grow overflow-hidden p-4 @sm/wallet:mt-4 @sm/wallet:p-1">
        <div data-v-13413aed="" class="flex flex-shrink-0 flex-col @sm/wallet:flex-row @sm/wallet:items-center justify-between">
            <div data-v-13413aed="" class="hidden @sm/wallet:flex items-center gap-4">
                <button data-v-09480cf0="" data-v-13413aed="" href="" class="size-md t-btn t-btn-primary rounded-full" type="button" >
                    <!---->
                    <svg data-v-13413aed="" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5" style="width: 20px; height: 20px;">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83317 1.33594H9.1665C10.9346 1.33594 12.6303 2.03832 13.8805 3.28856C15.1308 4.5388 15.8332 6.23449 15.8332 8.0026C15.8332 8.87808 15.6607 9.74499 15.3257 10.5538C14.9907 11.3627 14.4996 12.0976 13.8805 12.7167C13.2615 13.3357 12.5266 13.8268 11.7177 14.1618C10.9089 14.4968 10.042 14.6693 9.1665 14.6693H7.83317C4.15127 14.6693 1.1665 11.6845 1.1665 8.0026C1.1665 4.32071 4.15127 1.33594 7.83317 1.33594ZM9.1665 2.66927C7.75202 2.66927 6.39546 3.23117 5.39527 4.23137C4.39507 5.23156 3.83317 6.58812 3.83317 8.0026C3.83317 8.70299 3.97112 9.39651 4.23915 10.0436C4.50717 10.6907 4.90002 11.2786 5.39527 11.7738C5.89051 12.2691 6.47846 12.6619 7.12552 12.93C7.77259 13.198 8.46612 13.3359 9.1665 13.3359C9.86689 13.3359 10.5604 13.198 11.2075 12.93C11.8546 12.6619 12.4425 12.2691 12.9377 11.7738C13.433 11.2786 13.8258 10.6907 14.0939 10.0436C14.3619 9.39651 14.4998 8.70299 14.4998 8.0026C14.4998 6.58812 13.9379 5.23156 12.9377 4.23137C11.9375 3.23117 10.581 2.66927 9.1665 2.66927ZM7.28089 6.11699C7.78098 5.61689 8.45926 5.33594 9.1665 5.33594C9.87375 5.33594 10.552 5.61689 11.0521 6.11699C11.5522 6.61708 11.8332 7.29536 11.8332 8.0026C11.8332 8.3528 11.7642 8.69956 11.6302 9.02309C11.4962 9.34663 11.2997 9.6406 11.0521 9.88822C10.8045 10.1358 10.5105 10.3323 10.187 10.4663C9.86346 10.6003 9.5167 10.6693 9.1665 10.6693C8.81631 10.6693 8.46955 10.6003 8.14601 10.4663C7.82248 10.3323 7.52851 10.1358 7.28089 9.88822C7.03326 9.6406 6.83684 9.34663 6.70282 9.02309C6.56881 8.69956 6.49984 8.3528 6.49984 8.0026C6.49984 7.29536 6.78079 6.61708 7.28089 6.11699ZM9.1665 4.0026C8.10564 4.0026 7.08822 4.42403 6.33808 5.17418C5.58793 5.92432 5.1665 6.94174 5.1665 8.0026C5.1665 8.52789 5.26997 9.04804 5.47099 9.53334C5.672 10.0186 5.96664 10.4596 6.33808 10.831C6.70951 11.2025 7.15047 11.4971 7.63577 11.6981C8.12107 11.8991 8.64122 12.0026 9.1665 12.0026C9.69179 12.0026 10.2119 11.8991 10.6972 11.6981C11.1825 11.4971 11.6235 11.2025 11.9949 10.831C12.3664 10.4596 12.661 10.0186 12.862 9.53334C13.063 9.04804 13.1665 8.52789 13.1665 8.0026C13.1665 6.94174 12.7451 5.92432 11.9949 5.17418C11.2448 4.42403 10.2274 4.0026 9.1665 4.0026Z" fill="currentColor"></path></svg><div data-v-13413aed="" class="ml-2">Tokens</div></button>
                        <button data-v-09480cf0="" data-v-13413aed="" href="" class="size-md t-btn t-btn-tertiary rounded-full" type="button" >
                            <!---->
                            <svg data-v-13413aed="" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5" style="width: 20px; height: 20px;">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.7315 4.17823L6.39008 1.77559C6.15739 1.60827 5.84229 1.60827 5.60959 1.77559L2.26818 4.17823C2.03548 4.34555 1.93811 4.64213 2.02699 4.91286L3.3033 8.80042C3.39218 9.07115 3.6471 9.25445 3.93473 9.25445H8.06494C8.35258 9.25445 8.60749 9.07115 8.69638 8.80042L9.97268 4.91286C10.0616 4.64213 9.9642 4.34555 9.7315 4.17823ZM7.17058 0.712411C6.47248 0.210447 5.52719 0.210446 4.8291 0.71241L1.48768 3.11505C0.789587 3.61701 0.497476 4.50677 0.764125 5.31896L2.04043 9.20651C2.30708 10.0187 3.07184 10.5686 3.93473 10.5686H4.29168C4.28417 11.027 4.22657 11.3821 4.08237 11.6611C3.94214 11.9324 3.68524 12.1979 3.12475 12.392C2.81917 12.4979 2.63529 12.8064 2.68954 13.1223C2.74378 13.4382 3.02032 13.6693 3.34408 13.6693H8.6555C8.97925 13.6693 9.2558 13.4382 9.31004 13.1223C9.36429 12.8064 9.18041 12.4979 8.87483 12.392C8.31434 12.1979 8.05744 11.9324 7.91721 11.6611C7.77301 11.3821 7.71541 11.027 7.70789 10.5686H8.06494C8.92784 10.5686 9.6926 10.0187 9.95924 9.20651L11.2355 5.31896C11.5022 4.50677 11.2101 3.61701 10.512 3.11505L7.17058 0.712411ZM5.2645 12.2597C5.54763 11.7119 5.61267 11.1107 5.61972 10.5686H6.37986C6.38691 11.1107 6.45195 11.7119 6.73508 12.2597C6.75174 12.2919 6.76903 12.3237 6.78698 12.3551H5.2126C5.23055 12.3237 5.24784 12.2919 5.2645 12.2597ZM6.6665 6.0026C6.6665 6.73898 6.37986 7.33594 5.99984 7.33594C5.26346 7.33594 4.6665 6.73898 4.6665 6.0026C4.6665 5.26622 5.26346 4.66927 5.99984 4.66927C6.25849 4.66927 6.6665 5.26622 6.6665 6.0026ZM8.6665 6.0026C8.6665 7.47536 7.4726 8.66927 5.99984 8.66927C4.52708 8.66927 3.33317 7.47536 3.33317 6.0026C3.33317 4.52985 4.52708 3.33594 5.99984 3.33594C7.4726 3.33594 8.6665 4.52985 8.6665 6.0026Z" fill="currentColor"></path></svg><div data-v-13413aed="" class="ml-2">NFT</div>
                            </button>
                        </div>
                        <div data-v-13413aed="" class="flex items-center">
                            <p data-v-13413aed="" class="text-sm font-medium text-app-gray-500 dark:text-app-gray-400 block @sm/wallet:hidden">Your Token</p>
                        </div>
                    </div>
                    <div data-v-13413aed="" class="overflow-auto min-h-36 @sm/wallet:flex-grow mt-4">
                        <div class="grid gap-4 @mb/wallet:grid-cols-2 @md/wallet:grid-cols-4 @lg/wallet:grid-cols-6 @2xl/wallet:grid-cols-8">
                            <div data-v-13413aed="" class="grid grid-cols-2 @md/wallet:flex flex-col gap-8 p-4 bg-app-light-surface2 dark:bg-app-dark-surface4 rounded-2xl justify-between @mb/wallet:justify-normal cursor-pointer h-fit">
                                <div class="flex items-center gap-3">
                                    <img class="w-8 h-8" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="token-card">
                                    <div class="space-y-2 truncate">
                                        <div class="leading-none text-sm font-semibold text-app-black dark:text-app-white truncate" title="Ethereum">Ethereum</div>
                                        <div class="truncate leading-none text-xs font-normal text-app-gray-500 dark:text-app-gray-400" title="ETH">ETH</div>
                                    </div>
                                </div>
                                <div class="flex text-right @md/wallet:text-left flex-col items-end @mb/wallet:items-start gap-2 truncate">
                                    <p class="leading-none text-sm font-semibold text-app-black dark:text-app-white truncate w-full" title="{handleETHtoFIXED($user.balance)} ETH">{handleETHtoFIXED($user.balance) } ETH</p>
                                    <p class="leading-none text-xs font-normal text-app-gray-500 dark:text-app-gray-400 truncate w-full" title="{handleETHtoFIXED($app.balanceInUSD)} USD"> = {handleUSDtoFIXED($app?.balanceInUSD)} <span class="uppercase">usd</span>
                                    </p>
                                </div>
                            </div>
                            <!---->
                        </div>
                    </div>
                </div>
                <div>
                    <!---->
                    </div>
                </div>

            </main>
        </div>
    <!---->
    </div>
</div>
{/if}

{#if _tab === 2}
    <Layout on:close={()=> _tab = 0}/>
{/if}
