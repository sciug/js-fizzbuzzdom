
//creare variabile lista

let list = document.getElementById("list")

//creare ciclo for 
//inseire nel "clico for" "if statements"
// determinare quando un numero è divisibile attraverso operatore modulo %

for (let i=1; i<=100; i++){
    if(i%5 == 0 && i%3==0){
        const element = `<li class="box box-3-5">FizzBuzz</li>`
        list.innerHTML += element
    }else if(i%3 == 0){
    const element = `<li class="box box-3">Fizz</li>`
    list.innerHTML += element

    }else if(i%5 == 0){
        const element = `<li class="box box-5">Buzz</li>`
        list.innerHTML += element

    }else{
        
    const element = `<li class="box">${i}</li>`
    list.innerHTML += element
    
    }

}

// ON CLICK

let element = document.getElementsByClassName("box")

for (let i=0; i<element.length; i++){
    element[i].addEventListener("click", function(){
        element[i].classList.add("big")
        

    })
    

}



// DOUBLE CLICK

for (let i=0; i<element.length; i++){
    element[i].addEventListener("dblclick", function(){
        element[i].classList.remove("big")
        

    })
    

}


