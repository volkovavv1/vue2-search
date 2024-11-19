<template>
  <div class="product">
    <div class="image-container">
      <div class="badge">
        <span class="badge-text">Хит продаж</span>
        <img src="../assets/fire.svg" alt="icon" class="badge-icon" />
      </div>
      <div class="image-wrapper">
        <img 
          :src="require(`@/assets/${image}`)"
          alt="Product image"
          :class="`${isInStock ? 'image' : 'image light'}`"
        />
      </div>
      <div class="discount">{{ discount }}</div>
    </div>
    <div class="info-container">
      <div class="info">
            <p class="brand">{{ brand }}</p>
            <p class="name">{{ title.length >= 67 ? title.slice(0, 67) + '...' : title}}</p>
          </div>
        <div :class="`${isInStock ? 'price-container' : 'hidden'}`" >
          <span class="current-price">{{ priceAfterDiscount }}</span>
          <span class="original-price">{{ price }}</span>
        </div>
    </div>
      <button v-if="isInStock" class="buy-button">Купить</button>
      <button v-if="!isInStock" class="gray-button">Сообщить о поступлении</button>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    image: { 
      type: [String, null], 
      default: 'box-bg.png'
    },
    title: { 
      type: [String, null],
      default: 'Полное название товара в несколько строк для вида c обрывом в концe',
    },
    brand: { 
      type: [String, null], 
      default: 'Бренд',},
    isInStock: { 
      type: [Boolean, null], 
      default: true,},
    discount: { 
      type: [String, null], 
      default: '25%',},
    price: { 
      type: [String, null],
      default: '5 990 ₽',},
    priceAfterDiscount: { 
      type: [String, null],
      default: '5 990 ₽',
    },
  }
}
</script>

<style scoped lang="scss">
@import '../utils/variables.scss';

.product {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 20.81rem;
  height: 23.25rem;
  font-family: "PT Sans", serif;
  gap: 1rem;
}

.image-container {
  display: flex;
  width: 100%;
  height: 12.5rem;
  flex-direction: column;
  position: relative;
}

.image {
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  object-position: center;
}

.badge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid $--color-border;
  background-color: $--color-white;
  width: 7rem;
  height: 2rem;
  gap: 4px;
  z-index: 1;
}

.badge-icon {
  width: 0.94rem;
  height: 0.83rem;
}

.discount {
  display: flex;
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  border-radius: 4px;
  background-color: $--color-brand;
  color: $--color-white;
  font-weight: 700;
  line-height: 14px;
  padding: 6px 10px;
  text-align: center;
  z-index: 1;
}

.info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 8px;
}

.brand {
  color: $--color-font-second;
  line-height: 1;
}

.name {
  color: $--color-font--main;
  line-height: 16px;
}

.name:hover {
  color: $--color-font-bg;
}

.price-container {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
}

.current-price {
  color: $--color-font--main;
  font-size: 16px;
  font-weight: 700;
  line-height: 14px;
}

.original-price {
  color: $--color-font-second;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-decoration: line-through;
}

.buy-button {
  border-radius: 4px;
  border: 1px solid $--color-brand;
  background: $--color-white;
  font-size: 14px;
  width: 4.69rem;
  height: 2.38rem;
  color: $--color-brand;
  font-weight: 700;
}

.image-container,
.name,
.buy-button {
  cursor: pointer;
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.buy-button:hover {
  background-color: $--color-brand;
  color: $--color-white;
  transition: 0.4s;
}

.gray-button {
  width: 100%;
  height: 2.38rem;
  border-radius: 4px;
  border: 1px solid $--color-font-second;
  color: $--color-font-second;
  background: $--color-white;
  font-size: 14px;
  margin-top: auto;
  transition: 0.4s;
}

.gray-button:hover {
  color: $--color-white;
  background: $--color-font-second;
}

.light {
  opacity: 50%;
}

.hidden {
  display: none;
}

@media (max-width: 1750px) {
  .product {
    width: 16.3rem;
  }

  .buy-button {
    margin-top: auto;
  }
}

@media (max-width: 1440px) {
  .image-container {
    height: 14.3rem;
  }

  .image-wrapper{
    height: 100%;
  }

  .product {
    width: 13.3rem;
    height: 23.25rem;
  }
}

@media (max-width: 950px) {
  .product {
    width: 11.82rem;
    height: 25.71rem;
  }
}

</style>
