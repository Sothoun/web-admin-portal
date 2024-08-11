

export default {


  // middleware: ['auth', 'user-permission'],

  head() {
    return {
      titleTemplate: 'CREATE INGREDIENT',
    };
  },
  data() {
    return {
      error_messages: [],
      valid: true,
      ingredients: {
        name: null,
        description: null,
        status: 'Active',
      },
      status_options: ['Active', 'Inactive'],
    };
  },

  computed: {
    formData() {
      let formData = new FormData();

      formData.append('name', this.ingredients.name);
      formData.append('description', this.ingredients.description);
      formData.append('status', this.ingredients.status);
      return formData;
    },
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        // const res = await this.$api.productCategory.create(this.formData);
        if (res.success === false) {
          this.$toast.error(res.message);
          this.error_messages = res.data;
        } else {
          this.$toast.success(res.message);
          this.error_messages = [];
          this.resetForm();
        }
      }
    },

    resetForm() {
      this.ingredients.name = null;
      this.ingredients.description = null;
      this.ingredients.status = 'Active';
      this.$refs.form.resetValidation();
    },
  },

  created() {
    console.log("Hello");
  },
};
