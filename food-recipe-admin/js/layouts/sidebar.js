export default {
  data() {
    return {
      items: [
        // Dashboard
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Category',
          to: '/categories',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Ingredient',
          to: '/ingredients'
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Recipe',
          to: 'recipes'
        },
        {
          icon:'mdi-view-dashboard',
          title: 'Users',
          to: 'users'
        }

      ],
    };
  },
};
