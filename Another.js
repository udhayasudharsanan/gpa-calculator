const noOfSubj = sessionStorage.getItem("noSubjects");
console.log(noOfSubj); 
let grad=[];
let cred=[];
let allFiled ;
const dynaField =()=>{
    const make =document.querySelector("#noOfInput");
     for(let i = 1; i <=noOfSubj ; i++){
       make.innerHTML += `<div><label for="Sub${i}Grade">Subject <span>${i}</span> Grade</label><input id="Sub${i}Grade" type="" name="Sub${i}Grade" placeholder="A" required /><label for="Sub${i}Cred"> Credits </label><input id="Sub${i}Cred" type="number" name="Sub${i}Cred" placeholder="3" required /></div>`;
    } 
    console.log("input field created", make);
};



const grade =()=>{
    const gr =document.querySelector("#noOfInput");
    gr.addEventListener("input" ,()=>{
        for(let i = 1; i <=noOfSubj ; i++){
            const gr1 =document.getElementById(`Sub${i}Grade`);
            const cr1 = document.getElementById(`Sub${i}Cred`);
            if (gr1){
                grad[i-1]=gr1.value;
            }
            if(cr1){
                cred[i-1]=cr1.value;
            }
            console.log(grad);
            console.log(cred);    
            convertGrade();
            if(grad[i-1] || cred[i-1]){
                allFiled =true ;
            }
            else{
                allFiled= false ;
            }
            
            
            
            if(allFiled){
                sumTotal();
        
        }
        
        }
    });

};

const convertGrade = ()=>{
    const gradeValues ={
        "O" : 10,
        "A+" : 9,
        "A" : 8,
        "B+" : 7,
        "B" : 6,
        "C":5
    };
   for(let i = 0; i <noOfSubj ; i++){
    if( grad[i] in gradeValues ){
        grad[i] = gradeValues[grad[i]];
        console.log("WHLE CONVERTING GRADES",grad);
    };
    
    console.log(grad[i]);
    console.log("updated grades to number ",grad[i]);    
};
    console.log(grad);
};


 const  sumTotal = ()=>{
    console.log(grad);
    console.log(cred);
    let dum = 0;
    let dum1 =0;
    
    for(let i = 0; i <noOfSubj ; i++){ 
        let sum = grad[i]*parseInt(cred[i]);

        console.log(grad[i]);
        console.log(parseInt(cred[i]));
        dum += sum;
        console.log(dum);
        let sum1 =parseInt(cred[i]);
        dum1 += sum1;
        console.log(dum1);
        };
    let final = dum /dum1 ;
    console.log(final);
    sessionStorage.setItem("gpa",final);
    return final;
};



const end = ()=>{
 const domValue = document.getElementById("sub"); 
 domValue.addEventListener("click",()=>{
    window.location.href="result.html";
 })
};

const next =()=>{
    dynaField();
  
    grade();

    end();
};

next();  