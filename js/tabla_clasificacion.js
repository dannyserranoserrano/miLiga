quitarAlert1();
quitarAlert2();
quitarAlert3();
quitarAlert4();
quitarAlert5();
quitarAlert6();
quitarAlert7();

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
    }).then(data => {

        let classification = data.standings[0].table
        // console.log(datos)

        // ¡¡¡¡¡*****AQUI INSERTAMOS TODOS LOS BOTONES SI LOS TUVIESEMOS *****!!!!! //
        // *****Activamos la funcion al pulsar el boton de Equipo*****//
        let boton = document.getElementById("buscar")
        boton.addEventListener("click", () => {
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            filtrarEquipos(classification)
        })

        // *****Activamos la funcion al pulsar el boton de Posicion*****//
        let boton2 = document.getElementById("buscar2")
        boton2.addEventListener("click", () => {
            limpiarTabla()
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            filtrarClasificacion(classification)
        })

        // *****Borramos la tabla existente al clicar*****//

        let clean = document.getElementById("search")
        clean.addEventListener("click", () => {
            body_table.innerHTML = "";
        });

        // *****Activamos la funcion al pulsar el boton de Equipo*****//

        boton.addEventListener("click", () => {
            limpiarTabla()
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            filtrarEquipos(classification);
        })
        // *****Activamos la funcion al pulsar el boton de Clasificación*****//
        boton2.addEventListener("click", () => {
            limpiarTabla()
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            filtrarClasificacion(classification);
        })

        // *****QUITAMOS EL SPINNER***** //
        spinnerOut()
        // ¡¡¡¡¡*****AHORA LLAMAMOS A LAS FUNCIONES*****!!!!! //
        limpiarTabla()
        quitarAlert1();
        quitarAlert2();
        quitarAlert3();
        quitarAlert4();
        quitarAlert5();
        quitarAlert6();
        quitarAlert7();
        limpiarTabla()
        standingsTable(classification)

        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
    }).catch(error => {
        console.log("Alerta Fallo al cargar");
        alert5()
    })
}
// EJECUTAMOS LA FUNCION*****//
getFetch("https://api.football-data.org/v2/competitions/2021/standings")
document.getElementById("imgLiga").innerHTML = '<img src="https://crests.football-data.org/770.svg">';
document.getElementById("textLiga").innerHTML = '<P>PREMIERE LIGUE</p>';

// *****CREAMOS LAS DIFERENTES LIGAS***** //

let premiereLeague = document.getElementById("premiereLeague");
premiereLeague.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2021/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://crests.football-data.org/770.svg">';
    document.getElementById("textLiga").innerHTML = '<P>PREMIERE LIGUE</p>';
})

let bundesliga = document.getElementById("bundesliga");
bundesliga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2002/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg">';
    document.getElementById("textLiga").innerHTML = '<P>BUNDESLIGA</p>';
})

let ligue_1 = document.getElementById("ligue_1");
ligue_1.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2015/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg">';
    document.getElementById("textLiga").innerHTML = '<P>LIGUE 1</p>';
})

let serieA = document.getElementById("serieA");
serieA.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2019/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg">';
    document.getElementById("textLiga").innerHTML = '<P>SERIE A</p>';
})


let primeiraLiga = document.getElementById("primeiraLiga");
primeiraLiga.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2017/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg">';
    document.getElementById("textLiga").innerHTML = '<P>PRIMEIRA LIGA</p>';
})

let eredivisie = document.getElementById("eredivisie");
eredivisie.addEventListener("click", () => {
    const url = "https://api.football-data.org/v2/competitions/2003/standings"
    getFetch(url)
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg">';
    document.getElementById("textLiga").innerHTML = '<P>EREDIVISIE</p>';
})


// *****CREAMOS LA FUNCION PARA QUE DESAPAREZCA EL SPINNER***** //
function spinnerOut() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}

