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
    }).then(data => {
       
        let datos = data.standings[0].table
        console.log(datos)
        // ¡¡¡¡¡*****AQUI INSERTAMOS TODOS LOS BOTONES SI LOS TUVIESEMOS *****!!!!! //
        
        // *****QUITAMOS EL SPINNER***** //
        spinnerOut()
        // ¡¡¡¡¡*****AHORA LLAMAMOS A LAS FUNCIONES*****!!!!! //
        quitarAlert5();
        limpiarTabla()
        standingsTable(datos)

        // *****SI HAY UN ERROR AL CARGAR LA PÁGINA LO AVISAMOS***** //
    }).catch(error => {
        console.log("Alerta Fallo al cargar");
        alert5()
    })
}
// EJECUTAMOS LA FUNCION*****//
getFetch("https://api.football-data.org/v2/competitions/2014/standings")
document.getElementById("imgLiga").innerHTML = '<img src="https://assets.laliga.com/assets/public/logospage/laliga-h-16-9.jpg">';
document.getElementById("textLiga").innerHTML = '<P>LA LIGA</p>';


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

        let playedGames = document.createElement("p")
        playedGames.innerHTML = standings[i].playedGames

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


        let standingsDates = [crest, team, position, points, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference]
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

function alert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "block"
}

function quitarAlert5() {
    let alert5 = document.getElementById("alert5");
    alert5.style.display = "none"
}


// // *****Filtramos la tabla para buscar equipo*****//
// function filtrarEquipos(clasificacion) {
//     // *****Creamos variable de busqueda  con el valor introducido*****//
//     let search = document.getElementById("search").value
//     // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//
//     let arrayStandings = clasificacion.filter(x => {
//         if (x.team.name.toLowerCase().includes(search.toLowerCase()) ){
//             return true
//         }else{
//             return false
//         }
//     })
//     standingsTable(arrayStandings)
// }
// // *****Activamos la funcion al pulsar el boton de Search*****//
// let boton = document.getElementById("buscar")
// boton.addEventListener("click",()=>{
//     filtrarEquipos(classification)
// })


// // *****Filtramos la tabla para buscar posicion*****//
// function filtrarClasificacion(clasificacion) {
//     // *****Creamos variable de busqueda  con el valor introducido*****//
//     let search = document.getElementById("search").value
//     // *****Creamos un array en base a la comparativa entre lo introducido y lo buscado*****//
//     let arrayPosition = clasificacion.filter(x => {
//         if (x.position == parseInt(search)){
//             return true
//         }else{
//             return false
//         }
//     })
//     standingsTable(arrayPosition);
// }
// // *****Activamos la funcion al pulsar el boton de Search*****//
// boton.addEventListener("click",()=>{
//     filtrarClasificacion(classification)
// })

// // *****Borramos la tabla existente al levantar el dedo*****//
// let clean = document.getElementById("search")
// clean.addEventListener("mousedown", () => {
//     body_table.innerHTML = "";
// });