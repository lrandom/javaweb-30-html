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
