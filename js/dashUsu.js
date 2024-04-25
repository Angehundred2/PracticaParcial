const compras = [
  {
    "id": "12",
    "uuid": "15414581asda1a1x",
    "Duracion": "2 hrs",
    "Fecha": "02-04-2024",
    "Origen": "Lima",
    "Destino": "Cusco",
    "Conductor": "Franchesco de la Rossa"
  },
  {
    "id": "16",
    "uuid": "15414581ytytaaddq1",
    "Duracion": "3 días",
    "Fecha": "15-06-2024",
    "Origen": "Cusco",
    "Destino": "Machu Picchu",
    "Conductor": "Luis Untiveros"
  },
  {
    "id": "18",
    "uuid": "1566664514aa",
    "Duracion": "1 semana",
    "Fecha": "20-08-2024",
    "Origen": "Lima",
    "Destino": "Piura",
    "Conductor": "Julio Paraguya"
  },
  {
    "id": "22",
    "uuid": "156666abcde12345",
    "Duracion": "5 horas",
    "Fecha": "10-10-2024",
    "Origen": "Piura",
    "Destino": "Tumbes",
    "Conductor": "Ana Rodríguez"
  }
];


//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
  // Crear una NUEVA URL donde usemos de parametro el ID
  const link = "dashUsu.html?idcompra="+compra.id;
  const template = `
      <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
          <i class="material-icons circle red">play_arrow</i>
          <span class="title">${compra.nombre}</span>
          <p>
              ${compra.detalle}        
          </p>
          <p class="precio">
              ${compra.monto}
          </p>
          <a href="${link}" class="waves-effect waves-light btn btnIcon">
              <i class="material-icons">grade</i>
              Ver producto
          </a>
      </li>
  `;
  $misProductos.append(template);
});

/*
  3. En esa URL vamos a leer el parametro 
  e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
  compras.forEach((compra) => {
      if (compra.id == idcompra) {
          const mytitle = "Historial de Viajes de " + compra.nombre;
          $("#myTitle").html(mytitle);
          misproductos = compra.productos;           
      }
  });
  if (misproductos.length > 0) {
      misproductos.forEach((producto)=> {
          const template = `
          <li class="collection-item">
              <div id="texto">
                  <p class="sku">SKU: ${producto.SKU}</p>
                  <p class="nombre">${producto.nombre}</p>
                  <p class="monto">${producto.monto}</p>
                  <div id="imagenes" style="text-align: center;">
                      <img class="imagen" src="${producto.imagen}" style="max-width: 100px; max-height: 100px;">
                  </div>
              </div>
          </li>
      `;
          $("#myProducts").append(template);
      });
  }
}


if (!localStorage.usuario) {
    Swal.fire({
      title: 'LOGUEATEEEEEEEEEE',
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      background: 'rgba(0, 0, 0, 0.8)',
    
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'index.html';
      }s
    });
  } else {
    document.getElementById('usuario').innerHTML = localStorage.usuario;
  }
  
  function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
  }