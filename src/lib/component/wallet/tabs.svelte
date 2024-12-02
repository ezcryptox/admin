<script>
    import { createEventDispatcher } from "svelte";
    import Recieve from "./recieve.svelte";
    import WithdrawalUi from "./withdrawalUI.svelte";
    import Layout from "../activity/layout.svelte";
    $: tab = 1
    const dispatch = createEventDispatcher();
    const settingEl = ((e)=>{
        dispatch("select",e)
        tab = e
    })
    $: recive = false
    $: isWithdraw = false
    $: transactions = false
</script>


<div data-v-62278ace="" class="items-center justify-center grid grid-cols-4 gap-2 @xs/wallet:gap-4 @sm/wallet:gap-2 @sm/wallet:justify-end w-full mt-4 @sm/wallet:mt-8 !z-[5] flex @sm/wallet:hidden">
    <button on:click={()=> isWithdraw = true} data-v-09480cf0="" href="" class="size-sm t-btn t-btn-primary rounded-full !text-xs" type="button"  title="Send">
        <!---->
        <p>Withdraw</p>
    </button>
    <button on:click={()=> recive = true} data-v-09480cf0="" href="" class="size-sm t-btn t-btn-primary rounded-full !text-xs" type="button"  title="Receive">
        <!---->
        <p>Deposit</p>
    </button>
    <div class="relative group">
        <!---->
        <button on:click={()=> transactions = true} data-v-09480cf0="" href="" class="size-sm t-btn t-btn-primary rounded-full !text-xs w-full" type="button"  title="Buy">
            <!---->
            <p>Activity</p>
        </button>
    </div>
    <div class="relative group">
        <!---->
        <button data-v-09480cf0="" href="" class="size-sm t-btn t-btn-primary rounded-full !text-xs w-full" type="button"  title="Swap">
            <p>Settings</p>
        </button>
    </div>
</div>
<div data-v-62278ace="" class="circle backdrop1 bg-app-primary-600 rounded-full absolute"></div>
<div data-v-62278ace="" class="circle backdrop2 bg-app-primary-600 rounded-full absolute"></div>
<div data-v-62278ace="" class="circle backdrop3 bg-app-primary-600 rounded-full absolute"></div>

{#if recive}
    <Recieve on:close={()=> recive = false}/>
{/if}

{#if isWithdraw}
    <WithdrawalUi on:close={()=> isWithdraw = false}/>
{/if}
{#if transactions}
    <Layout on:close={(()=> transactions = false)}/>
{/if}
