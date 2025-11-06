// enum 정확한 문자를 타입으로 지정해주고 싶다 이럴 떄 사용.
// Female Male
const enum Gender {
  FEMALE = "Female",
  MALE = "Male"
}

const enum SearchType {
  Date, // 0
  KEYWORD, // 1
  ORDER // 2
}
console.log("hey", SearchType.Date); // 이렇게 하면 해당 넘버링 작업 해줌 인덱스값이 출력됨 0
 // 그래서 무조건 값을 지정해주자. Date = "DATE" 이렇게

//enum은 안쓰여지는 enum이어도 그대로 쓰여짐 
// 그것을 커버하기 위해 const enum으로 붙여주면 됨.
// const 는 이제 객체가 아닌 상수로 취급하게 됨.
// tsc로 돌리고 enum.js확인해보면 이제 js파일에서는 사용된 Date값만 표출되어짐.
// 근데 디버깅 시 에러를 찾기가 힘듬 그래도 그것을 트리쉐이킹 가능해지기 문에 괜찮을 수도.

// let gender:string = "Female"
// gender = "alien"
// gender = "pyo"

let gender:Gender = Gender.FEMALE; // 이렇게 내가 지정해준 문자만 들어갈 수 있음.
// let gender:Gender = "pyo" // 이렇게 하면 오류