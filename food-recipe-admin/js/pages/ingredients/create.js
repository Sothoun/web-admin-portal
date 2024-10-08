
export default {
  middleware: ['auth'],

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
      },
      status_options: ['Active', 'Inactive'],
    };
  },

  computed: {

  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.ingredients.name,
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch('http://localhost:8000/ingredient', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("Ingredient have been create success!");
            this.$router.push('/ingredients');
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }
      }
    },

  },

  created() {
  },
};
