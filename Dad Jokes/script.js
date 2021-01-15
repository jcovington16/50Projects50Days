const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// Using Async/Await
// Whenever we use await we must use async
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com/', config)
  // Whenever we have a fetch we need to use await

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com/', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
