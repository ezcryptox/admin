<script>
    import { createEventDispatcher } from "svelte";
    import "../../../style/transaction.css" 
    import Activities from "./activities.svelte";
    import Deposit from "./deposit.svelte";
    import Withdraw from "./withdraw.svelte";
    const dispatch = createEventDispatcher();
    $: tab = 1
</script>



<div class="sc-bkkeKt kBjSXI">
    <div class="dialog " style="opacity: 1; width: 100%; height: 620px; margin-top: -0; margin-left: 0; ">
        <div class="dialog-head has-back has-close">
            <div class="dialog-title">Transactions</div>
        </div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={()=>dispatch("close")} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Close"></use>
            </svg>
        </button>
        <div class="dialog-body no-style ">
            <div class="sc-cxpSdN kQfmQV tabs sc-cnHmbd dziFBu" id="transactions">
                <div class="tabs-navs">
                    <button on:click={()=> tab = 1} class="tabs-nav {tab === 1 ? "is-active" : ""}">Deposit</button>
                    <button on:click={()=> tab = 2} class="tabs-nav {tab === 2 ? "is-active" : ""}">Withdraw</button>
                    <button on:click={()=> tab = 3} class="tabs-nav {tab === 3 ? "is-active" : ""}">Activities</button>
                    <div class="bg" style="left: {tab === 1 ? "0" : tab === 2  ? "30" : tab === 3 ? "65" : ""}%; 
                    right: {tab === 1 ? "65" : tab === 2  ? "30" : tab === 3 ? "0" : ""}%;"></div>
                </div>
                <div class="tabs-view" style="transform: none;">
                    <div class="sc-dkPtRN jScFby scroll-view sc-hrjYtz emqwYp cfwrSE NPlxl">
                        {#if tab === 1}
                            <Deposit />
                        {/if}
                        {#if tab === 2}
                            <Withdraw />
                        {/if}
                        {#if tab === 3}
                            <Activities />
                        {/if}
                    </div>
                    <div class="sc-lnDqNf kkZJui table-bot-page">
                            <div class="sc-cCcXHH dXTFyi pagination ">
                                <div class="sc-jJoQJp gOHquD select  ">
                                    <!-- <div class="select-trigger">
                                        20
                                        <div class="arrow top">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>