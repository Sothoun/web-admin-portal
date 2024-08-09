
export default {


  // middleware: ['auth', 'user-permission'],

  head() {
    return {
      titleTemplate: 'CREATE CATEGORY',
    };
  },
  data() {
    return {
      error_messages: [],
      valid: true,
      categories: {
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

      formData.append('name', this.categories.name);
      formData.append('description', this.categories.description);
      formData.append('status', this.categories.status);
      formData.append('parent_id', this.categories.parent_id);
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
      this.categories.name = null;
      this.categories.description = null;
      this.categories.status = 'Active';
      this.$refs.form.resetValidation();
    },
  },

  created() {
    console.log("Hello");
  },
};
