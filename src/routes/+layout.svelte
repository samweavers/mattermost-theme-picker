<script>
  import '../app.css'
  import '../fonts.css'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <title>Mattermost Theme Picker</title>
  <meta name="description" content="Customize your Mattermost theme colors." />
</svelte:head>

<div class="min-h-screen flex flex-row gap-8">
  <Nav />

  <main class="flex flex-col container mx-auto p-4">
    <slot />
  </main>
</div>
