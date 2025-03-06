<script>
  import { colors } from '$lib/stores.js'
</script>

<div class="right fixed top-4">
  <div class="container-main">
    <div class="top-bar">
      <div class="os-window-items">
        <div class="os-window-item bg-red-400" />
        <div class="os-window-item bg-yellow-400" />
        <div class="os-window-item bg-green-400" />
      </div>
    </div>
    <div
      class="top-bar2 px-4 py-2 justify-between gap-4"
      style="background:{$colors.sidebarTeamBarBg}; color:{$colors.sidebarHeaderTextColor}"
    >
      <div class="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          {...$$props}
          ><path
            fill="currentColor"
            d="M3 21h4.675v-4.675H3zm6.675 0h4.65v-4.675h-4.65zm6.65 0H21v-4.675h-4.675zM3 14.325h4.675v-4.65H3zm6.675 0h4.65v-4.65h-4.65zm6.65 0H21v-4.65h-4.675zM3 7.675h4.675V3H3zm6.675 0h4.65V3h-4.65zm6.65 0H21V3h-4.675z"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          {...$$props}
          ><path
            fill="currentColor"
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16zm-3-5h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2"
          /></svg
        >
        <span class="font-semibold text-xl">Channels</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          {...$$props}
          ><path
            fill="currentColor"
            d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          {...$$props}
          ><path
            fill="currentColor"
            d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
          /></svg
        >
      </div>
      <div class="flex gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 20 20"
          {...$$props}
          ><path
            fill="currentColor"
            fill-rule="evenodd"
            d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0a4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657a.75.75 0 0 0-1.06-1.06a6.5 6.5 0 0 1-9.193 0M10 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
            clip-rule="evenodd"
          /></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          {...$$props}
          ><g class="bookmark-outline"
            ><path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5 6.09A3.09 3.09 0 0 1 8.09 3h7.82A3.09 3.09 0 0 1 19 6.09v13.697c0 1.336-1.597 2.024-2.568 1.107L12 16.71l-4.432 4.185c-.97.918-2.568.229-2.568-1.107V6.091ZM8.09 5A1.09 1.09 0 0 0 7 6.09v12.59l3.954-3.735a1.523 1.523 0 0 1 2.091 0L17 18.68V6.09A1.09 1.09 0 0 0 15.91 5z"
              class="Vector"
              clip-rule="evenodd"
            /></g
          ></svg
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 512 512"
          {...$$props}
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
          /></svg
        >
        <div class="relative">
          <img
            class="chat-avatar"
            src="https://avatar.iran.liara.run/public/boy"
            alt=""
          />
          <div
            class="indicator dnd"
            style="background: {$colors.dndIndicator}"
          ></div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <div
        class="side-nav"
        style="background:{$colors.sidebarBg}; color:{$colors.sidebarText}"
      >
        <div class="font-bold" style="color:{$colors.sidebarHeaderTextColor}">
          Company Name
        </div>
        <div
          style="background-color:{$colors.sidebarText}20;"
          class="px-4 mr-4 py-1 rounded text-sm"
        >
          Find Channel
        </div>
        <div class="sidebar-container">
          <span class="sidebar-container-header"> Favorites </span>
          <div class="sidebar-container-subcontainer">
            <span
              style="border-color: {$colors.sidebarTextActiveBorder}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}; background: {$colors.sidebarTextActiveColor}"
              class="sidebar-container-subcontainer-item">Town Square</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg};"
              class="sidebar-container-subcontainer-item">item two</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item three</span
            >
          </div>
        </div>
        <div class="sidebar-container">
          <span class="sidebar-container-header"> Notifications </span>
          <div class="sidebar-container-subcontainer">
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item one</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item two</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item"
              ><span
                class="sidebar-unread"
                style="color:{$colors.sidebarUnreadText}"
              >
                item three
              </span></span
            >
          </div>
        </div>
        <div class="sidebar-container">
          <span class="sidebar-container-header">Projects</span>
          <div class="sidebar-container-subcontainer">
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item one</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item two</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item three</span
            >
          </div>
        </div>
        <div class="sidebar-container">
          <span class="sidebar-container-header">Teams</span>
          <div class="sidebar-container-subcontainer">
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item one</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item two</span
            >
            <span
              style="border-color: {$colors.sidebarBg}; --hover-bg: {$colors.sidebarTextHoverBg}; --hover-active-border: {$colors.sidebarTextHoverBg}"
              class="sidebar-container-subcontainer-item">item three</span
            >
          </div>
        </div>
        <div
          class="mention-callout py-2 w-full flex items-center rounded-md absolute max-w-[145px] bottom-5 left-2"
          style="background-color: {$colors.mentionBg};"
        >
          <span
            class="mention-text font-bold text-center mx-auto"
            style="color: {$colors.mentionColor}">More unreads</span
          >
        </div>
      </div>
      <div
        class="center-channel"
        style="background:{$colors.centerChannelBg}; color:{$colors.centerChannelColor}"
      >
        <div class="center-channel-header">
          <span class="font-bold">Town Square</span>
          <div
            class="px-3 py-2 rounded"
            style="background: {$colors.buttonBg}; color:{$colors.buttonColor}"
          >
            Button
          </div>
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
              <div
                class="indicator dnd"
                style="background: {$colors.dndIndicator}"
              ></div>
              <div class="message-content">
                <span class="message-sender">Ava</span>
                <span class="message-text"
                  >Hey, <span
                    style="background:{$colors.mentionHighlightBg}"
                    class="mention-highlight">@everyone</span
                  > anyone free for lunch?</span
                >
              </div>
            </div>
            <div class="message">
              <img
                class="chat-avatar"
                src="https://avatar.iran.liara.run/public/15"
                alt=""
              />
              <div
                class="indicator online"
                style="background: {$colors.onlineIndicator}"
              ></div>
              <div class="message-content">
                <span class="message-sender"> Liam</span>
                <span class="message-text">I'm in! Where are we going?</span>
              </div>
            </div>
            <div class="message">
              <img
                class="chat-avatar"
                src="https://avatar.iran.liara.run/public/1"
                alt=""
              />
              <div
                class="indicator online"
                style="background: {$colors.onlineIndicator}"
              ></div>
              <div class="message-content">
                <span class="message-sender"> Olivia </span>
                <span class="message-text"
                  >How about that new Italian place?</span
                >
              </div>
            </div>
            <div class="message">
              <img
                class="chat-avatar"
                src="https://avatar.iran.liara.run/public/2"
                alt=""
              />
              <div
                class="indicator dnd"
                style="background: {$colors.awayIndicator}"
              ></div>
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
              <div
                class="indicator online"
                style="background: {$colors.onlineIndicator}"
              ></div>
              <div class="message-content">
                <span class="message-sender"> Emma </span>
                <span class="message-text"
                  >Count me in, <span
                    style="background:{$colors.mentionHighlightBg}"
                    class="mention-highlight">@Ava</span
                  > I love pasta!</span
                >
              </div>
            </div>
            <div class="message">
              <img
                class="chat-avatar"
                src="https://avatar.iran.liara.run/public/6"
                alt=""
              />
              <div
                class="indicator dnd"
                style="background: {$colors.dndIndicator}"
              ></div>
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
              <div
                class="indicator online"
                style="background: {$colors.onlineIndicator}"
              ></div>
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
              <div
                class="indicator online"
                style="background: {$colors.onlineIndicator}"
              ></div>
              <div class="message-content">
                <span class="message-sender"> Jackson </span>
                <span class="message-text"
                  >Cool, see you guys then! Here's the <span
                    style="color: {$colors.linkColor}">link</span
                  > to their menu</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="send-message"
          style="border: 2px solid {$colors.centerChannelColor}44;"
        >
          <span style="opacity: 44%;">Write to Town Square</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .container-main {
    @apply w-full self-start flex flex-col rounded-xl shadow-xl overflow-clip;
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
    @apply w-full pl-4 pb-4 relative flex flex-col gap-4 max-w-[160px];
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
    @apply border-l-4 px-4 py-[4px] -ml-4;
  }
  .sidebar-container-subcontainer-item:hover {
    border-left: 4px solid var(--hover-active-border) !important;
    background: var(--hover-bg);
  }
  .center-channel-header {
    @apply pb-4 border-b-2 border-gray-200 flex items-center justify-between;
  }
  .message {
    @apply relative flex items-start gap-4;
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
  .message-sender {
    @apply font-bold;
  }
  .indicator {
    @apply w-[15px] h-[15px] absolute top-[23px] left-[23px] rounded-full;
  }
  .mention-highlight {
    @apply rounded;
  }
  .top-bar2 {
    @apply flex items-center;
  }
  .sidebar-unread {
    @apply font-semibold;
  }
  .right {
    @apply flex gap-8 flex-col w-full;
  }
</style>
