<script>
  import ColorPicker, { ChromeVariant } from 'svelte-awesome-color-picker'
  import { colors } from '$lib/stores.js'

  function titlize(el) {
    return (
      el.charAt(0).toUpperCase() +
      el
        .slice(1)
        .split(/(?=[A-Z])/)
        .join(' ')
    )
  }

  function updateColor(key, value) {
    $colors = { ...$colors, [key]: value }
  }

  let copyButtonText = 'copy'
  function copyTheme() {
    document.querySelector('textarea').select()
    document.execCommand('copy')
    copyButtonText = 'copied!'

    setTimeout(() => {
      copyButtonText = 'copy' // Revert to original text
    }, 2000)
  }
</script>

<header class="color-picker w-full max-w-[30%]">
  <nav class="container mx-auto flex flex-col w-full p-8 gap-4 relative">
    <h2 class="text-2xl bg-slate-900 text-white rounded-lg p-8 shadow-lg">
      Choose your colors below
    </h2>
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Center Channel
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('center') ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)} </span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Sidebar
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('sidebar') ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Mentions
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('mention') ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Indicators
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('Indicator') ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Links & Buttons
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => ['link', 'button'].some( (word) => key.includes(word) ) ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg">
      Miscellaneous
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => ['sidebar', 'center', 'mention', 'Indicator', 'link', 'button', 'codeTheme'].every((word) => !key.includes(word)) ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{titlize(key)}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <div class="copy-theme">
      <div
        class=" bg-slate-900 rounded-lg p-8 shadow-lg flex gap-8 items-center"
      >
        <h2 class="text-2xl text-white">Copy your theme</h2>
        <button
          on:click={copyTheme}
          class="bg-white rounded-lg text-slate-900 text-sm px-4 py-1 hover:bg-slate-100"
          >{copyButtonText}</button
        >
      </div>
      <textarea name="" id="">
        {JSON.stringify($colors)}
      </textarea>
    </div>
  </nav>
</header>

<style lang="scss">
  .color-picker-container {
    @apply p-4 bg-white border-2 rounded-lg flex  flex-col items-start min-w-[300px];
  }
  textarea {
    @apply border-[2px] border-slate-900 rounded-lg bg-slate-100 p-4 min-h-[400px];
  }

  .copy-theme {
    @apply grid gap-4 w-full;
  }
</style>
