const btn = document.querySelector('.btn')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const result = document.querySelector('.result')
const advice = document.querySelector('.advice')

btn.addEventListener("click", function(e){
    e.preventDefault();
    const totalheight = (height.value/100)*(height.value/100)
    const math = (weight.value/totalheight).toFixed(2)

    result.innerHTML = `<p>Your BMI is: ${math}</p>`
   
    if(math<18.5){
        advice.innerHTML = `<p> You are underweight</p>`
    }
    else if(math>=18.5 && math<=24.9){
        advice.innerHTML = `<p>You are Healthy</p>`
    }
    else if(math>=25 && math<=29.9){
        advice.innerHTML = `<p>You are Overweight</p>`
    }
    else if(math>=30){
        advice.innerHTML = `<p>You are Obese</p>`
    }
    

    result.appendChild(advice)
})