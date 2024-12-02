<script>
    import { user , app} from "$lib/store/app.js";
    import { createEventDispatcher } from "svelte";
    import QRCode from '@castlenine/svelte-qrcode';
const dispatch = createEventDispatcher();
</script>

<div data-v-e8631f3f="" data-v-62278ace="" id="" tabindex="-1" role="alertdialog" aria-modal="false" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center !hidden" >
    <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 !rounded-3xl !h-auto !border-0" >
            <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={()=> dispatch("close")} data-v-e8631f3f="" type="button" class="absolute right-1 top-1 text-app-gray-400 bg-transparent hover:text-app-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-app-white !p-3" data-modal-hide="staticModal">
            <svg data-v-e8631f3f="" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path data-v-e8631f3f="" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
        <!---->
        <div data-v-e8631f3f="" class="px-6 py-4 space-y-6">
            <div class="flex flex-col gap-8">
                <p class="text-base font-semibold text-app-gray-900 dark:text-app-white text-center">Receive</p>
                <div class="flex flex-col p-4">
                    <div class="border border-app-gray-900 dark:border-app-white text-app-gray-900 dark:text-app-white bg-transparent w-full rounded-full px-3 py-2 flex gap-1 items-center text-sm font-medium mb-4 truncate">
                        <!----> 
                        {$user?.user?.displayName}
                    </div>
                    <button on:click={()=> $app.copyToClipboard($user?.walletAddress)} data-v-09480cf0="" href="" class="size-sm t-btn t-btn-tertiary rounded-full relative" type="button" >
                        <!----><!---->
                        <span class="!text-xs">{$app.truncateMiddle($user?.walletAddress, 20)}</span>
                        <!---->
                    </button>
                    <div class="w-full items-center justify-center mt-6 hidden dark:flex">
                        <QRCode data={$user?.walletAddress} />
                    </div>
                    <div class="w-full items-center justify-center mt-6 flex dark:hidden">
                        <QRCode data={$user?.walletAddress} />
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
</div>