export function generateArr() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }
  return arr;
}
