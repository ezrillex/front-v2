<script>
    import Videocard from '../components/videocard.svelte'
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
    <h2 class="h5">Recomendados</h2>
    <div class="text-muted small">Mostrando 48 resultados</div>
</div>

<div class="row g-3">
    {#each posts as post}
        <Videocard
                id="{post.video.id}"
                title={post.video.title}
                channel={post.Channels.name}
                duration={post.video.duration}
                avatar={post.Channels.avatar}
                views="{post.video.views} visualizaciones"
                timeAgo="Hace 2 dias"
                thumbnail="{post.video.thumbnail}"
        />
    {/each}
</div>