<template>
  <div v-if="!loggedIn" class="container">
    <v-form class="login" v-model="valid" ref="form" lazy-validation>

  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <v-row>
    <v-col cols="12">
                    <label class="custom-label label"
                      >Username
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="username"
                      :placeholder="'Username'"
                      v-bind="input_option"
                      :rules="[required('Username')]"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Password
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="password"
                      :placeholder="'Password'"
                      type="password"
                      v-bind="input_option"
                      :rules="[required('Password')]"
                    >
                    </v-text-field>
                    </v-col>
  </v-row>
  <v-btn class="action" color="primary" @click="submit" :disabled="isDataLoading">
            {{ 'Login' }}</v-btn
          >
  <div class="links">
    <a href="#">Forgot password</a>
    <a href="#">Register</a>
  </div>
</v-form>
  </div>
</template>
<script>
  export default{
  head() {
    return {
      titleTemplate: 'LOGIN',
    };
  },
  data() {
    return {
      username: '',
      password: '',
      valid: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
  watch: {
    loggedIn() {
      if (this.$store.state.auth.loggedIn) {
        this.$router.push('/categories');
      }
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const data = {
          username: this.username,
          password: this.password
        };

        try {
          const res = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

          console.log({ res })
          if (res.ok) {
            const data = await res.json();
            this.$toast.success("Login success!");
            this.$store.commit('SET_LOGGED_IN', true);
            this.$router.push('/categories');
            localStorage.setItem('token', data.token);
          } else {
            this.$toast.error("Invalid username or password");
            this.$router.push('/login');
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }
      }
    },
    reloadPage() {
      this.$router.replace(this.$route.path);
    }
  },

}
</script>



<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

body {
  background: #c0c0c0;
  font-family: Raleway, sans-serif;
  color: #666;
}


.login {
  margin: 80px auto;
  padding: 40px 50px;
  max-width: 400px;
  border-radius: 5px;
  background: #13141b;
  box-shadow: 1px 1px 1px #666;
}
  .login input {
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 14px 12px;
    font-size: 16px;
    border-radius: 2px;
    font-family: Raleway, sans-serif;
  }

.login input[type=text],
.login input[type=password] {
  border: 1px solid #c0c0c0;
  transition: .2s;
}

.login input[type=text]:hover {
  border-color: #F44336;
  outline: none;
  transition: all .2s ease-in-out;
}

.login input[type=submit] {
  border: none;
  background: #EF5350;
  color: white;
  font-weight: bold;
  transition: 0.2s;
  margin: 20px 0px;
}

.action{
  border: none;
  background: #EF5350;
  color: white;
  font-weight: bold;
  transition: 0.2s;
  margin: 20px 0px;
  width: 100%;
}

.login input[type=submit]:hover {
  background: #F44336;
}

  .login h2 {
    margin: 20px 0 0;
    color: #EF5350;
    font-size: 28px;
  }

.login p {
  margin-bottom: 40px;
}

.links {
  display: table;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #c0c0c0;
  margin-bottom: 10px;
}

.links a {
  display: table-cell;
  padding-top: 10px;
}

.links a:first-child {
  text-align: left;
}

.links a:last-child {
  text-align: right;
}

  .login h2,
  .login p,
  .login a {
    text-align: center;
  }

.login a {
  text-decoration: none;
  font-size: .8em;
}

.login a:visited {
  color: inherit;
}

.login a:hover {
  text-decoration: underline;
}
</style>
