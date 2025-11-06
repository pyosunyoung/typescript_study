// type Product = {
//   id:string;
//   name:string;
//   price:number;
  
// }

// type DiscountProduct = Product & {discountRatio:number}

// interface Product{
//   id:string;
//   name:string;
//   price:number;
// }

// interface DiscountProduct extends Product {
//   discountRatio:number
// }

// type Popularity = {
//   rate: number;
// }

// interface Review{
//   rate: string;
//   review: number;
// }

// type Filter = Popularity & Review; // 두개 같이 사용 가능

// // popularity, review 두개 동일한 변수명이 있고 타입만 다를 때 생기는 오류
// // type 버전
// let filter: Filter={ // 이런식으로
//   rate: 2.3, // 변수에 값 할당 시 에러
//   review: 3
// }
// // interface 버전
// interface IFilter extends Popularity, Review{
//  // 선언 자체에서 에러
// }

// 타입 확장하면서 실수 발생하는 순간들
// 상품 인터페이스에 어떠한 세일 상품들은 따로 보여줘야하는 상황.

// interface Product{
//   id:string;
//   name:string;
//   description:string;
//   // discountPercent?:number 이렇게 하면 map시 복잡한 오류가남 왜냐 69줄
// }

// interface SalesProduct extends Product{
//   discountPercent?:number
// }

// type ApiResponse = {
//   products:Product[],
//   // salseProducts:Product[], // 이것도 동일 오류 69줄 ㄱㄱ
//   salseProducts:SalesProduct[],
// }

// const apiResponse:ApiResponse = {
//   products:[Image, name, description],
//   salseProducts:[
//     Image, name, RTCSessionDescription, discouintPercent
//   ]
// }

// apiResponse.map(item => item.discouintPercent);
// 단순하게 귀찮아서 한곳에 타입을 지정하면 이렇게 map함수 실행시 
// products에는 discountPercent가 없는데 salseProducts에는 있으니 
// map시 전체 정렬이 이루어지지 않는거지 map은 discouintPercent가있고 없고를 판단하는 게 불가능

//연습문제이
type Product = {
  id: number;
  name: string;
  price: number;
}

type Discount =  {discountPercentage: number;}

// Product 타입 정의
// 여기에 작성

// Discount 타입 정의
// 여기에 작성

function calculateDiscountedPrice(item: Product & Discount): number {
  // 여기에 구현
  item.price - item.discountPercentage;
}

// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800



// ContactInfo 타입 정의
// 여기에 작성
type ContactInfo = {
  phone: string;
  address: string;
}
// OrderInfo 타입 정의
// 여기에 작성
type OrderInfo = {
  orderId: number;
  items: string[];
}

function printOrderSummary(order: ContactInfo & OrderInfo): string {
  // 여기에 구현
  return `Order ${order.orderId} (${order.phone})`
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"




// 기본 사용자 정보 타입 정의
type Profile = {
  id: number;
  name: string;
  email: string;
};

// 사용자 활동 기록 타입 정의
type Activity = {
  lastLogin: Date;
  actions: string[];
};

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: Profile, activity: Activity): Profile & Activity {
  return { ...profile, ...activity };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: Profile & Activity): string {
  return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile: Profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity: Activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"

