<template>
  <div class="header">
    <h1>Admin Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: calc(100% - 250px); /* Adjust to account for the sidebar width */
  left: 250px;
  top: 0;
  z-index: 1000;
}
</style>
