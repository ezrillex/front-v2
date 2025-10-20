<script lang="ts">
    import { createAuthClient } from 'better-auth/client'

    const authClient = createAuthClient({
        baseURL: 'http://localhost:3000',
    });

    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "http://localhost:5173/auth",
            errorCallbackURL: "http://localhost:5173/auth",
        });
        console.log(data);
    }

    const getSesion = async () => {
        const data = await authClient.getSession()
        console.log(data);
    }

    const testReq = async () => {
        const data = await fetch('http://localhost:3000/dev', {
            method: 'GET',
            credentials: 'include'
        })

        console.log(data);
    }
</script>

<h1>auth page</h1>

<button on:click={()=>signIn()}>INGRESAR</button>

<button on:click={()=>getSesion()}>console log la sesion actual logueada</button>

<button on:click={()=>testReq()}>make test request to back</button>