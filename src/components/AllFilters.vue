<template>
<section class="filters-container">
  <nav class="categories filters">
    <div class="category-item filter">
      <span class="name">Название категории</span>
      <span class="count">3</span>
    </div>
    <div class="category-item subcategory">
      <span class="name">Название категории</span>
      <span class="count">3</span>
    </div>
    <div class="category-item subcategory">
      <span class="name">Название категории</span>
      <span class="count">3</span>
    </div>
    <div class="category-item subcategory">
      <span class="name">Название категории</span>
      <span class="count">3</span>
    </div>
  </nav>
<PriceFilter />
<CheckboxFilter />

</section>


</template>

<script>
import CheckboxFilter from './CheckboxFilter.vue';
import PriceFilter from './PriceFilter.vue';

export default {
  name: 'AllFilters',
  components: {
    CheckboxFilter, 
    PriceFilter
  }
}
</script>


<style scoped lang="scss">
@import '../utils/variables.scss';

.filters-container {
  background-color: $--color-white;
  display: flex;
  flex-direction: column;
  font-family: "PT Sans", serif;

  width: 17.5rem;
  gap: 1.75rem;
}

.name {
  font-size: 14px;
  color: $--color-font--main;
}

.count {
  color: $--color-font-second;
  text-align: right;
  font-size: 12px;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.44rem 0.5rem;
}

.categories {
  display: flex;
  flex-direction: column;
}

.subcategory {
  padding: 0.44rem 0.5rem 0.44rem 2rem;
}

.category-item:hover > .name,
.category-item:hover > .count {
  color: $--color-brand;
}

.category-item:active {
  border-radius: 5px;
  background-color: $--color-font-hover;
}

.category-item:active,
.category-item:active > .count  {
  color: $--color-font--main;
}

@media (max-width: 950px) {
  .filters-container {
    display: none;
  }
}

@media (max-width: 375px) {
  
}
</style>
