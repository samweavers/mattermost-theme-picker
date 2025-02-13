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
</script>

<header class="color-picker w-full max-w-[30%]">
  <nav class="container mx-auto flex flex-col w-full p-8 gap-4 relative">
    <h2 class="text-2xl bg-slate-900 text-white rounded-lg p-8 shadow-lg z-10">
      Choose your colors below
    </h2>
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Center Channel
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('center') ) as [key, value]}
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
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Sidebar
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('sidebar') ) as [key, value]}
      <div class="color-picker-container">
        <span class="color-picker-label">{key}</span>
        <ColorPicker
          class="color-picker"
          components={ChromeVariant}
          hex={value}
          on:input={(e) => updateColor(key, e.detail.hex)}
          sliderDirection="horizontal"
        />
      </div>
    {/each}
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Mentions
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('mention') ) as [key, value]}
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
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Indicators
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => key.includes('Indicator') ) as [key, value]}
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
    <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Links & Buttons
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => ['link', 'button'].some( (word) => key.includes(word) ) ) as [key, value]}
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
        <h2 class="text-xl bg-slate-500 text-white rounded-lg p-2 shadow-lg z-10">
      Miscellaneous
    </h2>
    {#each Object.entries($colors).filter( ([key, value]) => ['sidebar','center','mention','Indicator','link', 'button','codeTheme'].every( (word) => !key.includes(word) ) ) as [key, value]}
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
  </nav>
</header>

<style lang="scss">
  .color-picker-container {
    @apply p-4 z-10 bg-white border-2 rounded-lg flex  flex-col items-start min-w-[300px];
  }
  textarea {
    @apply border-[2px] border-slate-900 rounded-lg bg-slate-100 p-4 min-h-[400px];
  }
</style>
