<template>
  <div class="price">
    <p class="header">Цена</p>
    <div class="range">
      <div class="input">
        <span class="label">от</span>
        <input type="text" id="min-price" class="price-value" placeholder="5 500 ₽"/>
      </div>
      <div class="divider"></div>
      <div class="input">
        <span class="label">от</span>
        <input type="text" id="max-price" class="price-value" placeholder="5 500 ₽"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceFilter'
}
</script>

<style scoped lang="scss">
@import '../utils/variables.scss';

.price {
  background-color: $--color-white;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}

.range {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  font-weight: 400;
}

.input {
  align-items: center;
  border-radius: 4px;
  border: 1px solid $--color-border;
  background-color: $--color-white;
  align-self: stretch;
  display: flex;
  gap: 6px;
  flex: 1;
  padding: 8px;
}

.input:hover {
  border: 1px solid $--color-brand;
}

.label {
  color: var(--color-font-second);
  font-size: 12px;
}

.price-value {
  color: var(--color-font--main);
  font-size: 14px;
  width: 2.88rem;
  height: 1rem;
  border: none;
  outline: none;
  cursor: text;
}

.divider {
  background-color: $--color-border;
  width: 0.63rem;
  height: 0.06rem;
}
</style>