// ¡¡¡¡¡*****CREAMOS LA FUNCION PRINCIPAL*****!!!!! //
function standingsTable(standings) {

    let body_table = document.getElementById("body_table")

    for (let i = 0; i < standings.length; i++) {
        const tr = document.createElement("tr")

        let crest = document.createElement("img")
        crest.setAttribute("src", standings[i].team.crestUrl)
        crest.classList.add("crestImage")

        let team = document.createElement("p")
        team.innerHTML = standings[i].team.name

        let position = document.createElement("p")
        position.innerHTML = standings[i].position

        let points = document.createElement("p")
        points.innerHTML = standings[i].points

        let won = document.createElement("p")
        won.innerHTML = standings[i].won

        let draw = document.createElement("p")
        draw.innerHTML = standings[i].draw

        let lost = document.createElement("p")
        lost.innerHTML = standings[i].lost

        let goalsFor = document.createElement("p")
        goalsFor.innerHTML = standings[i].goalsFor

        let goalsAgainst = document.createElement("p")
        goalsAgainst.innerHTML = standings[i].goalsAgainst

        let goalDifference = document.createElement("p")
        goalDifference.innerHTML = standings[i].goalDifference


        let standingsDates = [crest, team, position, points, won, draw, lost, goalsFor, goalsAgainst, goalDifference]
        for (let j = 0; j < standingsDates.length; j++) {
            const td = document.createElement("td")
            td.append(standingsDates[j])
            tr.appendChild(td)
        }
        body_table.appendChild(tr)
    }
}

// *****Creamos la función Limpiar Tabla***** //
function limpiarTabla() {
    document.getElementById("body_table").innerText = ""
}



// *****Filtramos la tabla para buscar equipo*****//
function filtrarEquipos(clasificacion) {

    // *****Creamos variable de busqueda con el valor introducido*****//

    let search = document.getElementById("search").value
    if (search == "") {
        alert1(),
        standingsTable(clasificacion)
        
    }
        
    if (!isNaN(search)) {
        alert6(),
        standingsTable(clasificacion)
      }

    // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//

    let arrayStandings = clasificacion.filter(x => {
        if (x.team.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        } else {
            return false
        }
    })

    if (arrayStandings.length === 0) {
        alert3(),
        standingsTable(clasificacion)
    }
    standingsTable(arrayStandings)
}




// *****Filtramos la tabla para buscar posicion*****//

function filtrarClasificacion(clasificacion) {

    // *****Creamos variable de busqueda  con el valor introducido*****//

    let search = document.getElementById("search").value
    if (search == "") {
        alert2()
        standingsTable(clasificacion)
    }

    if (isNaN(search)) {
        alert7(),
        standingsTable(clasificacion)
    }

    // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//

    let arrayPosition = clasificacion.filter(x => {
        if (x.position == parseInt(search)) {
            return true
        } else {
            return false
        }
    })

    if (arrayPosition.length === 0) {
        alert4(),
        standingsTable(clasificacion)
    }
    standingsTable(arrayPosition);
}

// *****CREAMOS LAS FUNCIONES DE LAS ALERTAS***** //

function alert1() {
    let alert1 = document.getElementById("alert1");
    alert1.style.display = "block"
}

function quitarAlert1() {
    let alert1 = document.getElementById("alert1");
    alert1.style.display = "none"
}

function alert2() {
    let alert2 = document.getElementById("alert2");
    alert2.style.display = "block"
}

function quitarAlert2() {
    let alert2 = document.getElementById("alert2");
    alert2.style.display = "none"
}

function alert3() {
    let alert3 = document.getElementById("alert3");
    alert3.style.display = "block"
}

function quitarAlert3() {
    let alert3 = document.getElementById("alert3");
    alert3.style.display = "none"
}

function alert4() {
    let alert4 = document.getElementById("alert4");
    alert4.style.display = "block"
}

function quitarAlert4() {
    let alert4 = document.getElementById("alert4");
    alert4.style.display = "none"
}

function alert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "block"
}

function quitarAlert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "none"
}

function alert6() {
    let alert6 = document.getElementById("alert6");
    alert6.style.display = "block"
}

function quitarAlert6() {
    let alert6 = document.getElementById("alert6");
    alert6.style.display = "none"
}

function alert7() {
    let alert7 = document.getElementById("alert7");
    alert7.style.display = "block"
}

function quitarAlert7() {
    let alert7 = document.getElementById("alert7");
    alert7.style.display = "none"
}