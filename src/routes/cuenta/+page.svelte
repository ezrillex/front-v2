<script lang="ts">
    import { SignedIn, SignedOut, SignInButton, UserButton, SignIn } from 'svelte-clerk';
    import { useClerkContext } from "svelte-clerk";

    async function getDashboard(){
    const {clerk} = useClerkContext();
    if(clerk) {
        const session = clerk.session; // sesión activa del usuario
        if (!session) {
            console.log("No session found");
        }
        else{
            const token = await session.getToken(); // 🔑 aquí obtienes el JWT
console.log(token);
const api = await fetch('http://localhost:3000/portal/channel', {
    method: 'post',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({ newChannelName: "Canal de Ezra"})
})
            console.log(api.status);
        }
    }
}

</script>

        <SignedOut>
            <SignIn/>
        </SignedOut>
        <SignedIn>
<!--            todo mostrar info de que?-->
            <UserButton />
            {#await getDashboard()}
                <p>Cargando...</p>
            {:then data}
                <p>Resultado: {data}</p>
            {:catch error}
                <p>Error: {error.message}</p>
            {/await}
        </SignedIn>
