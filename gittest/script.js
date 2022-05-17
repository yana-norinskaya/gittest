//задача №1
let sum = 0;
for(i=1; i<1000; i++) {
    if(i%3===0 || i%5===0){
        sum+=i;
    }
}
console.log(sum);

//задача №2
let x = new Array(new Array(20, 34, 2), new Array(9, 12, 18), new Array(3, 4, 5));
let minInt = x[0][0];
for(i=0; i<x.length; i++){
    for(j=0; j<x[i].length; j++){
    let value = x[i][j];
    if(value < minInt)
    minInt = value;
    }
}
console.log('Минимальное значение: '+ minInt);
