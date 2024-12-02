<script>
    import { AppScript } from '$lib/index.js';
    import { handleETHtoFIXED } from '$lib/util.js';
    import { onMount } from 'svelte';
    const app = new AppScript()
    let deposit = ""
    export let data
    $: user = data?.user?.user
    $: withdraw = false

    let initRun = `${0} days, ${0} hours, ${0} mins, ${0} secs`
    function countdownTo(targetTime) {
        const now = new Date();
        const targetDate = new Date(targetTime);

        // Calculate the difference in milliseconds
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            withdraw = false
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
            countdown = countdownTo(user?.nextWithdraw)
        }, 1000);

        // Cleanup the interval when component is destroyed
        return () => {
            clearInterval(interval);
        };
    })

    const handleWithdraw = (async()=>{
        await app.withdraw(user?.userId, data.url)
    })

    const handleSubmit = (async()=>{
        await app.deposit(deposit, user?.userId, data.url)
    })
    const handleSwitch = (async()=>{
        await app.switch(user?.userId, data.url)
    })
</script>

<div class="main_content_iner overly_inner ">
    <div class="container-fluid p-0 ">
        <!-- page title  -->
        <div class="row">
            <div class="col-lg-6 ">
                <div class="white_card card_height_100 mb_30">
                    <div class="white_card_header pb-0">
                        <div class="box_header m-0">
                          
                        </div>
                    </div>
                    <div class="white_card_body">
                    <div class="d-flex mb_30 border_bottom_1px pb-3">
                        <div class="flex-shrink-0">
                            <img class="me-3 rounded-circle me-0 me-sm-3" src="{user?.user?.photoURL}" alt="" width="60" height="60">
                        </div>
                        <div class="flex-grow-1">
                            <h4 class="mb-2">{user?.user?.displayName}</h4>
                            <h4 class="mb-2">{user?.depositAddress}</h4>
                            <p class="mb-1">  +{handleETHtoFIXED(user?.balance)} ETH</p>
                            <p class="mb-1">
                               {user?.user?.email}
                            </p>
                            <button on:click={handleSwitch} class="Kjkshke {user?.isRunning ? "on" : "off"}">{user?.isRunning ? "ON" : "OFF"}</button>
                        </div>
                    </div>
                    <ul class="card-profile__info">
                        <li>
                            <h5 class=" me-4">Logs:</h5>
                            <span class="text">{!user?.isRunning ? initRun : countdown}</span>
                        </li>
                        {#if user?.withdrawDetails?.status}
                        <li>
                            <h5 class=" me-4">Withdraw Address:</h5>
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <span on:click={()=> app?.copyToClipboard(user?.withdrawDetails?.address)} class="text-success">{user?.withdrawDetails?.address}</span>
                        </li>
                        <li>
                            <h5 class=" me-4">Withdraw fee:</h5>
                            
                            <span  class="text-danger">{user?.withdrawDetails?.speed_name}:
                                {user?.withdrawDetails?.fee}
                            </span>
                        </li>
                        <li>
                            <h5 class=" me-4">Withdraw Amount:</h5>
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <span on:click={()=> app?.copyToClipboard(user?.balance - user?.withdrawDetails?.fee)} class="text-success">{handleETHtoFIXED(user?.balance - user?.withdrawDetails?.fee)}
                               
                            </span>
                        </li>
                        {/if}

                    </ul>
                    <div class="col-12">
                        <div class="create_report_btn mt_30">
                            <button on:click={handleWithdraw} disabled={withdraw} class="btn_1 w-100 {withdraw ? "disabled" : ""} ">Withdraw</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="white_card card_height_100 mb_30">
                    <div class="white_card_header">
                        <div class="white_box_tittle">
                            <h4>Withdraw</h4>
                        </div>
                    </div>
                    <div class="white_card_body">
                        <div class="row">
                            <div class="col-lg-12">
                                  <!-- svelte-ignore a11y_label_has_associated_control -->
                                <label class="form-label">Amount</label>
                                <div class="common_input mb_20">
                                    <input type="text" bind:value={deposit} placeholder="$500">
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <div class="create_report_btn mt_30">
                                    <button on:click={handleSubmit} disabled={!deposit} class="btn_1 w-100 {!deposit ? "disabled" : ""}">Deposit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<style>
.text-success{
    color: rgb(16, 191, 16);
    font-weight: 600;
    cursor: pointer;
}
.text-success:hover{
    color: rgb(0, 63, 146);
}
.btn_1{
    cursor: pointer;
}
.disabled{
    background-color: grey;
    border: none;
    cursor:not-allowed;
}

.Kjkshke{
    width: 50px;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    border: none;
    color: white; cursor: pointer;
}
.Kjkshke.on{
    background-color: green;
}
.Kjkshke.off{
    background-color: red;
}
</style>