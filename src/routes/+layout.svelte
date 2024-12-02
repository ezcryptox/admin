<script>
    import { Toaster } from 'svelte-sonner'
    import "../style/global.css"
    import { page } from "$app/stores";
</script>

<div class="main_content dashboard_part large_header_bg full_main_content">
    <Toaster position="bottom-left" expand={false} richColors  />

    <slot></slot>

</div>

