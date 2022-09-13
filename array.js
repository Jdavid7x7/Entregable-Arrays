class Jugador {
    constructor(nombre, camiseta, edad) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
    }
}
const jugadores = [];
jugadores.push(new Jugador("KLEY THOMPSON", 11 , 32));
jugadores.push(new Jugador("STEPHEN CURRY", 30 , 34));
jugadores.push(new Jugador("PAUL GEORGE", 13 , 32));
jugadores.push(new Jugador("JAMES HARDEN", 1 , 33));
jugadores.push(new Jugador("LEBRON JAMES", 23 , 37));
console.log(jugadores);

function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre == jugador.toUpperCase());
}
for (let index = 0; index < 3; index++) {
    let busqueda = buscarJugador(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if(busqueda != undefined){
        alert(' JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}
