<script>
  import { colors } from '$lib/stores.js'
  // $: console.log('colors:', colors)
</script>

<!-- {#key colors} -->
<div class="container-main">
  <div class="top-bar">
    <div class="os-window-items">
      <div class="os-window-item bg-red-400" />
      <div class="os-window-item bg-yellow-400" />
      <div class="os-window-item bg-green-400" />
    </div>
  </div>
  <div class="main-container">
    <div
      class="side-nav"
      style="background:{$colors.sidebarBg}; color:{$colors.sidebarText}"
    >
      <div>Company Name</div>
      <div class="bg-gray-500 px-4 py-1 rounded">Find Channel</div>
      <div class="sidebar-container">
        <span class="sidebar-container-header"> Favorites </span>
        <div class="sidebar-container-subcontainer">
          <span class="sidebar-container-subcontainer-item">item one</span>
          <span class="sidebar-container-subcontainer-item">item two</span>
          <span class="sidebar-container-subcontainer-item">item three</span>
        </div>
      </div>
      <div class="sidebar-container">
        <span class="sidebar-container-header"> Notifications </span>
        <div class="sidebar-container-subcontainer">
          <span class="sidebar-container-subcontainer-item">item one</span>
          <span class="sidebar-container-subcontainer-item">item two</span>
          <span class="sidebar-container-subcontainer-item">item three</span>
        </div>
      </div>
      <div class="sidebar-container">
        <span class="sidebar-container-header">Projects</span>
        <div class="sidebar-container-subcontainer">
          <span class="sidebar-container-subcontainer-item">item one</span>
          <span class="sidebar-container-subcontainer-item">item two</span>
          <span class="sidebar-container-subcontainer-item">item three</span>
        </div>
      </div>
      <div class="sidebar-container">
        <span class="sidebar-container-header">Teams</span>
        <div class="sidebar-container-subcontainer">
          <span class="sidebar-container-subcontainer-item">item one</span>
          <span class="sidebar-container-subcontainer-item">item two</span>
          <span class="sidebar-container-subcontainer-item">item three</span>
        </div>
      </div>
    </div>
    <div
      class="center-channel"
      style="background:{$colors.centerChannelBg}; color:{$colors.centerChannelColor}"
    >
      <div class="center-channel-header">
        <span>Town Square</span>
      </div>
      <div
        class="center-channel-main"
        style="background:{$colors.centerChannelBg}; color:{$colors.centerChannelColor}"
      >
        <div class="messages">
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/boy"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender">Ava</span>
              <span class="message-text">Hey, anyone free for lunch?</span>
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/15"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Liam </span>
              <span class="message-text">I'm in! Where are we going?</span>
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/1"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Olivia </span>
              <span class="message-text">How about that new Italian place?</span
              >
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/2"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Noah </span>
              <span class="message-text">Sounds good to me!</span>
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/3"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Emma </span>
              <span class="message-text">Count me in, I love pasta!</span>
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/6"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender">Ava</span>
              <span class="message-text"
                >Perfect, see you all there at noon?</span
              >
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/15"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Sophia </span>
              <span class="message-text">Works for me!</span>
            </div>
          </div>
          <div class="message">
            <img
              class="chat-avatar"
              src="https://avatar.iran.liara.run/public/5"
              alt=""
            />
            <div class="message-content">
              <span class="message-sender"> Jackson </span>
              <span class="message-text">Cool, see you guys then!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="send-message">
        <span>Write to Town Square</span>
      </div>
    </div>
  </div>
</div>

<!-- {/key} -->

<style>
  .container-main {
    @apply fixed max-w-[50%] right-2 w-full self-start flex flex-col rounded-xl shadow-xl overflow-clip;
    transform: translate(0%, 50%);
  }
  .main-container {
    @apply flex w-full;
  }
  .top-bar {
    @apply bg-gray-900 w-full p-2;
  }
  .os-window-items {
    @apply flex gap-1;
  }
  .os-window-item {
    @apply h-[10px] w-[10px] rounded-full;
  }
  .center-channel {
    @apply w-full h-full p-4 flex flex-col gap-8;
  }
  .center-channel-main {
    @apply flex flex-col gap-2;
  }
  .side-nav {
    @apply w-max p-4 flex flex-col gap-4;
  }
  .side-nav > * {
    @apply w-max;
  }
  .sidebar-container {
    @apply flex flex-col gap-2;
  }
  .sidebar-container-header {
    @apply uppercase;
  }
  .sidebar-container-subcontainer {
    @apply flex flex-col;
  }
  .sidebar-container-subcontainer-item {
    @apply pl-4;
  }
  .center-channel-header {
    @apply pb-4 border-b-2 border-gray-200;
  }
  .message {
    @apply flex items-start gap-2;
  }
  .chat-avatar {
    @apply w-[35px] h-[35px] bg-white rounded-full;
  }
  .message-content {
    @apply flex flex-col;
  }
  .send-message {
    @apply p-4 border-2;
  }
  .messages {
    @apply pl-8 flex flex-col gap-4;
  }
</style>
