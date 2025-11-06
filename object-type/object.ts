// let a :object = {}
// let b :{readonly name:string, age?:number} = {name:"noona"};
// let c :{name:string, age:number} = {name:"noona", age:25};

// // b.name="pyo" //  readonly지정시 초기값 못바꿈 에러남.
// //데이터 형식이 일정하지 않을 때, age가 안들어갈 수도 있는 느낌.
// // 즉 age가 필수값이 아닐 떄 age?:number이렇게 활용 ?가 선택적 속성.

// //배열 타입 설정
// let fruits:string[]=["banana", "apple"];

// // let numbers:number[]=[1,2,3,4,];

// let numbers2:Array<number>=[1,2,3] // 이거 잘 안씀.

// //객체를 배열화 시키는 타입 {}[]
// let students:{name:string, age?:number}[] = [{name:'pyo', age:12}, {name:'pyo2', age:13}]

// //튜플 타입 설정(튜플은 반드시 스트링,넘버만 받을 수 있음)
// let tuple:[string,number]
// tuple=["pyo", 23,] // 인덱스 순서까지 일치해야 에러안남.
// //튜플은 잘 안씀.
// //string|number 두개 타입이 오개 설정하는 방법.


// let user:{name:string, age?:number, isAdmin:boolean} = {
//   name: "Alice",
//   isAdmin: true,
// };

// user={
//   name: "Bob",
//   age:40,
//   isAdmin: false,
// }

// let numbers:readonly number[] = [];


// const products: [string, number, boolean][] = [
//   ["Laptop", 1000, true],
//   ["Shoes", 50, false],
//   ["Book", 20, true],
// ];

// // 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
// function getProductNamesAndPrices(
//   products: [string, number, boolean][]
// ) {
//   return products.map((product, idx) => {
//     product;
//   })
//   // 여기에 구현

// }

// // 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
// function getAvailableProducts(
//   products: [string, number, boolean][]
// ) {
//   // 여기에 구현
// }

// // 테스트 코드
// console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

// console.log(getAvailableProducts(products));
// // 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]


//매개변수, 리턴 타입 정의 필요
// function updateUser(user:{name:string, age?:number|25}) {
//   // 나이가 제공되지 않으면 18로 설정

//   return user;
// }

// // 테스트 코드
// console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
// console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }


// // proudcts 타입정의  필요 
// const products = [
//   { name: "Laptop", price: 1000, category: "Electronics" },
//   { name: "Shoes", price: 50, category: "Fashion" },
//   { name: "Book", price: 20 },
// ];

// proudcts 타입정의  필요 
const products: {name:string, price:number, category?:string}[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string) {
  // 여기에 구현
  products.map((products, idx)=>{
    if(products.category == category){
      return products.name
    }
  })
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
