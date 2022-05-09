async function getData(){
    let response = await fetch("https://opentdb.com/api.php?amount=1000");
    let data = await response.json();
    console.log(data)

}
getData();