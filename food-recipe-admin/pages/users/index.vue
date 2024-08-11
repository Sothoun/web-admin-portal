<template>
  <div class="index-page-container">
    <UserTable />
  </div>
</template>

<script>
import index from '@/js/pages/users/index.js';
export default {
  name: 'Users',
  mixins: [index],
};
</script>
