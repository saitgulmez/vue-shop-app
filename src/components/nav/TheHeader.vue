<template>
  <header class="sticky-top">
    <nav class="nav navbar-expand-lg navbar-light bg-light  ">
    <h3 class="bg-light">
      <router-link to="/">
      Alışveriş
      </router-link>
    </h3>
      <ul>
        <li>
          <h3>
            <router-link to="/products">Ürünler</router-link>
          </h3>
        </li>
        <li>
          <h3>
            <router-link to="/cart">Sepetim</router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
          </h3>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn" @click="login">Giriş</button>
      <button v-if="isLoggedIn" @click="logout">Çıkış</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  /*border-color: #45006d;*/
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>