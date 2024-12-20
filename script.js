//Task2

function getProductDetails(productId, successCallback, errorCallback) {
  // Симуляція отримання даних (можна замінити на реальний запит)
  const productDatabase = {
    1: { name: 'Блокнот', price: 100 },
    2: { name: 'Альбом', price: 200 },
    3: { name: 'Фарби', price: 300 },
  };

  setTimeout(() => {
    // Перевірка, чи є товар з таким id
    if (productDatabase[productId]) {
      successCallback(productDatabase[productId]);
    } else {
      errorCallback('Товар не знайдено');
    }
  }, 1000); // Симуляція затримки
}

// Функція, що викликається при натисканні кнопки
function fetchProductDetails() {
  const productId = document.getElementById('productIdInput').value;

  getProductDetails(
    productId,
    productDetails => {
      // Викликається при успішному отриманні товару
      console.log('Деталі товару:', productDetails);
    },
    errorMessage => {
      // Викликається при помилці
      console.log('Помилка:', errorMessage);
    },
  );
}

//task4
const concerts = {
  Київ: new Date('2020-04-01'),
  Умань: new Date('2025-07-02'),
  Вінниця: new Date('2020-04-21'),
  Одеса: new Date('2025-03-15'),
  Хмельницький: new Date('2020-04-18'),
  Харків: new Date('2025-07-10'),
};

// Отримуємо масив міст, де концерт ще не відбувся
const futureConcerts = Object.entries(concerts)
  .filter(([city, date]) => date > new Date()) // Фільтруємо майбутні концерти
  .sort(([cityA, dateA], [cityB, dateB]) => dateA - dateB) // Сортуємо за датою
  .map(([city]) => city); // Виводимо тільки міста

console.log(futureConcerts);

//task6
function applyDiscount(medicines) {
  return medicines.map((medicine, index) => {
    // Створюємо копію об'єкта і додаємо ID
    const updatedMedicine = { ...medicine, id: index + 1 };

    // Якщо ціна більше 300, застосовуємо знижку 30%
    if (medicine.price > 300) {
      updatedMedicine.price = (medicine.price * 0.7).toFixed(2); // Оновлюємо ціну з 30% знижкою
    }

    return updatedMedicine;
  });
}

const medicines = [
  { name: 'Noshpa', price: 170 },
  { name: 'Analgin', price: 55 },
  { name: 'Quanil', price: 310 },
  { name: 'Alphacholine', price: 390 },
];

const updatedMedicines = applyDiscount(medicines);
console.log(updatedMedicines);

//task8
function Storage(initialItems) {
  // Властивість для зберігання товарів
  this.items = initialItems;

  // Метод для отримання масиву товарів
  this.getItems = function () {
    return this.items;
  };

  // Метод для додавання нового товару
  this.addItems = function (item) {
    this.items.push(item);
  };

  // Метод для видалення товару
  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };
}

// Спочатку створимо екземпляр Storage з початковим масивом товарів
const myStorage = new Storage(['apple', 'banana', 'mango']);

// Тепер можна використовувати методи:
console.log(myStorage.getItems()); // ["apple", "banana", "mango"]

// Додаємо новий товар
myStorage.addItems('orange');
console.log(myStorage.getItems()); // ["apple", "banana", "mango", "orange"]

// Видаляємо товар
myStorage.removeItem('banana');
console.log(myStorage.getItems()); // ["apple", "mango", "orange"]

//task9
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

function countTags(tweets) {
  return tweets.reduce((acc, tweet) => {
    tweet.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1; // Підраховуємо кількість кожного тегу
    });
    return acc;
  }, {});
}

const tagCounts = countTags(tweets);
console.log(tagCounts);

//task10
function checkBrackets(str) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of str) {
    // Якщо це відкрита дужка, додаємо її до стеку
    if (brackets[char]) {
      stack.push(char);
    }
    // Якщо це закрита дужка, перевіряємо відповідність
    else if (Object.values(brackets).includes(char)) {
      // Перевіряємо чи стек порожній або останній елемент не є відповідним
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // Якщо стек порожній, то всі дужки правильно закриті
  return stack.length === 0;
}

// Приклад використання
console.log(checkBrackets('someFn() {} []')); // true
console.log(checkBrackets('someFn( { } [ ]')); // false
console.log(checkBrackets('someFn( { } ]')); // false
console.log(checkBrackets('someFn( { } ) ]')); // false
