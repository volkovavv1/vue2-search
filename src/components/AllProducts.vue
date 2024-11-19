<template>
  <section class="products-container">
      <ProductCard v-for="product in products" 
        :key="product.id" 
        :image="product.image"
        :isInStock="product.isInStock"
      />
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'AllProducts',
  components: {
    ProductCard
  },
  data() {
  return {
    products:[
      {"id": 1,},
      {"id": 2, "image": "box-bg_big.png",},
      {"id": 3, "isInStock": false,},
      {"id": 4,},
      {"id": 5,},
      {"id": 6,},
      {"id": 7,},
      {"id": 8,},
      {"id": 9,},
      {"id": 10,},
      {"id": 11,},
      {"id": 12,},
    ],
   };
  },
}
</script>

<style scoped lang="scss">
  .products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.25rem;
  }

  @media (max-width: 1250px) {
    .products-container{
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 580px) {
    .products-container{
      grid-template-columns: repeat(2, 1fr);
      gap: 0.86rem;
    }
  }

  @media (max-width: 375px) {
  .products-container{
    grid-template-columns: repeat(2, 1fr);
    gap: 0.86rem;
  }
}
</style>