const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// Using Async/Await 
async function generateJoke() {
    // call the icanhaz API
    const jokeRes = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const jokeData = await jokeRes.json();

    console.log(jokeData);

    jokeEle.innerHTML = jokeData.joke;
}