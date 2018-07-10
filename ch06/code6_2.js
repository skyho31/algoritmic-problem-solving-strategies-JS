/**
 * 148 page
 * chapter : 6.2 
 * date : 2018/7/10
 * author : Revine Kim
 */



//////////////////////////////////////
// 변수 설정
//////////////////////////////////////

var answerArr = [];
var pickedArr = [];
var number = 7;
var toPick = 4;

//////////////////////////////////////
// 재귀 이용
//////////////////////////////////////

/**
 * 
 * @param {*} n 전체 원소의 수
 * @param {*} picked 지금까지 고른 원소들의 번호
 * @param {*} toPick 더 고를 원소의 수
 */
function pick(n, picked, toPick){
  if(toPick == 0) {
    return answerArr.push(picked.slice());
  }

  var pickedLen = picked.length;
  var smallest = pickedLen == 0 ? 0 : picked[pickedLen-1] + 1;

  for(var next = smallest; next < n; ++next){
    picked.push(next);
    pick(n, picked, toPick - 1);
    picked.pop();
  }
}

//////////////////////////////////////
// 코드 실행
//////////////////////////////////////

console.time('recursive');
pick(number, pickedArr, toPick);
console.log('count:', answerArr.length);
console.log('arr:', answerArr)
console.timeEnd('recursive');
