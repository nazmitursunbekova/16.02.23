let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let example2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//console.log(example1.length);
//console.log(example2.length);

console.log(example2[2]);
console.log(example1[2]);
console.log(example2[1]);
console.log(example2[1][1]);

let test = example2[2];
console.log(test[1]);

let num = 1;
while (num <= 9) {
  console.log(num);
  num++;
}

for (let i = 0; i < example1.lenght; i++) {
  console.log(example1[i]);
}

for (let i = 0; i < example2.length; i++) {
  for (let j = 0; j < example2.length[i]; j++) {
    console.log(example2[i][j]);
  }
}
let example3 = [4, 1, 7, 10, 11, 10, 33];
if (example3.includes(10)) {
  console.log("yes");
} else {
  console.log("no");
}
let example4 = [5, 4, 1, 55, 1, 0, 2];
let example5 = [3, 11, 4, 15, 1, 2, 77];
if (example5.includes(1)) {
  console.log("yes");
} else {
  console.log("no");
}
if (example5.includes(5)) {
  console.log("yes");
} else {
  console.log("no");
}
if (example5.includes(55)) {
  console.log("yes");
} else {
  console.log("no");
}
if (example5.includes(0)) {
  console.log("yes");
} else {
  console.log("no");
}
if (example5.includes(2)) {
  console.log("yes");
} else {
  console.log("no");
}
let example6 = ["a", "c", "f", "d", "b"];
console.log(example6.reverse());

example6.sort();
console.log(example6);

let example7 = [1, 4, 3, 9, 5, 2];
example7.sort(function (a, b) {
  return a - b;
});
console.log(example7);

let example8 = [1, 4, 3, 9, 5, 2];
example7.sort(function (a, b) {
  return b - a;
});
console.log(example7);



let carPrice = [4000,3000, 4500, 8000, 5000, 3000,7000, 12000, 100000,10000];
let totalPrice = 0 ;
for  (let i = 0; i < carPrice.length; i++) {
  totalPrice = totalPrice+ carPrice[i];

}
console.log(totalPrice/ carPrice.length);
carPrice.sort(function(a,b){
  return a-b ;
});
console.log(carPrice);
let medianPrice = (carPrice[4] + carPrice[5])/2;
console.log(medianPrice);

let carPrices = [4000,3000, 4500, 8000, 5000, 3000,7000, 12000, 100000,10000,7000];
carPrices.sort();
console.log(carPrices);
let middle = (carPrices.length -1) / 2;
console.log(carPrices[middle]);
