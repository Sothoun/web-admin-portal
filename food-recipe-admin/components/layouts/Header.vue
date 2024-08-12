<template>
  <div class="header">
    <div class="text-end">
      <v-img
        :src="require('~/assets/images/logo/profile.jpg')"
        width="45"
        height="45"
        contain
        alt=""
        @click="$router.push('/')"
      ></v-img>
    </div>
      <div>
      <v-menu offset-y :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" min-width="35" text class="notification-button">
            <v-badge color="red" dot>
              <v-icon size="20">{{ 'mdi-bell' }}</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-menu>
    </div>
    <div>
      <v-icon @click="logout()">mdi-login-variant</v-icon>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{

    }
  },
  methods:{
    logout() {
      try {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.$router.push('/login')
      } catch (err) {
        console.error('Logout failed', err);
      }
    },
  }
}
</script>

<style scoped>
.header {
  background-color: #212222;
  color: white;
  padding: 15px;
  position: fixed;
  width: calc(100% - 250px); /* Adjust to account for the sidebar width */
  left: 250px;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Aligns items to the right */
}

.header-content {
  display: flex;
  /* align-items: center; */
}

.header-content > * {
  margin: 0; /* Remove all margins */
  padding: 0; /* Remove all paddings */
}

.notification-button {
  margin-left: 4px; /* Adjust this value to control spacing precisely */
}
</style>
