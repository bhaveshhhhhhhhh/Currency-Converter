import {codes} from './code.js'

let select1=document.querySelector(".from-select")

let select2=document.querySelector(".to-select")

let from_flag=document.querySelector(".from")
let to_flag=document.querySelector(".to")

let from_img=document.querySelector(".from img")
let to_img=document.querySelector(".to img")
let amount=document.querySelector(".amount")
let answer=document.querySelector(".answer")
let rate=document.querySelector(".rate")
let data




for(let code in codes){
    let options =document.createElement("option")
    options.value=code
    options.innerText=code
    select1.append(options)

    if(options.value==="INR"){
        options.selected=true
    }
  
    
}

for(let code in codes){
    let options =document.createElement("option")
    options.value=code
    options.innerText=code
    select2.append(options)

        if(options.value==="USD"){
        options.selected=true
    }
  
    
}
rate.innerText= "          1 INR = 0.011 USD"
async function api(){
    let response=await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
     data=await response.json()
  
  
    
}
await api()

select1.addEventListener("change",async()=>{
    from_img.src=`https://flagsapi.com/${codes[select1.value]}/flat/64.png`
    
    
    rate.innerText=`1 ${select1.value} = ${(1/data.eur[select1.value.toLowerCase()])*data.eur[select2.value.toLowerCase()]} ${select2.value}`
})
select2.addEventListener("change",async()=>{
    to_img.src=`https://flagsapi.com/${codes[select2.value]}/flat/64.png`
   
    
    rate.innerText=`            1 ${select1.value} = ${(1/data.eur[select1.value.toLowerCase()])*data.eur[select2.value.toLowerCase()]} ${select2.value}`

})

let submit=document.querySelector(".submit")
submit.addEventListener("click",async ()=>{
   
  

    const val=amount.value/data.eur[select1.value.toLowerCase()] //how many euros
    answer.innerText=data.eur[select2.value.toLowerCase()]*val
    
})









