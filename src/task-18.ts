// Задача 18

// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.

import axios from 'axios';

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
  const response = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const getUsers = async (): Promise<void> => {
  const users: User[] = await fetchUsers();
  console.log(users);
};

getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.
