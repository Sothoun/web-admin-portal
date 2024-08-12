import IngredientTable from '@/components/tables/IngredientTable.vue';

export default {
  meta: {
  },

  middleware: ['auth'],

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
