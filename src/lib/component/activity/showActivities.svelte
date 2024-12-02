<script>
    import { app } from "$lib/store/app.js";
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();
    $: transactions = []

    onMount(async()=>{
       const response = await $app?.fetchTransaction()
       transactions = response
    })

</script>

<div id="app" data-v-app="">
    <div data-v-e8631f3f="" id="" tabindex="-1" role="alertdialog" aria-modal="true" data-modal-placement="modal-center" class="fixed !z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal modal !opacity-100 visible modal-container modal-center backdrop-blur"  style="">
        <div data-v-e8631f3f="" class="relative h-full md:h-auto bg-app-white dark:bg-app-gray-700 pointer-events-auto transition duration-300 ease-in-out origin-center modal-size-default rounded-lg shadow border dark:border-app-gray-700 @container/wallet !overflow-hidden !rounded-3xl w-[375px] !h-[600px] border-0 p-0 !bg-app-light-surface-main dark:!bg-app-dark-surface-main" style="">
            <!---->
        <div data-v-e8631f3f="" class="px-6 py-4 space-y-6 !p-0 h-full">
            <main class="p-4 @md/wallet:p-6 flex flex-col h-full">
            <div class="flex @2xl/wallet:grid grid-cols-3 items-center justify-between mb-6 @tab/wallet:!hidden ">
                <div class="basis-1/4 justify-start">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div on:click={()=> dispatch("close")} class="flex items-center gap-3 text-app-gray-500 @tab/wallet:text-app-gray-900 dark:text-app-gray-400 text-sm @tab/wallet:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="cursor-pointer hover:text-app-gray-900 dark:hover:text-app-white w-5" style="width: 20px; height: 20px;">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18"></path>
                        </svg>
                    </div>
                </div>
                <p class="font-bold basis-1/2 text-center dark:text-app-white">Transaction History</p>
                <div class="basis-1/4"></div>
            </div>
    <div class="@tab/wallet:mt-6 flex flex-grow overflow-hidden gap-4">
        <div class="flex-grow overflow-hidden flex flex-col bg-transparent @tab/wallet:p-4 @tab/wallet:m-0 @tab/wallet:basis-3/5 @tab/wallet:flex">
            <div class="flex flex-shrink-0 items-center justify-between gap-4 w-full">
                <div class="flex items-center gap-4 justify-between w-full @tab/wallet:w-auto p-0.5">
                    <div data-v-048dde58="" id="" class="relative" >
                        <button data-v-09480cf0="" data-v-048dde58="" href="" class="size-xs t-btn t-btn-tertiary rounded-full dropdown-button undefined" type="button" data-dropdown-toggle="dropdown">
                            <!---->
                            <div class="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5" style="width: 20px; height: 20px;">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h16M4 6h16zm0 6h8z"></path>
                                </svg> All <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5" style="width: 20px; height: 20px;">
                                    <path fill="currentColor" fill-rule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd">

                                    </path>
                                </svg>
                            </div>
                        </button>
                    <!---->
                    <!---->
                </div>
        </div>
    </div>
    {#if !transactions.length}
        <div id="portfolio-txn-activity" class="flex flex-col flex-grow overflow-auto gap-4 mt-4 @mb/wallet:mt-2">
            <div class="flex flex-col items-center justify-center w-full h-full"><p class="text-sm font-semibold dark:text-app-white">You don’t have any Transactions yet</p>
                <p class="text-xs text-app-gray-500 dark:text-app-gray-400 text-center">Once you start moving your assets, your transactions will appear here.</p>
            </div>
        </div>
    {/if}
    <div class="tabs-view" style="transform: none;">
        <div class="sc-hmvnCu emIWso">
            <table class="sc-gWXbKe iUeetX table is-hover">
                <thead><tr><th>Trx Hash</th><th>Trx ID</th><th>Status</th><th class="m-width">Profit</th></tr></thead>
                <tbody>
                    <tr>
                        <td class="game-name">
                            <div class="name">10970123863065548</div>
                        </td>
                    <td><a class="sc-jUosCB iTDswZ user-info " href="/">
                        <div class="name">
                            <span class="hidden-name">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Hidden"></use>
                                </svg>
                                Hidden
                            </span>
                        </div>
                    </a>
                </td>
                <td>10970123863065548</td>
                <td>0.00x</td>
                <td class="lose">
                    <div class="sc-Galmp erPQzq coin notranslate has-sign">
                        <img class="coin-icon" alt="" src="https://cryptologos.cc/logos/ethereum-eth-logo.png">
                        <div class="amount">
                            <span class="amount-str">0.0625<span class="suffix">0000</span>
                        </span>
                    </div>
                </div>
            </td>
        </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</div>
<div class="bg-app-light-surface1 dark:bg-app-dark-surface4 rounded-[32px] p-5 flex-1 @tab/wallet:basis-2/5 @tab/wallet:flex hidden">
    <div class="bg-app-light-surface3 dark:bg-app-dark-surface3 rounded-2xl p-8 h-[300px] flex flex-col items-center justify-center w-full">
        <p class="text-sm dark:text-app-white">Select Transaction to view details</p>
    </div>
</div>
</div>
</main>
</div>
<!---->
</div>
</div>

</div>

<style>
 .tabs-view {
    border-radius: 1.25rem;
}
 .tabs-view {
    position: relative;
}
.emIWso {
    min-height: 38.25rem;
    padding: 0.625rem;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
}
.iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.iUeetX th:first-child, .iUeetX td:first-child {
    text-align: left;
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
}
.iUeetX th:last-child, .iUeetX td:last-child {
    text-align: right;
}
.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}
.emIWso .game-name {
    font-weight: 800;
    display: flex
;
    -webkit-box-align: center;
    align-items: center;
}
.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}
.iUeetX th, .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}
.emIWso .game-name .name {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.iTDswZ {
    display: inline-flex
;
    -webkit-box-align: center;
    align-items: center;
}

</style>