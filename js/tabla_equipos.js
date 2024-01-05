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
        teamsTable(teams)
        console.log(teams)


        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
    }).catch(error => {
        alert5()
        console.log("Alerta Fallo al cargar");
    })
}
// EJECUTAMOS LA FUNCION*****//
getFetch("https://api.football-data.org/v4/competitions/2014/teams")
document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';


// *****CREAMOS LAS DIFERENTES LIGAS***** //
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2014/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';
})

let premiereLeague = document.getElementById("premiereLeague");
premiereLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2021/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i.pinimg.com/originals/ec/ef/1f/ecef1f081ae343f74cdc3570bdf9a432.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PREMIERE LIGUE</p>';
})

let bundesliga = document.getElementById("bundesliga");
bundesliga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2002/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/bundesliga-detalles.png?w=329&h=329&crop=1&ssl=1">';
    document.getElementById("textLiga").innerHTML = '<P>BUNDESLIGA</p>';
})

let ligue_1 = document.getElementById("ligue_1");
ligue_1.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2015/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png">';
    document.getElementById("textLiga").innerHTML = '<P>LIGUE 1</p>';
})

let serieA = document.getElementById("serieA");
serieA.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2019/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://www.soyfutbol.com/__export/1563281742077/sites/debate/img/2019/07/16/serie_a_italia.jpg_423682103.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>SERIE A</p>';
})


let primeiraLiga = document.getElementById("primeiraLiga");
primeiraLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2017/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://img.vavel.com/liga-portugal-34695-6566660893.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PRIMEIRA LIGA</p>';
})

let eredivisie = document.getElementById("eredivisie");
eredivisie.addEventListener("click", () => {
    const url = "https://api.football-data.org/v4/competitions/2003/teams"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/375px-Eredivisie_nieuw_logo_2017-.svg.png">';
    document.getElementById("textLiga").innerHTML = '<P>EREDIVISIE</p>';
})

// ******CREAMOS LA FUNCION teamsDates***** //
function teamsTable(teamsSearch) {

    let divTeams = document.getElementById("divTeams")

    limpiarTabla()
    for (let i = 0; i < teamsSearch.length; i++) {

        const divTable = document.createElement("div");
        divTable.setAttribute("href", teamsSearch[i].website);
        divTable.classList.add("groupTeam");
        divTable.classList.add("card");
        divTable.classList.add("card-body");


        let crest = document.createElement("img");
        crest.setAttribute("src", "https://crests.football-data.org/" + teamsSearch[i].id + ".svg");
        crest.classList.add("crestImage");
        crest.classList.add("card-img-top");
        // console.log(crest);

        let link = document.createElement("a", "teamsSearch[i].name");
        link.innerHTML = teamsSearch[i].name
        link.setAttribute("href", teamsSearch[i].website);
        link.classList.add("titulTeam");
        link.classList.add("card-title");
        // console.log(link);

        let direction = document.createElement("a", "teamsSearch[i].address")
        direction.innerHTML = teamsSearch[i].address;
        direction.setAttribute("href", "http://www.google.com/maps/dir//" + teamsSearch[i].address);
        direction.classList.add("textos");
        direction.classList.add("card-text");

        let founded = document.createElement("p")
        founded.innerHTML = "Año de fundación: " + teamsSearch[i].founded
        founded.classList.add("enlaces");
        founded.classList.add("card-text");

        let venue = document.createElement("p")
        venue.innerHTML = "Estadio: " + teamsSearch[i].venue
        venue.classList.add("enlaces");
        venue.classList.add("card-text");

        let mail = document.createElement("a", "teamsSearch[i].email")
        mail.innerHTML = "mail: " + teamsSearch[i].email
        mail.setAttribute("href", "mailto:" + teamsSearch[i].email);
        mail.classList.add("enlaces");
        mail.classList.add("card-text");

        let telef = document.createElement("a", "teamsSearch[i].phone")
        telef.innerHTML = "Telefono: " + teamsSearch[i].phone
        telef.setAttribute("href", "tel:" + teamsSearch[i].phone);
        telef.classList.add("enlaces");
        telef.classList.add("card-text");

        // *****Creamos las celdas, las agrupamos en lineas y por ultimo en tabla*****//
        let teamDates = [crest, link, direction, founded, venue, mail, telef]
        for (let j = 0; j < teamDates.length; j++) {
            const div2 = document.createElement("div");
            div2.classList.add("parameters");
            div2.append(teamDates[j]);
            divTable.appendChild(div2);
            divTeams.appendChild(divTable);
        }
        // console.log(divTable)
    }
}

// *****Creamos la función Limpiar Tabla***** //

function limpiarTabla() {
    document.getElementById("divTeams").innerHTML = ""
}

function alert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "block"
}

function quitarAlert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "none"
}