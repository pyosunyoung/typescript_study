// enum 정확한 문자를 타입으로 지정해주고 싶다 이럴 떄 사용.
// Female Male
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender || (Gender = {}));
var SearchType;
(function (SearchType) {
    SearchType[SearchType["Date"] = 0] = "Date";
    SearchType[SearchType["KEYWORD"] = 1] = "KEYWORD";
    SearchType[SearchType["ORDER"] = 2] = "ORDER";
})(SearchType || (SearchType = {}));
console.log("hey", SearchType.Date);
// let gender:string = "Female"
// gender = "alien"
// gender = "pyo"
var gender = Gender.FEMALE; // 이렇게 내가 지정해준 문자만 들어갈 수 있음.
// let gender:Gender = "pyo" // 이렇게 하면 오류
