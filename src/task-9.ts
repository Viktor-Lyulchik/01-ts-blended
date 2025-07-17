// Задача 9

// Завдання:

// 1. Створіть інтерфейс Container, що містить:

// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:

// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  additem: (item: T) => void;
  getitem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4, 5, 6],
  additem(item: number) {
    this.items.push(item);
  },
  getitem(index: number) {
    return this.items[index];
  },
};

console.log(numberContainer.items);

numberContainer.additem(7);
console.log(numberContainer.items);
numberContainer.additem(8);
console.log(numberContainer.items);
console.log(numberContainer.getitem(0));
console.log(numberContainer.getitem(5));
console.log(numberContainer.getitem(numberContainer.items.length - 1));

const stringContainer: Container<string> = {
  items: ['Bob', 'Alice', 'Sam', 'Peter', 'Jim', 'Obama'],
  additem(item: string) {
    this.items.push(item);
  },
  getitem(index: number) {
    return this.items[index];
  },
};

console.log(stringContainer.items);

stringContainer.additem('7555');
console.log(stringContainer.items);
stringContainer.additem('8999');
console.log(stringContainer.items);
console.log(stringContainer.getitem(0));
console.log(stringContainer.getitem(5));
console.log(stringContainer.getitem(stringContainer.items.length - 1));

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(
  'last element string',
  getLastElement<string>(stringContainer.items)
);
console.log(
  'last element number',
  getLastElement<number>(numberContainer.items)
);
