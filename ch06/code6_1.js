/**
 * 147 page
 * chapter : 6.2 
 * date : 2018/7/10
 * author : Revine Kim
 */

const NUMBER = 10000;

//////////////////////////////////////
// 반복문 이용
//////////////////////////////////////

function sum(n){
  var total = 0;
  for(var i = 1; i <= n; i++){
    total += i;
  }

  return total;
}

console.time('repeat');
sum(NUMBER);
console.timeEnd('repeat');

//////////////////////////////////////
// 재귀 이용
//////////////////////////////////////

function recursiveSum(n){
  if(n == 1) return 1;
  return n * recursiveSum(n-1);
}

console.time('recursive');
recursiveSum(NUMBER);
console.timeEnd('recursive');


//////////////////////////////////////
// 동적 계획법
//////////////////////////////////////

function dynamicSum(n){
  return n * (n+1) / 2;
}

console.time('dynamicSum');
dynamicSum(NUMBER);
console.timeEnd('dynamicSum');


/**
 * NUMBER = 10000;
 * repeat: 0.273ms
 * recursive: 1.020ms
 * dynamicSum: 0.027ms
 * 
 * NUMBER = 100000;
 * repeat: 3.359ms
 * recursive : maximum call
 * dynamicSum: 0.025ms
 * 
 * NUMBER = 1000000;
 * repeat: 4.024ms
 * recursive : maximum call
 * dynamicSum: 0.025ms
 * 
 * NUMBER = 10000000;
 * repeat: 12.731ms
 * recursive : maximum call
 * dynamicSum: 0.039ms 
 */
