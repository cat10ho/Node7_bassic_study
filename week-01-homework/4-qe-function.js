// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.

function add(a,b){
   return a+b;    
};
console.log(add(1,2));

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function name(name){
    console.log(`안녕하세요, ${name}님!`);
 };
 name('이삭');

// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function max(a, b, c) {
    let max = a;
    
    if (b > max) {
        max = b;
    }
    
    if (c > max) {
        max= c;
    }
    
    return max;
}

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function num(number){
    if(number%2===1){
        console.log('홀수')
    }else if (number%2===0){
        console.log('짝수')
    }else {
        console.log('뭐냐')
    }
}


// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function asdf(asdf){
    for(index of asdf){
        console.log(index);
    }
}
asdf(['a','b']);