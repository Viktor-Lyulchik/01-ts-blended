// Задача 1

// Опис: Є об'єкт settings, який містить налаштування.
interface Settings {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: 'en',
};

console.log(settings);

// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.
