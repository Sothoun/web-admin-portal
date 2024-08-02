<template>
  <div class="admin-layout">
    <Sidebar />
    <div class="main">
      <Header />
      <div class="main-content">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layouts/Sidebar.vue'
import Header from '~/components/layouts/Header.vue'

export default {
  components: {
    Sidebar,
    Header
  }
}
</script>

<style scoped>
.admin-layout {
  display: flex;
}

.main {
  margin-left: 250px; /* Adjust to account for the sidebar width */
  padding-top: 60px; /* Adjust to account for the header height */
  width: 100%;
}

.main-content {
  padding: 20px;
}
</style>
