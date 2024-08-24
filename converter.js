const converter = document.querySelector("form")

converter .addEventListener("submit",convert)





function convert(event){
    event.preventDefault()

    let temperature = document.querySelector(".input").value

    if(temperature === ""){
        alert ("temperature cannot be empty")
    
    }else{
        const convertion_rate = 375
        let farenheight = Number(temperature) + convertion_rate


        document.querySelector(".farenheight").innerHTML = temperature + ("⁰c")
        document.querySelector(".celcius").innerHTML = farenheight + ("⁰f")
    }9 
}

const format = document.querySelector("button")

format.addEventListener("click", reset_all)

function reset_all(){
    document.querySelector(".farenheight").innerHTML =   0 + ("⁰c")
    document.querySelector(".celcius").innerHTML = 0 + ("⁰f")
}