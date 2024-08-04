<template>
  <div class="index-page-container">
    <CategoryTable />
  </div>
</template>

<script>
import index from '@/js/pages/categories/index.js';
export default {
  name: 'Category',
  mixins: [index],
};
</script>
