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

function mostrarPasajeros() {
    const container = document.getElementById('pasajeros-container');
    let html = '<h2>Pasajeros</h2>';

    pasajeros.forEach(pasajero => {
        html += `<div>
                    <h3>${pasajero.nombre}</h3>
                    <p>UUID: ${pasajero.uuid}</p>
                    <h4>Viajes:</h4>
                    <ul>`;
        pasajero.viajes.forEach(viaje => {
            html += `<li>ID: ${viaje.id}, Destino: ${viaje.destino}, Costo: ${viaje.costo}</li>`;
        });
        html += `   </ul>
                </div>`;
    });

    container.innerHTML = html;
}
function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
  }