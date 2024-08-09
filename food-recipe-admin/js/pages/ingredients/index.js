import IngredientTable from '@/components/tables/IngredientTable.vue';

export default {
  meta: {
  },

  // middleware: ['auth', 'user-permission'],

  head() {
    return {
      titleTemplate: "Ingredient",
    };
  },

  components: { IngredientTable },

  data() {
    return {};
  },


};
