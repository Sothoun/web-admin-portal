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
          icon: 'mdi-note-multiple-outline',
          title: 'Category',
          to: '/categories',
        },
        {
          icon: 'mdi-arrange-send-to-back',
          title: 'Ingredient',
          to: '/ingredients'
        },
        {
          icon: 'mdi-code-string',
          title: 'Recipe',
          to: '/recipes'
        },
        {
          icon: 'mdi-arrange-bring-forward',
          title: 'Recipe Ingredient',
          to: '/recipe-ingredients'
        },
        {
          icon:'mdi-account-multiple',
          title: 'Users',
          to: '/users'
        }

      ],
    };
  },
};
