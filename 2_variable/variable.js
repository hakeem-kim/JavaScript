// 1. Use strict
//  added in ES5
// use this for Valina Javascript.
'use strict';
console.log(age);

// 2. Variable
// let (added in ES6)


// Global Scope
// 블럭 외부에서 접근 가능
// 글로벌 변수,, 실행 -> 종료 까지 메모리에 탑재되어있음, 최소한의 사용
let golbalName = 'global name';

// Block Scope
// 블럭 외부에서는 name이라는 변수에 접근 불가능
{
    let name = 'hakeem';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(golbalName);
}
console.log(golbalName);

// 콘솔 창에서 공백으로 보임. 블록 스코프에 있는 name 변수에 접근이 불가능 하기 때문에
console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅이란, 어디에 선언했나 상관없이, 항상 제일 위로 선언을 끌어 올려주는 것
// has no Block Scope
{
    age = 4;
    var age;
}
console.log(age);