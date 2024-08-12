
export default {


  middleware: ['auth'],

  head() {
    return {
      titleTemplate: 'EDIT RECIPE INGREDIENT',
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
    id(){
      return this.$route.params.id;
    }
  },

  methods: {
    async get(){
        const token = localStorage.getItem('token')
        const res = await fetch(`http://localhost:8000/ingredient/${this.id}/detail`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        console.log(res);
        if (res.status === 200 || res.status === '200') {
          const data = await res.json();
          this.ingredients.name = data.ingredients.name;
        }

    },
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.ingredients.name,
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch(`http://localhost:8000/ingredient/${this.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("Ingredients have update success!");
            this.$router.push('/ingredients');
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }
      }
    },

  },

  created() {
    this.get();
  },
};
