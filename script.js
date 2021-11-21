let radgender = document.querySelectorAll("input[name = 'gender']")
let fizchar = document.querySelectorAll("input[type= 'text']")
let fizact = document.querySelectorAll("input[name = 'activity']")
let butsubmit = document.querySelector(".butsubmit")
let butreset = document.querySelector(".butreset")
let result = 0
let gender = "men"
let activity = 1.2
let ResThounsand = 0
let Res1 = 0
let tresult = 0 
let fresult = 0
let sresult = 0



fizchar.forEach(Element=>Element.addEventListener("input",function() { 
   this.value = this.value.replace(/[^\d]/g,"")
}))
fizchar.forEach(Element=>Element.addEventListener("input", function() {
    let chek = 0
    fizchar.forEach(Element=>{
        if (Element.value.length > 0){
            chek ++ 
        }
    })
    console.log(chek)
        if (chek > 0){
            butreset.disabled = false
        }
        else {
            butreset.disabled = true
        }
        if (chek == 3){
            butsubmit.disabled = false
        }
        else { 
            butsubmit.disabled = true
        }
}))
radgender.forEach (Element=>Element.addEventListener('change',function(){
    gender = this.value
    
}))
fizact.forEach(Element=>Element.addEventListener('change', function(){
    switch(this.value){
     case "min":activity = 1.2; break;   
     case "niz":activity =  1.375; break;
     case "midle":activity = 1.55; break;
     case "high":activity = 1.725; break;
     case "veryhigh":activity = 1.9; break;
    }
     
}))
butsubmit.addEventListener('click', function(){
    let height = document.getElementById('height').value
    let age = document.getElementById('age').value
    let weight = document.getElementById('weight').value

    if (gender == 'men') {
        result = ( 10* weight + 6.25 * height - 5 * age + 5) * activity
    } else {
        result = ( 10* weight + 6.25 * height - 5 * age - 161) * activity

    }
    fresult = Math.trunc(result)
     ResThounsand = Math.trunc(fresult/1000)
     Res1 = fresult - ResThounsand * 1000 
    document.querySelector('.fresult').innerHTML = ResThounsand + ' ' + Res1
    sresult = Math.trunc(result * 0.75)
     ResThounsand = Math.trunc(sresult/1000)
     Res1 = sresult - ResThounsand * 1000 
    document.querySelector('.sresult').innerHTML = ResThounsand + ' ' + Res1
    tresult = Math.trunc(result * 1.15)
    ResThounsand = Math.trunc(tresult/1000)
     Res1 = tresult - ResThounsand * 1000 
    document.querySelector('.tresult').innerHTML = ResThounsand + ' ' + Res1
    document.querySelector('.surprise').style.visibility = "visible"
    document.querySelector('.surprise').style.opacity = 1
    
})



