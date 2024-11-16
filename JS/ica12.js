

let myData = {};

function getJoke(){
fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
        console.log(res);
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("joke").innerHTML = myData.joke;
    })
    .catch(error => {console.log(error)})
}
getJoke();

document.getElementById("generate").addEventListener("click", e=> {getJoke()})

console.log(myData);

let myDataAgain = {};

function getJokeAgain(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
        console.log(res);
    }).then(res => {
        myDataAgain = res;
        console.log("test " + myDataAgain);
        document.getElementById("value").innerHTML = myDataAgain.value;
    })
    .catch(error => {console.log(error)})
}
getJokeAgain();

document.getElementById("generateagain").addEventListener("click", e => {getJokeAgain()})

console.log(myDataAgain);
