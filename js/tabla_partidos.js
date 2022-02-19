quitarAlert1();
quitarAlert2();
quitarAlert3();
quitarAlert4();
quitarAlert5();
quitarAlert6();
quitarAlert7();
quitarAlert8();
quitarAlert9();

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
        // ¡¡¡¡¡*****AQUI INSERTAMOS TODOS LOS BOTONES, Y TRAS ELLOS LAS LLAMADAS*****!!!!! //


       // *****Activamos la funcion al pulsar el boton Proxima Jornada*****//
        let boton3 = document.getElementById("rad0")
        boton3.addEventListener("click", () => {
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            quitarAlert8();
            quitarAlert9();
            filtrarLastTime(matches);

        })

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
            quitarAlert8();
            quitarAlert9();
            filtrarEquipos(matches)
            
        })

        // *****Activamos la funcion de filtrado por jornada al pulsar el boton de Jornada*****//
        let boton2 = document.getElementById("buscar2")
        boton2.addEventListener("click", () => {
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            quitarAlert8();
            quitarAlert9();
            filtrarJornada(matches)
            
        })

        // *****Borramos la tabla existente al clicar en el input Text*****//
        let clean = document.getElementById("search")
        clean.addEventListener("click", () => {
            limpiarTabla();
            quitarAlert1();
            quitarAlert2();
            quitarAlert3();
            quitarAlert4();
            quitarAlert5();
            quitarAlert6();
            quitarAlert7();
            quitarAlert8();
            quitarAlert9();
            // matchTable(matches);
            filtrarLastTime(matches);
        });
        // *****QUITAMOS EL SPINNER***** //
        spinnerOut()

        // *****Quitar Alertas***** //

        quitarAlert1()
        quitarAlert2();
        quitarAlert3();
        quitarAlert4();
        quitarAlert5();
        quitarAlert6();
        quitarAlert7();
        quitarAlert8();
        quitarAlert9();

        // ¡¡¡¡¡*****AHORA LLAMAMOS A LAS FUNCIONES*****!!!!! //
        // matchTable(matches);
        filtrarLastTime(matches);
        // console.log(matches)

        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
        }).catch(error => {
            // alert("Ha ocurrido un error")
            console.log("Alerta Fallo al cargar");
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
    document.getElementById("imgLiga").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eredivisie_nieuw_logo_2017-.svg/375px-Eredivisie_nieuw_logo_2017-.svg.png">';
    document.getElementById("textLiga").innerHTML = '<P>EREDIVISIE</p>';
})


// *****CREAMOS LA FUNCION PARA QUE DESAPAREZCA EL SPINNER***** //

function spinnerOut() {
    let spinner = document.getElementById("spinner")
    spinner.style.display = "none"
    spinner.style.visibility = "hidden"
}


// ¡¡¡¡¡*****CREAMOS LA FUNCION PRINCIPAL*****!!!!! //

