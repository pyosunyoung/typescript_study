//재네릭 타입 굉장히 중요하다.
// 재네릭 타입 => 타입을 변수처럼 사용한다.

//타입이 선언시가 아닌 호출시에 결정됨.
type ArrayType<T> = T[]//타입선언시 string인지 number인지 아직 모를 때 <T>이게 제네릭 타입

const numberArray:ArrayType<number> = [1,2,3]
const stringArray:ArrayType<string> = ["a","b"]

//제네릭 타입은 언제 쓰이냐? api 호출시 request 응답값이럴 때 많이 쓰임

//카테고리 정보
// {
//   status:"ok"
//   totalPage:2,
//   totalResult:10,
//   page:1,
//   data:[{name:"액션"}, {name:"로맷느"},{name:"가족"}]
// }

// //영화 정보
// {
//   status:"ok"
//   totalPage:2,
//   totalResult:300,
//   page:1,
//   data:[{title:"기생충", name:"액션"}, {name:"로맷느"},{name:"가족"}]
// }

// //영화 정보
// {
//   status:"ok"
//   totalPage:2,
//   totalResult:300,
//   page:1,
//   data:[{series:"논스톱", runningTime:"120"}]
// }

//제네릭 적용 전

// type CategoryResponse = {
//   status:string,
//   totalPage : number,
//   totalResult: number,
//   page:number,
//   data:{name:string}[]
// }

// type MovieResponse = {
//   status:string,
//   totalPage : number,
//   totalResult: number,
//   page:number,
//   data:{title:string,genre:string}[]
// }

//타입 겹치는 부분이 많음. category와 movie가 그래서 이럴 때 제네릭 타입을 사용해서 중복감소
//아래는 제네릭 추가한부분
type ApiResponse<T> = {
  status:string,
  totalPage : number,
  totalResult: number,
  page:number,
  data:T[]
  
}

// type CategoryResponse = ApiResponse<{name:string}> // T에 {name:string}이게 들어가는 것
// type MovieResponse = ApiResponse<{title:string, genre:string}>
//이렇게하면 코드가 확실히 감소되어지지

type Category={
  name:string
}

type Movie={
  title:string, genre:string
}

type CategoryResponse = ApiResponse<Category> // T에 {name:string}이게 들어가는 것
type MovieResponse = ApiResponse<Movie>


// function useState<T>(초기화값:T):[T,함수<T>]{
//   return [값, 함수]
// }
// useState를 타입스크립트화 가능.

// const [value,setValue] = usseState() // 안에 초기값이 뭐가 들어갈지 모름.

// const [value2,setValue2] = useState<boolean>(false)// 이런식으로 타입 명시하는 것이 좋다.

//재네릭 타입도 값 제한을 걸 수 있음

interface Length{
  length:number
}

function getValue<T extends Length>(data:T){
  console.log(data.length)
}

console.log(getValue("hello"));

//1. 조건부 타입

type IsString<T> = T extends string ? "yes" : "no" // 스트링 타입일 시 yes 아닐씨 no
// type IsString<T> = T extends Movie ? string:Category 이런식도 가능 
type result1 = IsString<number> // no 값이 result1에 들어감
//타입을 조건으로 할 수 있음

//2. mapped type
type Movie={
  title:string, 
  genre:string,
  rate:number
}

type Subset<T> = {
  [K in keyof T]?:T[K] //T에있는 모든 값을 들고와서 ?를 붙여준것, K는 키값 가져온듯? title, genre 이런거
} //T[K]는 즉 아래예시를 통해 Movie.title => string 즉 title?:string 이렇게 되어지는 것
//어떤것을 다 옵셔널로 바꿔야한다? 걍 이 공식 외우셈 ㅇㅇ
const movie1:Subset<Movie> = {title:"기생충", genre:"액션"}
const movie2:Subset<Movie> = {rate:2}
//이렇게 각각 다른 값들을 원할 때 
// title?:string, 
//   genre?:string,
//   rate?:number; 이렇게 할 수 있지마 subset이란 옵셔녈 타입을 만들어줌


//아래처럼 활용 가능.
interface Pair<T,U>{
  first:T,
  second:U,
  display():void
}

const pair :Pair<string, number>={
  first:"noona",
  second:2,
  display(){
    console.log(this.first+"는"+this.second+"살 입니다.")
  }
};
pair.display