// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const whoSays = document.querySelectorAll(".like-glyph")
console.log(whoSays)

for (let heart of whoSays){
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then((resp) => {
    if(resp === "Pretend remote server notified of action!"){
      const errorMessage = document.querySelector("#modal")
      errorMessage.classList.add("hidden")
      if(heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
      }else{
        heart.innerText = FULL_HEART
      }
      console.log(resp)
      }
    })
    .catch((resp) => {
      if(resp === "Random server error. Try again."){
        const errorMessage = document.querySelector("#modal")
        errorMessage.classList.remove("hidden")
        console.log(resp)
      }
    })
  })
}


// ------------------------------------------------------------------------------÷
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
