<template>
  <div id="app">
    <HeaderComponent />
    <section class="container">
      <AllFilters />
      <AllProducts/>
    </section>
  </div>
</template>

<script>
import AllFilters from './components/AllFilters.vue'
import AllProducts from './components/AllProducts.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    AllFilters, 
    HeaderComponent,
    AllProducts,
  },
}

</script>

<style lang="scss"> 
@import './utils/variables.scss';

body {
  font-size: calc(100vw/120);
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

#app {
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  gap: 2.25rem;
  padding-top: 6rem;
  margin: 0 auto;
}

.button__mobile {
  border-radius: 5px;
  background: $--color-brand;
  color: $--color-white;
  line-height: 1;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hidden {
  display: none;
}

@media (max-width: 1250px) {
  html {
    font-size: 14px;
  }
}
</style>
