// Задача 19

// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

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

const fetchUser = async (userId: string | number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: string | number): Promise<void> => {
  const user: User = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.