function matchTable(match) {
    // *****Cogemos la tabla*****
    let body_table = document.getElementById("body_table")
    limpiarTabla()

    // *****Cogemos los elementos*****

    for (let i = 0; i < match.length; i++) {
        const tr = document.createElement("tr")

        let matchday = document.createElement("p")
        matchday.innerHTML = match[i].matchday

        // *****Cogemos y cambiamos el formato de la fecha al formato español***** //
        let utcDate = new Date(match[i].utcDate)

        // *****Aqui cogemos la imagen de la web cogiendo el numero de equipo******//
        let homeCrest = document.createElement("img")
        homeCrest.setAttribute("src", "https://crests.football-data.org/" + match[i].homeTeam.id + ".svg")
        homeCrest.classList.add("crestImage")
        // *****//
        let homeTeam = document.createElement("p")
        homeTeam.innerHTML = match[i].homeTeam.name

        let score = document.createElement("p")
        if ((match[i].score.fullTime.homeTeam == null) && (match[i].score.fullTime.awayTeam == null)) {
            score.innerHTML = "Sin Jugar"
        } else {
            score.innerHTML = match[i].score.fullTime.homeTeam + "-" + match[i].score.fullTime.awayTeam
        }


        let awayTeam = document.createElement("p")
        awayTeam.innerHTML = match[i].awayTeam.name

        let awayCrest = document.createElement("img")
        awayCrest.setAttribute("src", "https://crests.football-data.org/" + match[i].awayTeam.id + ".svg")
        awayCrest.classList.add("crestImage")

        let status = document.createElement("p")
        if (match[i].status == "IN_PLAY") {
            status.innerHTML = "En Juego"
        } else if (match[i].status == "FINISHED") {
            status.innerHTML = "Finalizado"
        } else if (match[i].status == "SCHEDULED") {
            status.innerHTML = "Sin Jugar"
        } else if (match[i].status == "POSTPONED") {
            status.innerHTML = "Aplazado"

            // "status": "FINISHED",
            // "status": "IN_PLAY",
            // "status": "SCHEDULED",
            // "status": "POSTPONED",
        }

        let referees = document.createElement("p")
        if (match[i].referees.length == 0) {
            referees.innerHTML = "Sin Asignar"
        } else {
            referees.innerHTML = match[i].referees[0].name
        }

        // *****Creamos las celdas, las agrupamos en lineas y por ultimo en tabla*****//
        let matchDates = [matchday, utcDate.toLocaleString(), homeCrest, homeTeam, score, awayTeam, awayCrest, status, referees]
        for (let j = 0; j < matchDates.length; j++) {
            const td = document.createElement("td")
            td.append(matchDates[j])
            tr.appendChild(td)
        }
        body_table.appendChild(tr)
    }
}

// *****Filtramos la tabla para buscar equipo*****//

function filtrarEquipos(partidos) {

    // *****Creamos variable de busqueda con el valor introducido*****//

    let search = document.getElementById("search").value

    // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//

    let arrayMatch = partidos.filter(x => {
        if (x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) || x.awayTeam.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        } else {
            return false
        }
    })

    if (arrayMatch.length === 0) {
        return alert3()
    }

    matchTable(arrayMatch)

    // *****Creamos variable de busqueda  con RadioButton*****//

    let radioBoton = document.querySelector("input[type=radio]:checked")
    if (radioBoton === null) {
        return matchTable(arrayMatch)
    }
    //*****Ahora buscamos dentro del equipo, diferentes valores*****/

    let resultFilter = arrayMatch.filter(x => {

        //*****Partidos Ganados*****/

        if (radioBoton.value === "Ganados") {
            if ((x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.winner == "HOME_TEAM") ||
                (x.awayTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.winner == "AWAY_TEAM")) {
                return true;
            }
            if (search == "") {
                return alert1()
            }
            if (!isNaN(search)) {
                return alert6()
            }
        }

        //*****Partidos Empatados*****/

        if (x.score.winner === "DRAW" && radioBoton.value === "Empatados") {
            return true;
        }

        //*****Partidos Perdidos*****/

        if (radioBoton.value === "Perdidos") {
            if ((x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.winner == "AWAY_TEAM") ||
                (x.awayTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.winner == "HOME_TEAM")) {
                return true;
            }
            if (search == "") {
                return alert1()
            }
            if (!isNaN(search)) {
                return alert6()

            }
        }

        //*****Partidos En Juego*****/

        if (radioBoton.value === "in_play") {
            if ((x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) && x.status == "IN_PLAY") ||
                (x.awayTeam.name.toLowerCase().includes(search.toLowerCase()) && x.status == "IN_PLAY")) {
                return true;
            }
            if (x.status.length != "IN_PLAY") {
                return alert8(),
                    matchTable(resultFilter)
            }
        }


        //*****Partidos Suspendidos*****/

        if (radioBoton.value === "Suspendidos") {
            if ((x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) && x.status == "POSTPONED") ||
                (x.awayTeam.name.toLowerCase().includes(search.toLowerCase()) && x.status == "POSTPONED")) {
                return true;
            }
            if (x.status.length != "POSTPONED") {
                return alert9(),
                    matchTable(resultFilter)
            }
        }

        //*****Proximos Partidos*****/

        if (radioBoton.value === "Proximos") {
            if ((x.homeTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.fullTime.homeTeam === null) ||
                (x.awayTeam.name.toLowerCase().includes(search.toLowerCase()) && x.score.fullTime.awayTeam === null)) {
                return true;
            }
        }

        //*****Jugados Local*****/

        if (radioBoton.value === "Local") {
            if (x.homeTeam.name.toLowerCase().includes(search.toLowerCase())) {
                return true;
            }
            if (search == "") {
                return alert1()
            }
            if (!isNaN(search)) {
                return alert6()
            }
        }

        //*****Jugados Visitante *****/

        if (radioBoton.value === "Visitante") {
            if (x.awayTeam.name.toLowerCase().includes(search.toLowerCase())) {
                return true;
            } else if (search == "") {
                return alert1();
            } else if (!isNaN(search)) {
                return alert6();
            }
        }
    });
    matchTable(resultFilter)
}


