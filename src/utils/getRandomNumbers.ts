export function getRandomNumbers(range: number, quantity: number) {
  var arr: number[] = [];

  while(arr.length < quantity){
    var r = Math.floor(Math.random() * range);
    if(arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}