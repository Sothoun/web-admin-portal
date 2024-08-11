
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
        const data = {
          name: this.categories.name,
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch('http://localhost:8000/categories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("Created success!");
            this.$router.push('/categories')
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
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
