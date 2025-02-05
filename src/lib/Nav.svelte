<script>
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker'
  import { colors } from '$lib/stores.js'

  function updateColor(key, value) {
    $colors = { ...$colors, [key]: value }
  }

  function copy() {
    let textarea = document.getElementById('textarea')
    textarea.select()
    document.execCommand('copy')
  }

  $: console.log('colorTest:', $colors)
</script>

<header class="color-picker w-full">
  <nav class="container mx-auto flex flex-col w-full p-8 gap-4 relative">
    <h2 class="text-2xl bg-slate-900 text-white rounded-lg p-8 shadow-lg z-10">
      Choose your colors below
    </h2>
    {#each Object.entries($colors) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{key} </span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <textarea name="" id="">
      {JSON.stringify($colors)}
    </textarea>
  </nav>
</header>

<style lang="scss">
  .color-picker-container {
    @apply p-4 border-2 rounded flex flex-col items-start min-w-[300px];
  }
  textarea {
    @apply border-[2px] border-slate-900 rounded-lg bg-slate-100 p-4 min-h-[400px];
  }
</style>
