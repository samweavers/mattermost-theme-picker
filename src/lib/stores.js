import { writable } from 'svelte/store'

export const colors = writable({
  awayIndicator: '#e0b333',
  buttonBg: '#d1a317',
  buttonColor: '#ffffff',
  centerChannelBg: '#203038',
  centerChannelColor: '#ffffff',
  codeTheme: 'basecamp',
  dndIndicator: '#ff0000',
  errorTextColor: '#f74344',
  linkColor: '#d1a317',
  mentionBg: '#1c58d9',
  mentionBj: '#ffffff',
  mentionColor: '#ffffff',
  mentionHighlightBg: '#d1a317',
  mentionHighlightLink: '#ffffff',
  newMessageSeparator: '#d1a317',
  onlineIndicator: '#1bba56',
  sidebarBg: '#141f23',
  sidebarHeaderBg: '#141f23',
  sidebarHeaderTextColor: '#ffffff',
  sidebarTeamBarBg: '#141f23',
  sidebarText: '#ffffff',
  sidebarTextActiveBorder: '#32CD32',
  sidebarTextActiveColor: '#1bba56',
  sidebarTextHoverBg: '#d1a317',
  sidebarUnreadText: '#32CD32'
})
