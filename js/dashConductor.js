const pasajeros = [
    {
        "nombre": "María Rodriguez",
        "uuid": "15414581ytytaaddq1",
        "viajes": [
            {
                "id": "16",
                "destino": "Monterrico",
                "costo": "S/. 48.25",
                
            },
            
        ]
    },
    {
        "nombre": "Carlos López",
        "uuid": "1566664514aa",
        "viajes": [
            {
                "id": "18",
                "destino": "Azángaro",
                "costo": "S/. 200",
            }
        ]
    }
];

const $misViajes = $("#misViajes");
pasajeros.forEach((pasajero) => {
    pasajero.viajes.forEach((viaje) => {
        const link = "detalle_viaje.html?idviaje=" + viaje.id;
        const template = `
            <li class="collection-item avatar" data-id="${viaje.id}" data-uuid="${pasajero.uuid}">
                <i class="material-icons circle red">directions_car</i>
                <span class="title">${pasajero.nombre}</span>
                <p>
                    ${viaje.detalle}        
                </p>
                <p class="precio">
                    ${viaje.costo}
                </p>
                <a href="${link}" class="waves-effect waves-light btn btnIcon">
                    <i class="material-icons">local_taxi</i>
                    Detalle del viaje
                </a>
            </li>
        `;
        $misViajes.append(template);
    });
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idviaje = params.get("idviaje");
let miViaje = {};
if (idviaje) {
    pasajeros.forEach((pasajero) => {
        pasajero.viajes.forEach((viaje) => {
            if (viaje.id === idviaje) {
                const mytitle = "Detalle del viaje de " + pasajero.nombre;
                $("#myTitle").html(mytitle);
                miViaje = viaje;
            }
        });
    });
    if (Object.keys(miViaje).length > 0) {
        const template = `
            <li class="collection-item">
                <div id="texto">
                    <p class="destino">Destino: ${miViaje.destino}</p>
                    <p class="detalle">${miViaje.detalle}</p>
                    <p class="costo">${miViaje.costo}</p>
                </div>
            </li>
        `;
        $("#miViaje").append(template);
    }
}


function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
  }