<template>
  <v-app>
    <v-layout>
      <Header :submitForm="logout" />
      <Sidebar />

      <v-main class="main-content">
        <div class="content">
          <Nuxt />
        </div>
      </v-main>

      <Loading v-if="isDataLoading" />
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
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },

  data() {
    return {
      is_already_online: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },

  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        localStorage.clear();
        this.$router.push('/login');
      } catch (err) {
        console.log(err);
      }
    },
  },
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
