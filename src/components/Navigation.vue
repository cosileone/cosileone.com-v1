<template>
  <header
    class="header flex items-center justify-between font-body container mx-auto px-5 shadow-xl rounded-lg md:max-w-7xl fixed top-10 md:top-12 left-0 right-0 flex"
    v-scroll="onScrollHandler"
  >
    <div class="h-16 w-48 flex items-center text-xl">
      <strong>
        <g-link to="/">portfolio.</g-link>
      </strong>
    </div>
    <nav class="nav hidden md:flex">
      <g-link class="nav__link" to="/">Home</g-link>
<!--      <g-link class="nav__link" to="/about/">About</g-link>-->
    </nav>
    <div>
      <button
        :class="[hasScrolled ? 'opacity-100' : 'opacity-0 cursor-default']"
        class="hidden md:inline-flex transition-opacity items-center px-3 py-2 border shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        @click="scrollToTop"
      >
        Back to top
      </button>
      <button
        class="hidden md:inline-flex inline-flex ml-4 items-center px-3 py-2 border border-gray-50 text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Contact me
      </button>
      <button
        @click.stop="isMenuOpen = !isMenuOpen"
        class="sm:inline-flex md:hidden items-center px-2 py-2 border shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg v-if="!isMenuOpen" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
        </svg>
        <svg v-else class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isMenuOpen"
        v-click-outside="closeMenu"
        class="block md:hidden origin-top-right absolute top-16 right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1 text-center" role="none">
          <g-link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem">Home
          </g-link>
          <g-link to="/about/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem">About
          </g-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import {debounce} from 'lodash-es';
import {scroll, clickOutside} from '~/directives'

export default {
  name: "Navigation",
  directives: {
    scroll,
    clickOutside,
  },
  data() {
    return {
      hasScrolled: false,
      isMenuOpen: false,
    };
  },
  computed: {},
  methods: {
    onScrollHandler: debounce(function () {
      this.hasScrolled = window.scrollY > 0;
    }, 225),
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
}
</script>

<style scoped>
.header {
  background-color: white;
  /*box-shadow: rgba(0, 0, 0, 0.07) 0px 24px 32px -8px, rgba(0, 0, 0, 0.03) 0px 4px 32px 0px*/
  width: 80%;
}

.nav {
}

.nav__link {
  @apply text-sm px-4 py-2 font-medium rounded hover:bg-gray-100 transition-colors;
  margin-left: 20px;
}

.hamburger-button {

}
</style>
