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
    }).then(data2 => {
        let matches = data2.matches
        // console.log(data2)
        // ¡¡¡¡¡*****AQUI INSERTAMOS TODOS LOS BOTONES SI LOS TUVIESEMOS *****!!!!! //
        limpiarTabla()
        // *****QUITAMOS EL SPINNER 1 y EJECUTAMOS TABLA 1***** //
        spinnerOut1()
        quitarAlert5();
        statics1(matches)

        // ¡¡¡¡¡*****QUITAMOS EL SPINNER 2 y EJECUTAMOS TABLA 2*****!!!!! //
        spinnerOut2()
        quitarAlert5();
        statics2(matches)

        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
    }).catch(error => {
        alert5()
    })
}
// EJECUTAMOS LA FUNCION*****//
getFetch("https://api.football-data.org/v2/competitions/2014/matches")
document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';


// *****CREAMOS LAS DIFERENTES LIGAS***** //
let laLiga = document.getElementById("laLiga");
laLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';
})

let premiereLeague = document.getElementById("premiereLeague");
premiereLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i.pinimg.com/originals/ec/ef/1f/ecef1f081ae343f74cdc3570bdf9a432.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PREMIERE LIGUE</p>';
})

let bundesliga = document.getElementById("bundesliga");
bundesliga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2002/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://i0.wp.com/elpoderdelasideas.com/wp-content/uploads/bundesliga-detalles.png?w=329&h=329&crop=1&ssl=1">';
    document.getElementById("textLiga").innerHTML = '<P>BUNDESLIGA</p>';
})

let ligue_1 = document.getElementById("ligue_1");
ligue_1.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Ligue1_Uber_Eats_logo.png">';
    document.getElementById("textLiga").innerHTML = '<P>LIGUE 1</p>';
})

let serieA = document.getElementById("serieA");
serieA.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://www.soyfutbol.com/__export/1563281742077/sites/debate/img/2019/07/16/serie_a_italia.jpg_423682103.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>SERIE A</p>';
})


let primeiraLiga = document.getElementById("primeiraLiga");
primeiraLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2017/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://img.vavel.com/liga-portugal-34695-6566660893.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>PRIMEIRA LIGA</p>';
})

let eredivisie = document.getElementById("eredivisie");
eredivisie.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2003/matches"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://img.planetafobal.com/2017/05/eredivisie-new-logo-2017-2018-ds.jpg">';
    document.getElementById("textLiga").innerHTML = '<P>EREDIVISIE</p>';
})

// *****CREAMOS LA FUNCION PARA QUE DESAPAREZCA EL SPINNER***** //
function spinnerOut1() {
    let spinner = document.getElementById("spinner1")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}

function spinnerOut2() {
    let spinner = document.getElementById("spinner2")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}

// ¡¡¡¡¡*****TABLA TOP 5 MEJOR PROMEDIO GOLEADOR*****!!!!! //

// ******CREAMOS LA FUNCION ESTADISTICAS1***** //
function statics1(match) {
    let matchStatics = []
    for (let i = 0; i < match.length; i++) {
        // *****LE DECIMOS QUE SI EL PARTIDO NO ESTA ACABADO SE SALTE EL DATO***** //
        let matchStatus = match[i].status
        if (matchStatus !== "FINISHED") {
            continue
        }
        // *****CREAMOS LAS VARIABLES DE CADA DATO A COGER***** //
        let homeTeam = match[i].homeTeam.name
        let awayTeam = match[i].awayTeam.name

        let homeId = match[i].homeTeam.id
        let awayId = match[i].awayTeam.id

        let homeGoals = match[i].score.fullTime.homeTeam
        let awayGoals = match[i].score.fullTime.awayTeam
        // *****CREAMOS LA LISTA CON LOS DATOS DE EQUIPO LOCAL***** //
        let homeTeamFound;
        matchStatics.forEach(x => {
            if (x.id === homeId) {
                homeTeamFound = x;
            }
        })
        // *****SI NO ENCUENTRA ESAS KEYS, LAS AÑADE AL OBJETO***** //
        if (homeTeamFound == undefined) {
            matchStatics.push({
                id: homeId,
                name: homeTeam,
                goals: homeGoals,
                matches: 1
            })
            // *****SI LO ENCUENTRA, LE SUMA LOS PARTIDOS Y LOS GOLES EN CASA AL TOTAL MATCHES Y GOALS***** //
        } else {
            homeTeamFound.matches++
            homeTeamFound.goals += homeGoals
        }

        // *****CREAMOS LA LISTA CON LOS DATOS DE EQUIPO VISITANTE***** // 
        let awayTeamFound;
        matchStatics.forEach(x => {
            if (x.id === awayId) {
                awayTeamFound = x;
            }
        })
        // *****SI NO ENCUENTRA ESAS KEYS, LAS AÑADE AL OBJETO***** //
        if (awayTeamFound == undefined) {
            matchStatics.push({
                id: awayId,
                name: awayTeam,
                goals: awayGoals,
                matches: 1
            })
            // *****SI LO ENCUENTRA, LE SUMA LOS PARTIDOS Y LOS GOLES FUERA DE CASA AL TOTAL MATCHES Y GOALS***** //
        } else {
            awayTeamFound.matches++
            awayTeamFound.goals += awayGoals
        }

        // *****CALCULAMOS LA MEDIA DE GOLES DIVIDIENDO GOLES ENTRE PARTIDOS***** //
        for (let j = 0; j < matchStatics.length; j++) {
            let avgGoals = matchStatics[j].goals / matchStatics[j].matches
            matchStatics[j].avg = avgGoals.toFixed(2)
        }
    }

    //*****ORDENA LA LISTA SEGUN LA KEY DE AVG *****//
    matchStatics.sort((a, b) => b.avg - a.avg);

    //*****CREA UNA LISTA NUEVA COGIENDO LOS 5 PRIMEROS EQUIPOS ORDENADOS ANTERIORMENTE*****//
    let matchStatics5teams = matchStatics.slice(0, 5)
    // *****EJECUTAMOS LA FUNCION DE CREAR TABLA DENTRO DE LA FUNCION DE CREAR LA LISTA***** //
    staticsTable1(matchStatics5teams)
    // console.log(matchStatics5teams);
}

