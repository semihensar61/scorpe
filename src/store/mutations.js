export default {
  setUser: (state, user) => {
    state.user = user
    state.isLogged = true
  },
  setPageName: (state, page) => {
    state.currentPage = page
  }
}