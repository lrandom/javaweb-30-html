//first citizen function
function calcTotal(num1,num2) {
    return num1+num2;
}

const calcTotal2 = function (num1, num2) {
    return num1 + num2;
};

const callcTotal3 = new Function("num1", "num2", "return num1+num2");

//hàm mui tên (ES6)
//context-> JS nâng cao
const calcTotal4 = (num1,num2)=>{
    return num1 + num2;
}

calcTotal(10, 20);

const mang = [
    10,20,30
];
console.log(mang[1]);
console.log(mang[2]);
console.log(mang.length); //ko có dấu ngoặc tròn - thuộc tính

mang.push(10);///phương thức thuộc đối tương mảng
mang.push(20);

const mang2 = new Array(10, 20, 30);
