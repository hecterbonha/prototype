<script lang="ts">
    import type {LayoutData} from './$types';

    export let data: LayoutData;
    console.log(data.form.step)
</script>

<div class="container">
    <div class="container-stepper">
        {#if data.form.step === 1}
            <div>STEP 1 (active)</div>
            {:else}
            <div>STEP 1</div>
        {/if}
        {#if data.form.step === 2}
            <div>STEP 2 (active)</div>
        {:else}
            <div>STEP 2</div>
        {/if}
    </div>
</div>

<slot/>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
    }

    .container-stepper {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>