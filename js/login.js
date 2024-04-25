$(document).ready(function(){
    const $usuario = $("#usuarioPrincipal");
    const $password = $("#passPrincipal");
  
    const credenciales = [
      {
        usuario: "usu",
        pass: "a"
      },
      {
        usuario: "conduc",
        pass: "a"
      }
    ];
  
    $("#login").on("click", function(){ 
      const valueUsuario = $usuario.val();
      const valuePassword = $password.val();
      
     
      const credencialValida = credenciales.find(credencial => {
        return credencial.usuario === valueUsuario && credencial.pass === valuePassword;
      });
      
  
      if (credencialValida) {
        if (valueUsuario === "conduc") {
          window.location.href = "dashboardConductor.html";
        } else if (valueUsuario === "usu") {
          window.location.href = "dashboardUsuario.html";
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Credenciales inválidas. Por favor, inténtelo de nuevo.'
        });
      }
    });
  });
  function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
}
