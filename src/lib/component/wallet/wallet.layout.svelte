<script>
    import Nested from "./nested.layout.svelte";
    $: showWallet = 0
</script>



<!-- ======================================== -->
 <div class="break-inside-avoid lg:break-after-avoid xl:break-after-column mb-4">
    <div class="px-8 py-6 w-full bg-white !rounded-2xl !shadow-modal !border-0 text-center">
        <div class="mb-4">
            <h3 class="font-semibold text-app-gray-900 mb-1">Wallet Services</h3>
            <p class="text-xs text-app-gray-500">Production-ready wallet UI</p>
        </div>
        <img class="mx-auto mb-8" src="data:image/svg+xml,%3csvg%20width='105'%20height='104'%20viewBox='0%200%20105%20104'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='52.5'%20cy='51.6514'%20r='51.6514'%20fill='%23EDF3F9'%20/%3e%3cpath%20d='M64.7904%2033.124C67.4082%2031.1618%2070.9531%2031.1618%2073.5709%2033.124L86.1012%2042.516C88.7191%2044.4782%2089.8145%2047.9563%2088.8146%2051.1312L84.0284%2066.3279C83.0285%2069.5028%2080.1607%2071.6523%2076.9248%2071.6523H61.4365C58.2007%2071.6523%2055.3328%2069.5028%2054.3329%2066.3279L49.5467%2051.1312C48.5468%2047.9563%2049.6422%2044.4782%2052.2601%2042.516L64.7904%2033.124Z'%20fill='url(%23paint0_linear_3726_12053)'%20/%3e%3cg%20style='mix-blend-mode:overlay'%20opacity='0.5'%3e%3cpath%20d='M78.4605%2061.7501L81.4519%2051.9515C81.678%2051.2108%2081.7327%2050.4446%2081.6329%2049.7083L74.014%2053.0981C73.4057%2053.367%2072.6996%2053.1002%2072.4036%2052.4895L70.2987%2048.1465C69.838%2047.196%2068.5233%2047.196%2068.0626%2048.1465L65.9578%2052.4895C65.6618%2053.1002%2064.9557%2053.367%2064.3473%2053.0981L56.7284%2049.7083C56.6287%2050.4446%2056.6834%2051.2108%2056.9095%2051.9515L59.9008%2061.7501C60.5258%2063.7972%2062.3182%2065.1832%2064.3406%2065.1832H74.0208C76.0432%2065.1832%2077.8356%2063.7972%2078.4605%2061.7501Z'%20fill='white'%20/%3e%3c/g%3e%3cpath%20opacity='0.5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.8193%2053.1523C15.8193%2051.7716%2016.8827%2050.6523%2018.1943%2050.6523H43.4443C44.756%2050.6523%2045.8193%2051.7716%2045.8193%2053.1523C45.8193%2054.5331%2044.756%2055.6523%2043.4443%2055.6523H18.1943C16.8827%2055.6523%2015.8193%2054.5331%2015.8193%2053.1523Z'%20fill='%230346FF'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M27.8193%2044.9857C27.8193%2043.697%2028.8342%2042.6523%2030.086%2042.6523H44.4193C45.6712%2042.6523%2046.686%2043.697%2046.686%2044.9857C46.686%2046.2743%2045.6712%2047.319%2044.4193%2047.319H30.086C28.8342%2047.319%2027.8193%2046.2743%2027.8193%2044.9857ZM31.2193%2061.319C31.2193%2060.0303%2032.2342%2058.9857%2033.486%2058.9857H45.5527C46.8045%2058.9857%2047.8193%2060.0303%2047.8193%2061.319C47.8193%2062.6077%2046.8045%2063.6523%2045.5527%2063.6523H33.486C32.2342%2063.6523%2031.2193%2062.6077%2031.2193%2061.319Z'%20fill='%230346FF'%20/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_3726_12053'%20x1='49.1807'%20y1='31.6523'%20x2='89.1807'%20y2='71.6523'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.108859'%20stop-color='%2366D4F7'%20/%3e%3cstop%20offset='0.490968'%20stop-color='%234D92FF'%20/%3e%3cstop%20offset='0.849761'%20stop-color='%23BB65FF'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="">
        <div class="space-y-2">
            <button on:click={()=> showWallet = 1} type="button" class="flex
                rounded-md
                h-[42px]
                px-5
                py-2.5
                text-sm
                items-center
                justify-center
                ease-linear
                transition-all
                duration-150
                outline-none
                bg-transparent
                text-app-gray-800
                border
                border-app-gray-300
                hover:bg-app-gray-200
                active:bg-transparent
                active:border-app-primary-600
                active:ring-1
                active:ring-app-primary-600
                focus-visible:border-app-primary-600
                focus-visible:bg-transparent
                focus-visible:ring-1
                focus-visible:ring-app-primary-600
            w-full">My wallet</button>
    <button type="button" class="flex
    rounded-md
    h-[42px]
    px-5
    py-2.5
    text-sm
    items-center
    justify-center
    ease-linear
    transition-all
    duration-150
    outline-none
    bg-transparent
    text-app-gray-800
    border
    border-app-gray-300
    hover:bg-app-gray-200
    active:bg-transparent
    active:border-app-primary-600
    active:ring-1
    active:ring-app-primary-600
    focus-visible:border-app-primary-600
    focus-visible:bg-transparent
    focus-visible:ring-1
    focus-visible:ring-app-primary-600
        w-full">Use Fiat Onramp</button>
        {#if showWallet}
            <Nested on:close={()=> showWallet = false}/>
        {/if}
</div>
    </div>
</div>


