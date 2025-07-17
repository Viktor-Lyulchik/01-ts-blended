// Задача 20

// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

import axios from 'axios';

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};

const logThreePosts = async (count: number): Promise<void> => {
  const arrPosts: Post[] = await fetchPosts();
  const arr3Post = arrPosts.slice(0, 3);
  arr3Post.forEach(it => console.log(it));
};

logThreePosts(3);

// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.
