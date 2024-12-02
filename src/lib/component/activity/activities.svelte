<script>
    import Loader from "$lib/loader.svelte";
import { app } from "$lib/store/app.js";
    import { getFormattedDateTime, handleETHtoFIXED } from "$lib/util.js";
    import { onMount } from "svelte";
    $: transactions = []
    $: load = false

    onMount(async()=>{
        load = true
        const response = await $app?.fetchTransaction()
            // Sort the array in descending order
        transactions = response
        load = false
    })

</script>

{#if load}
    <Loader color="btn"/>
{:else}
<div class="sc-iNpzLj hBFXqQ tb-bg">
    <table class="sc-gWXbKe iUeetX table sc-hFxENk iIwwcc is-hover">
        <thead>
            <tr>
                <td>Time</td>
                <td>Profit</td>
                <td>Status</td>
                <td>Transaction hash</td>
            </tr>
        </thead>
        <tbody>
            {#each transactions as trx}
                <tr class="">
                    <td style="cursor: auto;">
                        <div class="time font-semibold ">{getFormattedDateTime(trx?.transaction?.timestamp)}</div>
                    </td>
                
                    <td class="sc-fZDhWb iNnwhW">
                        <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                                <span class="amount-str ">{handleETHtoFIXED(trx?.transaction?.profit)}</span>
                            </div>
                        </div>
                    </td>
                    <td class="sc-cQYgkQ {trx.status ? "eHogsQ": "dNNmeg"}  error" >
                        <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                                <span class="amount-str ">
                                    {trx.status ? "Successful" : "Failed"}
                            </span>
                        </div>
                    </div>
                    </td>
                    <td style="cursor: auto;">
                        <div class="time " >{trx?.transaction?.trnsactionHash}</div>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    {#if !transactions.length}
        <div class="sc-fezjOJ jVnuYs">
            <div class="sc-eCImPb cuPxwd empty ">
                <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                <div class="msg">Oops! There is no data yet!</div>
            </div>
        </div>
    {/if}

</div>
{/if}
