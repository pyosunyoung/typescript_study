// any 모든 타입이 다 들어갈 수 있음. = let과 비슷하다고 보면 됨.
// 타입이 어떤게 들어올지 정해지지 않았을 떄 api 명세가 아직 안나왔을 떄 any로 일단 설정 후 바꿔주는 거임.
// 특정 경우 아니면 any는 쓰는 의미가 없음

let anyType :any
let unknownType :unknown

anyType = "hello"
unknownType = "hello"

console.log(anyType.toUpperCase())
console.log(unknownType.toUpperCase()) // 이렇게 에러가 남.
if(typeof unknownType === "string"){
  console.log(unknownType.toUpperCase()) // 이렇게 타입을 확정해주면 uppercase 가능.
}

// unknown 타입 아직은 잘 모르겠다. 아무타입이나 다 받긴함.

// let a:any = "noona"
// a = 3
// a = true

let a:unknown = "noona"
a = 3
a = true

let b:string = a; // 이런식으로 에러가 남, any타입일 시는 에러가 안남.
// 오류 체크하기가 더 편하겠죠? unknown일 시
// any보단 unkown을 쓰는게 더 좋다!!


//void 잘 안쓰지만 RETURN값이 없을 떄 사용.

function double (a,b){
  console.log(a,b)
}

interface NewType{
  name:string;
  age:number;
  double: (a:number,b:number)=>void // 이렇게 함수도 타입 지정이 가능하고, 
  // () => 이게 기본 문법이고 리턴타입이 없다면 void
  // 있다면 () => number; 이렇게.
}

// never 잘 안씀.
//리턴 타입이 있을 수가 없다.
// 밑에일 경우 예시, 무한 반복문, 무한 에러
function infinte(): never{
  while(true){

  }
  
}

function throwError(): never{
  throw new Error("항상 에러를 던집니다.")
}

type AorB = {a:number,b?:never} | {a?:number, b:number}
// 하나만 넣어주고 싶을 떄 사용?
let c :AorB = {
  a:2,
  
}