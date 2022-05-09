let easy = document.querySelector('#easy');
let medium = document.querySelector('#medium');
let hard = document.querySelector('#hard');
let entertainment = document.querySelector('#entertainment');
let generalKnowledge = document.querySelector('#general-knowledge');
let vehicles = document.querySelector('#vehicles');
let art = document.querySelector('#art');
let geography = document.querySelector('#geography');
let science = document.querySelector('#science');
let celeberities = document.querySelector('#celeberities');
let history = document.querySelector('#history');


async function getData(){
    let response = await fetch("https://opentdb.com/api.php?amount=1000");
    let data = await response.json();
    console.log(data)

}
getData();