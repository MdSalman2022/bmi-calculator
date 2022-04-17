const btn = document.querySelector('.btn')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const result = document.querySelector('.result')
const advice = document.querySelector('.advice')

btn.addEventListener("click", function(e){
    e.preventDefault();
    const totalheight = (height.value/100)*(height.value/100)
    const math = (weight.value/totalheight).toFixed(2)
    if(height.value=="" || weight.value=="")
    {
        alert("Bhai kisu den")
    }
    else
    result.innerHTML = `<h4>Your BMI is: ${math}</h4>`
   
    if(math<18.5){
        advice.innerHTML = `<h4> You are underweight <i class="fa-solid fa-face-frown"></i></h4>`     
    }
    else if(math>=18.5 && math<=24.9){
        advice.innerHTML = `<h4>You are Healthy <i class="fa-solid fa-face-smile-beam"></i></h4>`
    }
    else if(math>=25 && math<=29.9){
        advice.innerHTML = `<h4>You are Overweight <i class="fa-solid fa-face-frown-open"></i></h4>`
    }
    else if(math>=30){
        advice.innerHTML = `<h4>You are Obese <i class="fa-solid fa-face-sad-tear"></i></h4>`
    }
    

    result.appendChild(advice)
})