<template>
  <div class="d-flex flex-column h-100">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../layout/Navbar.vue'
export default {
  name: 'MainLayout',
  components: {
    Navbar
  }
}
</script>