function getCharacteristics() {
  //Открытие всех характеристик товара
  let allCharacteristics = document.getElementsByClassName("js-anchors-tab")[2];
  allCharacteristics.click();

  const names = document.getElementsByClassName("parameter-name");
  const values = document.getElementsByClassName("parameter-value");

  let characteristics = {};

  for (let i = 0; i < names.length; i++) {
    let currentName = names[i].innerHTML.trim();
    let currentValue = values[i].innerHTML.trim();

    // Поиск символа '<' в названии и удаление всего после него
    let cropIndex = currentName.indexOf("<");
    let cropIndexInValue = currentValue.indexOf(">");

    if (cropIndex !== -1) {
      currentName = currentName.slice(0, cropIndex);
    }

    // Поиск символа '<' в значении и удаление всего лишнего содержимого (вложенных элементов)
    if (cropIndexInValue !== -1) {
      let end = currentValue.indexOf("<");
      currentValue = currentValue.slice(cropIndexInValue, end);
    }

    // Проверка наличия параметра. Если его нет, то запись в объект
    if (!characteristics.hasOwnProperty(currentName)) {
      characteristics[currentName] = currentValue;
    }
  }

  console.log(characteristics); // Вывод объекта
}

getCharacteristics();
