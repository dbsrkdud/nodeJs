var args = process.argv;        // 배열 형태 기본 크기 2

console.log(args[2]);

console.log('A');
console.log('B');

if(args[2] == '1'){
    console.log('C1');
} else {
    console.log('C2');
}

console.log('D');