<script>
    import Videocard from '$lib/components/videocard.svelte'
    import { onMount } from "svelte";

    let posts = [];

    onMount(async () => {
        try {
            const res = await fetch("http://localhost:3000/home");
            if (!res.ok) throw new Error("Error al cargar posts");
            posts = await res.json();
            console.log(posts);
        } catch (err) {
            console.error(err);
        }
    });
</script>

<div class="d-flex justify-content-between align-items-center mb-3">
    <h2 class="h5">Mas Recientes</h2>
<!--    <div class="text-muted small">Mostrando 48 resultados</div>-->
</div>

<div class="row g-3">
    {#each posts.latest as post}
        <Videocard
                id="{post.video.id}"
                title={post.video.title}
                channel={post.channel.name}
                duration={post.video.duration}
                avatar={post.channel.avatar}
                views="{post.video.views} visualizaciones"
                timeAgo="Hace 2 dias"
                thumbnail="{post.video.thumbnail}"
        />
    {/each}

    <div class="col-sm-6 col-md-4 col-lg-3">
        <a href="/videos" class="text-decoration-none text-reset d-block h-100">
            <div class="card d-flex flex-column">

                <!-- Thumbnail placeholder -->
                <div class="ratio ratio-16x9 bg-light d-flex justify-content-center align-items-center">
                    <img src="https://cdn.25127928.xyz/morethumb.jpg" alt="Explorar" class="img-fluid" />
                </div>

                <!-- Card body con botón -->
                <div class="card-body d-flex flex-column justify-content-center flex-grow-1 text-center">
                    <button class="btn btn-light w-100">Explora más videos</button>
                </div>

            </div>
        </a>
    </div>
</div>

<div class="d-flex justify-content-between align-items-center mt-3 mb-3">
    <h2 class="h5">Canales</h2>
    <!--    <div class="text-muted small">Mostrando 48 resultados</div>-->
</div>

<div class="row g-3">
    {#each posts.channels as channel}
        <div class="col-sm-6 col-md-4 col-lg-2 mb-5">
            <a href="/canal/{channel.id}" class="text-decoration-none text-reset d-block h-100">
                <div class="card h-100 text-center p-3">
                    <div class="mb-3">
                        <img src="{channel.avatar}" alt="Avatar del canal" class="rounded-circle mx-auto d-block" style="width: 80px; height: 80px; object-fit: cover;">
                    </div>

                    <h5 class="card-title fw-bold mb-1">{channel.name}</h5>

                    <h6 class="mt-2"><i class="bi bi-play-circle-fill me-1"></i>{channel.postsCount} publicaciones</h6>


                </div>
            </a>
        </div>


    {/each}

    <div class="col-sm-6 col-md-4 col-lg-2">
        <a href="/videos" class="text-decoration-none text-reset d-block h-100">
            <div class="card d-flex flex-column">

                <!-- Thumbnail placeholder -->
                <div class="ratio ratio-16x9 bg-light d-flex justify-content-center align-items-center">
                    <img src="https://cdn.25127928.xyz/morethumb.jpg" alt="Explorar" class="img-fluid" />
                </div>

                <!-- Card body con botón -->
                <div class="card-body d-flex flex-column justify-content-center  text-center">
                    <button class="btn btn-light w-100">Explora más canales</button>
                </div>

            </div>
        </a>
    </div>
</div>