<script lang="ts">
    import { SignedIn, SignedOut, SignInButton, UserButton, SignIn } from 'svelte-clerk';
</script>

        <SignedOut>
            <SignIn/>
        </SignedOut>
        <SignedIn>
<!--            todo mostrar info de que?-->
            <UserButton />
        </SignedIn>
