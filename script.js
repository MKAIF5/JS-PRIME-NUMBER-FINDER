function checkPrime(num){
    if(num <= 1){
      return false
    }
}

for(let i=2; i<= Math.sqrt(num) ; i++){
    if(num % i === 0){
        return false
    }
    return true
}

const submit  = document.getElementById("submit");
const answer = document.getElementById("dom-msg");
submit.addEventListener("click" , () =>{
    const inp = document.getElementById("inp");
    const result = checkPrime(inp);
     
    if(result){
        answer.innerHTML = num + "Is A Prime Number"
    }

    else{
        answer.innerHTML = num + "Is Not A Prime Number"
    }
})