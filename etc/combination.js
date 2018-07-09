//////////////////////////////////////
// 순열 & 조합
//////////////////////////////////////

function combination(n, m){
  return factorial(n) / factorial(m) / factorial(n-m)
}

function factorial(n){
  if(n == 1) return 1;
  return n * factorial(n-1);
}
