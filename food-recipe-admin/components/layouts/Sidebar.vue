<template>
  <div id="sidebar">
    <v-navigation-drawer permanent clipped fixed app width="250">
      <div class="container">
        <v-img class="logo"
        :src="`${require('~/assets/images/logo/logo.avif')}`
        "
        alt=""
        max-width="50"
        max-height="50"
        contain
      ></v-img>
        <h4 class="app-title ml-3">{{ ('Food Recipe') }}</h4>
      </div>
      <v-list expand nav dense>
        <template v-for="(item, i) in items">
          <!--Main Menu-->
              <template>
                <v-list-item :key="i" :to="item.to" color="primary" router exact exact-path>
                  <v-list-item-icon>
                    <v-icon :size="22">{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title class="sidebar-title">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </template>
            </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import sidebar from '@/js/layouts/sidebar.js';

export default {
  name: 'AppSidebar',
  mixins: [sidebar],
};
</script>

<style lang="scss" scoped>
.main-app-logo {
  cursor: pointer;
}

.v-navigation-drawer__border {
  width: 0.8px;
}

.v-application--is-ltr .v-list--dense .v-list-group--sub-group .v-list-group__header {
  padding-left: 10px !important;
}

#sidebar {
  .sidebar-title {
    white-space: initial;
  }

  .v-list-group--no-action > .v-list-group__items > .v-list-item {
    padding-left: 10px !important;
  }

  .v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
    min-width: 28px !important;
  }

  .v-list-item__action:first-child,
  .v-list-item__icon:first-child {
    margin-right: 10px !important;
  }

  .v-list-item__content .v-list-item__title {
    font-family: 'Popins', 'montserrat-bold', serif;
    font-size: 13px;
    line-height: 2;
    letter-spacing: 1px;
  }
  .v-list-group--sub-group .v-list-group__items {
    padding-left: 10px;
  }

  //Scrollbar
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: $bg-sidebar-scrollbar-track;
  }

  ::-webkit-scrollbar-thumb {
    background: $bg-sidebar-scrollbar-thumb;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: $bg-sidebar-scrollbar-thumb-hover;
  }
}
.item-nav-group-mini .v-list-item {
  padding-left: 25px !important;
}
.logo{
  padding: 5px;
  border-radius: 50%; /* Makes the image circular */
            object-fit: cover;
}

.container{
  display: flex;
  font-weight: bolder;
  align-items: center;
  font-size: 25px;

}
</style>
