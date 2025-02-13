import { writable } from 'svelte/store'

export const colors = writable({
  centerChannelBg: '#203038',
  centerChannelColor: '#ffffff',
  sidebarBg: '#141f23',
  sidebarText: '#eceaea',
  sidebarTextHoverBg: '#d1a317',
  sidebarUnreadText: '#ffffff',
  sidebarTeamBarBg: '#141f23',
  sidebarHeaderBg: '#141f23',
  sidebarHeaderTextColor: '#ffffff',
  sidebarTextActiveBorder: '#d1a317',
  sidebarTextActiveColor: '#d1a31750',
  mentionHighlightBg: '#d1a317',
  mentionBg: '#d1a317',
  mentionColor: '#ffffff',
  buttonBg: '#d1a317',
  buttonColor: '#ffffff',
  linkColor: '#d1a317',
  newMessageSeparator: '#d1a317',
  onlineIndicator: '#1bba56',
  awayIndicator: '#e0b333',
  dndIndicator: '#f74344',
  errorTextColor: '#f74344',
  codeTheme: 'custom'
})
