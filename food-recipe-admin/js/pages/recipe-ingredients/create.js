
export default {
  middleware: ['auth'],

  head() {
    return {
      titleTemplate: 'CREATE RECIPE INGREDIENT',
    };
  },
  data() {
    return {
      error_messages: [],
      valid: true,
      recipeId: null,
      ingredientId: null,
      quantity: 0,
      unit: null,
      recipes: [],
      ingredients:[],
      status_options: ['Active', 'Inactive'],
    };
  },

  computed: {

  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          recipeId : this.recipeId,
          ingredientId: this.ingredientId,
          quantity: this.quantity,
          unit: this.unit
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch('http://localhost:8000/recipe-ingredient', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("Ingredient have been create success!");
            this.$router.push('/recipe-ingredients');
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }
      }
    },

    async getRecipe(){
      try {
        const token = localStorage.getItem('token');

        const res = await fetch(`http://localhost:8000/recipe`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          this.recipes = data.recipe.data;
        } else {
          throw new Error('Failed to fetch ingredients');
        }
      } catch (err) {
        console.error('Error fetching ingredients:', err);
      }
    },

    async getIngredient(){
      try {
        const token = localStorage.getItem('token');

        const res = await fetch(`http://localhost:8000/ingredient`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          this.ingredients = data.recipe.data;
        } else {
          throw new Error('Failed to fetch ingredients');
        }
      } catch (err) {
        console.error('Error fetching ingredients:', err);
      }
    }

  },

  created() {
    this.getRecipe();
    this.getIngredient();
  },
};
