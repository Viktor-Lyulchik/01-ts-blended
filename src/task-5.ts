// Задача 5
interface Person {
  name: string;
  age: number;
}

type User = Person & { isAdmin: boolean };

function createUser({ name, age }: Person): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: 'Alice', age: 30 }));

// Завдання:

// Типізуйте функцію повністю: параметри і повернення функції.
