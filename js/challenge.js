const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')

const commentForm = document.getElementsByTagName('form')[0]  /** 0 is first form */
const input = document.getElementById('comment-input')
const result = document.querySelector('.comments')

/**--------- TIMER --------------- */
const myInterval = setInterval(function () {
let counter = document.getElementById('counter'),
    numCounter = parseInt(counter.innerText)
    counter.innerText = numCounter + 1
  }, 1000)


// /** -------- PAUSE ----------------- */
// pause.addEventListener('click', function () {
//   clearInterval(myInterval)
//   pause.innerText = 'resume'
//   pause.id = 'resume'
// })
// /** -------- RESUME ----------------- */

// let resume = document.getElementById('resume')
// resume.addEventListener('click', function () {
//   setInterval(myInterval)
//   resume.innerText = 'pause'
//   resume.id = 'pause'
// })


/** -------- MINUS ----------------- */
minus.addEventListener('click', function () {
let counter = document.getElementById('counter'),
    numCounter = parseInt(counter.innerText)
    counter.innerText = numCounter - 1
})

/** -------- PLUS ----------------- */
plus.addEventListener('click', function () {
let counter = document.getElementById('counter'),
    numCounter = parseInt(counter.innerText)
    counter.innerText = numCounter + 1
})

/** -------- HEART ----------------- */
heart.addEventListener('click', function () {
const ul = document.getElementsByClassName('likes')[0]
let counter = document.getElementById('counter'),
    numCounter = parseInt(counter.innerText)
    counter.innerText = numCounter

const li = document.createElement('li');
    ul.appendChild(li)
    li.textContent = counter.innerText + ' has been liked'
})

/** -------- SUBMIT FORM ----------------- */
commentForm.addEventListener('submit', function (event) {
    event.preventDefault() /** no sending form */
    
let p = document.createElement('p')
    result.appendChild(p)
    p.innerText = input.value
    input.value = ''
  })

  commentForm.reset()