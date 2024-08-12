import RecipeIngredientTable from '@/components/tables/RecipeIngredientTable.vue';
export default {
  meta: {
  },

  middleware: ['auth'],

  head() {
    return {
      titleTemplate: "RECIPE Ingredient",
    };
  },

  components: { RecipeIngredientTable },

  data() {
    return {};
  },


};
