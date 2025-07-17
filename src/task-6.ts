function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const result1 = getFirstElement<number>([1, 2, 3]);
console.log(typeof result1, result1); // 1
const result2 = getFirstElement<string>(['a', 'b', 'c']);
console.log(typeof result2, result2); // "a"
const result3 = getFirstElement<boolean>([true, false, true]);
console.log(typeof result3, result3); // true
// console.log(typeof getFirstElement<number>([1, "123", 3])); // 1         here is error!!!
