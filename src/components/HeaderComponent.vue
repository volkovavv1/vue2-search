<template>
    <header class="header">
      <div class="logo-container">
        <div class="logo-wrapper">
          <img loading="lazy" src="../assets/logo.svg" class="logo-icon" alt="Company logo" />
        </div>
        <button class="catalog-button">Каталог</button>
      </div>
      <form class="search-form">
        <label for="searchInput"></label>
        <div class="search-wrapper">
          <img loading="lazy" src="../assets/search.svg" class="search-icon" alt="" /> 
          <input
            type="search"
            autocomplete="on"
            class="search-input"
            placeholder="Поиск по 100 000 товаров"
          />
          <img loading="lazy" src="../assets/clear.svg" class="search-icon__clear" alt="" /> 
          <button type="submit" class="button__mobile" @submit.prevent="onSubmit" @click="clicked = true">Найти</button>
        </div>
      </form>
      <nav class="navigation">
        <a href="#" class="nav-link">Информация о компании</a>
        <a href="#" class="nav-link">Контакты</a>
        <a href="#" class="nav-link">Полезные ссылки</a>
      </nav>

    <img src="../assets/arrow.svg" class="icon__mobile" alt="" aria-hidden="true" />
    <form :class="`${ focused ? 'form__mobile form-mobile__active' : 'form__mobile'}`">
      <input 
        @focus="focused = true; clicked = false"
        @blur="focused = false"
        type="search" id="searchInput"
        class="search__mobile" placeholder="Запрос"
      />
      <img src="../assets/clear.svg" :class="`${focused ? 'clear__mobile clear-mobile__active' : 'clear__mobile'}`" aria-hidden="true" />
      <button type="submit" class="button__mobile" @submit.prevent="onSubmit" @click="clicked = true">Найти</button>
    </form>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    data () {
      return {
        focused: false,
        clicked: false
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../utils/variables.scss';

.header {
  display: flex;
  position: fixed;
  z-index: 10;
  width: 107.5rem;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  justify-content: center;
  padding: 0.75rem 0;
  margin-bottom: 1.5rem;
  background-color: $--color-white
}

.logo-container {
  display: flex;
  height: 100%;
  width: 16.06rem;
  gap: 0.5rem;
  color: #000;
  align-items: center;
  margin: auto 0;
}

.logo-wrapper {
  height: 100%;
  width: 9.06rem;
  cursor: pointer;
}

.logo-icon {
  height: 100%;
  width: 100%;
}

.catalog-button {
  border-radius: 8px;
  width: 6.5rem;
  height: 3rem;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  padding-bottom: 0.19rem;
  border: 1px solid $--color-brand;
  background: none;
  cursor: pointer;
}

.search-form {
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: $--color-font-second;
  height: 1.38rem;
  padding: 0.75rem 1rem;
  border: 1px solid $--color-brand;
}

.search-wrapper {
  display: flex;
  width: 61.44rem;
  align-items: center;
  gap: 8px;
}

.search-icon {
  object-fit: contain;
  object-position: center;
  padding: 0.19rem 0.22rem 0.22rem 0.19rem;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: rgba(90, 90, 90, 1);
  line-height: 24px;
  padding: 0;
  cursor: text;
}

.navigation {
  display: flex;
  gap: 1.25rem;
  color: $--color-font--main;
  width: 400px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-link:hover{
  color: #000;
}

.search-icon__clear {
  position: absolute;
  opacity: 0%;
  left: 73.3%;
  z-index: 0;
}

.search-wrapper:focus > .search-icon__clear {
  opacity: 30%;
}

.search-input::-webkit-search-cancel-button {
  opacity: 0%;
  z-index: 2;
}

.input::-webkit-search-cancel-button:hover > .search-icon__clear{
  opacity: 100%;
}

.search-string {
  position: absolute;
  bottom: 15%;
  left: 16.5%;
  z-index: 12;
}

.form__mobile,
.icon__mobile {
  display: none;
}

.form__mobile {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  gap: 1rem;
  display: none;
  border-bottom: 1px solid $--color-border;
}

.clear__mobile {
  position: absolute;
  opacity: 100%;
  left: 52.6%;
  width: 1.19rem;
  opacity: 30%;
}

.search__mobile:focus {
  color: $--color-font--main;
}

.form-mobile__active{
  border-color: $--color-brand;
}

.clear-mobile__active {
  opacity: 100%;
}

.search__mobile::-webkit-search-cancel-button {
  opacity: 0%;
  z-index: 2;
}

.icon__mobile {
  object-fit: contain;
  object-position: center;
  width: 1.25rem;
  padding-bottom: 6px;
  display: none;
  z-index: 0;
  opacity: 30%;
}

.search__mobile {
  color: $--color-font--main;
  line-height: 14px;
  outline: none;
  border: none;
}

.search-button:hover {
  background-color: $--color-brand;
}

.search-divider {
  background: #d5d5d5;
  align-self: end;
  min-height: 1px;
  margin-top: 6px;
  width: 307px;
  max-width: 100%;
  }


  .search-container {
    display: flex;
    max-width: 343px;
    flex-direction: column;
    justify-content: center;
    font: 400 16px PT Sans, sans-serif;
  }

@media (max-width: 1750px) {
  .search-form {
    width: 38.63%;
  }
}

@media (max-width: 1440px) {
  .search-form {
    width: 25.2%;
  }
}

@media (max-width: 1250px) {
  .search-form {
    width: 15.9%;
  }
}

@media (max-width: 950px) {
  .navigation {
    display: none;
  }
}

@media (max-width: 580px) {
  .logo-container{
    display: none;
  }

  .logo-container,
  .search-form,
  .navigation {
    display: none;
  }

  .form__mobile {
    display: flex;
  }

  .icon__mobile {
    display: block;
  }
}
</style>