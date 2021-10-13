
//creare variabile lista

let list = document.getElementById("list")

//creare ciclo for 
//inseire nel "clico for" "if statements"
// determinare quando un numero è divisibile atraverso operatore modulo %

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