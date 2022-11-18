/*Catch DOM */
const btns = document.querySelectorAll("button");
const displayScreen = document.querySelector(".display");
const resetBtn = document.querySelector(".clear");
const resultBtn = document.querySelector(".equal");
console.log("clicked inti")


/* add click event to buttons */
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
     displayScreen.textContent += btn.value;
     
     /* if the user pass 30 Chart */
     if(displayScreen.textContent.length > 30){
      displayScreen.textContent = "You pass 30 Chart"
       setTimeout(() => {
         displayScreen.textContent = "" 
       },500)
     }
    })
  })
  /* Reset button */
  resetBtn.addEventListener("click", () =>{
   displayScreen.textContent = "";
  })
  
  /* Result Button */
  resultBtn.addEventListener("click", () => {
    /* Check if the user didn't enter any character and press equal button */
    if(displayScreen.textContent.length === 0 ) return
    
    try {
    displayScreen.innerText = eval(displayScreen.textContent); 
} catch (e) {
  /* Catch any invalid expression */
    if (e instanceof SyntaxError) {
        displayScreen.textContent = "Enter valid equation";
        setTimeout(() => {
          displayScreen.textContent = ""
        }, 1000);
    }
}
  }
  )