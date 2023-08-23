let newJoke = document.getElementById("joke");

newJoke.innerHTML = "New Joke";

document.getElementById("btn").addEventListener("click",joke)

async function joke(){
    let config={
        headers:{
            Accept:"application/json",
        },
    };

    let a =await fetch("https://icanhazdadjoke.com",config);
    let b = await a.json();

    newJoke.innerHTML = b.joke;
}

