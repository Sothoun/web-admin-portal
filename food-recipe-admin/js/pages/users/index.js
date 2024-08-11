import UserTable from "@/components/tables/UserTable";

export default {
  meta: {
  },

  // middleware: ['auth', 'user-permission'],

  head() {
    return {
      titleTemplate: "USERS",
    };
  },

  components: { UserTable },

  data() {
    return {};
  },


};
