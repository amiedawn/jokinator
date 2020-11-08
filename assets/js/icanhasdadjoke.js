

var aJoke = {};

var joke = () => {
    fetch("https://rapidapi.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
        "Content-Type": "application/json",
		"x-rapidapi-key": "fa2856ae8emsh6ded39328f26c5dp167fcajsn0bba20c39799",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
    })
    .then(response => {
        response.json()
        .then(data => {
            aJoke = data;
            return data;
        });
    })
    .catch(err => {
        console.error(err);
    });
}

