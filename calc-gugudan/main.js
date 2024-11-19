// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

// 프로그램 시작
async function main() {
    let validChoice = false;
    while (!validChoice) {
        console.log("1. 사칙연산 2. 구구단 3. 나가.기")
        const choice = await readlineSync.question("무엇을 하겠습니까.");

        switch (choice) {
            case '1':
                console.clear;
                await calculator()
                break;
            case '2':
                console.clear;
                await printMultiplicationTable()
                break;
            case '3':
                console.clear;
                validChoice = true;
                break;
            default: console.clear;
            console.log('1, 2, 3 중에 입력바람.')
        }

    }
}

// 사칙연산 계산기 함수
async function calculator() {
    console.clear()
    let validChoice = false;
    let a,b,c,d,num,num2;

    while (!validChoice) {
        a = await readlineSync.question("숫자 입력");
        num = Number(a);
        if (!isNaN(num)) {
            validChoice = true;
            console.clear()
        } else {
            console.log("숫자 입력바람.")
        }
    }

    validChoice = false;
    while (!validChoice) {
        b = await readlineSync.question("연산자 입력");
        if(b==='+'||b==='-'||b==='*'||b==='/'){
            validChoice = true;
            console.clear()
        } else {
            console.log("연산자 입력 바람")
        }

    }
    
    validChoice = false;
    while (!validChoice) {
        c = await readlineSync.question("숫자 입력");
        num2 = Number(c);
        if (!isNaN(num2)) {
            validChoice = true;
            console.clear()
        } else {
            console.log("숫자 입력바람.")
        }
    }

    switch (b) {
        case '+':
            d = num + num2;
            break;
        case '-':
            d = num - num2;
            break;
        case '*':
            d = num * num2;
            break;
        case '/':
            if (num2 !== 0) {
                d = num / num2;
            } else {
                console.clear()
                console.log("0은 분모로 두지 마라.");
                return; 
            }
            break;
        default:
            console.log("어캐한거냐.");
            return;
    }

    // Output the result
    console.log(`${a} ${b} ${c} = ${d}`);
    await readlineSync.question("아무키나 눌러서 다음으로 넘어가기.");
    console.clear()
}

// 구구단 출력 함수
async function printMultiplicationTable() {
    console.clear()
    for (let j=2; j<10; j++){
        for(let i=1; i<10; i++){
            console.log(`${j} * ${i} = ${j*i}`);
        }
    }
    await readlineSync.question("아무키나 눌러서 다음으로 넘어가기.");
    console.clear()

};

// 프로그램 실행
main();