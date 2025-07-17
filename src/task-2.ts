// Задача 2

// Опис: Є функція, яка приймає суму (число) та тип валюти.
type Currency = 'USD' | 'EUR' | 'UAH';
interface ConvertObject {
  amount: number;
  currency: Currency;
}

function convertCurrency({ amount, currency }: ConvertObject): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 150, currency: 'USD' });
// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.
