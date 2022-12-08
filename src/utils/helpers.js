// Tạo số ngẫu nhiên trong khoảng định trước. Không đính kèm `max` trong kết quả.
export function randomInt(min, max) {
  // Nguồn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}
// Lấy ra phần tử ngẫu nhiên trong mảng
export function pickArrayRandom(array) {
  return array[randomInt(0, array.length - 1)];
}

export const shuffledArray = (array) => {
  array.sort((a, b) => 0.5 - Math.random());
  return array;
};
