// Задача 13
// Є функція reducer:

type Action = { type: 'increment' | 'decrement' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(1, { type: 'increment' }));
console.log(reducer(2, { type: 'increment' }));
console.log(reducer(5, { type: 'decrement' }));

// Завдання:

// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.
