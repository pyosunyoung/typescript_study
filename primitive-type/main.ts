// npm install -g typescript ㄱㄱ
// //타입 지정이 가능한 변수들(모두 소문자로 지정해야함.)
// string
// number
// boolean
// null
// undefined
// ----------
// symbol // 잘 안씀 -> 절때 변경 불가능한 값.
// bigint // 큰 숫자 다룰 때 

//변수에서 사용하는 법

// let a:number = 3 //타입 지정.
// a=4
// a=9.0
// a="string" // 에러가 남.

// let b:boolean = true
// b=false

// let c = true // 이렇게 자동추론 가능 이렇게 해줘도 괜찮은데 안쓰는게 좋음. 
// c = "string"

// let a:null = null // null만 들어갈 수 있음.
// let c:undefined=undefined

// //null 값이 없기 떄문에 null
// //undefined 값이 정의가 안됨.

// function double(n:number):number { 
//   // (n:number):number 매개변수로 number그리고 리턴 타입도 number만 가능하게 타입 설정.
//   // 리턴값이 없다면 :number 생략가능. void써도 되는데 안쓰는게 베스트
//   return n*2;
// }

// console.log(double(4));
// //tsc main.ts로 컴파일 하면 => js  js로 실행을 시켜줌. => node main.js


// let userName:string; // 예: 이름
// let userAge:number; // 예: 나이
// let isAdmin:boolean; // 예: 관리자 여부

// userName = "Alice";
// userAge = 25;
// isAdmin = true;

// 변수 선언과 초기값 지정
// let productName:string; // 상품 이름
// let productPrice:number; // 상품 가격
// let isAvailable:boolean; // 상품 재고 여부

// productName="표선영";
// productPrice=1000;
// isAvailable=true

// // 예시 출력
// console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);

// function addNumbers(num1:number, num2:number):number {
//   return num1 + num2
// }
// console.log(addNumbers(5, 3));

// function stringifyValue(value: string | null | undefined): string {
//   if (value === null || value === undefined) {
//     return "값이 없습니다";
//   }
//   return value;
// }

// console.log(stringifyValue("Hello")); // "Hello"
// console.log(stringifyValue(null)); // "값이 없습니다"
// console.log(stringifyValue(undefined)); // "값이 없습니다"



// console.log(compareValues(5, "5")); 
// // "느슨한 동등성"
// // 느슨한 동등성에서는 타입 변환 후 5와 "5"가 같다고 평가됨.

// console.log(compareValues(null, undefined)); 
// // "느슨한 동등성"
// // 느슨한 동등성에서 null과 undefined는 같다고 평가됨.

// console.log(compareValues(false, 0)); 
// // "느슨한 동등성"
// // 느슨한 동등성에서 false는 0으로 변환되어 같다고 평가됨.

// console.log(compareValues(NaN, NaN)); 
// // "동등하지 않음"
// // NaN은 자기 자신과도 같지 않음. `NaN === NaN`도 `false`를 반환.

// console.log(compareValues(42, 42)); 
// // "엄격한 동등성"
// // 값과 타입이 모두 같으므로 엄격한 동등성을 만족.

function isPrimitive(value: unknown): boolean {
  return value === null || (value !== Object(value));
}

console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false