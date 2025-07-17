// Задача 17

// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.

interface GeoPosition {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPosition;
}

interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  address: Address;
  company: CompanyType;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = (await response.json()) as User[];
  return data;
};

fetchUsers().then(users => console.dir(users));

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.
