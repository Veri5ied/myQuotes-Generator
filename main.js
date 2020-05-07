const generateQuotes = () => {
    fetch('https://api.quotable.io/random')
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            document.getElementById('quote').innerHTML = data.content;
            document.getElementById('author').innerHTML = "- " + data.author;
        })
        .catch(function (err) {
            console.log(err);
        })
}

setInterval(generateQuotes(), 1000);
const generateQuotes = () => {
    fetch('https://api.quotable.io/random')
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            document.getElementById('quote').innerHTML = data.content;
            document.getElementById('author').innerHTML = "- " + data.author;
        })
        .catch(function (err) {
            console.log(err);
        })
}

setInterval(generateQuotes(), 1000);
const url = "https://api.quotable.io/random";
function generateQuote(){
	fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            document.getElementById("quote").innerHTML = data.content;
            document.querySelector(".author").innerHTML = "- " + data.author;

        })

    .catch(function(err) {
        console.log(err);
    });
}

setInterval(function(){
   generateQuote();
} ,10000);