// *****Filtramos la tabla para buscar proxima jornada*****//

function filtrarLastTime(lastTime) {
    let arrayFinished = []
    let arrayLastTime = lastTime.filter(x => {
        if (x.status == "IN_PLAY") {
            return true
        } else if (x.status == "SCHEDULED") {
            return true
        } else if (x.status == "FINISHED") {
            arrayFinished.push(x)
        }
    })

    let proximosPartidos = arrayLastTime.slice(0, 10)
    proximaJornada(proximosPartidos)

    function proximaJornada(varios) {
        for (let i = 0; i < proximosPartidos.length; i++) {
            if (proximosPartidos[i].matchday != proximosPartidos[0].matchday) {
                varios.splice(i, 1);
                i = i - 1
            }
        }
        for (let j = 0; j < arrayFinished.length; j++) {
            if (arrayFinished[j].matchday != proximosPartidos[0].matchday) {
                arrayFinished.splice(j, 1);
                j = j - 1
            }
            // console.log(arrayFinished)
        }
    }
    let nuevaProximosPartidos = [].concat(arrayFinished, proximosPartidos)
    // console.log(nuevaProximosPartidos)
    matchTable(nuevaProximosPartidos)
}


// *****Filtramos la tabla para buscar jornada*****//

function filtrarJornada(jornada) {

    // *****Creamos variable de busqueda  con el valor introducido*****//

    let search = document.getElementById("search").value
    if (search == "") {
        return alert2()
    }
    if (isNaN(search)) {
        return alert7()
    }

    // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//

    let arrayJornada = jornada.filter(x => {
        if (x.matchday == parseInt(search)) {
            return true
        } else {
            return false
        }
    })

    if (arrayJornada.length === 0) {
        return alert4()
    }

    matchTable(arrayJornada);
}

// *****Creamos la función Limpiar Tabla***** //

function limpiarTabla() {
    document.getElementById("body_table").innerText = ""
}

//*****Borramos el input y los clicks******/

function clearRads() {
    var radList = document.getElementsByName("radioList");
    for (var i = 0; i < radList.length; i++) {
        if (radList[i].checked) document.getElementById(radList[i].id).checked = false;
    }
}
let clearSearch = document.getElementById("clear");
clearSearch.addEventListener("click", () => {
    document.getElementById("search").value = "";
})

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

function alert8() {
    let alert8 = document.getElementById("alert8");
    alert8.style.display = "block"
}

function quitarAlert8() {
    let alert8 = document.getElementById("alert8");
    alert8.style.display = "none"
}

function alert9() {
    let alert9 = document.getElementById("alert9");
    alert9.style.display = "block"
}

function quitarAlert9() {
    let alert9 = document.getElementById("alert9");
    alert9.style.display = "none"
}






// console.log(arrayLastTime)



// matchTable(arrayLastTime)
// if (match[i].status == "IN_PLAY") {
//     status.innerHTML = "En Juego"
// } else if (match[i].status == "FINISHED") {
//     status.innerHTML = "Finalizado"
// } else if (match[i].status == "SCHEDULED") {
//     status.innerHTML = "Sin Jugar"
// } else if (match[i].status == "POSTPONED") {
//     status.innerHTML = "Aplazado"

//     // "status": "FINISHED",
//     // "status": "IN_PLAY",
//     // "status": "SCHEDULED",
//     // "status": "POSTPONED",