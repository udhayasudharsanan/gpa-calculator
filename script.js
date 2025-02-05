const start=()=>{
const res = document.getElementsByTagName("span");
console.log(res[0]);
const gpa = sessionStorage.getItem("gpa");
console.log(gpa);
let result = parseFloat(gpa).toFixed(2);
console.log(result);
res[0].innerHTML=`<span class="finalResult">${result}</span>`
}

start();

