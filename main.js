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
