const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modalMessage = document.querySelector('.hidden')

//iterate over each button and pass it through to the event listener for the eventDisposition function

const array = document.querySelectorAll('.like-glyph')

array.forEach((ele) => {
 ele.closest('article').addEventListener('click', (event) => { 
  event.composedPath()[3].addEventListener('click', eventDisposition(event.composedPath()[3]))})

function eventDisposition(block) {
  return (block.querySelector('span').className === 'activated-heart'?handleFullHeart(block):handleClick(block))

  function handleClick(block){

  function errorHandler(){
  modalMessage.className = 'none'
  modalMessage.querySelector('h2').textContent = error
  setTimeout(clearMessage, 3000)
  }
  function clearMessage () {
    modalMessage.className = 'hidden'
  }

mimicServerCall()
.then(res => {
  block.querySelector('span').textContent = FULL_HEART
  block.querySelector('span').className = 'activated-heart'
  })
.catch(err => {
  error = err
  errorHandler()
})
}

function handleFullHeart(block){
  block.querySelector('span').textContent = EMPTY_HEART
  block.querySelector('span').className = 'like-glyph'
  }}
})

//------------------------------------------------------------------------------
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
