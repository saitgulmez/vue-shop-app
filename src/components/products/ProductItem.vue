<template>
  <!-- <li class="product"> -->
    <base-card>
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <!-- <h4>{{ price }} TL</h4> -->
          <h4>{{ productPrice }} TL</h4>
        </base-badge>
        <p>{{ description }}</p>
      <button @click="addToCart">Sepete Ekle</button>
      </div>
    </div>
    <!-- <div class="product__actions">
      <button @click="addToCart">Sepete Ekle</button>
    </div> -->
    </base-card>
  <!-- </li> -->
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  computed: {
    productPrice() {
      // return (this.price * this.qty);
      const x = this.price;
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart',{
        id: this.id,
        // image: this.image,
        // title: this.title,
        // price: this.price,
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 2rem;
}

.product__image img {
  height: 20rem;
  width: 12rem;
  /* object-fit: cover; */
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

/* .product__actions {
  text-align: center;
} */

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #234075;
  color: white;
  border: 1px solid #1f6d00;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #1f6d00;
  border-color: #1f6d00;
}
/* button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}
button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
} */
</style>
