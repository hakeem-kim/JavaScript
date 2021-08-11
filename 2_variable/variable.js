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

// 3. Constant
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduc human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol 
// 더이상 작은 단위로 나눠질 수 없는 한가지 아이템 : ~~

// object, box container
// objcet는 싱글 아이템들을 여러개 묶어서 한 단위로, 한 박스로 관리해주는 것이 object

// function, first-class function
// first-class function 이란, 
// 이 프로그램 언어에서는 펑션도 다른 데이터 타입처럼 변수에 할당 가능
// 파라미터로 인자로도 전달이 가능, 리턴타입으로도 리턴 가능 
const count = 17; // integer 정수
const size = 17.1; // decimal number 10진수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn); // not A number

// bigInt (fairly new, don't use it yet)
const bigInt = 124567890124567890124567890124567890124567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan'; // brendan 자바스크립트 창조자 브렌던 아이크
const greeting = 'hello ' + brendan; // greeting 인사말
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //backtick ` 간편함
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 명확하게 null 값 할당
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언은 됐지만 값이 텅텅 비어있음 "let x = undefined" 라고 해도 됨
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 맵이나 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 concurrent하게 일어날 수 있는 코드에서 우선순위를 주고 싶을때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false, 심볼은 동일한 스트링을 작성했어도 다른 심볼로 만들어짐, 주어지는 스트링과 상관없이 고유한 식별자 생성

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true Symbol.for를 사용하면 동일한 심볼 생성가능

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // description 넣지 않으면 에러 발생

