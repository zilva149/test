console.clear();

const input =
  "333795006731966300001558476090109958468738223734828715225632627408318207163049732756269016606311972428235852303513717226869568174751737022108002633147231741";

function calc(input) {
  let arr = input.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i] + arr[i + 1];
    arr.splice(i + 1, 1);
  }
  let maxCount = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] === arr[i]) count++;
    }
    if (count >= maxCount) {
      maxCount.push(arr[i]);
    }
  }
  return maxCount;
}

console.log(calc(input));
