// import axios from 'axios';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// async function fetchPosts(): Promise<Post[]> {
//   const response = await axios.get<Post[]>(
//     'https://jsonplaceholder.typicode.com/posts'
//   );
//   return response.data;
// }

// fetchPosts().then(posts => {
//   console.log(posts[0].title);
// });

// Задача 8

// enum Role {
//   Admin = 'create,read,update,delete',
//   User = 'read,update',
//   Guest = 'read',
// }

// function getPermissions(role: Role): string[] {
//   const arrRoles: string[] = [];
//   if (role === Role.Admin) {
//     arrRoles.push(...Role.Admin.split(','));
//   } else if (role === Role.Guest) {
//     arrRoles.push(...Role.Guest.split(','));
//   } else if (role === Role.User) {
//     arrRoles.push(...Role.User.split(','));
//   }
//   return arrRoles;
// }

// for (const key in Role) {
//   console.log(getPermissions(Role[key]));
//   //   console.log(typeof key);
// }

// Завдання:

// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.

// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:

// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.

// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role): string[] {
  const arrRoles: string[] = [];
  if (role === Role.Admin) {
    arrRoles.push(..."'create,read,update,delete'".split(','));
  } else if (role === Role.Guest) {
    arrRoles.push(..."'read'".split(','));
  } else if (role === Role.User) {
    arrRoles.push(..."'read,update'".split(','));
  }
  return arrRoles;
}

for (const key in Role) {
  console.log(getPermissions(Role[key]));
  //   console.log(typeof key);
}