// *****CREAMOS LA TABLA 1 CON LOS DATOS OBTENIDOS***** //
function staticsTable1(statics1) {
    // *****Cogemos la ubicación de la tabla*****//
    let body_table1 = document.getElementById("body_table1")
    //*****Creamos los elementos*****//
    for (let k = 0; k < statics1.length; k++) {
        const tr = document.createElement("tr")

        let crest = document.createElement("img")
        crest.setAttribute("src", "https://crests.football-data.org/" + statics1[k].id + ".svg")
        crest.classList.add("crestImage")

        //*****SE PUEDE HACER DE LAS 2 MANERAS*****//
        // let name = document.createElement("p")
        // name.innerHTML = statics1[k].name

        // let goals = document.createElement("p")
        // goals.innerHTML = statics1[k].goals

        // let matches = document.createElement("p")
        // matches.innerHTML = statics1[k].matches

        // let avg = document.createElement("p")
        // avg.innerHTML = statics1[k].avg
        // let statics1Dates = [crest, name, goals, matches, avg]

        // *****Creamos las celdas, las agrupamos en lineas y por ultimo en tabla*****//
        let statics1Dates = [crest, statics1[k].name, statics1[k].goals, statics1[k].matches, statics1[k].avg]
        for (let l = 0; l < statics1Dates.length; l++) {
            const td = document.createElement("td")
            td.append(statics1Dates[l])
            tr.appendChild(td)
        }
        body_table1.appendChild(tr)
    }
}


// ¡¡¡¡¡*****TABLA TOP 5 MENOS GOLEADOS FUERA DE CASA*****!!!!! //

// ******CREAMOS LA FUNCION ESTADISTICAS2***** //
function statics2(match) {
    let matchStatics2 = []
    for (let i = 0; i < match.length; i++) {
        // *****LE DECIMOS QUE SI EL PARTIDO NO ESTA ACABADO SE SALTE EL DATO***** //
        let matchStatus2 = match[i].status
        if (matchStatus2 !== "FINISHED") {
            continue
        }
        // *****CREAMOS LAS VARIABLES DE CADA DATO A COGER***** //
        let awayTeam = match[i].awayTeam.name
        let awayId = match[i].awayTeam.id
        let homeGoals = match[i].score.fullTime.homeTeam

        // *****CREAMOS LA LISTA CON LOS DATOS DE EQUIPO VISITANTE***** //
        let awayTeamFound;
        matchStatics2.forEach(x => {
            if (x.id === awayId) {
                awayTeamFound = x;
            }
        })
        // *****SI NO ENCUENTRA ESAS KEYS, LAS AÑADE AL OBJETO***** //
        if (awayTeamFound == undefined) {
            matchStatics2.push({
                id: awayId,
                name: awayTeam,
                goals: homeGoals,
                matches: 1
            })
            // *****SI LO ENCUENTRA, LE SUMA LOS PARTIDOS Y LOS GOLES DEL EQUIPO LOCAL AL VISITANTE, AL TOTAL MATCHES Y GOALS***** //
        } else {
            awayTeamFound.matches++
            awayTeamFound.goals += homeGoals
        }
    }

    //*****ORDENA LA LISTA SEGUN LA KEY DE GOLES *****//
    matchStatics2.sort((a, b) => a.goals - b.goals);

    //*****CREA UNA LISTA NUEVA COGIENDO LOS 5 PRIMEROS EQUIPOS ORDENADOS ANTERIORMENTE*****//
    let matchStatics5teams2 = matchStatics2.slice(0, 5)
    // *****EJECUTAMOS LA FUNCION DE CREAR TABLA DENTRO DE LA FUNCION DE CREAR LA LISTA***** //
    staticsTable2(matchStatics5teams2)
    // console.log(matchStatics5teams2);
    // console.log(matchStatics2);
}

function staticsTable2(statics2) {
    // *****Cogemos la ubicación de la tabla*****//
    let body_table2 = document.getElementById("body_table2")
    //*****Cogemos los elementos*****//
    for (let k = 0; k < statics2.length; k++) {
        const tr = document.createElement("tr")

        let crest = document.createElement("img")
        crest.setAttribute("src", "https://crests.football-data.org/" + statics2[k].id + ".svg")
        crest.classList.add("crestImage")

        //*****SE PUEDE HACER DE LAS 2 MANERAS*****//
        // let name = document.createElement("p")
        // name.innerHTML = statics2[k].name

        // let goals = document.createElement("p")
        // goals.innerHTML = statics2[k].goals

        // let matches = document.createElement("p")
        // matches.innerHTML = statics2[k].matches

        // *****Creamos las celdas, las agrupamos en lineas y por ultimo en tabla*****//
        let statics2Dates = [crest, statics2[k].name, statics2[k].goals, statics2[k].matches]
        for (let l = 0; l < statics2Dates.length; l++) {
            const td = document.createElement("td")
            td.append(statics2Dates[l])
            tr.appendChild(td)
        }
        body_table2.appendChild(tr)
    }
}
// *****Creamos la función Limpiar Tabla***** //
function limpiarTabla() {
    document.getElementById("body_table1").innerText = ""
    document.getElementById("body_table2").innerText = ""
}

function alert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "block"
}

function quitarAlert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "none"
}