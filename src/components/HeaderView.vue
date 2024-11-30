<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <header class="relative flex justify-between">
    <h1 class="max-md:mx-auto">
      <a href="#">PETPET</a>
    </h1>
    <a @click="toggleMenu" class="absolute inset-y-5 right-5 md:hidden" href="ms-auto" type="button"
      ><img src="/google-icons/menu.svg" alt="menu button"
    /></a>
    <nav
      class="absolute bottom-0 end-0 z-0 md:flex"
      :class="{ flex: isMenuOpen, hidden: !isMenuOpen }"
    >
      <ul class="flex sm:flex-row">
        <li><a href="#">預約服務</a></li>
        <li><a href="#">成為寵物保母</a></li>
        <li><a href="#">登入</a></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
h1 {
  width: 50%;
  max-width: 140px;
}
h1 a {
  background-image: url(/logo.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 3rem;
  height: auto;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
</style>
