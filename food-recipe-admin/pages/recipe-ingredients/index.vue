<template>
  <div class="index-page-container">
    <h1>Hello</h1>
    <RecipeIngredientTable />
  </div>
</template>

<script>
import index from '@/js/pages/recipe-ingredients/index.js';
export default {
  name: 'RecipeIngredient',
  mixins: [index],
};
</script>
