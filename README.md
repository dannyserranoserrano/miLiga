

<h1>Descripción de miLiga.com Web</h1>
<h2>miLiga.com</h2>
<p>WebV1.0. Este proyecto trata sobre un sitio web donde el usuario puede consultar datos actualizados tanto de la clasificación, resultados, proximos partidos y estadisticas, en la liga española y otras ligas.</p>

<p>Mediante unos menús de fácil comprensión, el usuario podrá consultar dichos datos, contando con filtros por equipos, jornadas y resultados para hacer una busqueda agradable.</p>



<h3>Si desea visitar el proyecto, pulsa <a href="https://miliga.com.netlify.app.">aqui</a></h3>

<h3>Funcionalidades</h3>
<p>-Visualización de la clasificación general de los equipos de la Primera división Española, donde el usuario podrá obtener la posición de su equipo así como los clasificados para las próximas competiciones europeas como son la Champions League, Europa League, UEFA Conference League, y los equipos en posición de descenso.</p> 
<p>-Visualización de todos los resultados de la Liga nacional, tanto los jugados como los que quedan por jugar. Además dispondrá de una función de fitrado por Partidos ganados, empatados y perdidos del equipo seleccionado, así como los proximos partidos a jugar. En dicha información observará tanto el numero de jornada, fecha y hora del encuentro, nombre y escudo de los equipos enfrentados y resultado obtenido.</p>
<p>-Visualización tanto del top 5 equipos con mejor promedio goleador, como del top 5 equipos menos goleados fuera de casa.</p>

<h3>Tecnologías empleadas</h3>
<img src="/images/mix.jpg" alt="Tecnologias">

<h4>HTML5 : <p>para hacer el esqueleto de la página web</p></h4>
CSS3 : para el diseño de la interfaz
Bootstrap : para el diseño de la interfaz y al mismo tiempo creando una web responsive capaz de adaptarse y que pueda ser accesible desde cualquier dispositivo: tablets, smartphone, pc, etc..
JavaScript : para dar mejor rendimiento y dinamismo al sitio web y al mismo tiempo darle funcionalidad
Postman : para coger la información y los datos que se muestran en la web (utilizada inicialmente, hasta que se hizo el fetch directamente en los archivos JS)
Git y GitHub : control de versiones y repositorio en remoto para trabajar en distintas branches
AlertifyJS : librería de JavaScript con la que se modificaron las alertas que se muestran al usuario.
Descripción técnica
Se han usado dos tipos de funciónalidades : genéricas y específicas.

Como funcionalidades genéricas podemos encontrar las siguientes funciones: getFetch(),crearTabla(), quitarSpinner(), crearTablaClasificacion()

getFetch() usada en todos los archivos JS, es la función encargada de coger los datos en tiempo real de la API, sin necesidad de usar el POSTMAN.
crearTabla() es la función encargada de crear la tabla con los equipos, cada vez que queremos filtrarlos por nombre del equipo, o bien los resultados: ganados, empatados, perdidos o próximos partidos. Interviene cada vez que es accionado alguno de los botones del filtro, pasándole un parámetro ú otro. Esta función se podría volver a usar si queremos hacer lo mismo con los equipos de las otras ligas, arriba mencionadas.
quitarSpinner() usada en todos los archivos JS, en los cual se cogen datos con la API. Su función es de "parar/ocultar" el spinner después de recibir la respuesta de la API
crearTablaClasifiacion() encargada de crear la tabla de clasifiacion de los equipos de LaLiga Santander, recogiendo datos como: posicion, nombre del equipo, partidos jugados, partidos ganados, empatados o perdidos, goles marcados, goles recibidos, diferencia de goles y puntos totales. Se podría volver a usar para hacer la tabla de clasifiación de las otras ligas.
Como funcionalidades especificas podemos encontrar las siguiente funciónes :

limpiarTabla() función usada para limpiar el body de la tabla, cada vez que realizamos una búsqueda nueva, de esta manera solo nos aparecen los nuevos resultados. Sin esta función se añadirían filas a la tabla y para poder encontrar los resultados de nuestra búsqueda tendríamos que hacer scroll hasta el final de la tabla.

filtrarNombreEquipo() esta función tiene 2 tareas :

- filtrar los equipos por nombre con los datos introducidos por el usuario
- volver hacer otro filtro de la nueva array creada con los nombres del equipo en función de su resultado
resetearFiltro() usada para resetear todos los filtros, limpiando el campo donde el usuario introduce el nombre de su equipo. Esta función se usa también en el caso de que algúna de las condiciónes no se cumplen y al usuario le salta alguna alerta.

crearEstadisticas() y top5mejoresAvgGoles() son las 2 funciónes encargadas de crear la tabla y filtrar los 5 equipos con mayor media de goles a favor por partido.

calcularEstadisticas2() y top5menosGvisitante() las funciónes encargadas de crear la tabla y filtrar los 5 equipos con menos goles en contra como visitante.

crearEquipos() es encargada de recorrer el array de los equipos y añadir las imagenes de los clubes junto con su nombre y poder acceder directamente a la web oficial de cada club.

Versiones
v1.0 (26.05.2021) - Presentación proyecto

v1.1 (28.05.2021)

Resultados y filtros de la League1 y Premier League
Estadisticas con top 5equipos con mayor media de goles a favor por partido y los 5 equipos con menos goles en contra como visitante de los equipos de la League 1 y Premier League
TO-DO
Mejora de diseño
Clasificación League1 y Premier League
Filtrar resultados por fechas
