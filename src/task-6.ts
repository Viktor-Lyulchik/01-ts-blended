// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// const result1 = getFirstElement<number>([1, 2, 3]);
// console.log(typeof result1, result1); // 1
// const result2 = getFirstElement<string>(['a', 'b', 'c']);
// console.log(typeof result2, result2); // "a"
// const result3 = getFirstElement<boolean>([true, false, true]);
// console.log(typeof result3, result3); // true
// // console.log(typeof getFirstElement<number>([1, "123", 3])); // 1         here is error!!!

// Задача 6
interface Address {
  city: string;
}
interface User {
  name: string;
  address?: Address;
}

const user: User = {
  name: 'Alice',
  address: {
    city: 'Kyiv',
  },
};

console.log(user.address?.city);

// Завдання:

// Створіть тип для user.
// Зробіть address необов’язковим.
// Перевірте, що user.address?.city не викликає помилки.
