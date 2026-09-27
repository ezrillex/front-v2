<script >
    import { onMount } from "svelte"


let client;
    onMount(async () => {
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
const torrentId = 'magnet:?xt=urn:btih:5732cb2133e57bab347ed01e1ec05db64fa3fae5&dn=test+video.mp4&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'
        // const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
        const WebTorrent = (await import('https://cdn.jsdelivr.net/npm/webtorrent@2.8.4/dist/webtorrent.min.js')).default;
        const client = new WebTorrent()

        console.log(client)
        // see tutorials.md for a full example of streaming media using service workers
        console.log(navigator)
        const d = await navigator.serviceWorker.register('sw.min.js')
        console.log('d')
        console.log(d)
        console.log(navigator.serviceWorker.ready)
        const controller = await navigator.serviceWorker.ready
        console.log(client)
console.log('controller')
        console.log(controller.active)
        if(controller.active === null){
            console.warn('controller failed to activate')
            return
        }
        while(controller.active.state != "activated"){
            await delay(100)
        }
        client.createServer({ controller })
        console.log(client)


        // navigator.serviceWorker.register('./sw.min.js', { scope: './' }).then(reg => {
        //     const worker = reg.active || reg.waiting || reg.installing
        //     function checkState (worker) {
        //         return worker.state === 'activated' && download(client.createServer({ controller: reg }))
        //     }
        //     if (!checkState(worker)) {
        //         worker.addEventListener('statechange', ({ target }) => checkState(target))
        //     }
        // })

        // // 🔑 Esperar a que la página esté controlada por el SW
        // if (!navigator.serviceWorker.controller) {
        //     console.log("SW instalado, recargando para tomar control...");
        //     location.reload()
        //     return;
        // }

        console.log("Service Worker listo y controlando")
        //THEN DO whatever fetch here after reload then


        client.add(torrentId, torrent => {
            torrent.on('wire', (wire)=>{
                console.log(wire)
            })

            // Torrents can contain many files. Let's use the .mp4 file
            const file = torrent.files.find(file => {
                return file.name.endsWith('.mp4')
            })
            if(file) {
                // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
                // file.streamTo(document.querySelector('video'))
                const video = document.querySelector('video')
                video.src = file.streamURL
                console.log(file.streamURL)
            }

        })
    })





</script>


<h1>testing</h1>

<!--<video-->
<!--        controls-->
<!--        muted-->
<!--autoplay-->
<!--width="640"-->
<!--height="360"-->
<!--&gt;</video>-->

<div class="ratio ratio-16x9 w-50  mb-3">
    <media-theme-yt>
        <video
                slot="media"
                playsinline

        ></video>
    </media-theme-yt>
</div>
