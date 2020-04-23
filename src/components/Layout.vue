<template>
  <div class="layout-wrapper">
    <NavBar />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  name: 'Layout',
  components: { NavBar, Footer }
}
</script>

<style>
@import '../assets/styles/style.scss';
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  background-image: url('../assets/desktop-background-top.svg');
  background-position: 0 -50px;
  background-size: contain;
}
</style>