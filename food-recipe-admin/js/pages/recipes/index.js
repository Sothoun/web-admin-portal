import CategoryTable from "@/components/tables/CategoryTable";

export default {
  meta: {
  },

  // middleware: ['auth', 'user-permission'],

  head() {
    return {
      titleTemplate: "CATEGORY",
    };
  },

  components: { CategoryTable },

  data() {
    return {};
  },


};
