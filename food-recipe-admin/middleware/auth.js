export default function ({ store, route, redirect }) {
  if (store.state.auth.loggedIn) {
    if (route.path === '/login') {
      return redirect('/categories');
    }
  }
}


