const us = document.getElementById("noOfSub");
localStorage.clear();
sessionStorage.clear();

const getVal = ()=>{
    console.log("Button clicked");
    let noOfSubjects = us.value;
    if(noOfSubjects<=9){
        window.sessionStorage.setItem ("noSubjects",noOfSubjects);
        window.location.href= "sub.html";
        return noOfSubjects ;
    }
    else{
        alert("Please enter a subject number between 1 to 8");
        window.location.reload();

    }
};

const reloc = async ()=>{
    await getVal();

}

const doW = document.getElementById("sub");
doW.addEventListener("click",reloc);
 













