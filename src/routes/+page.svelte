<script>
    import { app } from "$lib/store/app.js";
    import { handleETHtoFIXED, handleUSDtoFIXED } from "$lib/util.js";
    import { onMount } from "svelte";
    $: _allUsers = []

onMount(async()=>{
  const response = await $app?.fetchAllUsers()
  _allUsers = response
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

    

</script>

<div class="main_content_iner overly_inner ">
    <div class="container-fluid p-0 ">
        <div class="row ">
            <div class="col-xl-9">
                <div class="row">
                    <div class="col-12">
                        <div class="white_card mb_30">
                            <div class="white_card_header">
                                <div class="box_header m-0">
                                    <div class="main-title">
                                        <h3 class="m-0">Earning</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="white_card_body">
                                <div class="QA_section">
                                    <div class="QA_table mb-0">
                                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
                                            <table class="table lms_table_active2 dataTable no-footer dtr-inline" id="DataTables_Table_0" role="grid" style="width: 642px;">
                                                <thead>
                                                    <tr >
                                                        <th scope="col" class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 21.3333px;" aria-sort="ascending" aria-label="NO: activate to sort column descending">Name</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 60px;" aria-label="Currency: activate to sort column ascending">Deposited</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 80px;" aria-label="Plateform: activate to sort column ascending">Profit</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 71px;" aria-label="Email: activate to sort column ascending">Balance</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 71px;" aria-label="ID: activate to sort column ascending">Bot Active</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 71px;" aria-label="ID: activate to sort column ascending">withdraw</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 55px;" aria-label="Amount: activate to sort column ascending">Bal in USD</th>
                                                        <th scope="col" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 72.3333px;" aria-label="Status: activate to sort column ascending">Control</th></tr>
                                                </thead>
                                                <tbody>
                                                    {#each _allUsers as item,i}
                                                        <tr class="odd" style="text-align: center;">
                                                            <td  tabindex="0" class="sorting_1">{item?.user?.displayName}</td>
                                                            <td> 
                                                                {handleETHtoFIXED(item?.depositAmount)}
                                                            </td>
                                                            <td>{handleETHtoFIXED(item?.profit)}</td>
                                                            <td>{handleETHtoFIXED(item?.balance)}</td>
                                                            <td>{item.isRunning ? countdownTo(item?.nextWithdraw) : initRun}</td>
                                                            <td>{item?.withdrawDetails?.status ? true : false}</td>
                                                            <td>${handleUSDtoFIXED($app?.balanceInUSD * item?.balance)}</td>
                                                            <td>
                                                                <a href="/profile/{item?.userId}" class="status_btn pending_btn">Open</a>
                                                            </td>
                                                        </tr> 
                                                    {/each}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>