
export default {


  middleware: ['auth'],

  head() {
    return {
      titleTemplate: 'CREATE USERS',
    };
  },
  data() {
    return {
      error_messages: [],
      valid: true,
      show_password: false,
      users: {
        username: null,
        email: null,
        password: null,
      },
      status_options: ['Active', 'Inactive'],
    };
  },

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          username: this.users.username,
          email: this.users.email,
          password: this.users.password,
        };

        try {
          const token = localStorage.getItem('token')
          const res = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (res.ok) {
            this.$toast.success("User have been success!");
            this.$router.push('/users');
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
