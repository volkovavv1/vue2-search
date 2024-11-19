function getArtikuls() {
  let artikulsArray = [];
  const pagination = document.getElementsByClassName("__ajax-pagination");

  //Обработка пагинации
  for (let i = 0; i < pagination.length; i++) {
    let item = pagination[i];
    item.click();
  }

  // Функция для ввода задержки
  function timeout(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // Асинхронная функция для получения артикулов
  async function accessArtikuls() {
    // Обработка продуктов
    const productsPreview = document.getElementsByClassName("_preview");

    for (let i = 0; i < productsPreview.length; i++) {
      let item = productsPreview[i];
      item.click(); // Имитация клика по продукту
      await timeout(1000); // Ожидание 1 секунду чтобы подгрузились данные

      let artikulElement = document.getElementsByClassName(
        "_link _nomenclature"
      )[0]; //Получение данных из элемента артикула при его наличии
      if (artikulElement) {
        let artikul = artikulElement.innerHTML.slice(9);
        artikulsArray.push(artikul);

        const close = document.querySelector("._dialog-close");
        if (close) {
          close.click(); // Закрываем окно
        }
      }
    }
    console.log(artikulsArray); // Вывод артикулов в консоль после завершения всех этапов
  }

  accessArtikuls(); // Запуск асинхронной функцию
}

getArtikuls(); // Запуск главной функции
