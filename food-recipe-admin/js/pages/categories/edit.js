
export default {


  middleware: ['auth'],

  head() {
    return {
      titleTemplate: 'EDIT CATEGORY',
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
    id(){
      return this.$route.params.id;
    }
  },

  methods: {
    async get(){
        const token = localStorage.getItem('token')
        const res = await fetch(`http://localhost:8000/categories/${this.id}/detail`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        console.log(res);
        if (res.status === 200 || res.status === '200') {
          const data = await res.json();
          this.categories.name = data.category.name;
        }

    },
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.categories.name,
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch(`http://localhost:8000/categories/${this.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("Category have update success!");
            this.$router.push('/categories')
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }
      }
    },

    resetForm() {
      this.categories.name = null;
      this.$refs.form.resetValidation();
    },
  },

  created() {
    this.get();
  },
};
