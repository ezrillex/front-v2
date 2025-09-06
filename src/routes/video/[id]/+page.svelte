<script lang="ts">
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let video = {};
    let id : string = "";
    let loading = true;
    let error = false;
    let error_msg = ''

    onMount(()=>{
        id = page.params.id ?? "";
        if(!id){
            goto('/')
        }
        getVideo()

    })

    async function getVideo(){
        loading = true;
        error = false;
        let response;
        try{
            response = await fetch(`http://localhost:3000/videos/${id}`);
        }
        catch (err){
            error = true;
            error_msg = err instanceof Error ? "Ha ocurrido un error: " + err.message : 'Ha ocurrido un error...';
            loading = false;
            return;
        }
        if(!response.ok){
            error = true;
            error_msg = "Ha ocurrido un error: " + response.statusText
            loading = false;
            return;
        }
        const data = await response.json()
//         const video = {
//             id: "abc123",
//             title: "Video de ejemplo",
//             channel: {
//                 name: "Canal Cristianos",
//                 logo: "https://REDACTED.invalid/logodevchannel.png",
//             },
//             thumbnail: "https://REDACTED.invalid/testthumb.png",
//             views: "12,345",
//             likes: "1,234",
//             subscribers: "20k",
//             publishedAt: "5 de septiembre de 2025",
//             description: `Este es un texto de descripción del video.
// Puedes poner aquí detalles, links y todo lo necesario.`,
//         };
        console.log(data)
        video = data;


        loading = false;
    }


    let alreadyPlayed = false;

    function onPlay() {
        if (!alreadyPlayed) {
            alreadyPlayed = true;
            console.log("▶️ Primera vez que se reproduce el video");
            // aquí haces tu lógica (ej. mandar POST a tu API de views)
            navigator.sendBeacon(`http://localhost:3000/analytics/view_video_post/${id}`)
        }
    }

</script>

<div class="container my-4">
    {#if loading}
        <div class="text-center">
            <div class="spinner-border" role="status" aria-live="polite" aria-label="Cargando resultados">
                <span class="visually-hidden">Cargando...</span>
            </div>
        </div>
    {:else if !loading && error}
        <h2 class="text-center mt-5">{error_msg}</h2>
        <div class="text-center mb-4">
            <a class="text-decoration-none" href="/">Volver a inicio</a>
        </div>
    {:else}
        <!-- Video centrado -->
        <div class="ratio ratio-16x9 mb-3">
            <video controls class="w-100" autoplay loop poster="{video.thumbnail}"  on:play={onPlay}>
                <source src="https://REDACTED.invalid/testvideo.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
            </video>
        </div>

        <!-- Título -->
        <h4 class="fw-bold mb-3">{video.title}</h4>

        <!-- Canal + views -->
        <div class="d-flex align-items-center mb-3">
            <!-- Logo + canal -->
            <div class="d-flex align-items-center gap-2">
                <img src={video.post.Channels.avatar} alt={video.post.Channels.name}
                     class="rounded-circle" style="width:48px;height:48px;">
                <div>
                    <div class="fw-semibold">{video.post.Channels.name}</div>
                </div>
            </div>

            <!-- Views + Like alineados a la derecha -->
            <div class="d-flex align-items-center gap-2 ms-auto">
                <div>{video.views} visualizaciones</div>

                <form method="post" action="http://localhost:3000/analytics/like/{video.post.id}">

                    <button type="submit" class="btn btn-outline-dark d-flex align-items-center gap-1">
                        <i class="bi bi-hand-thumbs-up-fill"></i>
                        {video.post.likes}
                    </button>
                </form>
            </div>

        </div>

        <!-- Descripción -->
        <div class="border rounded p-3 mb-4" style="white-space: pre-line;">
            <!-- Fecha de publicación -->
            <div class="text-muted mb-2">Publicado el {video.post.createdAt}</div>
            {video.description}
        </div>

        <!-- Comentarios (placeholder) -->
        <div class="pt-3">
            <h5>Comentarios</h5>
            <p class="text-muted">Aquí irá la sección de comentarios...</p>
        </div>
    {/if}

</div>
