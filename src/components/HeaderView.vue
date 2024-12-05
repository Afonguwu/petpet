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
  <header class="relative flex justify-between">
    <h1 class="mx-auto text-xl">
      <a href="/">
        <img src="/logo.svg" alt="" class="h-10 w-auto" />
        <span class="hidden">PETPET</span>
      </a>
    </h1>
    <button @click="toggleMenu" @touch="toggleMenu" class="absolute inset-y-2 right-3 md:hidden">
      <img src="/google-icons/menu.svg" alt="menu button" />
    </button>
    <nav
      @mouseleave="closeMenu"
      @touchcancel="closeMenu"
      class="absolute end-0 top-full z-0 w-full md:flex"
      :class="{ flex: isMenuOpen, hidden: !isMenuOpen }"
    >
      <div class="align w-full flex-col text-center text-xl text-primary">
        <a class="border-grizzle block border-y py-3.5 hover:bg-secondary" href="#">預約服務</a>
        <a class="border-grizzle block border-b py-3.5 hover:bg-secondary" href="#">成為寵物保母</a>
        <a class="border-grizzle block border-b py-3.5 hover:bg-secondary" href="#">登入</a>
      </div>
    </nav>
  </header>
  <div
    class="mb-3 min-h-[50vh] w-full bg-cover bg-center"
    style="background-image: url(index/index-1.png)"
    role="banner"
  ></div>
</template>
