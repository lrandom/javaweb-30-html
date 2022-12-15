const sum = (n) => {
    let odd = 0;
    let even = 0;//chẵn
    for (let i = 1; i < n; i++) {
        if (i % 2 == 0) {
            even += i;
        }else{
            odd += i;
        }
    }
    return [odd,even]
}
const [odd,even] =  sum(10); //toán tử phân rã destructor (javascript es6)
console.log(odd);
console.log(even);

const sum = (n) => {
    let odd = 0;
    let even = 0;//chẵn
    for (let i = 1; i < n; i++) {
        if (i % 2 == 0) {
            even += i;
        }else{
            odd += i;
        }
    }
    return {
        odd,
        even
    }
}

const {odd, even} = sum(20);
const obj = sum(30);
obj.odd;
obj.even;

document.getElementById("id");//trả về 1 node/object/nút tương ứng
document.getElementsByClassName('ten_class_tap_cac_the')//trả về một mảng các nodes tương ưứng
document.getElementsByTagName('div');//trả về một mảng các nodes tương ứng
document.querySelector('select của đối tượng/tập đối tượng tương ứng');//trả về một đối tượng
document.querySelectorAll('selector của đối tượng/tập đối tượng');//tập các nút/đối tượng
