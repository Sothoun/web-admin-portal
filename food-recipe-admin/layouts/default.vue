<template>
  <v-app>
    <v-layout>
      <Header v-if="!route" :submitForm="logout" />
      <Sidebar v-if="!route"/>

      <v-main class="main-content">
        <div class="content">
          <Nuxt />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import Sidebar from '~/components/layouts/Sidebar';
import Header from '@/components/layouts/Header';
// import Footer from '@/components/layouts/Footer';
// import OrbitSpanner from '@/components/loading/OrbitSpanner';

export default {
  name: 'DefaultLayout',
  components: { Sidebar, Header },
  middleware: ['auth'],
  data() {
    return {
      loggedIn: false, // Default to false and update on created
      // Other data properties
    };
  },
  created() {
    this.getToken(); // Set initial loggedIn state
  },
  computed: {
    route() {
      return this.$route.name === 'login'
    }
  },
  methods: {
    async logout() {
      try {
        localStorage.removeItem('token'); // Clear token
        this.loggedIn = false; // Update state
        this.$router.push('/login');
      } catch (err) {
        console.error('Logout failed', err);
      }
    },
    getToken() {
      const token = localStorage.getItem('token');
      this.loggedIn = !!token; // Set loggedIn based on token presence
    }
  }
};

</script>

<style lang="scss">
#app {
  background-color: var(--v-background-base);
}
.main-content {
  margin-top: 5px;
}
//.offline-container {
//  height: calc(100vh - 150px);
//}
</style>
