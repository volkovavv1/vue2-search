<template>
  <div>
    <div class="checkbox-filter">
      <div class="header-wrapper">
        <p class="header">Бренд</p>
        <button class="clear-button">Очистить</button>
      </div>
      <div :class="`${focused ? 'search-input search-input__focus' : 'search-input'}`">
        <img src="../assets/search-small.svg" alt="" class="search-icon" />
        <input
            type="search"
            id="searchInput"
            :class="`${focused ? 'input input__focus' : 'input'}`"
            placeholder="Поиск"
            @focus="focused = true"
            @blur="focused = false"
        />
        <img src="../assets/clear.svg" :class="`${ focused ? 'clear' : 'hidden'}`" aria-hidden="true" />
      </div>
    <p :class="`${focused ? 'search-string' : 'hidden'}`">По вашему запросу ничего не найдено</p>

    <div class="checkbox-filter">
        <ul class="attribute-list list-scroll">
          <li v-for="index in 8" :key="index" class="attribute">
            <label class="label">
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
              <span class="text">Атрибут</span>
            </label>
            <span class="count">3</span>
          </li>
        </ul>
      </div>

    <div class="checkbox-filter">
      <p class="header header-center">Размер</p>
        <ul class="attribute-list">
          <li v-for="index in 6" :key="index" class="attribute">
            <label class="label">
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
              <span class="text">Атрибут</span>
            </label>
            <span class="count">3</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxFilter',
      data () {
      return {
        focused: false,
      }
    },
  }
</script>


<style scoped lang="scss">
@import '../utils/variables.scss';

.checkbox-filter {
  background-color: $--color-white;
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
}

.header-wrapper {
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
}

.clear-button {
  text-decoration: underline;
  font-size: 12px;
  color: $--color-font-second;
  text-align: right;
  line-height: 12px;
  width: 3rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.clear-button:hover {
  color: $--color-font--main;
}

.search-input {
  align-items: center;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  background-color: $--color-white;
  display: flex;
  gap: 0.5rem;
  font-size: 14px;
  color: $--color-font-second;
  line-height: 1;
  padding: 10px 12px;
}

.search-input:hover {
  border: 1px solid $--color-brand;
}

.input {
  border: none;
  outline: none;
  width: 100%;
  font-family: "PT Sans", serif;
}

.search-input__focus {
  border: 1px solid $--color-brand;
}

.input__focus {
  font-weight: 700;
}

.clear {
  position: absolute;
  left: 88%;
  z-index: 0;
  opacity: 30%;
  width: 0.83rem;
}

.input::-webkit-search-cancel-button{
  opacity: 0;
  z-index: 2;
}

.checkmark:hover{
  border: 1px solid $--color-brand;
}

.search-icon {
  object-fit: contain;
  object-position: center;
  width: 1rem;
}

.header {
  font-size: 16px;
  font-weight: 700;
  color: $--color-font--main;
}

.attribute-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 16.5rem;
}

.list-scroll {
  height: 11.25rem;
  overflow-y: scroll;
  scrollbar-width: 3px;
  padding-right: 13px;
}

.list-scroll::-webkit-scrollbar-track {
  background-color: transparent;
}

.list-scroll:-webkit-scrollbar-thumb{
  background-color: $--scroll-bar;
  border-radius: 10px;
  border: none
}

.attribute {
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
}

.label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 14px;
  color: $--color-font--main;
  cursor: pointer;
  position: relative;
}

.count {
  color: $--color-font-second;
  font-size: 12px;
}

.label input {
  opacity: 0;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 3px;
  border: 1px solid $--color-border;
  cursor: pointer;
}

.label input:checked ~ .checkmark {
  background-color: $--color-brand;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.label input:checked ~ .checkmark:after {
  display: block;
}

.label .checkmark:after {
  position: absolute;
  top: 21%;
  left: 23%;
  background-image: url("../assets/checked.svg");
  content: "";
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  object-position: center;
}

.header-center{
  text-align: center;
}

.clear:hover {
  opacity: 100%;
}

@media (max-width: 1750px) {
  .label .checkmark:after {
    top: 19%;
    left: 20%;
  }
}
</style>