<script>
    export let id = "";
    // todo fetch based on id, as home wont have all this data for optimization. and if coming from other sources.
    export let duration = "";
    export let title = "";
    export let channel = "";
    export let avatar = ""
    // export let subscribers = "";
    export let views = "";
    export let timeAgo = "";
    export let thumbnail = "";
</script>

<style>
    .thumb { position:relative; aspect-ratio:16/9; background:#e9ecef; }
    .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    .duration { position:absolute; bottom:4px; right:6px; background:rgba(0,0,0,0.8); color:#fff; padding:2px 6px; border-radius:4px; font-size:12px; }
    .title{font-size:14px;font-weight:600;color:#212529}
    .channel{font-size:13px;color:#6c757d}
    .views{font-size:12px;color:#adb5bd}
</style>

<div class="col-sm-6 col-md-4 col-lg-3">
    <a href="/video/{id}" class="text-decoration-none text-reset d-block">
        <div class="card h-100">
            <div class="thumb">
                <img src="{thumbnail}" alt="" />
                <div class="duration">{duration}</div>
            </div>

            <div class="card-body d-flex gap-2 align-items-center">
                <img src="{avatar}" alt="Logo"
                     class="rounded-circle" style="width:48px;height:48px;">
                <div>
                <div>
                    <div class="title">{title}</div>
                    <div class="channel">{channel}</div>
                    <div class="views d-flex flex-wrap align-items-center">
                        <div class="me-2">{views}</div>
                        <div class="flex-grow-1">{timeAgo}</div>
                    </div>



                </div>
            </div>
</div>
        </div>
    </a>

</div>
