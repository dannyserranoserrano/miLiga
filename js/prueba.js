function getFetch(url) {

    fetch(url, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "8d3caca832msh324f0b70991c298p107f9bjsnb18ffac9f9c1"

        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(data => {
        let list = data
        console.log(list)
    // }).catch(err => {
    //     console.error(err);
    });
}
getFetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=140")
