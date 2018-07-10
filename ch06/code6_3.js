/**
 * 148 page
 * chapter : 6.3 
 * date : 2018/7/11
 * author : Revine Kim
 */

//////////////////////////////////////
// 변수 설정
//////////////////////////////////////
const DUMMY = [
  ['s', 'n', 'n', 'n', 'n'],
  ['n', 'e', 'e', 'e', 'n'],
  ['n', 'e', 'y', 'e', 'e'],
  ['n', 'e', 'e', 'e', 'n'],
  ['n', 'e', 'n', 'n', 'n']
];
const WORD = 'yes';

// 7시 방향 부터 회전
const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

var answerArr = [];

//////////////////////////////////////
// 재귀 이용 * 완전 탐색을 위한..
//////////////////////////////////////


function hasWord(y, x, word) {
  // Base case 1: 시작 위치가 범위 밖이면 무조건 실패
  if(!inRange(y, x)) return false;
  // Base case 2: 첫 글자가 일치하지 않으면 무조건 실패
  if(DUMMY[y][x] != word[0]) return false;
  // Base case 3: 단어 길이가 1이면 성공
  if(word.length == 1) {
    answerArr.push([y,x]); 
    return true;
  }
  // 인접한 여덟 칸을 검사한다.
  for(var direction = 0; direction < 8; ++direction){
    answerArr.push([y,x]);
    var nextY = y + dy[direction], nextX = x + dy[direction];
    // 다음 칸이 범위 안에 있는 지, 첫 글자는 일치하는 지 확인할 필요가 없다.
    if(hasWord(nextY, nextX, word.substring(1))){
      return true;
    }
  }
}

function inRange(y, x){
  var isValid = true;
  if(y < 0 || x < 0 || y >= DUMMY.length || x >= DUMMY.length){
    isValid = false;
  }

  return isValid;
}


//////////////////////////////////////
// 코드 실행
//////////////////////////////////////

console.log(hasWord(2,2, WORD));
console.log(answerArr);
