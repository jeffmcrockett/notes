let a = [1,2,3,4,5,6,7,8,9,0,2,43,12,4,5];
let b = [];

// write some code that will make a copy of array a into b
// but will remove duplicated

for (let i=0; i < a.length; i++) {
    if(b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
}


console.log(b);