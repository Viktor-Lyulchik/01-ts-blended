// Задача 12

// Є функція sendDoneStatus:

type CallBack = (a: string) => void;

function sendDoneStatus(callback: CallBack) {
  callback('done');
}

sendDoneStatus((a: string) => {
  console.log(a);
});

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
