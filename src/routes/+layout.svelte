<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

    import {ClerkProvider, SignedIn, UserButton} from 'svelte-clerk';
    import {esES} from "@clerk/localizations";

    let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<ClerkProvider localization={esES}>
    <header class="sticky-top bg-white border-bottom">
        <div class="container-fluid py-2 d-flex align-items-center gap-3">
            <a href="/" class="text-decoration-none text-reset d-block">
                <img src="https://cdn.25127928.xyz/logo.png"
                     alt="Videos Cristianos"
                     style="height: 40px; width: auto;">
            </a>
            <form class="flex-grow-1 d-flex" role="search">
                <input class="form-control" type="search" placeholder="Buscar" aria-label="Buscar">
                <button class="btn btn-outline-secondary ms-2" type="submit">🔍</button>
            </form>
            <div class="d-flex gap-2 align-items-center">
                <button class="btn btn-light">➕</button>
                <button class="btn btn-light">🔔</button>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>
    <div class="container-fluid">
        <div class="row">
            <!-- Main -->
            <main class="col-12 px-md-4 py-3">


                {@render children?.()}


                <footer class="text-center text-muted small py-4">
                    Hecho con ♥ — Videos Cristianos
                </footer>
            </main>
        </div>
    </div>

</ClerkProvider>
<style>
    .avatar{width:36px;height:36px;border-radius:50%;background:#ced4da;flex-shrink:0}
</style>