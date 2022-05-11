let easy = document.querySelector('#easy');
let medium = document.querySelector('#medium');
let hard = document.querySelector('#hard');

async function getData(){
    let response = await fetch("https://opentdb.com/api.php?amount=50");
    let data = await response.json();
    console.log(data)

}


getData();

// get questions
function getQuestions(){

}

// get answers

// start game 

// end game