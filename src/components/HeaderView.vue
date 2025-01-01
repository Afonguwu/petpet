<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
<template>
  <header class="relative flex items-center justify-between px-10">
    <h1 class="w-[140px] text-xl max-md:mx-auto">
      <a href="/">
        <img src="/logo.svg" alt="" class="min-h-[2.5rem] w-full" />
        <span class="hidden">PETPET</span>
      </a>
    </h1>
    <button @click="toggleMenu" @touch="toggleMenu" class="absolute inset-y-2 right-3 md:hidden">
      <img src="/google-icons/menu.svg" alt="menu button" />
    </button>
    <nav
      @mouseleave="closeMenu"
      @touchcancel="closeMenu"
      class="end-0 top-full z-0 w-full max-md:absolute md:block md:w-3/5"
      :class="{ flex: isMenuOpen, hidden: !isMenuOpen }"
    >
      <div class="w-full justify-end bg-white text-center text-xl leading-10 text-primary md:flex">
        <a
          class="border-grizzle block py-3.5 align-middle hover:bg-secondary max-md:border-y md:px-5"
          href="#"
          >預約服務</a
        >
        <a class="border-grizzle block py-3.5 hover:bg-secondary max-md:border-b md:px-5" href="#"
          >成為寵物保母</a
        >
        <a class="border-grizzle block py-3.5 hover:bg-secondary max-md:border-b md:px-5" href="#"
          >登入</a
        >
      </div>
    </nav>
  </header>
</template>
