//logout button
document.addEventListener('DOMContentLoaded', function() {
    const authLink = document.getElementById('auth-link');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
    
        authLink.innerHTML = '<a href="#" id="logout-btn">logout</a>';
        
        document.getElementById('logout-btn').addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            window.location.reload(); 
        });
    } else {
        authLink.innerHTML = '<a href="register.html">register</a>';
    }
});

//cambiar imagen----------------------------------------------------------
  // Decaracion de objetos y variables
      const miImagen = document.getElementById("imagen");
      const boton = document.querySelector("#btn1");

      // Eventos y funciones
      miImagen.addEventListener("mouseover", entrar);

      function entrar() {
        miImagen.setAttribute("src", "imagenes/about.png");
      }

      miImagen.addEventListener("mouseout", salir);

      function salir() {
        miImagen.setAttribute("src", "imagenes/about2.png");
      }

      boton.addEventListener("click", interruptor);

      function interruptor() {
        let imagenObtenida = miImagen.getAttribute("src");

        if (imagenObtenida == "imagenes/about2.png") {
          miImagen.setAttribute("src", "imagenes/about.png");
        } else {
          miImagen.setAttribute("src", "imagenes/about2.png");
        }
      }

      //----------------dia
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
      const d = new Date();
      let day = weekday[d.getDay()];
      document.getElementById("day").innerHTML = day;
  
