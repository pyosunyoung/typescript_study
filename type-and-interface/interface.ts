// interface, type;
// 
interface IStudent { // 인터페이스 설정 시 대문자로 I 붙여주고 
  name : string; // interface는 ;만 붙여줌.
  age?:number;
  isStudent:boolean;
}

type TStudent = { // 타입 설정 시 대문자로 T 붙여주고 
  name : string, // Type은 =, 붙여줘야함
  age?:number
}

type NewType = number|string // 원시타입도 가능, 튜플타입

type Tuple = [number,string, boolean]

// interface NewType { // 이렇게 하면 오류남 인터페이스는 객체만 가능함 
// // 앞에 필드 : number 이렇게 되어야함.
//   number|string
// }

let b: {name : string, age?:number, isStudent:boolean} = {
  name: "asdf",
  isStudent: false
}

let c: IStudent = { // 이런식으로 studnet 사용 가능.
  name: "asdf",
  isStudent: false
}

let d: TStudent = { // 이런식으로 studnet 사용 가능.
  name: "asdf",
}
//즉 객체 지향에선 interface를 많이 쓰고 아머진 type을 많이 씀.
//interface는 확장 관계가 잘 보임

interface IPerson {
  name:string;
  age:number;
  gender:string;
}

interface IForeigner extends IPerson { // 확장자, Iperson의 값들 사용가능
  nationality:string;
}

type TForeigner = IPerson & {nationality:string, perid:Date} // &가 extend느낌임, iperson값 필수로 들어가야 함.

let american :IForeigner = {nationality:"american", name:"jacob", age:23,gender:"F"}

type TForeigner2 = IPerson | {nationality:string, perid:Date} // |이렇게 하면 IPerson값이 들어가도되고 안들어가도 됨

let american2 :TForeigner2={nationality:"amercian", perid:new Date("")};


//test

// //문제 1
// // 인터페이스 작성
// interface IUser {
//   id:number;
//   name:string;
//   email?:string;
// }
// // 타입 작성
// type TUser = {
//   id:number,
//   name:string,
//   email?:string,
// }

// const user: IUser = {
//   id: 1,
//   name: "Alice",
// };

// const userWithEmail: TUser = {
//   id: 2,
//   name: "Bob",
//   email: "bob@example.com",
// };


// // User 타입을 작성하세요.
// // 여기에 작성
// type TUser = {
//   id:number,
//   name:string,
//   address:{
//     city : string;
//     zipCode : number;
//   }
// }
// // {
// //     city:string,
// //     zipCode:number,
// //   }
// // User 타입을 사용하여 아래 객체를 작성하세요.
// const user:TUser = {
//   id: 1,
//   name: "Alice",
//   address: {
//     city: "Seoul",
//     zipCode: 12345,
//   },
// };



// //문제 3
// // User 인터페이스 작성
// // 여기에 작성
// interface IUser{
//   id:number;
//   name:string;
//   email?:string;
// }

// // Admin 인터페이스 작성 (User 확장)
// // 여기에 작성
// interface IAdmin extends IUser{
//   role:string;
// }

// const normalUser: IUser = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// const adminUser: IAdmin = {
//   id: 2,
//   name: "Bob",
//   email: "alice@example.com",
//   role: "Administrator",
// };

// //문제 4
// // Product 타입 작성
// // 여기에 작성
// type TProduct = {
//   id : number;
//   name : string;
//   price : number;
// }

// // DiscountedProduct 타입 작성 (Product 확장)
// // 여기에 작성
// type TDiscountedProduct = TProduct & {
//   discount:number;
// }

// const normalProduct: TProduct = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
// };

// const discountedProduct: TDiscountedProduct = {
//   id: 2,
//   name: "Smartphone",
//   price: 800,
//   discount: 10,
// };


// Product 타입 작성
// 여기에 작성
interface IProduct{
  id:number;
  name:string;
  price:number;
}

interface IOrder{
  orderId:number;
  products:IProduct[];
  totalPrice:number;
}

// Order 타입 작성
// 여기에 작성

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order:IOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};





