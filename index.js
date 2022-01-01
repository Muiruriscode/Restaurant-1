  let submit = document.getElementById("submit")
  let input = document.getElementById("date")
  let message = document.getElementById("message")

  submit.addEventListener("click", validateInput)

  function validateInput(){
    let myDate = document.getElementById("date").value
    let day = parseDate(myDate)

    if(day.getDay() === 0){
      if(day.getHours() > 20){
        displayError()
      }
    }else if(day.getDay() > 0){
      if(day.getHours() < 11 || day.getHours() > 22){
        displayError()
      }
    }

  }

  function parseDate(s) {
    var b = s.split(/\D+/);
    return new Date(b[0], --b[1], b[2], b[3], b[4], b[5]||0, b[6]||0);
  }

  function displayError(){
    input.style.border = "2px solid red"
    input.style.backgroundImage = "linear-gradient(to right, pink, lightgreen)"
    message.style.display ="block"
  }