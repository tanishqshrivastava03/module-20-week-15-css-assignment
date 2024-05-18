const power = (n) => {
    return n ** 2
}
function cube(power,n){
    return power(n) * n
}
// console.log(power(3));  
function sayhello(){
    return hi_uditya;
}
// console.log(sayhello);
const three = n =>{
    const teo = m =>{
        const one = p =>{
            return n+m+p
        }
        return one
    }
    return teo
}
// console.log(three(2)(3)(4)); 
const arr = ["kkk","sss","aaaa","pppap","jjjjja"]

arr.forEach(function(element,index,arr){
    // console.log(element,index,arr);
})
console.log(arr);

// arr.forEach((el)=>{console.log(el.toUpperCase())})
const one = arr.filter((t)=>{
    return t.includes('a')
})
console.log(one);
