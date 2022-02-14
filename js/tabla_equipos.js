quitarAlert5();

function getFetch(url) {

    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "b2df88f43d1f418aaf653f463db0faf1"
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    }).then(data3 => {
        let teams = data3.teams
        // console.log(data3)
        // ¡¡¡¡¡*****AQUI INSERTAMOS TODOS LOS BOTONES SI LOS TUVIESEMOS *****!!!!! //
        
        // *****QUITAMOS ALERTAS Y EJECUTAMOS LA FUNCIÓN***** //
        
        quitarAlert5();
        // teams(teams)
        console.log(teams)


        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
    }).catch(error => {
        alert5()
        console.log("Alerta Fallo al cargar");
    })
}
// EJECUTAMOS LA FUNCION*****//
getFetch("https://api.football-data.org/v2/competitions/2014/teams")
document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';


// *****CREAMOS LAS DIFERENTES LIGAS***** //
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2014/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';
})

let premiereLeague = document.getElementById("premiereLeague");
premiereLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i.pinimg.com/originals/ec/ef/1f/ecef1f081ae343f74cdc3570bdf9a432.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PREMIERE LIGUE</p>';
})

let bundesliga = document.getElementById("bundesliga");
bundesliga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2002/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/bundesliga-detalles.png?w=329&h=329&crop=1&ssl=1">';
    document.getElementById("textLiga").innerHTML = '<P>BUNDESLIGA</p>';
})

let ligue_1 = document.getElementById("ligue_1");
ligue_1.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png">';
    document.getElementById("textLiga").innerHTML = '<P>LIGUE 1</p>';
})

let serieA = document.getElementById("serieA");
serieA.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://www.soyfutbol.com/__export/1563281742077/sites/debate/img/2019/07/16/serie_a_italia.jpg_423682103.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>SERIE A</p>';
})


let primeiraLiga = document.getElementById("primeiraLiga");
primeiraLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2017/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://img.vavel.com/liga-portugal-34695-6566660893.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PRIMEIRA LIGA</p>';
})

let eredivisie = document.getElementById("eredivisie");
eredivisie.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2003/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://img.planetafobal.com/2017/05/eredivisie-new-logo-2017-2018-ds.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>EREDIVISIE</p>';
})

// ******CREAMOS LA FUNCION teamsDates***** //
function teams(teams) {
    let teamsDates = []
    for (let i = 0; i < teams.length; i++) {


    }
}

function alert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "block"
}

function quitarAlert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "none"
}