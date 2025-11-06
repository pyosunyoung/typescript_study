// //유니온 타입 : 타입을 여러개 받을 수 있는 타입

// type Track = {
//   title: string,
//   releaseDate: string,
// }

// type Artist={
//   name: string,
//   releaseDate:string
// }

// type SearchResult = Track | Artist

// interface SearchResponse {
//   searchResult: Track | Artist
// }

// let results : SearchResult[] = [{title:"hello", releaseDate:"2024"}, {name:"hello", releaseDate:"2025"}]

// function getName(result:Track|Artist){
//   return result.name // name일시엔 에러가 나버리지 artist엔 없으니까
//   // 이 에러해결해 주는 것이 type 좁히기이 result는 반드시 타입이 track일 것이다 혹은 artist일 것이다.

// }

// 타입 좁히기 !!
//1. typeof => 단점 : 원시타입만 잡아줄 수 있음. number,string, boolean, undefined만 가능


// type SearchType = number | string;

// function searchByKeyword(keyword:SearchType):string{
//   //넘버로 들어노는 타입은 스트링으로 바꿔주기
//   if(typeof keyword === "number") return keyword.toString() // 요렇게 타입 좁히기
//   return keyword // 에러 number로 들어오면 어케 할 것이냐?
// }

// console.log(searchByKeyword(3));

//2. instanceof 객체 타입 잡아주기 js내에 내장된 클래스만 잡아줌

// type Period={
//   start:string,
//   end:string
// }

// type SearchType = Period | Date

// function getDate(day:SearchType):Date{
//   if(day instanceof Date) return day // day라는 매개변수가 Date의 인스턴스냐? 맞다면 day그대로 리턴 들어온 매개변수 값
//   return new Date(day.start)
// }

// getDate(new Date("2024-01-01"))
// getDate({start:"2024-01-01", end:""})

//3. in

// type Track = {
//   title: string,
//   releaseDate: string,
// }

// type Artist={
//   name: string,
//   releaseDate:string
// }

// function getName(result:Track | Artist){
//   if("title" in result) return result.title
//   // title이 result에 있다면 result title를 반환해라.
//   if("name" in result) return result.name
//   //필드 값을 통해서 타입 좁히기 가능.
// }

// ★★ 4. is => 타입 확정에 쓰이고 타입 가드라고 불림.★★
// ★★ 많이 쓰임 ★★
// function 타입가드(변수: any): 변수 is 특정타입 { // 이 함수의
//   return 조건식;
// }

// type Track = {
//   title: string,
//   releaseDate: string,
// }

// type Artist={
//   name: string,
//   releaseDate:string
// }

// function isTrack(result: Track | Artist):result is Track{ //result is Track=> result는 무조건 Track 타입이다로 설정
//   return (result as Track).title !== undefined // as는 가정하는것 즉 result를 우선 Track으로 가정해보자.
//   //만약 title란 값이 undefined가 아니라면 즉 값이 무조건 있다면 Track으로 설정한다.
// }

// function isArtist(result: Track | Artist):result is Artist{
//   return (result as Artist).name !== undefined;
// }

// function printInfo(result:Track | Artist){
//   if(isTrack(result)){
//     console.log(result.title)
//   }else if (isArtist(result)){
//     console.log(result.name)
//   }
// }


// 유니온 타입의 단점
type Track = {
  type: "track" // 리터럴 타입, enum값? 아렇게 타입을 지정해줄 수 있음.
  title: string,
  releaseDate: string,
}

type Artist={
  type: "artist" //즉 식별자 느낌. 유니온 타입 에러는 이렇게 식별자로 해결가능.
  name: string,
  debutDate:string
}
 // 또는 보다는 합집합 느낌임 그래서 필드로 다 들어갈 수 있게됨 일부만 일치해도 타입 통과
const result:Track | Artist= {
  type:"track",
  title:"hey",
  releaseDate:"2025"
}

// type SearchResult = Track | Artist

type SearchResult = Track | Artist | Radio; // Radio타입이 추가되었을 때 
//아래에 또 케이스 처리를 계속 추가해줘야함. 이 에러 해결 ㄱㄱ
function getTypeName (result:SearchResult){
  if(result.type === "track")return "트랙"
  else if(result.type === "artist")return "아티스트"
  //radio 타입을 지나친다. 까먹음 ㅠㅠ
  else if(result.type === "radio") return "라디오"
  else{
    exhaustiveCheck(result);// 안정성 체크
    //애초에 못들어가게 설정. never타입이기 떄문에 애초에 못들어감 result에 오류 난거 파악하고
    //다시 위에 else if 문 작성해주는 느낌임 무슨말인지 알죠?
    return "결과"
  }
}
//never는 절떄로 리턴이 될 수 없는 값 => 무한 굴레, 에러를 던지거나 등등
function exhaustiveCheck(param:never){
  throw new Error("에러")
}