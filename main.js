const d = document;
const $contenedorJugadores = d.querySelector(".jugadores");

// function deletePlayer() {
//   const eliminar = document.querySelectorAll(".img-borrar");
//   console.log(eliminar);
//   eliminar.forEach((cadaBtn) => {
//     cadaBtn.addEventListener("click", async (evento) => {
//       const elemento = evento.target.closest(".jugador");
//       const id = elemento.dataset.id;
//       console.log(id);
//       console.log("Presionado");

//       try {
//         const response = await fetch(
//           `https://mackay-cassowary-kgtq.2.us-1.fl0.io/player/${id}`,
//           {
//             method: "DELETE",
//           }
//         );

//         if (response.ok) {
//           elemento.remove();
//           alert("Jugador eliminado correctamente");
//         }
//       } catch (error) {
//         alert(error.message);
//       }
//     });
//   });
// }
function abririnfo() {
  const imagen = d.querySelectorAll(".imgj");

  imagen.forEach((cadaimg) => {
    cadaimg.addEventListener("click", async (evento) => {
      const elemento = evento.target.closest(".jugador");
      const id = elemento.dataset.id;
      const response = await fetch(
        `https://mackay-cassowary-kgtq.2.us-1.fl0.io/player/${id}`
      );
      const jugador = await response.json();
      const main = d.querySelector("main");
      const $jugador = d.createElement("div");
      $jugador.dataset.id = jugador.id;
      $jugador.classList.add("jugador2", "abrirA");
      if (!jugador.imagen) {
        jugador.imagen =
          "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-redes-sociales-desconocida-icono-desconocido-en-184816085.jpg";
      }
      const jugadorPlantilla = `
    
       <img src="${jugador.imagen}" alt="${jugador.nombre}" class="imgp" />
       <div class="divinfop">
       <div>
       <h2>${jugador.nombre}</h2>
       <p>${jugador.posicion}</p>
      <h2>${jugador.equipo}</h2>
       </div>
       <div class="divp">
       <div>
       <h3>Altura</h3>
       <p>${jugador.altura}</p>
       </div>
       <div>
             <h3>Peso</h3>
             <p>${jugador.peso}</p>
             </div>
             <div>
             <h3>Edad</h3>
             <p>${jugador.edad}</p>
             </div>
             <div>
             <h3>Draft</h3>
             <p>${jugador.draft}</p>
             </div>
             </div>
             
            <div class="divp">
            <div>
            <h3>PPG</h3>
            <p>${jugador.puntos_por_partido}</p>
            </div>
            <div>
            <h3>RPG</h3>
            <p>${jugador.rebotes_por_partido}</p>
            </div>
            <div>
            <h3>APG</h3>
            <p>${jugador.asistencias_por_partido}</p>
            </div>
            <div>
            <h3>EF</h3>
            <p>${jugador.eficiencia}</p>
            </div>
            </div>
            </div>
            <div><img src="public/basura.png" alt="Borrar" class="img-borrar" /></div> 
            <div class="q-info"><img src="https://cdn-icons-png.flaticon.com/512/5918/5918065.png" alt="qm" class="quitar-info" /></div> 
            
            `;

      $jugador.innerHTML = jugadorPlantilla;
      main.appendChild($jugador);
    });
  });
}

async function obtenerJugadores(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();

    data.forEach((jugador) => {
      const $jugador = d.createElement("div");
      $jugador.dataset.id = jugador.id;
      $jugador.classList.add("jugador");
      if (!jugador.imagen) {
        jugador.imagen =
          "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-redes-sociales-desconocida-icono-desconocido-en-184816085.jpg";
      }
      const jugadorPlantilla = `
    
      <img src="${jugador.imagen}" alt="${jugador.nombre}" class="imgj" />
      <div class="divinfo">
      
       <h3>${jugador.nombre}</h3>
       
     </div>
         
            
            `;

      $jugador.innerHTML = jugadorPlantilla;
      $contenedorJugadores.appendChild($jugador);
    });
  } catch (error) {
    console.log(error.message);
    alert("No se pudieron cargar los jugadores, intentelo más tarde");
  }
}

d.addEventListener("DOMContentLoaded", async () => {
  await obtenerJugadores("https://mackay-cassowary-kgtq.2.us-1.fl0.io/player");
  abririnfo();
});

// delegación de eventos para el evento click
d.addEventListener("click", async (evento) => {
  if (evento.target.matches(".img-borrar")) {
    const id = evento.target.parentElement.parentElement.dataset.id;
    try {
      const response = await fetch(
        `https://mackay-cassowary-kgtq.2.us-1.fl0.io/player/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Personaje no se puede eliminar");
      }

      if (response.ok) {
        document
          .querySelectorAll(`div[data-id="${id}"]`)
          .forEach((elemento) => elemento.remove());
        alert("Jugador eliminado correctamente");
      }
    } catch (error) {
      console.log(error);
      alert("Jugador no se pudo eliminar");
    }
  }
});

// delegación de eventos para el evento submit
d.addEventListener("click", (evento) => {
  if (evento.target.matches(".quitar-info")) {
    
    const elemento = evento.target.closest(".jugador2");
    const id = elemento.dataset.id;
    elemento.classList.add("jugador3");
    console.log(id);
    elemento.remove()
  }
});

const btnDc = document.querySelector(".btn-dc");
const aside = document.querySelector("aside");

btnDc.addEventListener("click", () => {
  aside.classList.toggle("animation");
});

const quitarF = d.querySelector(".quitar-from")

quitarF.addEventListener("click", () => {
  aside.classList.toggle("animation");
});

const btnC = d.querySelector(".button");

btnC.addEventListener("click", async (event) => {
  event.preventDefault();

  const headersList = {
    Accept: "*/*",
    "User-Agent": "Jonathan",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    nombre: d.querySelector("#nombre").value,
    equipo: d.querySelector("#equipo").value,
    posicion: d.querySelector("#posicion").value,
    altura: d.querySelector("#altura").value,
    peso: d.querySelector("#peso").value,
    edad: d.querySelector("#edad").value,
    nacionalidad: d.querySelector("#nacionalidad").value,
    colegio: d.querySelector("#colegio").value,
    draft: d.querySelector("#draft").value,
    puntos_por_partido: d.querySelector("#puntos").value,
    rebotes_por_partido: d.querySelector("#rebotes").value,
    asistencias_por_partido: d.querySelector("#asistencias").value,
    eficiencia: d.querySelector("#eficiencia").value,
    imagen: d.querySelector("#imagen").value,
  });

  (async () => {
    try {
      const response = await fetch(
        "https://mackay-cassowary-kgtq.2.us-1.fl0.io/player",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      if (response.ok) {
        const data = await response.json();
        const jugador = data;
        const $jugador = d.createElement("div");
        $jugador.dataset.id = jugador.id;
        $jugador.classList.add("jugador");
        if (!jugador.imagen) {
          jugador.imagen =
            "https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-redes-sociales-desconocida-icono-desconocido-en-184816085.jpg";
        }
        const jugadorPlantilla = `
    
      <img src="${jugador.imagen}" alt="${jugador.nombre}" class="imgj" />
      <div class="divinfo">
      
       <h3>${jugador.nombre}</h3>
       
     </div>
         
            
            `;

        $jugador.innerHTML = jugadorPlantilla;
        $contenedorJugadores.appendChild($jugador);
      } else {
        console.error(
          "Error en la solicitud:",
          response.status,
          response.statusText
        );
        alert("Error en la solicitud")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  })();

  aside.classList.toggle("animation");
  console.log(d.querySelector("#nombre").value);
  console.log(d.querySelector("#imagen").value);
});
