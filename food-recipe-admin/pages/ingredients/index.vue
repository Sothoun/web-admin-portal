<template>
  <div class="index-page-container">
    <IngredientTable />
  </div>
</template>

<script>
import index from '@/js/pages/ingredients/index.js';
export default {
  name: 'Ingredient',
  mixins: [index],
};
</script>
